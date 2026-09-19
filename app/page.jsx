import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import ProjectsList from '@/components/ProjectsList';
import SkillsList from '@/components/SkillsList';
import WorkExperience from '@/components/WorkExperience';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <About />
        <ProjectsList />
        <SkillsList />
        <Certifications />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
