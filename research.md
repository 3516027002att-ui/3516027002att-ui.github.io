---
layout: default
title: Research
permalink: /research/
---

<section class="post">
  <h1>Research</h1>
  <p class="muted">论文、项目、公司和技术路线的阅读笔记。</p>
  <ul class="list">
    {% for post in site.categories.research %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <br>
        <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
