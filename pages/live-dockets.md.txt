---
layout: default
title: "Live Dockets & Explanations"
permalink: /live-dockets/
---

<section class="section-intro">
  <h1>Live Dockets & Explanations</h1>
  <p class="section-lead">
    This page summarizes active matters and links to their official dockets where
    available. Each entry includes a plain-English explanation and a note on why it
    matters for public trust, due process, or access to justice.
  </p>
</section>

<section class="case-list">
  {% assign active_cases = site.cases | where: "status", "Active" | sort: "next_date" %}
  {% for case in active_cases %}
    <article class="case-card">
      <h2><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h2>
      <p class="case-meta">
        <strong>Court:</strong> {{ case.court }}<br>
        <strong>Docket:</strong> {{ case.docket }}<br>
        <strong>Role:</strong> {{ case.role }}<br>
        {% if case.next_date %}
          <strong>Next Event:</strong> {{ case.next_event }} on {{ case.next_date | date: "%B %d, %Y" }}
        {% endif %}
      </p>
      {% if case.summary %}
        <p>{{ case.summary }}</p>
      {% endif %}
      {% if case.docket_url %}
        <p>
          Official docket:
          <a href="{{ case.docket_url }}" target="_blank" rel="noopener">
            View on court e-systems →
          </a>
        </p>
      {% endif %}
      {% if case.faith_note %}
        <p class="faith-note">
          <strong>Faith reflection:</strong> {{ case.faith_note }}
        </p>
      {% endif %}
    </article>
  {% endfor %}
</section>
