---
layout: default
title: 观察
permalink: /notes/
---

<section class="post">
  <h1>观察</h1>
  <p class="muted">短想法、灵感片段和仍在生长中的判断。</p>
  <ul class="list">
    {% for note in site.notes reversed %}
      <li>
        <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
        {% if note.description %}<p>{{ note.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
