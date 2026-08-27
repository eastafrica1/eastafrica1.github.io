import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

import { useI18n } from '@/lib/i18n';
import { logo } from '@/assets/images';

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Eastern Africa International College logo"
            width={280}
            height={175}
            loading="lazy"
            className="h-28 w-auto object-contain"
          />
          <h2 className="mt-4 font-display text-lg font-bold">Eastern Africa International College</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{t('footer.about')}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            {t('footer.explore')}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: '/', key: 'nav.home' },
              { to: '/about', key: 'nav.about' },
              { to: '/programs', key: 'nav.programs' },
              { to: '/enroll', key: 'nav.enroll' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-sky">
            {t('footer.contact')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-rose" />
              Jigjiga Kebele 06, Around EX IRC Building, Jijiga, Ethiopia
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand-green" />
              <a href="tel:+251915074900" className="hover:text-foreground">
                +251 91 507 4900
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-sky" />
              <a href="mailto:easternafrica.jigjigacampus@gmail.com" className="break-all hover:text-foreground">
                easternafrica.jigjigacampus@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 border-t border-border px-4 py-5 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eastern Africa International College. {t('footer.rights')}
        </p>
        <a
          href="https://fikrado2.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Powered by Fikrado Security"
          className="group inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-black/90 px-3 py-2 text-left shadow-[0_0_24px_rgba(245,158,11,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/80 hover:shadow-[0_0_34px_rgba(245,158,11,0.55)]"
        >
          <img
            src="/images/logo.jpg"
            alt="Fikrado Security logo"
            width={48}
            height={48}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-amber-400/50 transition-all duration-300 group-hover:ring-2 group-hover:ring-amber-300 group-hover:brightness-110"
          />
          <span className="pr-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300 transition-colors group-hover:text-amber-200">
            Powered by Fikrado Security
          </span>
        </a>
      </div>
    </footer>
  );
}
