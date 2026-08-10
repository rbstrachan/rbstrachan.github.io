---
title: research
aliases:
  - research
---
This page collects my current %%and past%% research interests across Library & Information Sciences, specifically tactile accessibility and digital preservation.

Undertaken in preparation for future graduate studies, these notes reflect active and evolving research whose methodologies and outlines may evolve over time.

I'm always open to feedback and opportunities to collaborate. If you're interested in discussing a topic you think might interest me, please don't hesitate to [[contact|get in touch]].

<!-- > For a list of completed research materials, see my [[publications/index|publications]]. -->

***

<!--
- Designing a Metadata & Encoding Framework for Multilingual Braille Publishing
## 1. Problem Definition
- Braille is not universal.
- National standards differ.
- Contraction levels differ.
- Digital formats are inconsistent.
- Existing metadata schemas insufficiently encode Braille-specific attributes.
Research Question:
How should a digital publishing system formally model Braille-specific metadata and encoding to support multilingual accessibility and long-term preservation?
***
## 2. Technical Investigation
### Encoding Layer
- Unicode Braille block
- Language-specific Braille variations
- Contraction systems
### File Format Layer
- BRF
- Accessible EPUB
- Embossing formats
### Metadata Layer
- MARC fields (336, 337, 338, 041, etc.)
- RDA accessibility elements
- Dublin Core format & language
- ONIX accessibility metadata
***
## 3. Proposed System Model
Choose one modeling method:
- Entity-Relationship Diagram
- RDF Graph Model
- Formal schema extension
- Structured metadata profile
Example entity chain:
Work
→ Expression (Language)
→ Braille Standard
→ Contraction Level
→ File Format
→ Embossing Specification
→ Rights
→ Preservation Events
***
## 4. Preservation & Sustainability Layer
Incorporate:
- PREMIS events
- Version tracking
- Format migration
- Checksum validation
***
## 5. Analytical Reflection
Structured analysis:
- Interoperability challenges
- Standardization vs linguistic diversity
- Accessibility equity
- Scalability for nonprofit implementation

*** ***
Step 1 — Define the Problem
- Braille is not one universal code.
- Different languages implement Braille differently.
- Digital publishing pipelines are inconsistent.
- Metadata often does not adequately encode Braille format specifics.

Research Question:
- How should a digital publishing system model Braille-specific metadata and encoding to support multilingual accessibility?

Step 2 — Technical Investigation
- Unicode Braille block
- Differences between French Braille and English Braille
- Representation in digital formats (BRF, EPUB accessibility tags)
- Metadata fields in MARC/Dublin Core related to format and accessibility

Step 3 — Model a System
- A metadata schema extension for Braille publications
- Or a formal mapping layer
- Or a conceptual graph model

You could represent:
Work → Language → Braille System → Embossing Format → File Format → Rights

Step 4 — Reflect on Implications
Short, structured analysis:

- Interoperability challenges
- Preservation concerns
- Access equity
- Standardization vs linguistic diversity

*** *** MORE IDEAS
Entropy and Redundancy in Braille Encoding Systems
- How much redundancy exists in contracted Braille compared to uncontracted Braille, and how does this affect error resilience?
1. Model Grade 1 vs Grade 2 Braille as symbol systems.
2. Compute entropy per character.
3. Simulate single-cell corruption.
4. Measure semantic degradation.
5. Compare to ASCII error tolerance.

Formal Error-Correcting Extensions for Braille Digital Storage
- Can lightweight error-correcting schemes improve resilience of digital Braille transmission without increasing tactile ambiguity?
1. Model Braille cells as 6-bit symbols.
2. Propose parity extensions.
3. Simulate noisy transmission.
4. Measure correction success vs overhead.

Graph-Theoretic Analysis of Japanese Kanji Composition
- Can kanji radicals be modelled as compositional graphs, and what structural properties emerge?
1. Represent kanji as radical decomposition graphs.
2. Analyse depth, branching factor.
3. Measure structural reuse frequency.
4. Detect clusters of semantic similarity.

Forensic Reconstruction of (Partially?) Corrupted Minecraft Save Files
- To what extent can partially corrupted Minecraft save files or world folders be recreated using structural redundancy?
1. Intentionally corrupt SQLite files.
2. Analyse page structure.
3. Recover via header reconstruction.
4. Quantify recovery rate vs corruption severity.

Kanji Stroke Order as a Formal Grammar
- Can stroke order rules be formalised as a context-sensitive grammar?
1. Extract stroke order rules.
2. Formalise production rules.
3. Detect violations.
4. Model generative constraints.

Forensic Recovery of Corrupted Minecraft Worlds
- Can partially corrupted region files be reconstructed using structural redundancy?
1. Simulate corruption.
2. Analyse chunk header redundancy.
3. Attempt recovery using heuristics.
4. Document success rates.

TIMELINE
## Months 1–2: Foundations
Study and model:
- IFLA LRM
- RDA conceptual structure
- MARC format fields
- PREMIS basics
- Unicode Braille block

Publish short structured essays:
- Modeling Bibliographic Entities as Data Structures
- Unicode and the Representation of Braille
***
## Months 3–4: Develop Flagship Project
- Conduct encoding comparison
- Analyze metadata gaps
- Design formal model
- Publish structured research paper draft
***
## Months 5–6: Applied Extension
- Prototype small transformation pipeline
- Create sample metadata records for Braille publication
- Integrate preservation layer
- Refine paper toward publishable standard
 -->
