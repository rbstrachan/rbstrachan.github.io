---
draft: true
title: accessibility and performance
---
I am committed to making sure this website can be navigated and read by all. Accessibility is [[my philosophy of learning|an import part of how I design]], build and maintain this site to ensure the content provided here is easy to read, navigate and interact with regardless of how you access the web.

Impactful accessibility design is a continuous, iterative effort that takes shape%%word for "improves itself"%% over time. Because web standards and assistive technologies constantly evolve, my goal towards an absolutely accessible site — although simple — remains a work in progress.

I'm currently relying on [Lighthouse](https://developer.chrome.com/docs/lighthouse), an automated and open-source tool developed by Google, to help me monitor, maintain and transparently report my progress.

%% this section should be written better %%
## What do you mean by 'accessible'? What about performance?
I'm not an accessibility expert and as someone who has never experienced using the web with assistive technologies, I don't know what I don't know. Therefore, I try at all times to follow established accessibility guidelines such as the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) and [...].

To successfully implement these guidelines at a acceptable level requires paying particular attention to things like (among others) colour contrast, semantic HTML, keyboard navigation and clear, predictable structure. I also try to avoid unnecessary complexity when designing layout and keep code concise so that the experience remains fast and reliable.

Performance and accessibility are closely related%%source%%. A lightweight site tends to provide a better experience for everyone, especially on slower connections and older devices.

## My approach to comprehensive testing
To make sure I'm not relying on guesswork, I regularly test the site using well-regarded automated tools and manual checks.

As it turns out, testing for the *presence* of digital accessibility features is trivial. Determining how *impactful* those features will be for a given visitor is notoriously%%ref%% difficult%%ref%%. Although automated tools can help catch obvious issues, they are not perfect. To mitigate any unintentional side effects, I take advantage of several different, yet complimentary, services — such as Lighthouse and [...] — to ensure maximum coverage, reliability of results and compatibility with assistive devices and software.

I also spend a not insignificant amount of time navigating the site using nothing but my keyboard and a screen reader to better understand how to structure content for visitors who use assistive technologies.

Below you'll find some additional details about the automated services I use to test accessibility and performance across the site. This might be slightly boring, so feel free to [[accessibility#current-accessibility-scores|skip ahead to the test results]]!

> [!info]- Perfect practice makes perfect...
> I rerun these tests periodically as I build new features or update existing ones. The latest test scores can be found at the bottom this page. To ensure the usability of the site doesn't regress, I make a concerted effort not to make changes which, if published, would reduce the overall accessibility or performance.

### Google Lighthouse
Lighthouse evaluates a visitors user experience across several core accessibility standards, providing an automated score from 0 to 100 in four categories — performance, accessibility, best practices and search engine optimisation. Google have set the following thresholds, where a higher score is better:

* **90–100 (<small>PASS</small>):** The website successfully implements automated accessibility best practices with only minimal barriers and *should*[^caveat][^help] be widely usable.
* **50–89 (<small>DEFICIENT</small>):** The website is mostly functional but has some moderate barriers such as poor colour contrast or missing labels that may impact usability for some visitors.
* **0–49 (<small>FAIL</small>):** The website has critical barriers whose friction prevents the majority of users with assistive technologies from navigating, reading or interacting with content.

Read this site's latest [Lighthouse report](https://pagespeed.web.dev/analysis/https-reiwa-ca/f8lrpaxq6p?hl=en&form_factor=desktop), generated on June 1st, 2026.

%% THIS ENTIRE SECTION MUST BE REWRITTEN
## What is being tested
### Navigation and structure
Auditing the structure of the website and the ease of keyboard navigation ensures the site is fully keyboard-accessible via the `Tab` key. This means verifying a logical focus order so users can navigate the page in a predictable sequence, as well as providing bypass blocks like a "Skip to Content" link so keyboard and screen reader users can skip repetitive navigation menus entirely.

### ARIA and assistive technologies
Second, the tool evaluates operability with <abbr title="Accessibility Rich Internet Applications">ARIA</abbr> and assistive technologies. It checks for the proper use of ARIA roles and attributes so complex web components can accurately communicate their state to screen readers. It also verifies that form inputs have clearly associated labels so users know exactly what data is being requested.

### Visual and text alternatives
Finally, the audit measures visual and text alternatives. This includes checking that text elements maintain a clear colour contrast ratio against their backgrounds to remain readable for users with low vision. It also ensures that meaningful images contain descriptive alt text while decorative images are properly hidden, and confirms that the layout won't break or overlap when a user scales the text up to 200%.%%

## Continuous improvement and feedback
If you encounter any friction or accessibility barriers while browsing the site or have any questions or suggestions, please don't hesitate to [reach out](mailto:ross@reiwa.ca). If possible, please include a brief description of the issue and what you were using at the time, such as your device, browser or screen reader. I endeavour to reply to all inquiries within 24 hours and publish fixes for serious issues in 72 hours or less. Your feedback is [...].

<!-- ### Accessibility bounty
A bounty of up to £10 (US$15) per issue identified is claimable if you:
- discover any part of the website that is not accessible for any reason that I am not already aware of; or,
- provide a solution that resolves one or more of the existing accessibility or performance issues listed below.

Additionally, I will send you a pack of stickers free of charge as a token of my appreciation for your time and effort. I sincerely appreciate and am thankful for any and all feedback I receive about the experience visitors have on my site. -->

### Known accessibility and performance issues
%% This callout should be orange if there are minor issues and red if there are significant issues.
> [!check] Full steam ahead, cap'n!
> *There are currently no known accessibility or performance issues.*%%
> [!warning] Just a *wee* problem, cap'n...
> I'm currently aware of one moderate accessibility issue and two moderate performance issues.

- *Moderate* ・ The WCAG requires websites to be zoomable up to 200% without breaking the layout. *reiwa.ca* is only capable of displaying at 150% before the layout shifts so much it becomes impossible to navigate or read.
- *Moderate* ・ The first contentful paint — the point at which the first content is painted to the screen — is well over one second.
- *Moderate* ・ The cumulative layout shift — how much content moves around as the page loads — is above the allowable threshold for users with visual accessibility requirements.

## Current accessibility scores
The performance score, especially for mobile devices, is quite poor due mainly to long initial loading times, slow updating and large layout shifts. Accessibility, especially on mobile devices, could be better. Notable, the mobile version has several important accessibility problems such as missing aria labels, low contrast ratios and missing landmarks.

### Desktop[^screen]
<div class="lighthouse-container">
  <div class="gauge-wrapper">
    <div class="gauge average" data-score="81">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Performance</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge pass" data-score="94">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Accessibility</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge pass" data-score="100">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Best Practices</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge pass" data-score="100">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">SEO</div>
  </div>
</div>

### Mobile
> [!fail] Houston, we've got a problem...
> The mobile version of the website currently **does not meet minimum performance and accessibility requirements** and is therefore not recommended.

<div class="lighthouse-container">
  <div class="gauge-wrapper">
    <div class="gauge fail" data-score="37">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Performance</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge average" data-score="83">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Accessibility</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge pass" data-score="100">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">Best Practices</div>
  </div>

  <div class="gauge-wrapper">
    <div class="gauge pass" data-score="100">
      <svg class="gauge-svg" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="gauge-base" cx="60" cy="60" r="56"></circle>
        <circle class="gauge-arc" cx="60" cy="60" r="56"></circle>
      </svg>
      <div class="gauge-text"></div>
    </div>
    <div class="gauge-label">SEO</div>
  </div>
</div>

<script>
  // Compute dasharray and text from data-score for all gauges
  (function () {
    const CIRC = 2 * Math.PI * 56; // circumference for r=56 (~351.858)

    document.querySelectorAll('.gauge[data-score]').forEach(gauge => {
      const score = parseFloat(gauge.dataset.score) || 0;
      const filled = CIRC * score / 100;
      const gap = CIRC - filled;

      const arc = gauge.querySelector('.gauge-arc');
      if (arc) {
        arc.setAttribute('stroke-dasharray', filled.toFixed(3) + ', ' + gap.toFixed(3));
        arc.setAttribute('transform', 'rotate(-88 60 60)');
      }

      const text = gauge.querySelector('.gauge-text');
      if (text) {
        text.textContent = score;
      }
    });
  })();
</script>

[^caveat]: While I aim for the highest score possible, I recognise that automated testing is only a proxy for real-world accessibility. Passing an automated test does not guarantee with absolute certainty that every user will be able to interact with the site without issue. True confidence requires manual testing with screen readers and keyboard-only navigation.
[^help]: If you can help manually test the accessibility of this site in any way I would love to hear from you. I would be more than happy to compensate you for your time. Please [email me](mailto:ross@reiwa.ca) to discuss arrangements. Subject to necessity.
[^screen]: Desktop scores apply only to devices with a minimum screen width of 768px. Devices with a screen width less than that are considered mobile devices.
