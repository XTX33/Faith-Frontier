# Copilot Instructions for faithfrontier.org

This repository powers **faithfrontier.org**, a Jekyll site for the **Faith Frontier Ecclesiastical Trust** and related work of **Tillerstead LLC** (a New Jersey HIC contractor aligned under the trust).

When working in this repository, **assume you are operating on a public record system**, not a marketing site. Prioritize integrity, traceability, and accessibility over “clever” copy.

---

## 1. Core Purpose

- Treat this site as a **public documentation and stewardship portal**.
- Case materials, trust language, and legal filings must preserve:
  - Factual accuracy  
  - Procedural integrity  
  - Respect for New Jersey and federal law and court rules  
- The codebase exists to present that record clearly and accessibly, not to rewrite it.

**Default stance:**  
If a change might affect legal meaning, do not make the change. Improve layout, structure, and clarity around the content instead.

---

## 2. Tech Stack & Key Files

The site is a static **Jekyll** application.

- `_config.yml` – Site and collection configuration
- `_layouts/` – Page templates (`default`, `case`, `essay`, etc.)
- `_includes/` – Shared partials (header, footer, nav, meta)
- `_cases/` – Case pages (Markdown + YAML front matter)
- `_essays/` – Essays and faith/trust reflections
- `pages/` – Section index pages (cases, faith, public-trust, etc.)
- `assets/`
  - `assets/cases/` – **Case documents (PDFs, orders, motions, etc.) – DO NOT EDIT**
  - `assets/css/theme.css` – Design tokens and CSS variables
  - `assets/css/style.css` – Layout, components, page-specific styles
  - `assets/js/main.js` – Minimal vanilla JavaScript (e.g., navigation)

---

## 3. Code Standards (HTML, CSS, JS, Jekyll)

### HTML

- Prefer **semantic HTML5** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Use a proper heading hierarchy:
  - Exactly one `<h1>` per page
  - Then `<h2>`, `<h3>` in order
- Use descriptive link text (avoid “click here”)
- Add appropriate ARIA attributes for navigation and interactive elements when needed.

### CSS

- **Use `theme.css` tokens** (colors, spacing, typography) wherever possible.
  - Do **not** hard-code new colors if a variable already exists.
- Keep CSS modular:
  - Use utility classes and component classes instead of large inline styles.
  - Prefer removing or consolidating duplicate rules instead of layering more overrides.
- Ensure responsive behavior:
  - Mobile-first layouts
  - Reasonable line length and spacing

### JavaScript

- Keep JS **vanilla and minimal**.
  - No new frameworks or libraries unless explicitly requested.
- Focus on:
  - Navigation toggles
  - Small accessibility enhancements
- All interactive features must:
  - Work with keyboard navigation
  - Provide visible focus styles

### Jekyll / Liquid

- Use `{{ ... | relative_url }}` and `{{ ... | absolute_url }}` correctly.
- Do not break existing collection permalinks:
  - `_cases/` → `/cases/:name/`
  - `_essays/` → `/faith/:name/`
- When adding new pages or collections, keep front matter consistent with existing patterns.

---

## 4. Legal & Trust Content Guardrails

You are working around **legal and ecclesiastical content**. Treat it as record, not copy.

### Never invent or modify:

- Case names, docket numbers, or captions
- Citations to:
  - N.J.S.A.
  - N.J. Ct. R.
  - Federal statutes
  - Case law
- Substantive language in:
  - Post-conviction filings
  - Case summaries that mirror actual filings
  - Trust / ecclesiastical declarations
  - Doctrinal or theological sections

### Allowed adjustments (with caution):

- Fix obvious **typos and formatting** in non-record summaries if requested
- Clarify layout and visual structure:
  - Headings, lists, pull-quotes, sidebars
- Add **non-substantive labels** where the meaning is already clear:
  - e.g. “Order”, “Motion”, “Opinion”, “PCR Petition”

### If a task risks changing legal meaning:

- Do **not** rewrite the text.
- Instead:
  - Improve formatting (headings, spacing, indentation, citations displayed more clearly)
  - Add cross-references or anchors **without** altering content
  - In PR description or code comments, **flag any section** that may need a human legal review.

---

## 5. Workflows & Automation Defaults

### 5.1 Build / Preview

When asked to prepare or validate changes:

```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
