import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project Card Template */}
            {[
              {
                title: 'TaskLy',
                description:
                  'Developed a Taskly application to work collaborately on projects. we can create groups , we can add people in the groups and assign tasks to them.',
                tech: ['MongoDB', 'Express', 'React.js', 'Node.js'],
                link: 'https://github.com/SanthoshPalem/Taskly',
                demoLink: 'https://taskly-santhosh.netlify.app/'
              },
              {
                title: '💸 Finance & Expense Tracker',
                description:
                  'Developed a finance tracking app using the MERN stack to help users manage income, expenses, and budgets efficiently. Integrated real-time stock APIs and built a secure, responsive interface with dynamic data visualization.',
                tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stock API'],
                link: 'https://github.com/SanthoshPalem/Budget-Boss',
                demoLink: 'https://example.com/demo'
              },
              {
                title: '🎵 Music Application',
                description:
                  'Created a React-based music app with CRUD functionality. Users can add, listen to, search, and like songs. Used JSON for lightweight data handling and built a responsive, user-friendly UI.',
                tech: ['React.js', 'CSS'],
                link: 'https://github.com/SanthoshPalem/MUSIC-APPLICATION-using-REACT',
                demoLink: 'https://example.com/demo'
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                  >
                    View Project
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                  >
                    DemoLink
                  </a>
                </div>

              </div>
            ))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
