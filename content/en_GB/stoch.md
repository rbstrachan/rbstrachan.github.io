---
draft: true
title: KBYS stoch quiz
description: Probability-based Japanese kanji reading certification via Kotoba Discord bot.
---

The **KBYS stoch quiz** is a stochastic kanji reading proficiency test administered through the Kotoba Discord bot, certifying minimum reading knowledge with ~99% statistical confidence.[^1]

%% ADD FURIGANA TO NAME %%
Developed by [黒羽 勇星]() (Kurobane Yuusei), the test addresses limitations of traditional frequency-based quizzes by sampling readings according to immersion-based "kanji burden" models.[^2]

## Test Levels
Each level requires obtaining a minimum number of correct answers without giving a maximum number of incorrect answers on %%hardcore%% quizzes (no duplicates, daily unique questions) using custom stochastic parameters.

| Level | Points Required (Accuracy) | Min. Readings (Kanji) | JLPT Proxy |
|------:|----------------------------|-----------------------|------------|
| 1     | 15 (48.4%)                | 89 (78)              | N5         |
| 2     | 40 (44.0%)                | 296 (249)            | N4         |
| 3     | 40 (54.8%)                | 819 (625)            | N3         |
| 4     | 50 (56.2%)                | 1445 (1005)          | N2         |
| 5     | 60 (61.2%)                | 2372 (1509)          |            |
| 6     | 70 (61.9%)                | 3585 (2015)          | N1         |
| 7     | 95 (63.3%)                | 4952 (2540)          |            |
| 8     | 100 (62.1%)               | 6274 (3064)          |            |
| 9     | 110 (67.9%)               | 7666 (3659)          |            |
| 10    | 135 (69.9%)               | 9082 (4287)          |            |
| 11    | 150 (76.1%)               | 10526 (5051)         |            |
| 12    | 180 (81.1%)               | 11983 (5822)         |            |
| 13    | 200 (83.7%)               | 13434 (6631)         |            |
| 14    | 200 (86.6%)               | 14820 (7442)         |            |
| 15    | 200 (95.2%)               | 16930 (8726)         |            |

## Level Descriptions
### Level 1
Certifies 89 readings across 78 kanji at 48.4% accuracy (15/31 correct). Establishes baseline beyond JLPT N5.
### Level 2  
Certifies 296 readings across 249 kanji at 44.0% accuracy (40/91 correct). Approaches JLPT N4 scope.
### Level 3
Certifies 819 readings across 625 kanji at 54.8% accuracy (40/73 correct). Matches JLPT N3 kanji coverage.
### Level 4
Certifies 1445 readings across 1005 kanji at 56.2% accuracy (50/89 correct). Exceeds JLPT N2 requirements.
### Level 5
Certifies 2372 readings across 1509 kanji at 61.2% accuracy (60/98 correct). Covers daily media requirements.
### Level 6
Certifies 3585 readings across 2015 kanji at 61.9% accuracy (70/113 correct). Encompasses JLPT N1 (~2000 kanji).
### Level 7
Certifies 4952 readings across 2540 kanji at 63.3% accuracy (95/150 correct). Major immersion milestone.
### Level 8
Certifies 6274 readings across 3064 kanji at 62.1% accuracy (100/161 correct). Approaches educated native range.
### Level 9
Certifies 7666 readings across 3659 kanji at 67.9% accuracy (110/162 correct). Rare non-native achievement.
### Level 10
Certifies 9082 readings across 4287 kanji at 69.9% accuracy (135/193 correct). Exceeds typical high school native.
### Level 11
Certifies 10526 readings across 5051 kanji at 76.1% accuracy (150/197 correct). Exceptional proficiency depth.
### Level 12
Certifies 11983 readings across 5822 kanji at 81.1% accuracy (180/222 correct). Beyond standard native ability.
### Level 13
Certifies 13434 readings across 6631 kanji at 83.7% accuracy (200/239 correct). Extreme proficiency level.
### Level 14
Certifies 14820 readings across 7442 kanji at 86.6% accuracy (200/231 correct). Elite certification tier.
### Level 15
Certifies 16930 readings across 8726 kanji at 95.2% accuracy (200/210 correct). Pinnacle achievement.

## Test Commands

| Level | Kotoba Command |
|-------|----------------|
| 1 | `k!quiz stochs0(15.000%)+stochs1(69.000%)+stochl2(16.000%) 15 mmq=16 hardcore nd dauq=1` |
| 2 | `k!quiz stochs0(2.845%)+stochs1(18.323%)+stochs2(48.331%)+stochs3(20.258%)+stochl2(3.035%)+stochl3(3.414%)+stochl4(3.794%) 40 mmq=51 hardcore nd dauq=1` |
| 3 | `k!quiz stochs1(4.061%)+stochs2(17.302%)+stochs3(40.855%)+stochs4(20.539%)+stochl3(2.119%)+stochl4(5.885%)+stochl5(9.239%) 40 mmq=33 hardcore nd dauq=1` |
| 4 | `k!quiz stochs2(4.769%)+stochs3(16.891%)+stochs4(25.474%)+stochs5(18.511%)+stochs6(14.752%)+stochl4(2.433%)+stochl5(6.112%)+stochl6(11.058%) 50 mmq=39 hardcore nd dauq=1` |
| 5 | `k!quiz stochs3(6.099%)+stochs4(10.363%)+stochs5(21.723%)+stochs6(27.698%)+stochs7(16.024%)+stochl5(3.586%)+stochl6(8.305%)+stochl7(6.202%) 60 mmq=38 hardcore nd dauq=1` |
| 6 | `k!quiz stochs4(3.851%)+stochs5(9.095%)+stochs6(16.727%)+stochs7(20.128%)+stochs8(20.885%)+stochs9(14.481%)+stochl6(5.016%)+stochl7(4.794%)+stochl8(5.023%) 70 mmq=43 hardcore nd dauq=1` |
| 7 | `k!quiz stochs6(7.169%)+stochs7(14.931%)+stochs8(20.141%)+stochs9(20.171%)+stochs10(15.974%)+stochs11(11.100%)+stochl7(3.082%)+stochl8(4.199%)+stochl9(3.233%) 95 mmq=55 hardcore nd dauq=1` |
| 8 | `k!quiz stochs6(3.387%)+stochs7(6.718%)+stochs8(13.592%)+stochs9(13.613%)+stochs10(14.014%)+stochs11(13.912%)+stochs12(15.355%)+stochs13(13.631%)+stochl8(3.052%)+stochl9(2.726%) 100 mmq=61 hardcore nd dauq=1` |
| 9 | `k!quiz stochs7(4.281%)+stochs8(9.899%)+stochs9(14.299%)+stochs10(13.740%)+stochs11(11.691%)+stochs12(11.183%)+stochs13(13.364%)+stochs14(15.280%)+stochl9(3.475%)+stochl10(2.788%) 110 mmq=52 hardcore nd dauq=1` |
| 10 | `k!quiz stochs8(5.357%)+stochs9(12.382%)+stochs10(13.658%)+stochs11(13.558%)+stochs12(10.375%)+stochs13(11.513%)+stochs14(14.176%)+stochs15(13.850%)+stochl10(3.103%)+stochl11(2.028%) 135 mmq=58 hardcore nd dauq=1` |
| 11 | `k!quiz stochs8(5.539%)+stochs9(9.145%)+stochs10(14.121%)+stochs11(15.887%)+stochs12(12.516%)+stochs13(11.904%)+stochs14(13.680%)+stochs15(13.219%)+stochl11(2.305%)+stochl12(1.684%) 150 mmq=47 hardcore nd dauq=1` |
| 12 | `k!quiz stochs8(4.812%)+stochs9(9.268%)+stochs10(12.404%)+stochs11(13.260%)+stochs12(15.403%)+stochs13(13.921%)+stochs14(13.865%)+stochs15(13.397%)+stochl12(2.133%)+stochl13(1.537%) 180 mmq=42 hardcore nd dauq=1` |
| 13 | `k!quiz stochs8(4.256%)+stochs9(5.902%)+stochs10(8.101%)+stochs11(10.053%)+stochs12(15.386%)+stochs13(19.700%)+stochs14(15.767%)+stochs15(16.589%)+stochl13(2.330%)+stochl14(1.916%) 200 mmq=39 hardcore nd dauq=1` |
| 14 | `k!quiz stochs8(2.407%)+stochs9(3.709%)+stochs10(4.773%)+stochs11(8.529%)+stochs12(15.412%)+stochs13(18.572%)+stochs14(21.801%)+stochs15(22.342%)+stochl14(1.547%)+stochl15(0.908%) 200 mmq=31 hardcore nd dauq=1` |
| 15 | `k!quiz stochs8(2.021%)+stochs9(3.502%)+stochs10(4.808%)+stochs11(9.545%)+stochs12(11.413%)+stochs13(16.367%)+stochs14(21.208%)+stochs15(28.127%)+stochl14(1.299%)+stochl15(1.710%) 200 mmq=10 hardcore nd dauq=1` |

## Methodology
Kanji burden represents expected exposure time for each reading under Zipfian word frequencies (1/rawfreq weighting) from Jiten datasets. Readings are learned after 3 exposures; kanji reading requires all components.[^3] Stochastic sampling uses Weibull calibration correlating burden with frequency bands (`stochs0–15` represent increasing difficulty).[^4] Hardcore mode enforces `nd` (no duplicates) and `dauq=1` (daily unique questions).
## Datasets
- **Jiten**: Global frequency lists (https://jiten.moe/other)
- **JMdictFurigana**: Reading-annotated dictionary (https://github.com/Doublevil/JmdictFurigana)
## Certification Process
Passing certificates issued upon verified completion under fair conditions. Level 6+ passers receive free sticker packs.
## Development
MIT License © 2025 黒羽 勇星 (Kurobane Yuusei). Contact via Discord for questions.

[^1]: Original test specification  
[^2]: Kotoba Discord bot documentation  
[^3]: Jiten frequency methodology  
[^4]: Weibull burden calibration model
