// import { gsap } from "gsap"
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
//
// gsap.registerPlugin(ScrambleTextPlugin)
//
// // Letter-to-letter (Grade 1 basic) mapping: a-z only
// const brailleLetterMap: Record<string, string> = {
//   a: "⠁",
//   b: "⠃",
//   c: "⠉",
//   d: "⠙",
//   e: "⠑",
//   f: "⠋",
//   g: "⠛",
//   h: "⠓",
//   i: "⠊",
//   j: "⠚",
//   k: "⠅",
//   l: "⠇",
//   m: "⠍",
//   n: "⠝",
//   o: "⠕",
//   p: "⠏",
//   q: "⠟",
//   r: "⠗",
//   s: "⠎",
//   t: "⠞",
//   u: "⠥",
//   v: "⠧",
//   w: "⠺",
//   x: "⠭",
//   y: "⠽",
//   z: "⠵",
// }
//
// function brailleForChar(ch: string): string | null {
//   // Don’t scramble whitespace
//   if (!ch || /\s/.test(ch)) return null
//
//   const lower = ch.toLowerCase()
//   return brailleLetterMap[lower] ?? null
// }
//
// function splitToChars(p: HTMLElement) {
//   // Don’t double-split if it runs twice
//   if (p.querySelector(":scope > .char")) {
//     return Array.from(p.querySelectorAll<HTMLElement>(":scope > .char"))
//   }
//
//   const text = p.textContent ?? ""
//   p.textContent = ""
//
//   const frag = document.createDocumentFragment()
//   const spans: HTMLElement[] = []
//
//
//
//   for (const ch of text) {
//     // Treat all whitespace as "do not scramble"
//     const isWhitespace = /\s/.test(ch)
//
//     const span = document.createElement("span")
//     span.className = "char"
//     if (isWhitespace) span.classList.add("whitespace")
//
//     // For any whitespace, render as NBSP so it never collapses
//     const rendered = isWhitespace ? "\u00A0" : ch
//     span.textContent = rendered
//     span.dataset.content = rendered
//
//     frag.appendChild(span)
//     spans.push(span)
//   }
//
//   p.appendChild(frag)
//   return spans
// }
//
// function num(v: string | undefined, fallback: number) {
//   const n = Number(v)
//   return Number.isFinite(n) ? n : fallback
// }
//
// const blocks = document.querySelectorAll<HTMLElement>("[data-braille-scramble]")
//
// blocks.forEach((root) => {
//   const p = root.querySelector<HTMLElement>("p")
//   if (!p) return
//
//   const radius = num(root.dataset.radius, 100)
//   const duration = num(root.dataset.duration, 1.2)
//   const speed = num(root.dataset.speed, 0.5)
//   const scrambleChars = root.dataset.scrambleChars ?? ".:"
//
//   const chars = splitToChars(p)
//
//   root.addEventListener("pointermove", (e: PointerEvent) => {
//     for (const c of chars) {
//       if (c.classList.contains("whitespace")) continue
//
//       const { left, top, width, height } = c.getBoundingClientRect()
//       const dx = e.clientX - (left + width / 2)
//       const dy = e.clientY - (top + height / 2)
//       const dist = Math.hypot(dx, dy)
//
//       if (dist < radius) {
//         const original = c.dataset.content || ""
//         const braille = brailleForChar(original)
//
//         gsap.to(c, {
//           overwrite: true,
//           duration: duration * (1 - dist / radius),
//           scrambleText: {
//             text: original,
//             // If it's a letter, use only its corresponding braille cell while scrambling.
//             // Otherwise fall back to whatever you set in data-scramble-chars / default.
//             chars: braille ?? scrambleChars,
//             speed,
//           },
//           ease: "none",
//         })
//       }
//     }
//   })
// })

// V2
// import { gsap } from "gsap"
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
//
// gsap.registerPlugin(ScrambleTextPlugin)
//
// // Letter-to-letter (Grade 1 basic) mapping: a-z only
// const brailleLetterMap: Record<string, string> = {
//   a: "⠁",
//   b: "⠃",
//   c: "⠉",
//   d: "⠙",
//   e: "⠑",
//   f: "⠋",
//   g: "⠛",
//   h: "⠓",
//   i: "⠊",
//   j: "⠚",
//   k: "⠅",
//   l: "⠇",
//   m: "⠍",
//   n: "⠝",
//   o: "⠕",
//   p: "⠏",
//   q: "⠟",
//   r: "⠗",
//   s: "⠎",
//   t: "⠞",
//   u: "⠥",
//   v: "⠧",
//   w: "⠺",
//   x: "⠭",
//   y: "⠽",
//   z: "⠵",
// }
//
// function brailleForChar(ch: string): string | null {
//   if (!ch || /\s/.test(ch)) return null
//   const lower = ch.toLowerCase()
//   return brailleLetterMap[lower] ?? null
// }
//
// /**
//  * Splits the <p> into:
//  *   <span class="word"> ... <span class="char">H</span> ... </span>
//  * separated by whitespace text nodes.
//  *
//  * This prevents wrapping in the middle of words, but still allows wrapping between words.
//  */
// function splitToChars(p: HTMLElement) {
//   // Don’t double-split if it runs twice
//   if (p.querySelector(".char")) {
//     return Array.from(p.querySelectorAll<HTMLElement>(".char"))
//   }
//
//   const text = p.textContent ?? ""
//   p.textContent = ""
//
//   const frag = document.createDocumentFragment()
//   const spans: HTMLElement[] = []
//
//   // Split into "words and whitespace" tokens, keeping the whitespace tokens
//   const tokens = text.split(/(\s+)/)
//
//   for (const token of tokens) {
//     if (!token) continue
//
//     // Whitespace token: append as a normal text node so wrapping works naturally
//     if (/^\s+$/.test(token)) {
//       frag.appendChild(document.createTextNode(token))
//       continue
//     }
//
//     // Word token: wrap in a no-wrap container
//     const word = document.createElement("span")
//     word.className = "word"
//
//     for (const ch of token) {
//       const span = document.createElement("span")
//       span.className = "char"
//       span.textContent = ch
//       span.dataset.content = ch
//       word.appendChild(span)
//       spans.push(span)
//     }
//
//     frag.appendChild(word)
//   }
//
//   p.appendChild(frag)
//   return spans
// }
//
// function num(v: string | undefined, fallback: number) {
//   const n = Number(v)
//   return Number.isFinite(n) ? n : fallback
// }
//
// const blocks = document.querySelectorAll<HTMLElement>("[data-braille-scramble]")
//
// blocks.forEach((root) => {
//   const p = root.querySelector<HTMLElement>("p")
//   if (!p) return
//
//   const radius = num(root.dataset.radius, 100)
//   const duration = num(root.dataset.duration, 1.2)
//   const speed = num(root.dataset.speed, 0.5)
//   const scrambleChars = root.dataset.scrambleChars ?? ".:"
//
//   const chars = splitToChars(p)
//
//   root.addEventListener("pointermove", (e: PointerEvent) => {
//     for (const c of chars) {
//       const original = c.dataset.content || ""
//       if (!original || /\s/.test(original)) continue
//
//       const { left, top, width, height } = c.getBoundingClientRect()
//       const dx = e.clientX - (left + width / 2)
//       const dy = e.clientY - (top + height / 2)
//       const dist = Math.hypot(dx, dy)
//
//       if (dist < radius) {
//         const braille = brailleForChar(original)
//
//         gsap.to(c, {
//           overwrite: true,
//           duration: duration * (1 - dist / radius),
//           scrambleText: {
//             text: original,
//             // If it's a letter, use only its corresponding braille cell while scrambling.
//             // Otherwise fall back to whatever you set in data-scramble-chars / default.
//             chars: braille ?? scrambleChars,
//             speed,
//           },
//           ease: "none",
//         })
//       }
//     }
//   })
// })


import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

function dotsToBraille(dots: string): string {
  let mask = 0
  for (const ch of dots) {
    const d = ch.charCodeAt(0) - 48
    if (d < 1 || d > 8) continue
    mask |= 1 << (d - 1)
  }
  return String.fromCodePoint(0x2800 + mask)
}

const brailleDotsMap: Record<string, string> = {
  a: "1",
  b: "12",
  c: "14",
  d: "145",
  e: "15",
  f: "124",
  g: "1245",
  h: "125",
  i: "24",
  j: "245",
  k: "13",
  l: "123",
  m: "134",
  n: "1345",
  o: "135",
  p: "1234",
  q: "12345",
  r: "1235",
  s: "234",
  t: "2345",
  u: "136",
  v: "1236",
  w: "2456",
  x: "1346",
  y: "13456",
  z: "1356",
  ",": "2",
  "'": "3",
  "-": "36",
  ".": "256",
}

function brailleForChar(ch: string): string | null {
  if (!ch || /\s/.test(ch)) return null
  const lower = ch.toLowerCase()
  const dots = brailleDotsMap[lower]
  return dots ? dotsToBraille(dots) : null
}

function splitToChars(p: HTMLElement) {
  if (p.querySelector(".char")) {
    return Array.from(p.querySelectorAll<HTMLElement>(".char"))
  }

  const text = p.textContent ?? ""
  p.textContent = ""

  const frag = document.createDocumentFragment()
  const spans: HTMLElement[] = []

  const tokens = text.split(/(\s+)/)

  for (const token of tokens) {
    if (!token) continue

    if (/^\s+$/.test(token)) {
      frag.appendChild(document.createTextNode(token))
      continue
    }

    const word = document.createElement("span")
    word.className = "word"

    for (const ch of token) {
      const span = document.createElement("span")
      span.className = "char"
      span.textContent = ch
      span.dataset.content = ch
      word.appendChild(span)
      spans.push(span)
    }

    frag.appendChild(word)
  }

  p.appendChild(frag)
  return spans
}

function num(v: string | undefined, fallback: number) {
  const n = Number(v)
  return Number.isFinite(n) ? n : fallback
}

function initBrailleScramble(root: ParentNode = document) {
  const blocks = root.querySelectorAll<HTMLElement>(
    "[data-braille-scramble]:not([data-braille-scramble-init])",
  )

  blocks.forEach((block) => {
    const p = block.querySelector<HTMLElement>("p")
    if (!p) return

    block.dataset.brailleScrambleInit = "true"

    const radius = num(block.dataset.radius, 100)
    const duration = num(block.dataset.duration, 1.2)
    const speed = num(block.dataset.speed, 0.5)
    const scrambleChars = block.dataset.scrambleChars ?? ".:"

    const chars = splitToChars(p)

    block.addEventListener("pointermove", (e: PointerEvent) => {
      for (const c of chars) {
        const original = c.dataset.content || ""
        if (!original || /\s/.test(original)) continue

        const { left, top, width, height } = c.getBoundingClientRect()
        const dx = e.clientX - (left + width / 2)
        const dy = e.clientY - (top + height / 2)
        const dist = Math.hypot(dx, dy)

        if (dist < radius) {
          const braille = brailleForChar(original)

          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: original,
              chars: braille ?? scrambleChars,
              speed,
            },
            ease: "none",
          })
        }
      }
    })
  })
}

initBrailleScramble()

document.addEventListener("nav", () => initBrailleScramble())

let scheduled = false
const observer = new MutationObserver(() => {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(() => {
    scheduled = false
    initBrailleScramble()
  })
})
observer.observe(document.body, { childList: true, subtree: true })
