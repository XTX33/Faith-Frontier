---
layout: default
title: "Case Records"
permalink: /cases/
---

<section class="section-intro">
  <h1>Case Records</h1>
  <p class="section-lead">
    This section publishes verified filings, timelines, and outcomes from matters involving
    <strong>Devon Tyler Barber</strong> and the Faith Frontier Ecclesiastical Trust.
    Each record is presented for transparency, education, and the pursuit of due process.
  </p>
  <p class="text-muted">
    <strong>Notice:</strong> Sensitive records such as Pre-Sentence Reports and confidential
    exhibits are never published here. Only public filings and redacted documents appear,
    in accordance with New Jersey Court Rules and basic human dignity.
  </p>
</section>

<section class="case-list">
  {% assign items = site.data.cases %}
  {% for case in items %}
    <article class="case-card">
      <header>
        <h2><a href="{{ '/cases/' | append: case.id | append: '/' | relative_url }}">{{ case.title }}</a></h2>
      </header>

      <dl class="case-meta">
        <dt>Court</dt><dd>{{ case.court }}</dd>
        <dt>Docket</dt><dd>{{ case.docket }}</dd>
        <dt>Status</dt><dd>{{ case.status }}</dd>
        {% if case.next_date %}
          <dt>Next Event</dt>
          <dd>{{ case.next_event }} — {{ case.next_date | date: "%B %d, %Y" }}</dd>
        {% endif %}
      </dl>

      {% if case.summary %}
        <p class="text-muted">{{ case.summary }}</p>
      {% endif %}

      <p><a class="card-link" href="{{ '/cases/' | append: case.id | append: '/' | relative_url }}">Open full record →</a></p>
    </article>
  {% endfor %}
</section>