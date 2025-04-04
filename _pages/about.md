---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm **Ruoyu Chen <font face="楷体" >(陈若愚)</font>**, a Ph.D. candidate in Institute of Information Engineering, Chinese Academy of Sciences (IIE, CAS), under the tutelage of [Prof. Xiaochun Cao](https://scholar.google.com/citations?user=PDgp6OkAAAAJ&hl=en) (currently the Dean of School of Cyber Science and Technology, Sun Yat-sen University). I received my B.E. degree from Northeastern University, China. My research interests include <u><i>Interpretable AI</i></u> and <u><i>Foundation Model</i></u>. 

I'm committed to making XAI meaningful and actually helping us with AI systems. Including in the <u><i>model testing phase</i></u>, building an interpretation method for debugging the model to help us discover potential biases and errors in the model. In the <u><i>model training phase</i></u>, specific defects are discovered through interpretability, and a reasonable feedback mechanism is designed to enable the model to automatically repair errors to improve model performance and generalization, while making the training process transparent. In the <u><i>model deployment phase</i></u>, improve the explanation of the model and study the human-computer interaction or AI agent processes in dynamic environments.

I am open for collaborations in research. I am also actively looking for collaborators, especially in the fields of **Trustworthy AI** and **Foundation Model**. Please feel free to contact me.


# 🔥 News
- *2025.02.28*: 🎉🎉 One paper is accepted by **CVPR 2025**! 
- *2024.01.16*: One paper is accepted by **ICLR 2024 Oral**! 
- *2023.05*: Created a new home page. 

# 📝 Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/LIMA.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Less is More: Efficient Black-box Attribution via Minimal Interpretable Subset Selection](https://arxiv.org/abs/2504.00470)

**Ruoyu Chen**, Siyuan Liang, Jingzhi Li, Shiming Liu, Li Liu, Hua Zhang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/LIMA) ![Star](https://img.shields.io/github/stars/RuoyuChen10/LIMA.svg?style=social&label=Star) / [**Paper**](https://arxiv.org/abs/2504.00470) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint,  
Black-box attribution.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/VPS.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Interpreting Object-level Foundation Models via Visual Precision Search](https://arxiv.org/abs/2411.16198)

**Ruoyu Chen**, Siyuan Liang, Jingzhi Li, Shiming Liu, Maosen Li, Zheng Huang, Hua Zhang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/VPS) ![Star](https://img.shields.io/github/stars/RuoyuChen10/VPS.svg?style=social&label=Star) / [**Paper**](https://arxiv.org/abs/2411.16198) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR 2025),  
Object-level task interpretation.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2024</div><img src='images/survey_object_detection_in_open_env.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Object Detectors in the Open Environment: Challenges, Solutions, and Outlook](https://arxiv.org/abs/2403.16271)

Siyuan Liang, Wei Wang$^\dagger$, **Ruoyu Chen$^{\dagger}$**, Aishan Liu, Boxi Wu, Ee-Chien Chang, Xiaochun Cao, and Dacheng Tao ($\dagger$: Equal contribution)

[**Paper**](https://arxiv.org/abs/2403.16271) / [**Project**](https://github.com/LiangSiyuan21/OEOD_Survey) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint 2024,  
<strong><font color=blue>Survey paper</font></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024 Oral</div><img src='images/SMDL-Attribution.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Less is More: Fewer Interpretable Region via Submodular Subset Selection](https://openreview.net/forum?id=jKTUlxo5zy)

**Ruoyu Chen**, Hua Zhang, Siyuan Liang, Jingzhi Li, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/SMDL-Attribution) ![Star](https://img.shields.io/github/stars/RuoyuChen10/SMDL-Attribution.svg?style=social&label=Star) / [**Paper**](https://openreview.net/pdf?id=jKTUlxo5zy) / [**Slide**](https://iclr.cc/media/iclr-2024/Slides/19733.pdf) / [**Poster**](https://ruoyuchen10.github.io/slide/2053-poster.png) /  [**AI Time Presentation**](https://ruoyuchen10.github.io/slide/AITime_less-is-more.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

International Conference on Learning Representations (ICLR),  
<strong><font color=red>Oral (85/7262, 1.16%)</font></strong>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM TOMM 2023</div><img src='images/sim2word.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Sim2Word: Explaining Similarity with Representative Attribute Words via Counterfactual Explanations](https://dl.acm.org/doi/abs/10.1145/3563039)

**Ruoyu Chen**, Jingzhi Li, Hua Zhang, Changchong Sheng, Li Liu, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/Sim2Word) ![Star](https://img.shields.io/github/stars/RuoyuChen10/Sim2Word.svg?style=social&label=Star) / [**Paper**](https://dl.acm.org/doi/abs/10.1145/3563039) / [**Poster**](https://ruoyuchen10.github.io/slide/Sim2Word_TOMMCAP2022.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

ACM Transactions on Multimedia Computing, Communications, and Applications,  
<font color=purple>Impact factor: 5.1</font>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Poultry Science 2023</div><img src='images/duck.gif' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">


[Online Estimating Weight of White Pekin Duck Carcass by Computer Vision](https://doi.org/10.1016/j.psj.2022.102348)

**Ruoyu Chen**, Yuliang Zhao, Yongliang Yang, Shuyu Wang, Lianjiang Li, Xiaopeng Sha, Lianqing Liu, Guanglie Zhang and Wen Jung Li

[**Code**](https://github.com/RuoyuChen10/Image_weighing) ![Star](https://img.shields.io/github/stars/RuoyuChen10/Image_weighing.svg?style=social&label=Star) / [**Paper**](https://doi.org/10.1016/j.psj.2022.102348) / [**Poster**](https://ruoyuchen10.github.io/slide/Image_Weighing_PoultrySci.2022.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Poultry Science (Top Journal in Agricultural and Biological Sciences),  
<font color=purple>Impact factor: 4.4</font>
</div>
</div>

- Identity-Preserving Face Anonymization via Adaptively Facial Attributes Obfuscation,  
Jingzhi Li, Lutong Han, **Ruoyu Chen**, Hua Zhang, Bing Han, Lili Wang, and Xiaochun Cao, **ACM MM 2021**, <strong><font color=red>Oral</font></strong>,  
[**Code**](https://github.com/RuoyuChen10/Facial_Attributes_Obfuscation) ![Star](https://img.shields.io/github/stars/RuoyuChen10/Facial_Attributes_Obfuscation.svg?style=social&label=Star) / [**Paper**](https://dl.acm.org/doi/abs/10.1145/3474085.3475367)

- More papers are being submitted, or please visit my [Google Scholar](https://scholar.google.com/citations?user=rvxqCZIAAAAJ&hl) to view all papers.

# 🎖 Honors and Awards
- *2020.12* **China National Scholarship**, Ministry of Education of the People’s Republic of China (<strong><font color=red>Top 1.5%</font></strong>), NEU.
- *2019.12* **China National Scholarship**, Ministry of Education of the People’s Republic of China (<strong><font color=red>Top 1.5%</font></strong>), NEU.
- *2018.12* **China National Scholarship**, Ministry of Education of the People’s Republic of China (<strong><font color=red>Top 1.5%</font></strong>), NEU.


# 📖 Educations
- *2021.09 - 2026.06 (excepted)*,  
School of Cyberspace Security, University of Chinese Academy of Sciences, China.  
Ph.D. Candidate
- *2017.09 - 2021.06*,  
School of Control Engineering, Northeastern University, China.  
Bachelor of Engineering  
Ranking: 2/119

# 🎤 Talking & Teaching
- *2024.6.27* Share a talk with **Tokyo Institute of Technology** online: [Interpretation of the Foundation Model: Concepts, Challenges, and Applications](https://ruoyuchen10.github.io/slide/Ruoyu_Chen_UCAS-foundation_model_interpretation.pdf)
- *2024.5.10* Give an **oral presentation** in Vienna at ICLR 24 conference ([**Slide**](https://iclr.cc/media/iclr-2024/Slides/19733.pdf))
- *2024.2.28* Share a ICLR 24 paper "[Less is More: Fewer Interpretable Region via Submodular Subset Selection](https://ruoyuchen10.github.io/slide/AITime_less-is-more.pdf)" at **AI Time**
- *2023.12.26* Taught the undergraduate course "[Explainable Artificial Intelligence](https://ruoyuchen10.github.io/talk/Ruoyu_Chen-Teaching-XAI_SYSU.pdf)" at **Shenzhen Campus of Sun Yat-sen University**
- *2023.10.20* Share a technical review "[Survey on the interpretability of foundation models](https://ruoyuchen10.github.io/talk/Ruoyu_Chen-Interpretation_of_foundation_model.pdf)" at **Huawei**

# 💬 Professional Service

### Journal Reviewer

- [IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI)](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=34) x11
- [IEEE Transactions on Biometrics, Behavior, and Identity Science (T-BIOM)](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8423754) x3

### Conference Reviewer

- CVPR 23, 24
- ICLR 24
- NeurIPS 23, 24
- ICML 23, 24
- ICCV 23
- ECCV 22, 24
