---
layout: default
title: 间奏
permalink: /interludes/
---

<section class="post">
  <h1>间奏</h1>
  <p class="muted">我只是想说点东西。</p>

  {% if site.interludes and site.interludes.size > 0 %}
    <ul class="list">
      {% for interlude in site.interludes reversed %}
        <li>
          <a href="{{ interlude.url | relative_url }}">{{ interlude.title }}</a>
          {% if interlude.description %}<p>{{ interlude.description }}</p>{% endif %}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p class="muted">暂无间奏。</p>
  {% endif %}
</section>
