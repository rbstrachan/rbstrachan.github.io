---
draft: true
title: Royal Mail barcoded stamps
aliases:
  - Royal Mail barcoded stamps
---

<!-- see https://github.com/infrastructureclub/royal-mail-stamp-barcode -->

This research project aims to decode and understand the 2D DataMatrix codes on Royal Mail’s Datamatrix Barcoded Machin stamps. By extracting and comparing raw strings from a sample of physical stamps, it breaks down how information such as postal classes, batch numbers, serial numbers and cryptographic hashes are encoded, and offers an explanation of how these are used to digitise physical mail and protected it against fraudulent and counterfeit stamp use.

%%
- analysed a set of legally purchased real stamps for reverse-engineering purposes
- scanned the internet for images of stamps that I could not access (special editions, limited editions, etc.) for reverse engineering purposes
- one done, created a system for verifying a stamps validity based on deiscrepancies between the printed features of the stamp and its barcode information
- scanned the internet for images of stamps that failed the validity checks and were therefore fake/counterfeit%%

## Methodology
In order to decode the Datamatrix barcode, I first had to build a database of legitimate stamps diverse enough to permit analysis, which I gathered from two main sources:
- legally purchased physical stamps from Royal Mail post offices, and
- high-resolution images accessed online.

Taking images from the internet allowed me access to stamps that were only sold in regions far from me, rare, special or limited edition or high-value, and allowed me to expand the sample size across different release years, print batches, countries, events and stamp types.

I used a standard Datamatrix barcode reader app to decode the 2D codes and extract the raw strings they encoded.

By comparing the raw alphanumeric strings side-by-side and cross-referencing changes between them and their printed features, I was able to quickly map out the positional offsets representing several fields, including country origin codes, postal classes, printer batch IDs, unique serial numbers, face values and cryptographic signature hashes.

The purpose of at least one field remains unknown.

## Reverse engineering [...]
I started by
- googling other RM barcodes specifications and finding the RM Mailmark spec, whose 2D Type 29 resembled the code on the stamps
  - this allowed the immediate reverse engineering of the first four and the sixth charachters of the stamp barcode
    - the fifth character was specific to the 2D Code 29 MailMark specification and was different on the stamp barcode
  - also allowed for identification of the class of the stamp, supply chain ID and item ID
  - the remainder of the spec differs from the stamp barcode


<!-- ## Building a Verification Engine
Once the payload structure was fully mapped, I developed a stamp validation system that cross-references the digital payload against the physical features printed on the stamp.

Because a barcode string explicitly encodes attributes like the tariff class (e.g., 1st vs. 2nd class), issue date, and monetary value, any mismatch between what is printed in human-readable ink and what is stored inside the DataMatrix reveals a flaw. For instance:
- a physical 1st Class stamp whose DataMatrix indicates 2nd Class
- a batch or printer ID encoded in the DataMatrix that does not match the physical printing source
- reused, duplicated, or non-sequential serial numbers
- impossible or known wrong values, such as [...]

## Identifying Counterfeits in the Wild
To test the validation model, I analyzed publicly available images of stamps that had been flagged, rejected by automated sorting machines, or identified as suspected counterfeits online.

Applying the verification rules against these samples proved highly effective. The analysis revealed that many forged or counterfeit stamps rely on "cloned" DataMatrix codes—slapping a single valid, copied DataMatrix onto mass-printed fake stamps. While these fake stamps look convincing to the human eye, cross-checking their printed traits against their internal barcode data immediately exposes the discrepancy. -->

<!-- Recommended Structure for Your Paper
Title & Abstract
  Example Title: "An Analysis of Royal Mail's 2D DataMatrix Stamp Payload and Validation System"
  Abstract: A concise 150-word summary explaining what you did: scanned a sample set of lawfully purchased stamps, extracted the DataMatrix strings, mapped the positional fields (class, date, serial, signature), and analyzed how the system detects reuse.
Methodology
  Explain your process clearly: e.g., using open-source scanning tools (like zxing or a smartphone camera) to capture raw payload text from physical 1st and 2nd class stamps.
  State your sample size (e.g., "Analyzed a sample of 15 stamps purchased from a local Post Office").
Payload Breakdown & Mapping
  Present your findings using a clear field-mapping table (offset index, data type, description, example values).
  Highlight what you identified independently vs. what matches standard UPU (Universal Postal Union) or Mailmark data standards.
System Analysis (The "Digital Twin")
  Discuss how the static fields (value, date) and dynamic fields (unique serial number, cryptographic hash) interact to prevent reuse and counterfeiting.
Responsible Ethics & Legal Notice
  Include a short section confirming that all research was performed on legally purchased items, involved no access to private systems, and provides no actionable forgery tools. -->
