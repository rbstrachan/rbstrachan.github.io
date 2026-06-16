---
draft: false
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
  left: calc((5 / 250) * 100%);
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

<div class="steno-minimal">
<div class="steno-info">
CURRENT STENO SPEED <strong>5 WPM</strong>   •   CURRENT QWERTY SPEED <strong>90 WPM</strong>
</div>

<div class="steno-bar-container">
<div class="steno-dot"></div>
<div class="qwerty-dot"></div>

<div class="steno-landmark" style="left: 0%; transform: translate(0%, -50%);"></div>
<div class="steno-landmark" style="left: 100%; transform: translate(0%, -50%);"></div>

<!-- Landmarks -->
<div class="steno-landmark" style="left: calc((40 / 250) * 100%);">
<div class="steno-landmark-label"><b>40</b><br>average QWERTY</div>
</div>
<div class="steno-landmark" style="left: calc((80 / 250) * 100%);">
<div class="steno-landmark-label"><b>80</b><br>average QWERTY</div>
</div>
<div class="steno-landmark" style="left: calc((150 / 250) * 100%);">
<div class="steno-landmark-label"><b>150</b><br>average QWERTY</div>
</div>
<div class="steno-landmark" style="left: calc((225 / 250) * 100%);">
<div class="steno-landmark-label"><b>225</b><br>average QWERTY</div>
</div>
<div class="steno-landmark" style="left: calc((240 / 250) * 100%);">
<div class="steno-landmark-label"><b>240</b><br>average QWERTY</div>
</div>
</div>
</div>

Stenography is [...].
