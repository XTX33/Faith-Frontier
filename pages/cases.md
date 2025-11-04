---
layout: default
title: "Cases"
permalink: /cases/
---

<section class="section-intro">
  <h1>Cases</h1>
  <p class="section-lead">
    A growing record of civil, chancery, appellate, and administrative matters involving
    Faith Frontier Ecclesiastical Trust and its trustees.
  </p>
</section>

<section class="case-list">
  {% assign all_cases = site.cases | sort: "filed_date" | reverse %}
  {% for case in all_cases %}
    <article class="case-card">
      <h2><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h2>
      <p class="case-meta">
        <strong>Court:</strong> {{ case.court }}<br>
        <strong>Docket:</strong> {{ case.docket }}<br>
        <strong>Status:</strong> {{ case.status }}<br>
        {% if case.next_date %}
          <strong>Next Event:</strong> {{ case.next_event }} on {{ case.next_date | date: "%B %d, %Y" }}
        {% endif %}
      </p>
      {% if case.summary %}
        <p>{{ case.summary | truncate: 260 }}</p>
      {% endif %}
      <p><a href="{{ case.url | relative_url }}">View full case →</a></p>
    </article>
  {% endfor %}
</section>
