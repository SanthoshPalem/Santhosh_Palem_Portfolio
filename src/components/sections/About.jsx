import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
  const frontendskills = [
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  ];

  const backendskills = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express.js', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About
        </h2>

        {/* About Card */}
        <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hi, I’m Santhosh Palem — a passionate developer with skills in building dynamic web applications using modern
            frontend and backend technologies. I'm driven by curiosity, creativity, and the goal to build useful,
            beautiful digital experiences.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    <i className={tech.icon}></i> {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm flex items-center gap-2 hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(6,182,212,0.2)] transition"
                  >
                    <i className={tech.icon}></i> {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/5 backdrop-blur">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <strong>B.Tech in Computer Science</strong> @ Example University
              </li>
              <li>
                Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems
              </li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/5 backdrop-blur">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <p className="text-gray-400 text-sm space-y-1">
              <strong>Cybersecurity Intern</strong> @ Edunet Foundation<br />
              <strong>AI Developer Intern</strong> @ Example Company<br />
              July 2023 – Present
            </p>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
