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
  `
  BookingButton.afterDOMLoaded = `
    const setupCalButton = () => {
      const target = document.getElementById("calendar-target");
      if (!target) return;

      target.innerHTML = "";

      const button = document.createElement("button");
      button.setAttribute("data-cal-namespace", "trial");
      button.setAttribute("data-cal-link", "reiwa/trial");
      button.setAttribute("data-cal-config", '{"layout":"month_view"}');
      button.className = "cal-embed-button";
      button.innerText = "Book a Free Trial Lesson   →";

      target.appendChild(button);

      if (window.Cal && window.Cal.ns && window.Cal.ns["trial"]) {
        window.Cal.ns["trial"]("ui", {
          styles: { branding: { brandColor: "#0b8043" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      }
    };

    document.addEventListener("nav", setupCalButton);
  `

  return BookingButton
}) satisfies QuartzComponentConstructor
