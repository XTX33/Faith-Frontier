---
layout: default
title: "Faith & Doctrine"
permalink: /faith/
description: "Faith Frontier’s reflections on conscience, stewardship, and justice in New Jersey, written from a Christian, working-class perspective."
---

<section class="section-intro">
  <h1>Faith & Doctrine</h1>
  <p class="section-lead">
    Reflections born from work, trial, and grace. Here, faith isn’t theory — it’s how conscience walks through courts, contracts, and the labor of human hands. <br></br>
Faith Frontier began from one truth: that stewardship, law, and livelihood are sacred trusts. These writings trace where Scripture meets structure — covenant meeting constitution, mercy meeting due process — and ask how a person of conscience stands within systems built on paper and power.<br></br>
Each piece is written as both testimony and study: personal, doctrinal, and practical. They are not legal advice, nor bound to any denomination or institution. They are simply the record of a craftsman and litigant learning to serve both the Carpenter and the Court with the same integrity.
  </p>
  <p class="text-muted">
    The writings collected here are personal theological and doctrinal reflections.
    They are not legal advice, and they do not represent any church body or denomination.
  </p>
</section>

<!-- Personal story / why this exists -->
<section class="section-personal-faith">
  <h2>Why Faith Frontier Exists</h2>
  <p>I’ve been outspoken since eighteen — political, opinionated, unafraid to take a stand. But beneath all the filings, motions, and docket numbers sits something simpler: I believe God cares how we treat each other — in business, in court, and in love. <br></p>br> My own record carries both faith and failure. Some wounds came from my choices, others from systems built to break the poor and unconnected. I’m working out my faith in public: repenting where I was wrong, standing firm where the process was wrong, and building something honest in between. <br></br> I’m a builder by trade, a pro se litigant by necessity, and a man still hoping for a family and a future in New Jersey. Faith Frontier is where those worlds meet — where paperwork and prayer share the same table, and where anyone can see how conscience, Scripture, and law collide in real life. <br></br> It exists because mercy and justice aren’t opposites. They’re the same pursuit, carried out with clean hands.
  </p>
  <p>
    My own record was shaped by fear, money, and misapplied charges. I’m working out my
    faith in public: repenting where I was wrong, standing firm where the process was
    wrong, and trying to build something honest in the middle. I’m a builder by trade,
    a pro se litigant by necessity, and a man who still hopes for a family and a future
    in New Jersey.
  </p>
  <p>
    Faith Frontier is where those worlds meet. It’s a place to lay out the paperwork and
    the prayers side by side, so anyone can see how conscience, Scripture, and law collide
    in real life — and how mercy and justice are still worth fighting for.
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
    <p> These records explore the nation’s founding principles not as distant history, but as active duties of stewardship and accountability in public life.</p>
    <p>
      <a class="btn-ghost" href="{{ '/faith/americas-government/' | relative_url }}">
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
