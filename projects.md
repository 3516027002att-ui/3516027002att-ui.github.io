---
layout: default
title: Projects
permalink: /projects/
---

<section class="post">
  <h1>Projects</h1>
  <p class="muted">这里记录长期项目、工程判断和阶段性进展。</p>
  <ul class="list">
    {% for project in site.projects %}
      <li>
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
        {% if project.description %}<p>{{ project.description }}</p>{% endif %}
      </li>
    {% endfor %}
  </ul>
</section>
