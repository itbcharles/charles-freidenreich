import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import ProjectSticky from '@/components/ProjectSticky';
import ProjectHScroll from '@/components/ProjectHScroll';
import WritingGrid from '@/components/WritingGrid';
import Outdoors from '@/components/Outdoors';
import AboutContact from '@/components/AboutContact';
import { getAllPosts } from '@/lib/writing';

const argusSteps = [
  {
    title: 'Problem',
    description: 'Long-form web research is slow and noisy. Manual research lacks consistency and coverage verification.'
  },
  {
    title: 'Approach',
    description: 'Planner → crawler → coverage gate → report pipeline with cached runs and automated evaluation systems.'
  },
  {
    title: 'Result',
    description: 'Cut research time by ~55% while producing consistent, comprehensive briefs across diverse topics.'
  }
];

const zenoSlides = [
  {
    title: 'Problem',
    description: 'Cold outreach lacks feedback loops and systematic optimization. High bounce rates and low visibility into what works.'
  },
  {
    title: 'Approach',
    description: 'Tracked sends + engagement scoring + intelligent throttling. CSV-driven sequencer with automatic deduplication.'
  },
  {
    title: 'Implementation',
    description: 'Python-based system with IMAP/SMTP integration and PostgreSQL tracking. Direct Sheets API for campaign management.'
  }
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Header />
      <Hero />
      <Impact />
      
      <section id="tech" className="py-24 bg-gray-soft">
        <div className="container-custom space-y-32">
          <ProjectSticky
            title="Argus"
            subtitle="Deep Research Agent"
            steps={argusSteps}
            result="Cut manual research time by ~55%; produced consistent Y-quality briefs for X topics."
            stack="Python, OpenAI/Claude, browser automation, vector store"
            githubUrl="https://github.com/charlesfreidenreich/argus"
            demoUrl="https://argus-demo.example.com"
          />
          
          <ProjectHScroll
            title="Zeno"
            subtitle="Email Tracking & Sending"
            slides={zenoSlides}
            result="Reply rate +18%; bounces -42% across N campaigns."
            stack="Python, IMAP/SMTP, Postgres/Sheets"
            githubUrl="https://github.com/charlesfreidenreich/zeno"
          />
        </div>
      </section>

      <WritingGrid posts={posts} />
      <Outdoors />
      <AboutContact />
    </main>
  );
}
