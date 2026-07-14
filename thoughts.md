---
layout: default
title: 思考
permalink: /thoughts/
---

<section class="post">
  <h1>思考</h1>
  <p class="muted">关于技术、选择与未来的长期判断。</p>
  <ul class="list">
    {% for thought in site.thoughts reversed %}
      <li>
        <a href="{{ thought.url | relative_url }}">{{ thought.title }}</a>
        {% if thought.description %}<p>{{ thought.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
