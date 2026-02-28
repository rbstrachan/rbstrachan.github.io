**[investigationOS](https://github.com/rbstrachan/investigationOS)** is a free, open-source [Obsidian](https://obsidian.md) vault designed to provide a standardised, scalable framework for structuring, organising and managing source information and data uncovered in the course of complex criminal investigations. By moving away from unstructured paper notes and toward a relational database model, it ensures that every piece of evidence is tracked, corroborated, and auditable; transforming a standard knowledge base into a forensic-ready Records Management System.

> [!success] Get started with investigationOS
> This note serves to provide cursory information on the investigationOS vault.\
> For more in-depth information, see our [guide to getting started with investigationOS](https://reiwa.ca/investigationOS).\
> Ready to document your first investigation? [See the latest investigationOS vault release](https://github.com/rbstrachan/investigationOS).

# Goal
The primary goal of **investigationOS** is to eliminate ephemeral knowledge loss. By forcing the documentation of every logical connection, the vault ensures that if a lead investigator is removed from a case, any successor can reconstruct the investigation’s progress, rationale, and evidentiary chain without gaps.
# Architecture
The vault is divided into several folders to allow the easy organisation and ease of connections between raw data.
## Folder Structure
- **meta/** — houses files necessary for the working of the vault itself, including investigative personnel profiles, attachments, and automation templates.
- **bases/** — centralized Obsidian Bases views that take advantage of Obsidian's frontmatter properties to provide high-level indexes for people, evidence, leads and more.
- **source data/** — where all individual notes will be created. each folder corresponds to a specific information type in the investigation.
- **case overview** — the primary dashboard for the investigation.
- **inbox** — a note to temporarily store new information that hasn't been sorted into the vault yet.
- **pinboard** — a interactive visual representation of the investiagation analagous to a real-life pinboard.
- **timeline** — a base of all events recorded in the vault in order of the date and time they occured.
# Data Integrity & Chain of Custody
Evidence management requires a verifiable history. Within each evidence note, the `collectedBy` property links directly to a investigative personnel note, establishing an unbroken line of responsibility. Tags such as `#exculpatory` are used to flag evidence that must, by law, be disclosed to the defense, ensuring the investigation remains trial-ready.
