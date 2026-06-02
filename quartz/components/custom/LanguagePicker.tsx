import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function LanguagePicker({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`lang-picker-container ${displayClass ?? ""}`}>
      <button class="lang-button" aria-label="Change Language" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>
      </button>
      <ul class="lang-menu">
        <li><button data-lang="en">English</button></li>
        <li><button data-lang="fr">Français</button></li>
        <li><button data-lang="ja">日本語</button></li>
      </ul>

      <script dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener("nav", () => {
          document.querySelectorAll('.lang-menu button').forEach(btn => {
            btn.onclick = (e) => {
              const newLang = e.target.getAttribute('data-lang');
              const path = window.location.pathname;
              let parts = path.split('/').filter(p => p !== '');
              const langIndex = parts.findIndex(p => ['fr', 'ja'].includes(p));

              if (newLang === 'en') {
                if (langIndex !== -1) parts.splice(langIndex, 1);
              } else {
                if (langIndex !== -1) {
                  parts[langIndex] = newLang;
                } else {
                  parts.unshift(newLang);
                }
              }
              window.location.href = '/' + parts.join('/') + (parts.length > 0 ? '/' : '');
            };
          });
        });
      `}} />
    </div>
  )
}

export default (() => LanguagePicker) satisfies QuartzComponentConstructor