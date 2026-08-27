import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { LanguageGate, TranslateButton } from '@/components/language-gate';
import { LanguageProvider } from '@/lib/i18n';

import Home from '@/routes/index';
import About from '@/routes/about';
import Programs from '@/routes/programs';
import Enroll from '@/routes/enroll';

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
        <TranslateButton />
        <LanguageGate />
        <Toaster />
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
