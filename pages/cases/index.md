---
layout: default
title: "Cases"
permalink: /cases/
---

<section class="cases-index">
  <header>
    <h1>Cases</h1>
    <p class="lede">All case pages and documents, listed by file name. Click a case to view filings and original PDFs.</p>
  </header>

  {% comment %}
  Use the collection directly. If you prefer newest-first, use | sort: 'date' | reverse
  {% endcomment %}
  {% assign cases_list = site.cases | sort: 'name' %}

  {% if cases_list.size == 0 %}
    <p>No cases found. If you expect items here, check that files in <code>_cases/</code> have valid YAML front matter and are not set to published: false.</p>
  {% else %}
    <ul class="case-list" aria-live="polite">
      {% for case in cases_list %}
        <li class="case-item">
          <a href="{{ case.url | relative_url }}" class="case-link">
            {{ case.title | default: case.name }}
          </a>
          {% if case.excerpt %}
            <p class="case-excerpt">{{ case.excerpt }}</p>
          {% endif %}
          <p class="case-meta">
            <strong>file:</strong> <code>{{ case.path | split: '/' | last }}</code>
            {% if case.date %} • <strong>date:</strong> {{ case.date | date: "%Y-%m-%d" }}{% endif %}
          </p>
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</section>
