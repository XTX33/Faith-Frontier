---
layout: default
title: "Faith & Doctrine"
permalink: /faith/
description: "Faith-based reflections on conscience, stewardship, and justice — written from a Christian, working-class perspective grounded in lived experience."
---

<section class="section-intro">
  <h1>Faith &amp; Doctrine</h1>
  <p class="section-lead">
    Reflections born from work, legal proceedings, and moral formation. Here, faith is not abstract theory — it is
    how conscience navigates courts, contracts, and the labor of daily life.
  </p>
  <p>
    Faith Frontier began from one conviction: that stewardship, law, and livelihood are sacred responsibilities.
    These writings explore where Scripture intersects with institutional structure — covenant meeting constitution,
    mercy meeting due process — and examine how a person of conscience operates within systems built on procedure and precedent.
  </p>
  <p>
    Each piece serves as both testimony and theological study: personal, doctrinal, and practical. These reflections
    are not legal advice, nor are they bound to any specific denomination or ecclesiastical institution. They are
    the record of a tradesman and pro se litigant learning to serve both faith and public duty with integrity.
  </p>
  <p class="text-muted">
    <em>The writings collected here are personal theological and doctrinal reflections.
    They are not legal advice, and they do not represent any church body or denomination.</em>
  </p>
</section>

<!-- Personal foundation -->
<section class="section">
  <h2>Why Faith Frontier Exists</h2>
  <p>
    I have been outspoken since eighteen — politically engaged, willing to take unpopular positions,
    unafraid to challenge institutional power. But beneath the filings, motions, and docket numbers lies
    a simpler conviction: I believe God cares how we treat one another — in commerce, in courts, and in relationships.
  </p>
  <p>
    My own record reflects both faith and failure. Some difficulties arose from my own decisions; others emerged
    from systems structured to disadvantage the poor and the unconnected. I am working out my faith in public:
    repenting where I erred, standing firm where procedure failed, and building something honest between the two extremes.
  </p>
  <p>
    I am a builder by trade, a pro se litigant by necessity, and a person who still hopes for family and future
    in New Jersey. Faith Frontier is where those worlds intersect — where legal documentation and prayer occupy
    the same space, and where anyone can observe how conscience, Scripture, and law interact in real life.
  </p>
  <p>
    It exists because mercy and justice are not opposites. They are the same pursuit, carried out with clean hands.
  </p>
</section>

<section class="faith-cta-grid">
  <article class="faith-cta-card">
    <h2>Ecclesiastical Deed Poll &amp; Divine Authority</h2>
    <p>
      A doctrinal and trust-law reflection on spiritual authority, inheritance, and institutional protest —
      structured as an ecclesiastical deed poll and formal notice of objection.
    </p>
    <p>
      <a class="btn-primary" href="{{ '/faith/ecclesiastical-deed-poll/' | relative_url }}">
        Read the Deed &amp; Commentary →
      </a>
    </p>
  </article>

  <article class="faith-cta-card">
    <h2>Constitution as Covenant</h2>
    <p>
      These reflections examine the nation's founding principles not as distant history, but as active
      obligations of stewardship and accountability in contemporary public life.
    </p>
    <p>
      <a class="btn-ghost" href="{{ '/faith/constitution-covenant/' | relative_url }}">
        Explore Constitutional Essays →
      </a>
    </p>
  </article>
</section>

<section class="section">
  <h2>Faith Essays &amp; Meditations</h2>
  <p class="text-muted">
    Shorter essays and reflections on doctrine, prayer, public trust, and daily discipleship.
  </p>

  {% assign essays = site.essays | sort: "date" | reverse %}
  {% if essays.size == 0 %}
    <article class="essay-card">
      <h3>No essays published yet</h3>
      <p class="text-muted">
        New essays will appear here as they are prepared for public release.
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
        <p><small class="text-muted">{{ essay.date | date: "%B %d, %Y" }}</small></p>
      </article>
    {% endfor %}
  {% endif %}
</section>
