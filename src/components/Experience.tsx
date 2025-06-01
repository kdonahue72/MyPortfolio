export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-8 sm:px-12 md:px-7 py-10">
      

      {/* Wrap all job cards in a parent group */}
      <div className="group space-y-6 mb-12">
        {/* Job 1 */}
        <a
          href="https://www.logistyx.com"
          target="_blank"
          rel="noreferrer"
          className="group/card block rounded-lg border border-transparent hover:text-purple-400 hover:bg-slate-900/40 p-6 transition group-hover:opacity-50 hover:!opacity-100"
        >
          <p className="text-white font-medium group-hover/card:text-purple-400 transition">
            Project Manager – Logistyx Technologies
          </p>
          <p className="text-sm text-slate-400 mb-2">Aug 2021 – Jan 2024 / Hybrid (St. Louis)</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Managed multiple client accounts, driving a 20% increase in customer retention through proactive support.</li>
            <li>Led cross-functional coordination to streamline project workflows, reducing onboarding time by 25%.</li>
            <li>Launched marketing campaigns and upsells that increased product adoption by 30%.</li>
          </ul>
        </a>

        {/* Job 2 */}
        <a
          href="https://www.logistyx.com"
          target="_blank"
          rel="noreferrer"
          className="group/card block rounded-lg border border-transparent hover:text-purple-400 hover:bg-slate-900/40 p-6 transition group-hover:opacity-50 hover:!opacity-100"
        >
          <p className="text-white font-medium group-hover/card:text-purple-400 transition">
           Intern Project Manager – Logistyx Technologies 
          </p>
          <p className="text-sm text-slate-400 mb-2">May 2018 - May 2020 / Remote</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Supported client account management and multi-project coordination, improving retention by 15%.</li>
            <li>Streamlined onboarding and vendor workflows, cutting onboarding time by 20%.</li>
            <li>Executed targeted marketing campaigns that boosted product trials by 25%.</li>
          </ul>
        </a>

        {/* Job 3 */}
        <a
          href="https://www.mittlerbros.com"
          target="_blank"
          rel="noreferrer"
          className="group/card block rounded-lg border border-transparent hover:text-purple-400 hover:bg-slate-900/40 p-6 transition group-hover:opacity-50 hover:!opacity-100"
        >
          <p className="text-white font-medium group-hover/card:text-purple-400 transition">
            Project Manager – Mittler Brothers Machine & Tool
          </p>
          <p className="text-sm text-slate-400 mb-2">June 2020 – July 2021 / St. Louis</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Drove a 25% revenue increase via targeted sponsor outreach and marketing campaigns.</li>
            <li>Coordinated race-day sponsor activations and produced marketing materials that enhanced visibility by 20%.</li>
            <li>Managed project timelines and communications, strengthening long-term partnerships.</li>
          </ul>
        </a>

        {/* Job 4 */}
        <a
          href="https://missouristate.edu"
          target="_blank"
          rel="noreferrer"
          className="group/card block rounded-lg border border-transparent hover:text-purple-400 hover:bg-slate-900/40 p-6 transition group-hover:opacity-50 hover:!opacity-100"
        >
          <p className="text-white font-medium group-hover/card:text-purple-400 transition">
            Physio Rotations I–VI
          </p>
          <p className="text-sm text-slate-400 mb-2">May 2024 – April 2025 / Midwest</p>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Delivered personalized care and coordinated treatment plans across interdisciplinary teams.</li>
            <li>Maintained strong patient relationships and evidence-based practices to enhance outcomes.</li>
          </ul>
        </a>
      </div>

      {/* Education & Certifications */}
      <div className="mb-10 px-5">
        <h3 className="text-xl font-semibold text-purple-400 mb-2"></h3>
        <ul className="text-slate-300 space-y-1">
          <li>
            🎓 <a href="https://missouristate.edu" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
              Doctor of Physical Therapy — Missouri State University, Springfield (2023–2025)
            </a>
          </li>
          <li>
            🎓 <a href="https://maryville.edu" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
              B.S. in Information Technology — Maryville University, St. Louis (2016–2020)
            </a>
          </li>
          <li>📜 PMP Certification — 2024–2025</li>
        </ul>
      </div>
<div className="md:px-6 pt-14 pb-0">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-1 text-white hover:text-purple-400 transition text-med"
  >
    View full résumé
    <span
      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-400"
    >
      ↗
    </span>
  </a>
</div>


      
    </section>
  )
}
