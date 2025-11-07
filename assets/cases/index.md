---
layout: default
title: "Case Records"
description: "Faith Frontier — Public case documentation and filings across New Jersey and federal forums, exploring law, conscience, and stewardship."
permalink: /cases/
---

<section class="container section">
  <header class="section-header">
    <h1>Faith Frontier — Case Records</h1>
    <p class="lead text-muted">
      Matters documented under <strong>Faith Frontier</strong> examine law as a moral trust — connecting
      the procedural record to questions of fairness, labor, and equity across state and federal forums.
    </p>
  </header>

  {% assign active_cases = site.cases 
      | where_exp: "case", "case.status contains 'Active'" 
      | sort: "filed" | reverse %}
  {% assign closed_cases = site.cases 
      | where_exp: "case", "case.status contains 'Closed'" 
      | sort: "filed" | reverse %}

  <!-- ================= Active Cases ================= -->
  {% if active_cases.size > 0 %}
  <h2 class="mt-5">Active Matters</h2>
  <div class="case-grid">
    {% for case in active_cases %}
    <article class="case-card">
      <header>
        <h3>
          <a href="{{ case.url | relative_url }}">{{ case.short_title | default: case.title }}</a>
        </h3>
        <p class="meta text-muted">
          <small>
            <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
            {{ case.venue | default: "Atlantic County" }} ·
            Docket No. {{ case.docket | default: "Pending" }}
          </small>
        </p>
      </header>

      <p>{{ case.summary | strip_html | truncate: 220 }}</p>

      <footer>
        <p class="badges">
          <span class="badge bg-success">{{ case.status }}</span>
          {% if case.track %}
          <span class="badge bg-secondary">Track {{ case.track }}</span>
          {% endif %}
        </p>
        {% if case.filed %}
        <p class="text-muted"><small>Filed {{ case.filed | date: "%b %-d, %Y" }}</small></p>
        {% endif %}
      </footer>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p><em>No active trial or appellate cases currently open for public display.</em></p>
  {% endif %}

  <!-- ================= Closed / Archived ================= -->
  {% if closed_cases.size > 0 %}
  <h2 class="mt-5">Closed / Archived Matters</h2>
  <div class="case-grid">
    {% for case in closed_cases %}
    <article class="case-card">
      <header>
        <h3>
          <a href="{{ case.url | relative_url }}">{{ case.short_title | default: case.title }}</a>
        </h3>
        <p class="meta text-muted">
          <small>
            <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
            {{ case.venue | default: "Atlantic County" }} ·
            Docket No. {{ case.docket }}
          </small>
        </p>
      </header>

      <p>{{ case.summary | strip_html | truncate: 200 }}</p>

      <footer>
        <p class="badges">
          <span class="badge bg-dark">{{ case.status }}</span>
        </p>
        {% if case.filed %}
        <p class="text-muted"><small>Filed {{ case.filed | date: "%b %-d, %Y" }}</small></p>
        {% endif %}
      </footer>
    </article>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ================= Archives Link ================= -->
  <hr class="mt-5 mb-3">
  <p class="text-center">
    <a href="{{ '/archives/cases/' | relative_url }}" class="btn btn-outline-secondary btn-sm">
      View Archived Dockets
    </a><br>
    <small class="text-muted">Older matters preserved for research and record integrity</small>
  </p>
</section>
