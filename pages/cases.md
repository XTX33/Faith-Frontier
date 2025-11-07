---
layout: default
title: "Case Records"
permalink: /cases/
description: "Indexed record of matters advanced by Faith Frontier Ecclesiastical Trust and its trustees — documenting New Jersey appeals, PCR filings, and civil actions undertaken for truth, equity, and lawful stewardship."
---

<section class="section-intro">
  <h1>Case Records</h1>
  <p class="section-lead">
    The following records are presented under the oversight of
    <strong>Faith Frontier Ecclesiastical Trust</strong> — a faith-based public trust devoted to
    stewardship, lawful reform, and the defense of conscience in civil and ecclesiastical affairs.
    Each entry is published to preserve integrity in process, honor the rule of law, and bear witness
    to the covenant between labor, governance, and divine justice.
  </p>

  <p class="text-muted">
    These filings represent the work of trustees, petitioners, and advocates seeking redress in
    state and federal forums across New Jersey. They illustrate how law, when rightly applied,
    may serve mercy, discipline, and restoration — rather than domination or neglect.
  </p>

  <p class="text-muted">
    <em>“For the Lord loves justice; He will not forsake His saints.”</em> — Psalm 37:28
  </p>

  <p class="text-muted">
    The documents reproduced here are official public records, filings, or judicial orders. They are shared
    for transparency and education, not as legal advice or solicitation. Private or sealed materials are withheld
    out of respect for confidentiality and lawful process.
  </p>
</section>

{% comment %}
  Collect all case pages:
  - Only pages whose layout is "case"
  - Only URLs under /cases/
  - Exclude archived cases
  - Sort by filed date (newest first)
{% endcomment %}
{% assign all_cases = site.pages
  | where: "layout", "case"
  | where_exp: "p", "p.url contains '/cases/'"
  | where_exp: "p", "p.archived != true"
  | sort: "filed"
  | reverse %}

<section class="case-list" aria-label="Case records ordered by most recent filing">

  {% if all_cases.size == 0 %}
    <article class="case-card">
      <h2>No cases published yet</h2>
      <p class="text-muted">
        Case records are being organized, reviewed, and prepared for public release as
        filings are redacted for privacy and formatted for digital preservation. Please
        check back soon as this record continues to grow.
      </p>
    </article>
  {% else %}

    {% comment %}
      Split into Active vs Closed based on the status text.
      Anything else falls into "Other / Misc" if needed later.
    {% endcomment %}
    {% assign active_cases = all_cases | where_exp: "c", "c.status contains 'Active'" %}
    {% assign closed_cases = all_cases | where_exp: "c", "c.status contains 'Closed'" %}
    {% assign other_cases = all_cases
       | where_exp: "c", "c.status contains 'Active' == false and c.status contains 'Closed' == false" %}

    {% if active_cases.size > 0 %}
      <h2 class="mt-4">Active Matters</h2>
      {% for case in active_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
            <p class="text-muted">
              <small>
                <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                {{ case.venue | default: "Atlantic County" }} |
                Docket: {{ case.docket | default: "Pending" }}
              </small>
            </p>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 260 }}
            </p>
          {% endif %}

          <p>
            <span class="badge bg-success">{{ case.status }}</span>
            {% if case.track %}
              <span class="badge bg-secondary">{{ case.track }}</span>
            {% endif %}
          </p>

          {% if case.filed %}
            <p class="text-muted">
              <small>Filed {{ case.filed | date: "%B %-d, %Y" }}</small>
            </p>
          {% endif %}

          {% if case.next_event %}
            <p class="text-muted">
              <small>
                {% if case.next_event.label and case.next_event.date %}
                  Next: {{ case.next_event.label }} — {{ case.next_event.date | date: "%B %-d, %Y" }}
                {% else %}
                  Next: {{ case.next_event }}
                {% endif %}
              </small>
            </p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

    {% if closed_cases.size > 0 %}
      <h2 class="mt-5">Closed / Completed Matters</h2>
      {% for case in closed_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
            <p class="text-muted">
              <small>
                <strong>{{ case.court | default: "Superior Court of New Jersey" }}</strong><br>
                {{ case.venue | default: "Atlantic County" }} |
                Docket: {{ case.docket | default: "" }}
              </small>
            </p>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 220 }}
            </p>
          {% endif %}

          <p>
            <span class="badge bg-dark">{{ case.status }}</span>
          </p>

          {% if case.filed %}
            <p class="text-muted">
              <small>Filed {{ case.filed | date: "%B %-d, %Y" }}</small>
            </p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

    {% if other_cases.size > 0 %}
      <h2 class="mt-5">Other Matters</h2>
      {% for case in other_cases %}
        <article class="case-card">
          <header>
            <h2>
              <a href="{{ case.url | relative_url }}">
                {{ case.short_title | default: case.title }}
              </a>
            </h2>
          </header>

          {% if case.summary %}
            <p class="text-muted">
              {{ case.summary | strip_html | truncate: 220 }}
            </p>
          {% endif %}

          {% if case.status %}
            <p><span class="badge bg-secondary">{{ case.status }}</span></p>
          {% endif %}

          <p>
            <a class="card-link" href="{{ case.url | relative_url }}">
              Open full record →
            </a>
          </p>
        </article>
      {% endfor %}
    {% endif %}

  {% endif %}
</section>
