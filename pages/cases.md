---
layout: default
title: "Case Records"
permalink: /cases/
description: "Index of active and archived Faith Frontier case records, including New Jersey appeals, PCR filings, and civil matters."
---

<section class="section-intro">
  <h1>Case Records</h1>
  <p class="section-lead">
    An indexed archive of filings, timelines, and outcomes in matters involving
    <strong>Faith Frontier Ecclesiastical Trust</strong>, its trustees, and related parties.
    Each entry is published to promote transparency, public accountability, and a clearer
    understanding of how due process unfolds in New Jersey civil, chancery, appellate,
    and administrative forums.
  </p>
  <p class="text-muted">
    Documents reproduced here are public court filings, orders, or agency records.
    They are provided for informational and educational purposes only and do not constitute legal advice.
  </p>
</section>

<section class="case-list" aria-label="Case records ordered by most recent filing">
  {% assign all_cases = site.cases | sort: "filed_date" | reverse %}

  {% if all_cases.size == 0 %}
    <article class="case-card">
      <h2>No cases published yet</h2>
      <p class="text-muted">
        Case records are being prepared and will be posted as filings are organized and
        redacted for online publication. Please check back soon.
      </p>
    </article>
  {% else %}
    {% for case in all_cases %}
      <article class="case-card">
        <header>
          <h2>
            <a href="{{ case.url | relative_url }}">
              {{ case.title }}
            </a>
          </h2>
        </header>

        <dl class="case-meta">
          <dt>Court</dt>
          <dd>{{ case.court }}</dd>

          <dt>Docket</dt>
          <dd>{{ case.docket }}</dd>

          <dt>Status</dt>
          <dd>{{ case.status }}</dd>

          {% if case.filed_date %}
            <dt>Filed</dt>
            <dd>{{ case.filed_date | date: "%B %d, %Y" }}</dd>
          {% endif %}

          {% if case.next_date %}
            <dt>Next Event</dt>
            <dd>{{ case.next_event }} — {{ case.next_date | date: "%B %d, %Y" }}</dd>
          {% endif %}
        </dl>

        {% if case.summary %}
          <p class="text-muted">
            {{ case.summary | truncate: 260 }}
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
</section>
