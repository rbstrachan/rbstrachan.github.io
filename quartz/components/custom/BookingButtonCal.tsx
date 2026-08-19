import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const BookingButton: QuartzComponent = () => {
    return null
  }

  BookingButton.beforeDOMLoaded = `
    (function (C, A, L) {
      if (!document.getElementById('google-fonts-link')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'google-fonts-link';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
      }

      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          let api = function () { p(api, arguments); };
          let namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initLoadedNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", "trial", { origin: "https://cal.com" });
    Cal("init", "standard", { origin: "https://cal.com" });
    Cal("init", "audit", { origin: "https://cal.com" });

    if (!document.getElementById('tally-js')) {
      const tallyScript = document.createElement('script');
      tallyScript.id = 'tally-js';
      tallyScript.src = 'https://tally.so/widgets/embed.js';
      tallyScript.async = true;
      document.head.appendChild(tallyScript);
    }
  `

  BookingButton.afterDOMLoaded = `
    const setupCalAndTallyButtons = () => {
      const trialTarget = document.getElementById("book-trial-button");
      if (trialTarget) {
        trialTarget.innerHTML = "";
        const trialBtn = document.createElement("button");
        trialBtn.setAttribute("data-cal-namespace", "trial");
        trialBtn.setAttribute("data-cal-link", "reiwa/trial");
        trialBtn.setAttribute("data-cal-config", '{"layout":"month_view"}');
        trialBtn.className = "cal-embed-button";
        trialBtn.innerText = "Book a Free Trial Lesson    →";
        trialTarget.appendChild(trialBtn);

        if (window.Cal && window.Cal.ns && window.Cal.ns["trial"]) {
          window.Cal.ns["trial"]("ui", {
            styles: { branding: { brandColor: "#0b8043" } },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }
      }

      const standardTarget = document.getElementById("book-standard-lesson-button");
      if (standardTarget) {
        standardTarget.innerHTML = "";
        const standardBtn = document.createElement("button");
        standardBtn.setAttribute("data-cal-namespace", "standard");
        standardBtn.setAttribute("data-cal-link", "reiwa/standard");
        standardBtn.setAttribute("data-cal-config", '{"layout":"month_view"}');
        standardBtn.className = "cal-embed-button";
        standardBtn.innerText = "Book a Single Standard Lesson    →";
        standardTarget.appendChild(standardBtn);

        if (window.Cal && window.Cal.ns && window.Cal.ns["standard"]) {
          window.Cal.ns["standard"]("ui", {
            styles: { branding: { brandColor: "#0b8043" } },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }
      }

      const auditTargets = document.querySelectorAll(".book-audit-button");
      if (auditTargets.length > 0) {
        auditTargets.forEach((target) => {
          target.innerHTML = "";
          const auditBtn = document.createElement("button");
          auditBtn.setAttribute("data-cal-namespace", "audit");
          auditBtn.setAttribute("data-cal-link", "reiwa/audit");
          auditBtn.setAttribute("data-cal-config", '{"layout":"month_view"}');
          auditBtn.className = "cal-embed-button";
          auditBtn.innerText = "Book a Language Learning Progress Audit    →";
          target.appendChild(auditBtn);
        });

        if (window.Cal && window.Cal.ns && window.Cal.ns["audit"]) {
          window.Cal.ns["audit"]("ui", {
            styles: { branding: { brandColor: "#0b8043" } },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        }
      }

      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    // Run button setup on fresh page load
    setupCalAndTallyButtons();

    // Catch SPA transitions strictly ONCE, and ONLY for notes inside /tutoring/
    document.addEventListener("nav", () => {
      // Standardize path without trailing slashes
      const path = window.location.pathname.replace(/\\/$/, "");

      // True only for sub-paths like /tutoring/lessons, false for /tutoring
      const isSubNoteInTutoring = path.startsWith("/tutoring/") && path !== "/tutoring";

      if (isSubNoteInTutoring) {
        if (!sessionStorage.getItem("spa_reloaded")) {
          sessionStorage.setItem("spa_reloaded", "true");
          window.location.reload();
        } else {
          sessionStorage.removeItem("spa_reloaded");
        }
      }
    });
  `

  return BookingButton
}) satisfies QuartzComponentConstructor
