// quartz/components/AccessibilityPanel.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AccessibilityPanel: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div id="access-controls" className={displayClass} role="region" aria-label="Accessibility Preferences">
      <button className="controls-tab" aria-expanded="false" style="display: flex; align-items: center; gap: 8px;">
        {/* The Official Standing Accessibility Figure */}
        <svg width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="none" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM17.8316 8.65559C18.0218 9.11481 17.8037 9.64128 17.3445 9.83147L14.0157 11.2101C13.9556 11.6215 13.8512 12.0313 13.7606 12.3875L13.7601 12.3893L13.737 12.48C13.6079 12.9885 13.5056 13.4149 13.4741 13.7872L15.6717 17.5457C15.9226 17.9748 15.7782 18.526 15.3491 18.7769C14.92 19.0278 14.3688 18.8833 14.1179 18.4543L12.0477 14.9138H11.8858L9.88863 18.4432C9.64384 18.8758 9.09471 19.028 8.66211 18.7833C8.22951 18.5385 8.07727 17.9893 8.32206 17.5567L10.4515 13.7936C10.4189 13.4046 10.3053 12.9932 10.1595 12.4993L10.1314 12.4044C10.0264 12.0508 9.90316 11.6353 9.83545 11.2023L6.6438 9.82644C6.18735 9.62967 5.97684 9.10013 6.17361 8.64368C6.37038 8.18723 6.89992 7.97672 7.35637 8.17349L10.87 9.6882H12.9863L16.6557 8.16846C17.1149 7.97826 17.6414 8.19636 17.8316 8.65559ZM12.0714 8.85714C12.8604 8.85714 13.5 8.21755 13.5 7.42857C13.5 6.63959 12.8604 6 12.0714 6C11.2825 6 10.6429 6.63959 10.6429 7.42857C10.6429 8.21755 11.2825 8.85714 12.0714 8.85714Z" fill="currentColor"></path> </g></svg>
        <span>Accessibility Settings</span>
      </button>
      <div className="controls-panel">
        <h3>Visuals</h3>

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

      {/*<div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-serifMode">Eccentric Headers</label>
            <p className="control-desc">Changes headers to have an eccentric, high colour pixel art font.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-serifMode" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>

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

        <div className="control-group-toggle">
          <div className="control-text-meta">
            <label htmlFor="toggle-highContrast">High Contrast Layout</label>
            <p className="control-desc">Maximizes color contrast ratios for low-vision support.</p>
          </div>
          <label className="switch-ui">
            <input id="toggle-highContrast" type="checkbox" />
            <span className="switch-slider"></span>
          </label>
        </div>*/}

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
