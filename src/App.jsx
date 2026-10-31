import { useEffect, useRef, useState } from 'react'
import { LANGS, content, links } from './content'

const STORAGE_KEY = 'portfolio-lang'
const FADE_MS = 160

const readLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGS.includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

const Section = ({ label, children }) => (
  <section className="section">
    <h2 className="label">{label}</h2>
    <div className="section-body">{children}</div>
  </section>
)

export default function App() {
  const [lang, setLang] = useState(readLang)
  const [fading, setFading] = useState(false)
  const timer = useRef(null)
  const t = content[lang]
  const swap = fading ? 'swap is-fading' : 'swap'

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.title
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable: the language just won't persist
    }
  }, [lang, t.title])

  useEffect(() => () => clearTimeout(timer.current), [])

  const changeLang = (code) => {
    if (code === lang) return
    clearTimeout(timer.current)
    setFading(true)
    timer.current = setTimeout(() => {
      setLang(code)
      setFading(false)
    }, FADE_MS)
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="corner tl">
          <h1 className="name">
            Héctor
            <br />
            Álvarez Pérez
          </h1>
          <p className={`intro ${swap}`}>{t.intro}</p>
        </div>

        <div className="corner tr">
          <nav className="langs" aria-label="Language">
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => changeLang(code)}
                aria-pressed={code === lang}
                className={code === lang ? 'lang is-active' : 'lang'}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>

        <p className="corner bl contact-links">
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </p>

        <p className="corner br">
          <span className="label">Haddock</span>
          <span className="hero-role">{t.role}</span>
        </p>
      </section>

      <main className={swap}>
        <Section label={t.sections.work}>
          {t.work.map((job) => (
            <article className="row job" key={job.company}>
              <div className="job-head">
                <h3 className="job-company">{job.company}</h3>
                <span className="meta">{job.period}</span>
              </div>
              <p className="job-role">{job.role}</p>
              <ul className="points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {job.links && (
                <p className="job-links">
                  {job.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </p>
              )}
            </article>
          ))}
        </Section>

        <Section label={t.sections.projects}>
          {t.projects.map((p) => (
            <a className="row project" key={p.name} href={p.href} target="_blank" rel="noreferrer">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </Section>

        <Section label={t.sections.education}>
          <div className="row">
            <div className="job-head">
              <h3 className="job-company">{t.education.school}</h3>
              <span className="meta">{t.education.period}</span>
            </div>
            <p className="job-role">{t.education.degree}</p>
          </div>
        </Section>

        <Section label={t.sections.contact}>
          <div className="contact-body">
            <span className="contact-intro">{t.contactIntro}</span>
            <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </Section>
      </main>
    </div>
  )
}
