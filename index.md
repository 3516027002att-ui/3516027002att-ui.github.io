---
layout: default
title: Home
---

<section class="post home-index">
  <h1>Symphony</h1>
  <p class="meta">文章、观察与项目。</p>

  <h2>文章</h2>
  <p class="muted">暂无文章。</p>

  <h2>观察</h2>
  <ul class="list">
    {% for note in site.notes reversed %}
      <li>
        <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
        {% if note.description %}<p>{{ note.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>

  <h2>项目</h2>
  <ul class="list">
    <li>
      <a href="/projects/openo1/">OpenO1</a>
      <p>模型无关的通用推理增强 Agent / Reasoning Harness。</p>
    </li>
    <li>
      <a href="/projects/soulforge/">SoulForge</a>
      <p>面向 Sekiro 与 FromSoftware Mod 的 AI 原生、安全、可审查、可回滚工作台。</p>
    </li>
  </ul>
</section>
