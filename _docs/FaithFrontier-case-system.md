Yep, good catch — your case asset folders are at the repo root (`/cases/...`), not under `/assets/cases/...`. Let’s fix the doc so it matches reality.

Here’s a corrected, ready-to-save `_docs/FaithFrontier-case-system.md`:

````markdown
# Faith Frontier Case System  
_Internal repository guide for cases, assets, and publishing_

---

## 1. Purpose

This document explains how **case records**, **PDF assets**, and **supporting pages** are organized in the Faith Frontier Ecclesiastical Trust repository, so that each matter can be:

- represented accurately as a public record,  
- auto-published to the site with minimal manual effort, and  
- interpreted through law, conscience, commerce, and common-law themes.

**Core goal:** add one case markdown file **+** one matching case asset folder → rebuild → the site updates itself with a new case page.

---

## 2. High-Level Structure

Repository layout (simplified, using your current structure):

```text
FaithFrontier.org/
├── _cases/                        # Case collection (active + closed)
│   ├── _TEMPLATE-new-case.md      # Template for new cases
│   ├── njta-v-barber.md
│   ├── atl-l-002794-25.md
│   ├── barber-nj-pcr-2022.md
│   ├── atl-24-001934.md
│   ├── a-000308-25.md
│   └── a-000313-25.md
│
├── cases/                         # Case ASSET folders (PDFs, orders, filings)
│   ├── atl-l-002794-25/
│   │   ├── 2025-10-03_verified-complaint-and-cis.pdf
│   │   ├── 2025-10-07_NJSC_ATL-L-002794-25_TrackAssignment_Notice_Team102.pdf
│   │   └── ...
│   ├── atl-dc-007956-25/
│   ├── atl-22-002292/
│   │   └── pcr/
│   ├── atl-22-002313/
│   │   └── pcr/
│   ├── atl-24-001934/
│   │   └── pcr/
│   ├── a-000308-25/
│   └── a-000313-25/
│
├── archives/cases/                # Legacy / redirected / deprecated case pages
│   ├── index.md
│   ├── usdj-1-22-cv-06206.md
│   ├── usdj-1-25-cv-15641.md
│   └── njmvc-v-barber.md
│
├── pages/                         # Site-level pages (indexes, timelines, etc.)
│   ├── cases.md                   # /cases/ – main cases index
│   ├── case-index.md              # full taxonomy / classification
│   ├── revelations.md             # /revelations/
│   ├── timeline.md                # /timeline/
│   └── faith.md                   # /faith/ (faith essays hub)
│
├── _posts/                        # Blog / article content
│   ├── 2020-12-28-thomas-becket-proclamation.md
│   ├── 2024-05-01-ecclesiastical-deed-poll.md
│   ├── 2025-06-13-faith-frontier-ministry-charter.md
│   ├── 2025-11-10-11-banned-foods.md
│   ├── 2025-11-10-constitution-as-covenant.md
│   └── 2025-11-10-revelations.md
│
└── _docs/                         # Internal documentation (this file, others)
    └── FaithFrontier-case-system.md
````

Key distinction:

* `_cases/` holds **markdown case records**.
* `cases/` at the repo root holds **actual PDFs and filings** for each docket.

---

## 3. Case Workflow: From Docket to Live Page

### Step 1 – Create the case file in `_cases/`

1. Copy `_cases/_TEMPLATE-new-case.md`.
2. Rename it to a stable slug, usually derived from the docket:

Examples:

```text
atl-l-002794-25.md
atl-dc-007956-25.md
a-000308-25.md
barber-nj-pcr-2022.md
```

Rules:

* lower-case
* hyphens, not spaces
* keep the docket visible when possible

---

### Step 2 – Fill in the front matter

Each case markdown starts with YAML front matter.

Example:

```yaml
---
layout: case
published: true

title: "Barber v. Tumelty et al. (ATL-L-002794-25)"
short_title: "Barber v. Tumelty"
permalink: /cases/atl-l-002794-25/

plaintiff: "Devon Tyler Barber"
defendant: "Michael B. Tumelty, Esq. and Law Offices of John W. Tumelty"

court: "Superior Court of New Jersey — Law Division, Civil Part"
venue: "Atlantic County"
docket: "ATL-L-002794-25"
case_type: "Civil – Legal Malpractice / Consumer Fraud"
judge: "Hon. William F. Meese, J.S.C."
role: "Plaintiff (pro se)"

status: "Active"
track: "Track 3 — Complex Civil Litigation"
filed_date: 2025-10-03
next_event: "Case Management Conference / Discovery Phase"
next_date: 2025-12-15

location: "Atlantic County Civil Courthouse, 1201 Bacharach Blvd., Atlantic City, NJ"

public_trust_issue: true
public_trust_tags:
  - "legal malpractice"
  - "consumer fraud act"
  - "contract law"
  - "fiduciary duty"
  - "access to justice"

common_law_themes:
  - "Fiduciary Duty in Attorney–Client Relationship"
  - "Contract Law & Good Faith Performance"
  - "Consumer Protection in Legal Services"
  - "Conscience in Professional Ethics"

summary: >
  Short, plain-English overview of what the case is about, the key issues,
  and the current procedural status.

assets_path: "/cases/atl-l-002794-25/"

filings:
  - date: 2025-10-03
    label: "Verified Complaint and Case Information Statement"
    file: "2025-10-03_verified-complaint-and-cis.pdf"
  - date: 2025-11-07
    label: "Order Granting Track 3 Reassignment"
    file: "2025-11-07_order-track-change-granted.pdf"
---
```

Notes:

* `layout: case` ties into your case template.
* `permalink` lives under `/cases/.../`.
* `assets_path` points to the **root-level** `cases/<slug>/` folder.
* `filings` is an optional structured list of key documents inside that folder.

---

### Step 3 – Write the body content

Below the front matter, use markdown + optional HTML.

Skeleton:

```markdown
{% include case-hero.html %}

<section class="case-page">
  <header class="case-header">
    <h1>{{ page.title }}</h1>
    <dl class="case-meta">
      <dt>Court</dt>
      <dd>{{ page.court }}</dd>

      <dt>Status</dt>
      <dd>{{ page.status }}</dd>

      <dt>Docket</dt>
      <dd>{{ page.docket }}</dd>
    </dl>
  </header>

  <section>
    <h2>Plain-English Overview</h2>
    <p>
      Short narrative of what this case is about, who filed it, and what is at stake
      in terms of rights, remedies, or public trust.
    </p>
  </section>

  <section>
    <h2>Key Legal Issues</h2>
    <ul>
      <li>Issue 1 …</li>
      <li>Issue 2 …</li>
    </ul>
  </section>

  <section>
    <h2>Timeline of Key Events</h2>
    <table>
      <thead>
        <tr><th>Date</th><th>Event</th><th>Docs</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>2025-10-03</td>
          <td>Verified Complaint and CIS Filed</td>
          <td>
            <a href="{{ page.assets_path }}2025-10-03_verified-complaint-and-cis.pdf">
              PDF
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</section>
```

You can either:

* use `page.assets_path` + a filename, or
* hard-code: `/cases/atl-l-002794-25/2025-10-03_verified-complaint-and-cis.pdf`.

---

## 4. Case Asset Folders (`/cases/<slug>/`)

Each docket or consolidated case gets a **folder at the repo root** under `cases/`.

Example:

```text
cases/atl-l-002794-25/
├── 2025-10-03_verified-complaint-and-cis.pdf
├── 2025-10-07_NJSC_ATL-L-002794-25_TrackAssignment_Notice_Team102.pdf
├── 2025-10-07_NJSC_ATL-L-002794-25_Barber_SubpoenasDucesTecum_with_ExhibitA_StatementOfRelevance.pdf
├── 2025-10-14_notice-consumer-fraud-act.pdf
├── 2025-10-14_order-fee-waiver.pdf
├── 2025-10-16_motion-track-change.pdf
├── 2025-10-28_NJSC_ATL-L-002794-25_Barber_FirstAmendedComplaint_with_Exhibits.pdf
└── 2025-11-07_order-track-change-granted.pdf
```

Recommended naming pattern:

```text
YYYY-MM-DD_DOCKET_Description_or_Caption.pdf
```

Where:

* `YYYY-MM-DD` = filing date
* `DOCKET`     = e.g., `ATL-L-002794-25` (optional if repetitive)
* `Description_or_Caption` = short, human-readable descriptor

Avoid spaces; use hyphens/underscores.

When you set:

```yaml
assets_path: "/cases/atl-l-002794-25/"
```

then in the template you can do:

```liquid
<a href="{{ page.assets_path }}{{ item.file }}">PDF</a>
```

if you’re looping over `page.filings`.

---

## 5. Collections: `_cases` vs `archives/cases`

### `_cases/`

* Canonical, current case records.
* Unified records (e.g., `barber-nj-pcr-2022.md`) live here.
* These are rendered using `layout: case` and show up in the `/cases/` index.

### `archives/cases/`

Use this when:

* a structure is **superseded** by a more accurate unified case, or
* you want a historical or “legacy” page no longer maintained as a live matter.

Example legacy redirect:

```yaml
---
layout: redirect
permalink: /cases/njta-v-barber-legacy/
redirect_to: /cases/njta-v-barber/
---
```

(Adjust to match your actual redirect layout.)

---

## 6. How Jekyll Uses This

### Collections config

In `_config.yml` you should have something like:

```yaml
collections:
  cases:
    output: true
    permalink: /cases/:name/
```

This tells Jekyll:

* `_cases/` is the `cases` collection,
* each markdown in `_cases/` is output as HTML,
* default URL is `/cases/<filename>/` unless `permalink` overrides it.

### Cases index page

`pages/cases.md` generally loops over `site.cases`:

```liquid
{% assign visible_cases = site.cases | where_exp: "c", "c.listed != false" %}
{% assign featured_cases = visible_cases | where: "featured", true %}
{% assign normal_cases  = visible_cases | where_exp: "c", "c.featured != true" %}

<section class="case-list">
  {% for case in featured_cases %}
    <article class="case-card case-featured">
      <h2><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h2>
      <p>{{ case.docket }} · {{ case.status }}</p>
      <p>{{ case.summary }}</p>
    </article>
  {% endfor %}

  {% for case in normal_cases %}
    <article class="case-card">
      <h3><a href="{{ case.url | relative_url }}">{{ case.title }}</a></h3>
      <p>{{ case.docket }} · {{ case.status }}</p>
    </article>
  {% endfor %}
</section>
```

Useful fields for indexing:

* `title`
* `short_title`
* `docket`
* `status`
* `featured` (true/false)
* `listed` (false to hide)

---

## 7. Best Practices

1. **One canonical record per controversy**

   * Where multiple dockets are really one controversy (e.g., unified PCR), use a single file like `barber-nj-pcr-2022.md` and include:

     ```yaml
     dockets:
       - "ATL-22-002292"
       - "ATL-22-002313"
     primary_docket: "ATL-22-002292"
     ```

   * Retire the individual case files to `archives/cases/` if you don’t need them live.

2. **Use `assets_path` + `filings` consistently**

   * Set the folder once in front matter: `assets_path: "/cases/<slug>/"`.
   * Keep the key public documents in `filings` so the layout can auto-generate a list.

3. **Separate law from doctrine**

   * Legal records → `_cases/` + `cases/<docket>/`.
   * Essays / theological reflections → `_posts/` with date-slug filenames.

4. **Status clarity**

   Use clear enums: `"Active"`, `"Closed"`, `"Pending Appeal"`, `"Remanded"`, `"Stayed"`, etc., with nuance in `summary` and the body.

5. **Cross-link related matters**

   In a case front matter:

   ```yaml
   related_cases:
     - "barber-nj-pcr-2022"
     - "atl-l-002794-25"
     - "a-000313-25"
   ```

   Then in your layout, you can loop over `site.cases` and show a small “Related Matters” block.

---

## 8. Optional: Structure Check Script (Local)

If you ever want to sanity-check structure locally (not required, just handy), you can use a simple shell script:

```bash
#!/usr/bin/env bash
# scripts/check-cases.sh

echo "Checking that each _cases/*.md has a matching cases/<slug>/ folder..."

MISSING=0

for file in _cases/*.md; do
  slug=$(basename "$file" .md)
  if [ ! -d "cases/$slug" ]; then
    echo "⚠  Missing folder: cases/$slug"
    MISSING=1
  fi
done

if [ "$MISSING" -eq 0 ]; then
  echo "✅ All case files have matching asset folders."
else
  echo "❌ Some cases are missing matching folders."
fi
```

Run:

```bash
bash scripts/check-cases.sh
```

---

## 9. Cheatsheet

* **New case** → `_cases/<slug>.md`
* **Case PDFs** → `cases/<slug>/`
* **Unified multi-docket PCR or theme** → single file in `_cases/`, multiple dockets in front matter
* **Legacy / superseded structure** → move to `archives/cases/`
* **Faith essays / doctrinal pieces** → `_posts/` with `YYYY-MM-DD-title.md`
* **Internal docs** (like this) → `_docs/`

---

## 10. Closing

The system is built so that:

> one docket + one folder + one honest summary
> = a public record anyone can read, test, and reuse.

When you add or edit:

1. Make it **verifiable** from the PDFs.
2. Keep it **readable** to a non-lawyer.
3. Stay **consistent** with this structure so future-you doesn’t have to untangle it again.

```

Drop that in `_docs/FaithFrontier-case-system.md` and it’ll match your real layout (root `cases/` asset folders instead of `/assets/cases/`).
::contentReference[oaicite:0]{index=0}
```
