---
title: "Trust Documents & Governance"
permalink: /trust/
---

<section class="container section">
  <h1>Faith Frontier Ecclesiastical Trust</h1>
  <p class="lead">
    Foundational documents establishing the Faith Frontier Ecclesiastical Trust — its charter,
    bylaws, and governing resolutions of conscience and public accountability.
  </p>

  <h2>Core Trust Documents</h2>
  <ul class="doc-list">
    {% assign trust_docs = site.static_files | where_exp: "f", "f.path contains '/assets/trust/'" | sort: "name" %}
    {% for file in trust_docs %}
      <li>
        <a href="{{ file.path | relative_url }}">{{ file.name }}</a>
      </li>
    {% else %}
      <li><em>No trust documents uploaded yet.</em></li>
    {% endfor %}
  </ul>

  <p>
    These records define the Trust’s <strong>purpose, governance, and fiduciary obligations</strong> —
    grounding every case, essay, and research project in an accountable structure that refuses to
    treat people as disposable.
  </p>
</section>
