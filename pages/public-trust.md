---
layout: default
title: "Public-Trust Cases"
permalink: /public-trust/
---

<section class="section-intro">
  <h1>Public-Trust Cases</h1>
  <p class="section-lead">
    Some matters do more than resolve private disputes — they reveal how public
    power treats the people it serves. These are the cases where tolls, data,
    penalties, and procedure raise deeper questions about public trust.
  </p>
  <p class="text-muted">
    Public-trust cases are tagged not just because they involve a government
    agency, but because they highlight issues of fairness, transparency, and
    stewardship of authority.
  </p>
</section>

<section class="case-list">
  {% assign trust_cases = site.cases
        | where: "public_trust_issue", true
        | sort: "filed_date"
        | reverse %}

  {% if trust_cases.size == 0 %}
    <article class="case-card">
      <h2>No public-trust dockets published yet</h2>
      <p class="text-muted">
        Matters that implicate tolls, licenses, surveillance, or other public
        powers will appear here as they are organized and released. For now,
        see the <a href="{{ '/cases/' | relative_url }}">Cases page</a> for
        active and archived records.
      </p>
    </article>
  {% else %}
    {% for case in trust_cases %}
      <article class="case-card">
        <h2>
          <a href="{{ case.url | relative_url }}">
            {{ case.short_title | default: case.title }}
          </a>
        </h2>

        <p class="case-meta text-muted">
          <strong>Court:</strong>
          {{ case.court | default: "Superior Court of New Jersey" }}<br>
          {% if case.venue %}
            <strong>Venue:</strong> {{ case.venue }}<br>
          {% endif %}
          <strong>Docket:</strong> {{ case.docket | default: "N/A" }}<br>
          <strong>Status:</strong> {{ case.status | default: "Pending" }}
        </p>

        {% if case.summary %}
          <p>{{ case.summary | strip_html | truncate: 260 }}</p>
        {% endif %}

        {% if case.faith_note %}
          <p class="faith-note">
            <strong>Why this matters:</strong> {{ case.faith_note }}
          </p>
        {% endif %}

        <p>
          <a href="{{ case.url | relative_url }}">
            View full timeline &amp; filings →
          </a>
        </p>
      </article>
    {% endfor %}
  {% endif %}
</section>
