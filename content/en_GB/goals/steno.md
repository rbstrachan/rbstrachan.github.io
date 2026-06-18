---
title: stenography
aliases:
  - stenography
tags:
  - skill/typing
---
<!-- I WOULD LIKE TO HAVE A PAGE WITH A FLAT-ART STYLE STENO KEYBOARD WHERE YOU CAN TYPE TEXT IN ENGLISH AND THE KEYBOARD ANIMATES THE KEYS YOU HAVE TO PRESS TO TYPE THAT WORD OUT, SHOWING THE OUTPUT. SEE OPEN STENO PROJECT WEBSITE FOR SOMETHING SIMILAR. ALSO IF SOMEONE USES A STENO KEYBOARD ON THE WEBSITE, THE KEYBOARD SHOULD REACT EXACTLY WITH THEY KEYS THEY ARE PRESSING. -->

<!-- a horizontal "string" progress bar across the page that starts at 0wpm and goes up to 240 wpm with a dot at my current speed. it should also have landmarks speeds show for average QWERTY type speed, fast querty type speed, speed of speech, professional steno speed, etc. should also mention the amount of time I have been learning steno, etc. -->

<style>
.steno-minimal {
  width: 100%;
  <!-- margin: 0px;
  padding-bottom: 20px; -->
}

.steno-bar-container {
  position: relative;
  width: 100%;
  height: 3px;
  background: #ccc;
  margin: 20px 0 50px 0;
}

.dark-theme .steno-bar-container {
  background: #555;
}

.steno-dot {
  position: absolute;
  left: calc((3 / 250) * 100%);
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background: #8aa1ff;
  border-radius: 50%;
}

.qwerty-dot {
  position: absolute;
  left: calc((90 / 250) * 100%);
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background: #7acb7a;
  border-radius: 50%;
}

.steno-landmark {
  position: absolute;
  top: 2px;
  width: 2px;
  height: 16px;
  background: #ccc;
}

.dark-theme .steno-landmark {
  background: #777;
}

.steno-landmark-label {
  position: absolute;
  top: 25px;
  transform: translateX(-50%);
  font-size: 12px;
  text-align: center;
  color: #999;
  white-space: nowrap;
  line-height: 1.2;
}

.dark-theme .steno-landmark-label {
  color: #777;
}

.steno-info {
  text-align: center;
  <!-- margin-top: 70px; -->
  font-size: 16px;
  color: #666;
}

.dark-theme .steno-info {
  color: #888;
}
</style>

Stenography is the art of shorthand writing[^old] using a purpose-made [chorded keyboard](https://www.opensteno.org/) to capture the spoken word in real time at speeds often exceeding 200 words per minute.

Unlike a standard QWERTY keyboard where you type letter by letter, a stenographer depresses multiple keys simultaneously to spell out entire words, syllables or phrases in a single stroke.

## My progress
I only recently started learning [the theory behind steno](https://opensteno.org/learn-plover/home.html) and haven't really practiced at all yet, so my writing speed is abysmally slow.

<div class="steno-minimal">
<div class="steno-info">
CURRENT AVERAGE SPEEDS   →   STENO <strong>3 WPM</strong>   •   QWERTY <strong>90 WPM</strong>
</div>

<div class="steno-bar-container">
<div class="steno-dot"></div>
<div class="qwerty-dot"></div>

<div class="steno-landmark" style="left: 0%; transform: translate(0%, -50%);"></div>
<div class="steno-landmark" style="left: 100%; transform: translate(0%, -50%);"></div>

<!-- Landmarks -->
<div class="steno-landmark" style="left: calc((40 / 250) * 100%);">
<div class="steno-landmark-label"><b>40</b><br><span class="small-caps">average QWERTY</span></div>
</div>
<div class="steno-landmark" style="left: calc((80 / 250) * 100%);">
<div class="steno-landmark-label"><b>80</b><br><span class="small-caps">fast QWERTY</span></div>
</div>
<div class="steno-landmark" style="left: calc((150 / 250) * 100%);">
<div class="steno-landmark-label"><b>150</b><br><span class="small-caps">speed of speech</span></div>
</div>
<div class="steno-landmark" style="left: calc((225 / 250) * 100%);">
<div class="steno-landmark-label"><b>225</b><br><span class="small-caps">professional steno                             </span></div>
</div>
<div class="steno-landmark" style="left: calc((240 / 250) * 100%);">
<div class="steno-landmark-label"><b>240</b><br><span class="small-caps">        my goal</span></div>
</div>
</div>
</div>

[^old]: The practice of stenography is not new — in fact, it was used as far back as ancient Rome, where Cicero's secretary invented the [Tironian notes](https://en.wikipedia.org/wiki/Tironian_notes) to record speeches in the Senate. In the days before modern technology became widespread (and to a much lesser degree today) stenography was, quite literally, systems of *written* shorthand (e.g. Gregg; Pitman) that used symbols and particular strokes of the pen to write words and phrases as quickly as one could speak them. The mechanical chorded keyboards that have become ubiqutous today were not patented until the late 19th century.
