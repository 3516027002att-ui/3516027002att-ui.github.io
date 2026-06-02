---
layout: default
title: Essays
permalink: /essays/
---

<section class="post">
  <h1>Essays</h1>
  <p class="muted">系统性的长文，用来沉淀已经成型的判断。</p>
  <ul class="list">
    {% for post in site.categories.essay %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <br>
        <span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
