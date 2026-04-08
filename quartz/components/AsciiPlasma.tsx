import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AsciiPlasma: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <canvas
      id="ascii-bg"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    ></canvas>
  )
}

AsciiPlasma.afterDOMLoaded = `
(function () {
  const existingCanvas = document.getElementById('ascii-bg-persistent');
  if (existingCanvas) {
    const newCanvas = document.getElementById('ascii-bg');
    if (newCanvas) newCanvas.remove(); // Remove the duplicate created by the new page
    return;
  }

  const canvas = document.getElementById('ascii-bg');
  if (!canvas) return;

  canvas.id = 'ascii-bg-persistent';
  document.documentElement.appendChild(canvas); // Move outside the body

  const ctx = canvas.getContext('2d');
  const FS = 14;
  const CW = FS * 0.62;
  const CHARS = ' ·.:;+|*#%@█';

  let t = 0;
  let W, H, cols, rows;

  function plasma(c, r) {
    const x = c * 0.18;
    const y = r * 0.22;
    const cx = cols * 0.09;
    const cy = rows * 0.11;
    const d = Math.sqrt((c - cx) * (c - cx) + (r - cy) * (r - cy));
    return (
      Math.sin(x + t) +
      Math.sin(y + t * 0.7) +
      Math.sin((x + y) * 0.6 + t * 0.9) +
      Math.sin(d * 0.28 + t * 1.1)
    ) / 4;
  }

  function init() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;

    canvas.width = W * dpr;   // Physical pixels
    canvas.height = H * dpr;  // Physical pixels
    ctx.scale(dpr, dpr);      // Normalize coordinates so your math still works

    cols = Math.floor(W / CW);
    rows = Math.floor(H / FS);
    ctx.font = \`\${FS}px 'SF Mono','Fira Code',Consolas,monospace\`;
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    ctx.font = \`\${FS}px 'SF Mono','Fira Code',Consolas,monospace\`;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const v = plasma(c, r);
        const norm = (v + 1) / 2;
        const idx = Math.floor(norm * (CHARS.length - 1));
        const ch = CHARS[idx];
        if (ch === ' ') continue;

        const intensity = Math.sin(norm * Math.PI);
        const op = intensity * 0.55;
        if (op < 0.006) continue;

        ctx.fillStyle = \`rgba(74,222,128,\${op.toFixed(3)/2})\`;
        ctx.fillText(ch, c * CW, (r + 1) * FS);
      }
    }

    t += 0.016;
    requestAnimationFrame(frame);
  }

  init();
  window.addEventListener('resize', init);
  frame();
})();
`

export default (() => AsciiPlasma) satisfies QuartzComponentConstructor
