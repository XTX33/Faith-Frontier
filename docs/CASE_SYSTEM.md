# Faith Frontier Case System

## Purpose

This document defines how cases, assets, and files are organized in the Faith Frontier repository so that every matter can be:

- represented accurately as a public record,
- auto-published to the site with minimal manual work, and
- interpreted through law, conscience, commerce, and common-law themes.

The goal is: **add one case file + one asset folder → the site updates itself.**

---

## Directory Structure

```text
FaithFrontier.org/
├── _cases/                        # Case collection (active + closed)
│   ├── _TEMPLATE-new-case.md      # Template for creating new case pages
│   ├── njta-v-barber.md           # NJTA v. Barber (consolidated)
│   ├── atl-l-002794-25.md         # Barber v. Tumelty (legal malpractice)
│   ├── barber-nj-pcr-2024.md      # Unified PCR overview
│   ├── atl-22-002292.md           # Criminal case - PCR pending
│   ├── atl-22-002313.md           # Criminal case - PCR pending
│   ├── atl-24-001934.md           # Criminal case - PCR pending
│   ├── a-000308-25.md             # Appellate Division appeal
│   └── a-000313-25.md             # Appellate Division appeal
│
├── archives/cases/                # Legacy or redirected case pages
│   ├── index.md                   # Archives index
│   ├── atl-dc-007956-25.md        # Redirect to main NJTA case
│   ├── usdj-1-22-cv-06206.md      # Federal civil rights (archived)
│   ├── usdj-1-25-cv-15641.md      # Federal civil rights (active/archival)
│   └── njmvc-v-barber.md          # Motor vehicle matter
│
├── assets/cases/                  # Case documents (PDFs, orders, filings)
│   ├── atl-dc-007956-25/          # NJTA case documents
│   ├── atl-l-002794-25/           # Malpractice case documents
│   ├── atl-22-002292/             # Criminal case docs (indictment, plea, etc.)
│   │   └── pcr/                   # PCR-specific filings
│   ├── atl-22-002313/
│   │   └── pcr/
│   ├── atl-24-001934/
│   │   └── pcr/
│   ├── a-000308-25/               # Appeal documents
│   └── a-000313-25/               # Appeal documents
│
├── pages/                         # Site pages
│   ├── cases.md                   # Main cases index (/cases/)
│   ├── case-index.md              # Complete case taxonomy
│   ├── revelations.md             # Common law revelations (/revelations/)
│   ├── timeline.md                # Chronological timeline (/timeline/)
│   └── faith.md                   # Faith essays index
│
└── _essays/                       # Faith and doctrine writings
    └── tiller-earth-foundation.md
