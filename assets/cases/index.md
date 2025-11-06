---
layout: default
title: "Cases"
---

<h1>Faith Frontier — Case Records</h1>

<p class="text-muted">
Matters documented by <strong>Faith Frontier</strong> explore questions of law, conscience, and
public trust — connecting the practical record to deeper issues of fairness and stewardship.
</p>

{% assign active_cases = site.cases | where_exp: "item", "item.status contains 'Active'" | sort: "filed_date" | reverse %}
{% assign closed_cases = site.cases | where_exp: "item", "item.status contains 'Closed'" | sort: "filed_date" | reverse %}

<!-- Active Cases -->
{% if active_cases.size > 0 %}
<h2 class="mt-4">Active Cases</h2>
<div class="case-list">
  {% for case in active_cases %}
  <article class="case-card">
    <header>
      <h3>
        <a href="{{ case.url | relative_url }}">{{ case.short_title | default: case.title }}</a>
      </h3>
      <p class="text-muted">
        <small><strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
        {{ case.venue | default: "Atlantic County" }} |
        Docket: {{ case.docket | default: "Pending" }}</small>
      </p>
    </header>

    <p>{{ case.summary | strip_html | truncate: 220 }}</p>

    <p>
      <span class="badge bg-success">{{ case.status }}</span>
      {% if case.track %}
      <span class="badge bg-secondary">{{ case.track }}</span>
      {% endif %}
    </p>

    <p class="text-muted"><small>Filed {{ case.filed_date | date: "%b %-d, %Y" }}</small></p>
  </article>
  {% endfor %}
</div>
{% else %}
<p><em>No active appellate or trial cases are currently open for public display.</em></p>
{% endif %}

<!-- Closed / Archived Cases -->
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
        <small><strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
        {{ case.venue | default: "Atlantic County" }} |
        Docket: {{ case.docket }}</small>
      </p>
    </header>

    <p>{{ case.summary | strip_html | truncate: 200 }}</p>
    <p><span class="badge bg-dark">{{ case.status }}</span></p>
    <p class="text-muted"><small>Filed {{ case.filed_date | date: "%b %-d, %Y" }}</small></p>
  </article>
  {% endfor %}
</div>
{% endif %}

<!-- Link to Archives (visible but not dominant) -->
<hr class="mt-5 mb-3">
<p class="text-center">
  <a href="{{ '/archives/cases/' | relative_url }}" class="btn btn-outline-secondary btn-sm">
    View Archived Dockets
  </a><br>
  <small class="text-muted">Older matters preserved for record and research</small>
</p>
