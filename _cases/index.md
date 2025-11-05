---
layout: default
title: "Cases"
---

<h1>Faith Frontier — Case Records</h1>
<p class="text-muted">
Matters documented by Faith Frontier explore questions of law, conscience, and
public trust — connecting the practical record to deeper issues of fairness and stewardship.
</p>

{% assign active_cases = site.cases | where_exp: "item", "item.status contains 'Active'" | sort: "filed_date" | reverse %}
{% assign closed_cases = site.cases | where_exp: "item", "item.status contains 'Closed'" | sort: "filed_date" | reverse %}

<!-- Active Cases -->
<h2 class="mt-4">Active Cases</h2>
<div class="case-list">
  {% for case in active_cases %}
  <article class="case-card">
    <header>
      <h3>
        <a href="{{ case.url | relative_url }}">{{ case.short_title | default: case.title }}</a>
      </h3>
      <p class="text-muted">
        <small><strong>{{ case.court }}</strong><br>
        {{ case.venue }} | Docket: {{ case.docket }}</small>
      </p>
    </header>
    <p>{{ case.summary | strip_html | truncate: 220 }}</p>
    <p>
      <span class="badge bg-success">{{ case.status }}</span>
      {% if case.track %}<span class="badge bg-secondary">{{ case.track }}</span>{% endif %}
    </p>
    <p class="text-muted"><small>Filed {{ case.filed_date | date: "%b %-d, %Y" }}</small></p>
  </article>
  {% endfor %}
</div>

<!-- Closed or Archived Cases -->
{% if closed_cases.size > 0 %}
<h2 class="mt-5">Closed / Archived</h2>
<div class="case-list">
  {% for case in closed_cases %}
  <article class="case-card">
    <header>
      <h3>
        <a href="{{ case.url | relative_url }}">{{ case.short_title | default: case.title }}</a>
      </h3>
      <p class="text-muted">
        <small><strong>{{ case.court }}</strong><br>
        {{ case.venue }} | Docket: {{ case.docket }}</small>
      </p>
    </header>
    <p>{{ case.summary | strip_html | truncate: 200 }}</p>
    <p>
      <span class="badge bg-dark">{{ case.status }}</span>
    </p>
    <p class="text-muted"><small>Filed {{ case.filed_date | date: "%b %-d, %Y" }}</small></p>
  </article>
  {% endfor %}
</div>
{% endif %}
