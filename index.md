---
layout: default
title: Home
---

<section class="hero">
  <p class="meta">Personal blog and thinking archive</p>
  <h1>Symphony</h1>
  <p>这里是我的个人博客与思想档案馆。我会在这里记录 AI、Agent、OpenO1、长期记忆、推理框架、输入法模型和其他项目的想法。</p>
</section>

<section class="grid">
  <div class="card">
    <h2>Essays</h2>
    <p>系统性的长文，用来沉淀已经成型的判断。</p>
    <p><a href="/essays/">Read essays →</a></p>
  </div>
  <div class="card">
    <h2>Notes</h2>
    <p>短想法、灵感片段和还在生长中的判断。</p>
    <p><a href="/notes/">Read notes →</a></p>
  </div>
  <div class="card">
    <h2>Projects</h2>
    <p>OpenO1、输入法模型、量化实验和其他长期项目记录。</p>
    <p><a href="/projects/">View projects →</a></p>
  </div>
  <div class="card">
    <h2>Research</h2>
    <p>论文、项目、公司和技术路线的阅读笔记。</p>
    <p><a href="/research/">Read research →</a></p>
  </div>
</section>

<section class="card">
  <h2>Latest posts</h2>
  <ul class="list">
    {% for post in site.posts limit: 5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <br>
        <span class="meta">{{ post.date | date: "%Y-%m-%d" }} · {{ post.category }}</span>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
