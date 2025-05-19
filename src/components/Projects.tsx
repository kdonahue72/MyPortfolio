// src/app/components/Projects.tsx
'use client';

import Image from 'next/image';

const projects = [
  {
    name: 'Medical Admit Predictor',
    description: 'Predicts hospital admissions using clinical data inputs. Seeking to bridge the gap of admission style pay from insurance to hospital.',
    image: '/medapp2.png', // update with your actual path
    href: 'https://github.com/kdonahue72?tab=repositories',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'PostgreSQL'],
  },
  {
    name: 'Flexify App (in progress)',
    description: 'AI-powered workout tracker and planner. Flexify seeks to solve the pain point of taking the first step to fitness and wellness.',
    image: '/flexifymodel.png', // update with your actual path
    href: '', // Not clickable
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'OpenAI API', 'PostgreSQL'],
  },
  {
    name: 'Portfolio Website',
    description: 'This portfolio you\'re looking at. The inside look on clinician and health tech PMs approach to various strategies and implementations. Developed by me.',
    image: '/portsite1.PNG', // update with your actual path
    href: 'https://github.com/yourusername/portfolio-site',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel']
,
  },
  {
    name: 'Dr. Kyle Donahue\'s Blog',
    description: 'This blog explores the gaps in Western medical practice, overlooked conditions, and the patient experience. I write from the perspective of a clinician turned health and tech strategist, focused on how tech and AI can solve what healthcare often misses.',
    image: '/portsite.png', // update with your actual path
    href: '', // Not clickable
    tags: ['my.Brain'],
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-8 px-10 sm:px-12">
      <h2 className="text-3xl font-bold text-white mb-8"></h2>
      <div
  className="grid grid-cols-1 sm:grid-cols-2 ml-auto group"
  style={{
    width: '700px',
    marginLeft: '163px',
    columnGap: '30px',
    rowGap: '4px',
  }}
>


        {projects.map((project, index) => {
          const clickable = !!project.href;
          const Wrapper = clickable ? 'a' : 'div';

          return (
            <Wrapper
  key={index}
  href={clickable ? project.href : undefined}
  target="_blank"
  rel="noopener noreferrer"
  className={`group/card block w-[380px] h-[400px] scale-[0.8] -mb-8 rounded-xl border border-neutral-800 p-6 transition duration-300 bg-[#0c0c15] hover:bg-[#1c1c2b] ${
    clickable ? 'cursor-pointer' : 'cursor-default'
  } 
  group-hover:opacity-60 group-hover:blur-sm 
  group-hover:grayscale 
  hover:!opacity-100 hover:!blur-none hover:!grayscale-0`}
>

  {/* 👇 START: Replace this block */}
  <div className="relative w-full h-[160px] overflow-hidden rounded-md mb-4 border border-neutral-700">
  <Image
    src={project.image}
    alt={`${project.name} preview`}
    className={`object-fill w-full h-full transition duration-300 ${
      project.comingSoon ? 'blur-sm brightness-50' : ''
    }`}
    width={500}
    height={500}
  />
  {project.comingSoon && (
    <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold animate-pulse bg-black/30 backdrop-blur-sm">
      Coming Soon
    </div>
  )}
</div>


  {/* 👇 Add this block right here */}
  {project.tags && (
  <div className="flex flex-wrap gap-2 mb-3">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300"
      >
        {tag}
      </span>
    ))}
  </div>
)}


  {/* Then the title and description */}
  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition">
    {project.name}
  </h3>
  <p className="text-sm text-neutral-400">{project.description}</p>
</Wrapper>

          );
        })}
        
      </div>
    </section>
  );
}
