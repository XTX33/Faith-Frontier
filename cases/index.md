---
layout: default
title: "Case Records"
permalink: /cases/
---

<section class="section-intro">
  <h1>Case Records</h1>
  <p class="section-lead">
    This archive gathers verified filings, timelines, and outcomes from matters involving
    <strong>Devon Tyler Barber</strong> and the <strong>Faith Frontier Ecclesiastical Trust</strong>.
    The goal is simple: bring court process into the light with honesty, context, and respect for the rule of law.
  </p>
  <p class="text-muted">
    <strong>Notice:</strong> Sensitive materials such as Pre-Sentence Reports, victim-identifying
    information, and confidential exhibits are <em>not</em> published here. Only public filings and
    appropriately redacted documents appear, in line with New Jersey Court Rules and basic human dignity.
  </p>
</section>

{%- comment -%}
  Highlight the unified PCR overview page (R. 3:22) if it exists.
{%- endcomment -%}
{% assign pcr_overview = site.pages | where: "permalink", "/cases/barber-nj-pcr-2024/" | first %}

{% if pcr_overview %}
<section class="case-list" aria-label="Featured proceedings">
  <article class="case-card">
    <header>
      <h2>
        <a href="{{ pcr_overview.url | relative_url }}">
          {{ pcr_overview.title | default: "Unified Post-Conviction Relief (R. 3:22)" }}
        </a>
      </h2>
    </header>
    <p class="text-muted">
      Consolidated overview of post-conviction relief proceedings under
      <strong>N.J. Ct. R. 3:22</strong>, connecting related Atlantic County dockets
      (including ATL-22-002292, ATL-22-002313, and ATL-24-001934) and explaining the
      constitutional issues in one place.
    </p>
    <p>
      <a class="card-link" href="{{ pcr_overview.url | relative_url }}">
        Open unified PCR overview →
      </a>
    </p>
  </article>
</section>
{% endif %}

{%- comment -%}
  Main case grid driven by _data/cases.yml.
  Each entry should define: id, title, court, docket, status, next_event, next_date, summary.
{%- endcomment -%}

{% if site.data.cases %}
<section class="case-list" aria-label="Individual case records">
  {% assign items = site.data.cases %}
  {% for case in items %}
    <article class="case-card">
      <header>
        <h2>
          <a href="{{ '/cases/' | append: case.id | append: '/' | relative_url }}">
            {{ case.title }}
          </a>
        </h2>
      </header>

      <dl class="case-meta">
        {% if case.court %}
          <dt>Court</dt><dd>{{ case.court }}</dd>
        {% endif %}
        {% if case.docket %}
          <dt>Docket</dt><dd>{{ case.docket }}</dd>
        {% endif %}
        {% if case.status %}
          <dt>Status</dt><dd>{{ case.status }}</dd>
        {% endif %}
        {% if case.next_date %}
          <dt>Next Event</dt>
          <dd>{{ case.next_event }} — {{ case.next_date | date: "%B %d, %Y" }}</dd>
        {% endif %}
      </dl>

      {% if case.summary %}
        <p class="text-muted">{{ case.summary }}</p>
      {% endif %}

      <p>
        <a class="card-link" href="{{ '/cases/' | append: case.id | append: '/' | relative_url }}">
          Open full record →
        </a>
      </p>
    </article>
  {% endfor %}
</section>
{% else %}
<section class="case-list">
  <article class="case-card">
    <header>
      <h2>Case index in progress</h2>
    </header>
    <p class="text-muted">
      The structured case index is being prepared. As filings are organized and redacted,
      they will appear here with links to full records and timelines.
    </p>
  </article>
</section>
{% endif %}