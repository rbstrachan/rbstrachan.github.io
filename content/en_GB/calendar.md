---
cssclasses: no-dropcap-no-smallcaps
---

Use the calendar below to keep up-to-date with projects I'm currently working on, training I'm undertaking, events I'm partaking in and other key dates. Click on any event to find out more on why I'm participating, what I'll be working on during the project and links to relevant write-ups or repos.

> [!question] Calendar not loading? Please try refreshing the page!
<br>
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js'></script>

<div id='calendar'></div>

<script>
  document.addEventListener('nav', () => {
    var calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridYear'
        },
        firstDay: 1,
        events: [
            // OCTOBER 2026
            {
                title: 'Hacktoberfest (HF) 2026',
                start: '2026-10-01',
                end: '2026-11-01',
                color: '#598d82',
                // url: '/code/hacktoberfest'
            },
            {
                title: 'Future of AI Course',
                start: '2026-10-02',
                color: '#85ad59',
                url: 'goals/courses/ai-future'
            },
            {
                title: 'HF DEV Launch Weekend Challenge',
                start: '2026-10-02',
                end: '2026-10-05',
                color: '#3d5f58'
            },
            {
                title: 'HF DEV Challenge: Week 1',
                start: '2026-10-05',
                end: '2026-10-12',
                color: '#3d5f58'
            },
            {
                title: 'MLH Global Hack Week — Hacktoberfest',
                start: '2026-10-09',
                end: '2026-10-16',
                color: '#b37d00',
                // url: '/goals'
            },
            {
                title: 'HF DEV Challenge: Week 2',
                start: '2026-10-12',
                end: '2026-10-19',
                color: '#3d5f58'
            },
            {
                title: 'HF DEV Challenge: Week 3',
                start: '2026-10-19',
                end: '2026-10-26',
                color: '#3d5f58'
            },
            {
                title: 'HF DEV Challenge: Week 4',
                start: '2026-10-26',
                end: '2026-11-01',
                color: '#3d5f58'
            },
            {
                title: 'Renegade Bindery Typeset Exchange',
                start: '2026-09-28',
                end: '2026-11-21',
                color: '#b22f07',
                // url: '/projects'
            },
            // NOVEMBER 2026
            {
                title: 'MLH Global Hack Week — Builder\'s Week',
                start: '2026-11-06',
                end: '2026-11-13',
                color: '#b37d00'
            },
            // DECEMBER 2026
            {
                title: 'Advent of Code 2026',
                start: '2026-12-01',
                end: '2026-12-13',
                color: '#036f0a'
            },
            {
                title: 'MLH Global Hack Week — Open Source Week',
                start: '2026-12-04',
                end: '2026-12-11',
                color: '#b37d00'
            }
        ]
    });
    calendar.render();
  });
</script>