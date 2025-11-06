---
layout: default
title: "Live Dockets & Explanations"
permalink: /live-dockets/
---

<section class="section-intro">
  <h1>Live Dockets &amp; Explanations</h1>
  <p class="section-lead">
    This page summarizes active matters and links to their official dockets where
    available. Each entry includes a plain-language explanation and a note on
    why it matters for public trust, due process, or access to justice.
  </p>
  <p class="text-muted">
    Details are based on public records and filings. Nothing here is legal advice
    or a substitute for reviewing the official court docket.
  </p>
</section>

<section class="case-list">
  {% assign active_cases = site.cases
        | where_exp: "item", "item.status contains 'Active'"
        | sort: "next_date" %}

  {% if active_cases.size == 0 %}
    <article class="case-card">
      <h2>No live dockets published yet</h2>
      <p class="text-muted">
        When there are upcoming hearings, deadlines, or key rulings, they will be
        listed here with links to the underlying case pages. For now, you can view
        the broader <a href="{{ '/cases/' | relative_url }}">Cases index</a>.
      </p>
    </article>
  {% else %}
    {% for case in active_cases %}
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
          {% if case.role %}
            <strong>Role:</strong> {{ case.role }}<br>
          {% endif %}
          {% if case.next_date %}
            <strong>Next Event:</strong>
            {{ case.next_event | default: "Scheduled matter" }}
            on {{ case.next_date | date: "%B %d, %Y" }}
          {% endif %}
        </p>

        {% if case.summary %}
          <p>{{ case.summary | strip_html | truncate: 260 }}</p>
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
  {% endif %}
</section>
