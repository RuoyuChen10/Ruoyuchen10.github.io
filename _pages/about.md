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

I'm **Ruoyu Chen <font face="楷体" >(陈若愚)</font>**, a Ph.D. candidate in Institute of Information Engineering, Chinese Academy of Sciences (IIE, CAS), working with [Prof. Xiaochun Cao](https://scholar.google.com/citations?user=PDgp6OkAAAAJ&hl=en) (currently the Dean of School of Cyber Science and Technology, Sun Yat-sen University) and [Hua Zhang](https://scholar.google.com/citations?user=KYifAy8AAAAJ&hl=en) (Professor at IIE, CAS). I received my B.E. degree from Northeastern University, China. My research interests include <u><i>Interpretable AI</i></u> and <u><i>Foundation Model</i></u>. 

I'm committed to making XAI meaningful and actually helping us with AI systems. Including in the <u><i>model testing phase</i></u>, building an interpretation method for debugging the model to help us discover potential biases and errors in the model. In the <u><i>model training phase</i></u>, specific defects are discovered through interpretability, and a reasonable feedback mechanism is designed to enable the model to automatically repair errors to improve model performance and generalization, while making the training process transparent. In the <u><i>model deployment phase</i></u>, improve the explanation of the model and study the human-computer interaction or AI agent processes in dynamic environments.

**I am open for collaborations in research**, especially in the fields of **Trustworthy AI** and **Foundation Model**. Please don’t hesitate to get in touch if my research interests you.

# 🔥 News
- *2025.04.09*: 🎉🎉 One paper is accepted by **T-PAMI**!
- *2025.04.06*: 🎉🎉 VPS was selected as the **Highlight paper** of CVPR 2025.
- *2025.02.28*: One paper is accepted by **CVPR 2025**! 
- *2024.01.16*: One paper is accepted by **ICLR 2024 Oral**! 
- *2023.05*: Created a new home page. 

# 📝 Selected Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">T-PAMI 2025</div><img src='images/CCL-FSOD.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Generalized Semantic Contrastive Learning via Embedding Side Information for Few-Shot Object Detection](https://ieeexplore.ieee.org/document/10963743)  
**Ruoyu Chen**, Hua Zhang, Jingzhi Li, Li Liu, Zhen Huang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/CCL-FSOD) ![Star](https://img.shields.io/github/stars/RuoyuChen10/CCL-FSOD.svg?style=social&label=Star) / [**Paper**](https://ieeexplore.ieee.org/document/10963743) / [**Arxiv**](https://arxiv.org/abs/2504.07060) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

IEEE Transactions on Pattern Analysis and Machine Intelligence,  
<font color=purple>Impact factor: 20.8</font>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2025</div><img src='images/LIMA.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Less is More: Efficient Black-box Attribution via Minimal Interpretable Subset Selection](https://arxiv.org/abs/2504.00470) <span style="
    background-color:#c86bda;
    border-radius:25px;
    color:white;
    padding:2px 8px;
    font-size:12px;
    font-weight:bold;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
">Interpretable AI</span>  
**Ruoyu Chen**, Siyuan Liang, Jingzhi Li, Shiming Liu, Li Liu, Hua Zhang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/LIMA) ![Star](https://img.shields.io/github/stars/RuoyuChen10/LIMA.svg?style=social&label=Star) / [**Arxiv**](https://arxiv.org/abs/2504.00470) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint,  
Black-box attribution.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025 Highlight</div><img src='images/VPS.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Interpreting Object-level Foundation Models via Visual Precision Search](https://arxiv.org/abs/2411.16198)  
**Ruoyu Chen**, Siyuan Liang, Jingzhi Li, Shiming Liu, Maosen Li, Zheng Huang, Hua Zhang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/VPS) ![Star](https://img.shields.io/github/stars/RuoyuChen10/VPS.svg?style=social&label=Star) / **[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_Interpreting_Object-level_Foundation_Models_via_Visual_Precision_Search_CVPR_2025_paper.pdf)** / [**Arxiv**](https://arxiv.org/abs/2411.16198) / [**Poster**](https://cvpr.thecvf.com/media/PosterPDFs/CVPR%202025/34644.png?t=1748853080.0173087) / **[Slide](https://cvpr.thecvf.com/media/cvpr-2025/Slides/34644.pdf)** / **[机器之心](https://mp.weixin.qq.com/s/QVMua-5RGfSJzH-_tv_gRA)** / [**知乎**](https://zhuanlan.zhihu.com/p/1911811661062452785) / **[CVPR 25 Page](https://cvpr.thecvf.com/virtual/2025/poster/34644)**

IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR 2025),  
<strong><font color=red>Highlight paper (387/13008, 2.98%)</font></strong>
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

# 📝 Collaboration Papers 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/faceinsight.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[FaceInsight: A Multimodal Large Language Model for Face Perception](https://arxiv.org/abs/2504.15624)

Jingzhi Li, Changjiang Luo, **Ruoyu Chen**, Hua Zhang, Wenqi Ren, Jianhou Gan, and Xiaochun Cao

[**Arxiv**](https://arxiv.org/abs/2504.15624) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

ACM MM 2025,  
MLLMs for Face Perception.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE IOT 2025</div><img src='images/iot_badminton.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[An Intelligent Badminton Handle with Multi-Node MEMS Sensors for Explainable Motion Recognition](https://ieeexplore.ieee.org/document/11038925/authors#authors)

Jian Li, Yibo Fan, **Ruoyu Chen**, Siyuan Liang, Yifei Feng, Ying He, Yuliang Zhao

[**Paper**](https://ieeexplore.ieee.org/document/11038925/authors) 

IEEE Internet of Things Journal,  
<font color=purple>Impact factor: 8.9</font>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2025</div><img src='images/grokking.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Beyond Progress Measures: Theoretical Insights into the Mechanism of Grokking](https://arxiv.org/abs/2504.03162)

Zihan Gu$^\dagger$, **Ruoyu Chen$^{\dagger}$**, Hua Zhang, Yue Hu, and Xiaochun Cao ($\dagger$: Equal contribution)

[**Code**](https://github.com/Qihuai27/Grokking-Insight) ![Star](https://img.shields.io/github/stars/Qihuai27/Grokking-Insight.svg?style=social&label=Star) / [**Arxiv**](https://arxiv.org/abs/2504.03162) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint,  
Grokking Mechanism.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2025</div><img src='images/Position_encoder.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Unpacking Positional Encoding in Transformers: A Spectral Analysis of Content-Position Coupling](https://arxiv.org/abs/2505.13027)

Zihan Gu, Han Zhang, **Ruoyu Chen**, Yue Hu, Hua Zhang

[**Arxiv**](https://arxiv.org/abs/2505.13027) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint,  
Positional Encoding Mechanism.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint 2024</div><img src='images/survey_object_detection_in_open_env.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Object Detectors in the Open Environment: Challenges, Solutions, and Outlook](https://arxiv.org/abs/2403.16271)

Siyuan Liang, Wei Wang$^\dagger$, **Ruoyu Chen$^{\dagger}$**, Aishan Liu, Boxi Wu, Ee-Chien Chang, Xiaochun Cao, and Dacheng Tao ($\dagger$: Equal contribution)

[**Arxiv**](https://arxiv.org/abs/2403.16271) / [**Project**](https://github.com/LiangSiyuan21/OEOD_Survey) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Preprint 2024,  
<strong><font color=blue>Survey paper</font></strong>
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2021 Oral</div><img src='images/facial-attributes-obfuscation.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Identity-Preserving Face Anonymization via Adaptively Facial Attributes Obfuscation](https://dl.acm.org/doi/abs/10.1145/3474085.3475367)

Jingzhi Li, Lutong Han, **Ruoyu Chen**, Hua Zhang, Bing Han, Lili Wang, and Xiaochun Cao

[**Code**](https://github.com/RuoyuChen10/Facial_Attributes_Obfuscation) ![Star](https://img.shields.io/github/stars/RuoyuChen10/Facial_Attributes_Obfuscation.svg?style=social&label=Star) / [**Paper**](https://dl.acm.org/doi/abs/10.1145/3474085.3475367)

**ACM MM 2021**, <strong><font color=red>Oral</font></strong>
</div>
</div>

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

# 🎤 Talking and Teaching
- *2024.6.27* Share a talk with **Tokyo Institute of Technology** online: [Interpretation of the Foundation Model: Concepts, Challenges, and Applications](https://ruoyuchen10.github.io/slide/Ruoyu_Chen_UCAS-foundation_model_interpretation.pdf)
- *2024.5.10* Give an **oral presentation** in Vienna at ICLR 24 conference ([**Slide**](https://iclr.cc/media/iclr-2024/Slides/19733.pdf))
- *2024.2.28* Share a ICLR 24 paper "[Less is More: Fewer Interpretable Region via Submodular Subset Selection](https://ruoyuchen10.github.io/slide/AITime_less-is-more.pdf)" at **AI Time**
- *2023.12.26* Taught the undergraduate course "[Explainable Artificial Intelligence](https://ruoyuchen10.github.io/talk/Ruoyu_Chen-Teaching-XAI_SYSU.pdf)" at **Shenzhen Campus of Sun Yat-sen University**
- *2023.10.20* Share a technical review "[Survey on the interpretability of foundation models](https://ruoyuchen10.github.io/talk/Ruoyu_Chen-Interpretation_of_foundation_model.pdf)"

# 💬 Professional Service

### Journal Reviewer

- IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI)
- IEEE Transactions on Biometrics, Behavior, and Identity Science (T-BIOM)
- Pattern Recognition
- Knowledge-based Systems

### Conference Reviewer

- CVPR 23, 24, 25
- ICLR 24
- NeurIPS 23, 24, NeurIPS 25 Datasets and Benchmarks Track
- ICML 23, 24, 25
- ICCV 23
- ECCV 22, 24
- AAAI 2026, AAAI 2026 AI Alignment Track
- ACM MM 25
- The 3rd Workshop for Out-of-Distribution Generalization in Computer Vision Foundation Models
- COLM 2025 Workshop XLLM-Reason-Plan
- The 1st MICCAI Workshop on Human-AI Collaboration
