---
layout: default
title: "Faith & Doctrine"
permalink: /faith/
---

<section class="section-intro">
  <h1>Faith & Doctrine</h1>
  <p class="section-lead">
    Reflections on conscience, stewardship, and law — written from a faith-driven view of
    public trust, covenant, and justice. These essays explore how Scripture, doctrine,
    and constitutional principles meet real life, work, and courtrooms.
  </p>
  <p class="text-muted">
    The writings collected here are personal theological and doctrinal reflections.
    They are not legal advice, and they do not represent any church body or denomination.
  </p>
</section>

<section class="faith-cta-grid">
  <article class="faith-cta-card">
    <h2>Ecclesiastical Deed Poll & Divine Authority</h2>
    <p>
      A doctrinal and trust-law reflection on standing, inheritance, and protest —
      written as an ecclesiastical deed poll and notice of objection.
    </p>
    <p>
      <a class="btn-primary" href="{{ '/faith/ecclesiastical-deed-poll/' | relative_url }}">
        Read the Deed & Commentary →
      </a>
    </p>
  </article>

  <article class="faith-cta-card">
    <h2>Constitution as Covenant</h2>
    <p>
      A long-form meditation on the Constitution as a trust instrument and sacred covenant,
      connecting organic law, posterity, and Christian conscience.
    </p>
    <p>
      <a class="btn-ghost" href="{{ '/faith/constitution-covenant/' | relative_url }}">
        Explore the Constitutional Essay →
      </a>
    </p>
  </article>
</section>

<section class="essay-list">
  <h2>Faith Essays & Meditations</h2>
  <p class="text-muted">
    Shorter essays and notes on doctrine, prayer, public trust, and daily discipleship.
  </p>

  {% assign essays = site.essays | sort: "date" | reverse %}
  {% if essays.size == 0 %}
    <article class="essay-card">
      <h3>No essays published yet</h3>
      <p class="text-muted">
        New essays will appear here as they are edited and prepared for public release.
        Check back for updates.
      </p>
    </article>
  {% else %}
    {% for essay in essays %}
      <article class="essay-card">
        <h3><a href="{{ essay.url | relative_url }}">{{ essay.title }}</a></h3>
        {% if essay.summary %}
          <p>{{ essay.summary }}</p>
        {% endif %}
        <p><small>{{ essay.date | date: "%B %d, %Y" }}</small></p>
      </article>
    {% endfor %}
  {% endif %}
</section>