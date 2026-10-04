---
title: launch weekend
description: This is a few short words on my submission to the [Hacktoberfest 2026 Weekend Challenge — Build for a Friend](https://dev.to/challenges/hacktoberfest-weekend-2026-10-01).
ai: assisted — written by a human with some assistance from AI (e.g. idea generation, finding typos, some code generation, minor edits, translations).
from: 2026-10-02
to: 2026-10-05
created: 2026-10-04
---

I built **nuançais**, a small and very basic proof-of-concept for a python-based English-French assistant created to help a French-speaking friend of mine learn and better understand nuanced English words and phrases.

My friend is a French native who is working with English-speaking colleagues on English-as-a-main-language projects. She is at an intermediate level in English and so already knows core grammar and vocabulary, but idioms, phrases and expressions are difficult for her.

Researching these phrases, as they often depend heavily on context, are not really translatable in the literal sense into French. On top of that, generic online translation tools force her to break her reading flow which is incredibly frustrating.

I think a dedicated helper that is always available on her desktop above her other apps to explain nuance in clear, plain, intermediate-level English (and French) will allow her to quickly and seamlessly verify her understanding without losing context or forgetting what she just read.

This project is only a proof of concept. It aims to provide an interactive cloud notebook (on Google Colab) where one can paste any tricky English snippet and in just a few seconds (please be patient!) get synchronised dual-language responses.

## Demo

Below is a screenshot processing an example phrase:

![screenshot of the UI running in Google Colab with an input field, run button, process status and an output with two tabs, one for English and the other for French](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/q9hvkrkc7347btatdmjw.png)

```text
(English Text Area)
"We need to wrap up this project by Friday so we don't end up back at square one."

("Explain Phrase" Button) → wait a few seconds

(English Tab)
Meaning: "Wrap up" means to complete or finish something, while "back at square one" means returning to the starting point.
Alternatives: "We need to finish this project by Friday so we don't have to restart."
Pronunciation: "Wrap" is pronounced /ræp/ (the 'w' is silent).

(Français Tab)
Sens: "Wrap up" signifie terminer ou finaliser quelque chose, et "back at square one" signifie recommencer depuis le début.
Alternatives: "We need to finish this project by Friday so we don't have to restart."
Prononciation: Le 'w' de "wrap" est muet (se prononce /ræp/).
```

## Code

See the code snippet on my [Hacktoberfest GitHub repo](https://github.com/rbstrachan/hacktoberfest/blob/3857f190e5506a33e3198915ec35157dc0ed5632/2026/launch-weekend.py).

## How I Built It

The functionality for this assistant comes from Llama 3.2 (1B) running locally via Ollama.

The Ollama daemon is initialised and loads the `llama3.2:1b` model. For this proof-of-concept, the "UI" is built using `ipywidgets`, but the full-fledged program would likely use `tkinter`. The model is asked to return a single JSON response containing English and French translations which are then parsed into the UI.

The pronunciation explanation from the model could be better. It currently attempts to provide a phonetic (IPA) transliteration of the word or phrase in question but this particular model seems incapable of doing so. Instead, it produces incomprehensible rubbish that has nothing to do with the input.

## Why Does Open Innovation Matter?

There are a few ways that open-source AI was beneficial to this project in ways that closed-source models would not have been.

There are no API keys, tokens or billing to worry about. It doesn't cost anything, which allows me to run infinite queries and have infinite debug and refactor attempts without the fear of hitting limits or costing myself hundreds. Also, it can be easily embedded into a projects runtime, like an `.exe` so that the person using it has nothing to install, setup or pay.

## Handing It Over

Unfortunately, this is only a proof-of-concept. I didn't have time to build the full thing and so did not hand this over to my friend to try. 