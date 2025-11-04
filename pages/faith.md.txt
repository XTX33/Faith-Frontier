---
layout: default
title: "Faith & Doctrine"
permalink: /faith/
---

<section class="section-intro">
  <h1>Faith & Doctrine</h1>
  <p class="section-lead">
    Essays and reflections on conscience, stewardship, and law.
    Each writing explores how faith and the public-trust idea connect
    to daily life, work, and justice.
  </p>
</section>

<section class="essay-list">
  {% assign essays = site.essays | sort: "date" | reverse %}
  {% for essay in essays %}
  <article class="essay-card">
    <h2><a href="{{ essay.url | relative_url }}">{{ essay.title }}</a></h2>
    <p>{{ essay.summary }}</p>
    <p><small>{{ essay.date | date: "%B %d, %Y" }}</small></p>
  </article>
  {% endfor %}
</section>
