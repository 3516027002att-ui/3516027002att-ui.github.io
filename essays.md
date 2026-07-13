---
layout: default
title: 文章
permalink: /essays/
---

<section class="post">
  <h1>文章</h1>
  <p class="muted">系统性的长文，用来沉淀已经成型的判断。</p>

  {% assign essays = site.categories.essay %}
  {% if essays and essays.size > 0 %}
    <ul class="list">
      {% for post in essays %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <br>
          <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="muted">暂无文章。</p>
  {% endif %}
</section>
