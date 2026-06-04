// quartz/components/AccessibilityPanel.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AccessibilityPanel: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div id="access-controls" className={displayClass} role="region" aria-label="Accessibility Preferences">
      <button className="controls-tab" aria-expanded="false" style="display: flex; align-items: center; gap: 8px;">
        {/* The Official Standing Accessibility Figure */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="5" r="1" />
          <path d="m9 20 3-6 3 6" />
          <path d="M6 8h12" />
          <path d="M12 8v6" />
        </svg>
        <span>Accessibility Settings</span>
      </button>
      <div className="controls-panel">
        <h3>Visuals</h3>

        {/* Toggle 1: Animations */}
        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-animations">Allow Animations & Interactivity</label>
            <p className="control-desc">Uncheck to completely disable background shaders, motion graphics and canvas and interactive elements.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-animations" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>

        {/* Toggle 2: Serif Mode */}
        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-serifMode">Eccentric Headers</label>
            <p className="control-desc">Changes headers to have an eccentric, high colour pixel art font.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-serifMode" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>

        {/* Toggle 3: Sans Mode */}
        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-sansMode">Dyslexia & Sans Serif</label>
            <p className="control-desc">Forces standard, clean sans-serif fonts optimized for high readability.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-sansMode" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>

        {/* Toggle 4: High Contrast */}
        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-highContrast">High Contrast Layout</label>
            <p className="control-desc">Maximizes color contrast ratios for low-vision support.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-highContrast" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>

        {/* Toggle 5: Custom Cursors */}
        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-customCursor">Allow Custom Cursors</label>
            <p className="control-desc">Uncheck to force the website to use your system cursors.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-customCursor" type="checkbox" defaultChecked />
            <span className="switch-slider"></span>
          </label>
        </div>

      </div>
    </div>
  )
}

// Attach the client-side JavaScript that listens to the toggles
AccessibilityPanel.afterDOMLoaded = `
  const container = document.getElementById("access-controls");
  if (container) {
    const tab = container.querySelector(".controls-tab");

    // Slide out interaction handler
    tab.addEventListener("click", () => {
      const isOpen = container.classList.toggle("open");
      tab.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    const toggles = [
      { id: "toggle-animations", bodyClass: "anim-off", invert: true },
      { id: "toggle-serifMode", bodyClass: "serif-mode", invert: false },
      { id: "toggle-sansMode", bodyClass: "sans-mode", invert: false },
      { id: "toggle-highContrast", bodyClass: "high-contrast", invert: false },
      { id: "toggle-customCursor", bodyClass: "cursor-off", invert: true }
    ];

    toggles.forEach(t => {
      const input = document.getElementById(t.id);
      if (!input) return;

      // Handle system default calculation for motion reduction
      if (t.id === "toggle-animations" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        input.checked = false;
        document.body.classList.add("anim-off");
      }

      input.addEventListener("change", () => {
        const applyClass = t.invert ? !input.checked : input.checked;
        document.body.classList.toggle(t.bodyClass, applyClass);

        // Mutually exclusive lock logic for Serif vs Dyslexia Sans modes
        if (t.id === "toggle-sansMode" && input.checked) {
          const serifInput = document.getElementById("toggle-serifMode");
          if (serifInput && serifInput.checked) {
            serifInput.checked = false;
            document.body.classList.remove("serif-mode");
          }
        } else if (t.id === "toggle-serifMode" && input.checked) {
          const sansInput = document.getElementById("toggle-sansMode");
          if (sansInput && sansInput.checked) {
            sansInput.checked = false;
            document.body.classList.remove("sans-mode");
          }
        }
      });
    });
  }
`

// Export component references for Quartz configuration pipelines
export default (() => AccessibilityPanel) as QuartzComponentConstructor
