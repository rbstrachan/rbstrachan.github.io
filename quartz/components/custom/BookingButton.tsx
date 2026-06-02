// import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
//
// export default ((url: string) => {
//   const BookingButton: QuartzComponent = () => {
//     return null
//   }
//
//   BookingButton.afterDOMLoaded = `
//     (function() {
//       let isloading = false;
//
//       const initCalendar = () => {
//         const target = document.getElementById('calendar-target');
//         if (!target || isloading) return;
//
//         // If Google script isn't ready yet, wait and retry
//         if (!window.calendar || !window.calendar.schedulingButton) {
//           setTimeout(initCalendar, 200);
//           return;
//         }
//
//         // Check if button already exists to prevent duplicates
//         if (target.innerHTML !== '') return;
//
//         isloading = true;
//         try {
//           window.calendar.schedulingButton.load({
//             url: '${url}',
//             color: '#0B8043',
//             label: 'Book a Free Trial Lesson   →',
//             target,
//           });
//         } finally {
//           // Small delay before unlocking to allow Google to finish DOM injection
//           setTimeout(() => { isloading = false; }, 500);
//         }
//       };
//
//       // Handle Quartz SPA navigation
//       document.addEventListener('nav', initCalendar);
//
//       // Handle direct page load / Refresh
//       if (document.readyState === 'complete') {
//         initCalendar();
//       } else {
//         window.addEventListener('load', initCalendar);
//       }
//     })();
//   `
//
//   return BookingButton
// }) satisfies QuartzComponentConstructor


import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const BookingButton: QuartzComponent = () => {
    return null
  }

  // BookingButton.afterDOMLoaded = `
  //   (function() {
  //     let isloading = false;
  //
  //     const initCalendar = () => {
  //       const target = document.getElementById('calendar-target');
  //       if (!target || isloading) return;
  //
  //       // Force the browser to re-bind Google fonts by re-injecting the font stylesheet
  //       if (!document.getElementById('google-fonts-link')) {
  //         const fontLink = document.createElement('link');
  //         fontLink.id = 'google-fonts-link';
  //         fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap';
  //         fontLink.rel = 'stylesheet';
  //         document.head.appendChild(fontLink);
  //       }
  //
  //       if (!window.calendar || !window.calendar.schedulingButton) {
  //         setTimeout(initCalendar, 200);
  //         return;
  //       }
  //
  //       if (target.innerHTML !== '') return;
  //
  //       isloading = true;
  //       try {
  //         window.calendar.schedulingButton.load({
  //           url: '${url}',
  //           color: '#0B8043',
  //           label: 'Book a Free Trial Lesson   →',
  //           target,
  //         });
  //       } finally {
  //         setTimeout(() => { isloading = false; }, 500);
  //       }
  //     };
  //
  //     document.addEventListener('nav', () => {
  //       // We use a slightly longer delay on nav to ensure the SPA swap is 100% finished
  //       // before we ask the browser to paint a complex third-party button
  //       setTimeout(initCalendar, 150);
  //     });
  //
  //     if (document.readyState === 'complete') {
  //       initCalendar();
  //     } else {
  //       window.addEventListener('load', initCalendar);
  //     }
  //   })();
  // `

  BookingButton.afterDOMLoaded = `
      (function() {
        let isloading = false;

        const cleanupPreviousInstance = () => {
          const overlays = document.querySelectorAll('.hur54b');
          overlays.forEach(el => el.remove());

          if (window.gcal) {
            window.gcal.w = null;
          }
        };

        const initCalendar = () => {
          const target = document.getElementById('calendar-target');
          if (!target || isloading) return;

          if (!document.getElementById('google-fonts-link')) {
            const fontLink = document.createElement('link');
            fontLink.id = 'google-fonts-link';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap';
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);
          }

          if (!window.calendar || !window.calendar.schedulingButton) {
            setTimeout(initCalendar, 200);
            return;
          }

          cleanupPreviousInstance();
          target.innerHTML = '';

          isloading = true;
          try {
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1URo5yezRb6sQzMHIvA05qy_40LouUAb6EUIi5KxbR9q2WtCPTIGBuQX69QghFprY7LzRaEg-h?gv=true',
              color: '#0B8043',
              label: 'Book a Free Trial Lesson   →',
              target,
            });
          } catch (e) {
            console.error("GCal Load Error:", e);
          } finally {
            setTimeout(() => { isloading = false; }, 500);
          }
        };

        document.addEventListener('nav', () => {
          // Force the loading state to false so nav can trigger a fresh build
          isloading = false;
          setTimeout(initCalendar, 150);
        });

        if (document.readyState === 'complete') {
          initCalendar();
        } else {
          window.addEventListener('load', initCalendar);
        }
      })();
    `

  return BookingButton
}) satisfies QuartzComponentConstructor
