---
layout: default
title: Home
---

<section class="post home-index">
  <h1>Symphony</h1>
  <p class="meta">文章、观察、思考与间奏。</p>

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

  <h2>间奏</h2>
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
