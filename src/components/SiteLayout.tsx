'use client'

import { ReactNode } from 'react'
import Hero from './Hero'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Instagram, Linkedin, Github } from 'lucide-react';

const sectionIds = ['about', 'experience', 'projects']

export default function SiteLayout({ children }: { children: ReactNode }) {
  // ✅ Hook must be called inside component body
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="flex min-h-screen">
      {/* Left sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[35%] fixed h-screen justify-between px-6 py-20 pl-28">

        <div className="flex flex-col gap-3">
          <Hero />

          <nav className="flex flex-col gap-6 mt-20 text-sm font-medium">
            {sectionIds.map((id) => (
              <a
              key={id}
  href={`#${id}`}
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className={`group relative pl-16 transition-all duration-300 ${
    activeSection === id
      ? 'text-white font-semibold'
      : 'text-slate-400 hover:text-white'
  }`}
>

  <span
    className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] transition-all duration-300 ${
      activeSection === id
        ? 'w-14 bg-white'
        : 'w-10 bg-slate-400 group-hover:w-14 group-hover:bg-white'
    }`}
    aria-hidden
  />
  <span
    className={`inline-block transition-all duration-300 ${
      activeSection === id
        ? 'translate-x-1 scale-105'
        : 'group-hover:translate-x-1 group-hover:scale-105'
    }`}
  >
    {id.charAt(0).toUpperCase() + id.slice(1)}
  </span>
</a>

            ))}
          </nav>
        </div>


                <div className="flex gap-5 text-slate-500">
  <a
    href="https://github.com/kdonahue72"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-purple-400"
  >
    <Github className="w-5 h-5" />
  </a>
  <a
    href="https://www.linkedin.com/in/kyle-donahue/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-purple-400"
  >
    <Linkedin className="w-5 h-5" />
  </a>
  <a
    href="https://www.instagram.com/dr.kylejdonahue/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-purple-400"
  >
    <Instagram className="w-5 h-5" />
  </a>
</div>

        </aside>

      {/* Right scrollable content */}
      <main className="w-full lg:ml-[30%] px-6 pt-10 pb-24 scroll-smooth">
  {children}

  <div className="mt-8 text-xs text-slate-500 text-center">
  Designed and built by me using Next.js, TypeScript, and Tailwind CSS. Deployed with Vercel.
</div>

</main>
    </div>
  )
}
