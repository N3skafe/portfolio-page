import { useRef, useState } from 'react'
import { AboutSection } from './components/AboutSection.tsx'
import { ContactSection } from './components/ContactSection.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { LocaleProvider } from './components/LocaleProvider.tsx'
import { ProjectDialog } from './components/ProjectDialog.tsx'
import { ProjectsSection } from './components/ProjectsSection.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import type { ProjectId } from './data/projects.ts'
import { useLocale } from './hooks/useLocale.ts'

export default function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </LocaleProvider>
  )
}

function Portfolio() {
  const { locale, messages } = useLocale()
  const [projectId, setProjectId] = useState<ProjectId | null>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)

  return (
    <>
      <a className="skip" href="#content">
        {messages.skip}
      </a>
      <p className="sr-only" aria-live="polite">
        {messages.language.name[locale]}
      </p>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <ProjectsSection
          onOpen={(id, opener) => {
            openerRef.current = opener
            setProjectId(id)
          }}
        />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectDialog
        projectId={projectId}
        openerRef={openerRef}
        onClose={() => setProjectId(null)}
      />
    </>
  )
}
