(() => {
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('.scroll-progress span');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const sections = navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    header.classList.toggle('scrolled', window.scrollY > 20);

    const marker = window.scrollY + 160;
    let active = '';
    sections.forEach((section) => {
      if (section.offsetTop <= marker) active = `#${section.id}`;
    });
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === active));
  };

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  menuButton?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const dialog = document.querySelector('.image-dialog');
  const dialogImage = dialog?.querySelector('img');
  document.querySelectorAll('[data-zoom]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = button.dataset.zoom;
      dialogImage.alt = button.dataset.alt || 'Expanded paper figure';
      dialog.showModal();
    });
  });
  dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  const copyButton = document.querySelector('[data-copy-bib]');
  copyButton?.addEventListener('click', async () => {
    const citation = document.querySelector('#bibtex')?.innerText || '';
    try {
      await navigator.clipboard.writeText(citation);
      const label = copyButton.textContent;
      copyButton.textContent = 'Copied ✓';
      window.setTimeout(() => { copyButton.textContent = label; }, 1800);
    } catch {
      copyButton.textContent = 'Select text below';
    }
  });
})();
