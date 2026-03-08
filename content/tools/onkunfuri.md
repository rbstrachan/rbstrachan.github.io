**onkunfuri** is a Japanese-language project that provides a robust and highly accurate system for classifying Japanese kanji readings as on‑yomi or kun‑yomi directly from dictionary-style entries. It is designed to handle real‑world lexical data, including edge cases that commonly cause misclassification in naïve implementations.

The classifier processes `kanji[reading]` mappings and applies linguistic rules, dictionary data, and optional manual overrides to produce consistent and explainable results.

> [!success] Download the data
> Below is a brief overview of this project. For more information, see the project's [GitHub repository](https://github.com/rbstrachan/onkunfuri).
>
> Found a mistake? Want to make an improvement? Contributions are welcome! Feel free to [download the latest release](https://github.com/rbstrachan/onkunfuri/releases/latest) to get a sense for the dataset, [fork the repo](https://github.com/rbstrachan/onkunfuri/fork) to make your changes, or [open an issue](https://github.com/rbstrachan/onkunfuri/issues) to start a discussion.

# Features
**onkunfuri** is capable of accurately handling a wide range of Japanese orthographic and phonological quirks that complicate kanji reading classification.
- correctly accounts for sokuon (促音), including small っ readings from from phonological compounds
- properly interprets the repetition mark (々) and identifies readings of repeated kanji
- recognises and classifies voicing transformations (rendaku) such as はん → ばん
- normalises all JMDictFurigana entries to hiragana before processing, preventing premature false negatives
- supports non‑official ren’yōkei (noun‑from‑verb) readings, even when they are not explicitly listed in standard kanji dictionaries
- correctly processes mizenkei and irregular stems, such as 上げる → 上げ
- filters out entries that do not contain kanji or consist solely of iteration symbols (such as 々 or 〆)
- detects and corrects abbreviated kun readings that may be misclassified as on‑yomi, for example:
  - `うなぎ丼[どんぶり]` — correctly classified as a kun reading
  - `うな丼[ドン]` — an abbreviated kun reading that could otherwise be mistaken for a rendaku‑altered on reading
- provides flexible manual override support to handle edge cases:
  - kanji‑level reading adjustments via `additional_kanji_readings.csv`; and
  - word‑specific overrides via `manual_onkunyomi.csv`

These files make it possible to fix individual edge cases without changing the core logic or introducing false-positives.

# Performance Improvements
Significant improvements have been made between the proof‑of‑concept (PoC) and the current release.

| version        | count   | `tag:unknown`      | `tag:ambiguous`  | `tag:irregular`  | `-tag:unknown`<br>`-‍tag:ambiguous` | `tag:unknown` or `tag:ambiguous` | overlap        |
| -------------- | ------- | ------------------ | ---------------- | ---------------- | ---------------------------------- | -------------------------------- | -------------- |
| poc            | 229,833 | 34,410<br>(14.97%) | 5,915<br>(2.57%) | 6,534<br>(2.84%) | 189,926<br>(82.64%)                | 39,907<br>(17.36%)               | 418<br>(0.18%) |
| 令和8年1月26日 | 228,277 | 5,825<br>(2.55%)   | 6,097<br>(2.67%) | 6,534<br>(2.86%) | 216,407<br>(94.80%)                | 11,870<br>(5.20%)                | 52<br>(0.02%)  |

The latest version reduces unknown classifications from nearly 15% to just 2.55%, and reduces total unresolved cases (unknown or ambiguous) from 17.36% to 5.20%. Overlap errors have also been nearly eliminated.

# Future Development
In upcoming releases, entries believed to contain input errors or furigana misalignments will be filtered out prior to classification. These problematic entries will not be included in the final exported `.csv` file.
