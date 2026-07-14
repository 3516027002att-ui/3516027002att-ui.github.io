---
layout: default
title: Home
---

<section class="post home-index">
  <h1>Symphony</h1>
  <p class="meta">文章、观察与思考。</p>

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

  <h2>思考</h2>
  <ul class="list">
    {% for thought in site.thoughts reversed %}
      <li>
        <a href="{{ thought.url | relative_url }}">{{ thought.title }}</a>
        {% if thought.description %}<p>{{ thought.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
