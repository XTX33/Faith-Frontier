---
layout: default
title: "Public-Trust Cases"
permalink: /public-trust/
---

<section class="section-intro">
  <h1>Public-Trust Cases</h1>
  <p class="section-lead">
    Some matters do more than resolve private disputes — they expose how public power
    treats the people it serves. These are the cases where tolls, data, penalties,
    and process raise deeper questions about public trust.
  </p>
</section>

<section class="case-list">
  {% assign trust_cases = site.cases | where: "public_trust_issue", true | sort: "filed_date" | reverse %}
  {% for case in trust_cases %}
    <article class="case-card">
      <h2><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h2>
      <p class="case-meta">
        <strong>Court:</strong> {{ case.court }}<br>
        <strong>Docket:</strong> {{ case.docket }}<br>
        <strong>Status:</strong> {{ case.status }}
      </p>
      {% if case.summary %}
        <p>{{ case.summary | truncate: 260 }}</p>
      {% endif %}
      {% if case.faith_note %}
        <p class="faith-note">
          <strong>Why this matters:</strong> {{ case.faith_note }}
        </p>
      {% endif %}
      <p><a href="{{ case.url | relative_url }}">View full timeline & filings →</a></p>
    </article>
  {% endfor %}
</section>
