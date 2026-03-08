This website is authored in [Obsidian](https://obsidian.md), converted into a static single-page application using [Quartz](https://quartz.jzhao.xyz/), routed through [Cloudflare](https://www.cloudflare.com/) and published via [GitHub Pages](https://docs.github.com/pages).

## Interactive Backgrounds
The site features a series of interactive background animations[^custom], including [[keys|bouncing keys]], [[voronoi|Voronoi tesselation]], [[boids|boids flocking]] and a [[slime|Physarum slime simulation]][^intense]. Users may jump from one animation to another in the order listed above using the dedicated button located in the bottom right corner of the screen.<!-- If the interactive backgrounds are distracting or cause discomfort, they can be completely disabled by [...]. -->

## Typography and Fonts
Regarding typography, the headers are in the [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) font family, the body text is rendered in [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+3), and the code blocks are displayed in [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), served via [Google Fonts](https://fonts.google.com/).

## Accessibility
<!--Accessibility is an important tenet of my [[philosophy of learning]].-->
This website aims to conform to the [Web Content Accessibility Guidelines 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) Level AA (Acceptable) or better[^tested] to maintain compliance with various international accessibility frameworks and legal standards.[^international] <!-- and other international accessibility standards for colour contrast and readability.-->

## Privacy
This site does not use cookies, trackers or analytics of any kind. Your IP address may be collected by Cloudflare for their own analytical and DDOS-protection purposes, however this is outside my control and the analytics information is only accessible in the aggregate.[^ip]

## License and Copyright
The pages of this website and their content are licensed under [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). The technical framework and source code are derivative works of an MIT-licensed project and are therefore themselves licensed under the [MIT License](https://opensource.org/licenses/MIT).

[^custom]: The interactive backgrounds are custom-coded p5.js sketches running in `Instance Mode`. See individual animation pages for links to the source code.
[^intense]: This animation simulates thousands of individual Physarum objects and their movements simultaneously inside a p5.js canvas object, which is quite resource-intensive. Viewing this animation may slow down your computer significantly or cause the page to crash. I'm working on optimising the code so that it runs smoother. Apologies in advance!
[^international]: This includes conformity with the aforementioned [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) as well [ATAG 2.0](https://www.w3.org/TR/ATAG20/), which serves as the basis for meeting legal accessibility requirements under the UK Equality Act, ADA Title III (USA), AODA (Canada), EN 301 549 (EU), and other regional frameworks such as the Australian DDA and Israeli Standard 5568.
[^tested]: Tested using tools from the [World Wide Web Consortium](https://www.w3.org/)'s [Web Accessibility Initiative](https://www.w3.org/WAI/)'s [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/), including automated contrast checkers and manual keyboard navigation audits.
[^ip]: That is to say, the Cloudflare dashboard may show three unique visitors from the United States on a given day, but no identifying information or individual IP addresses are disclosed.
