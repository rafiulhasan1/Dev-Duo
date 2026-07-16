import React from 'react';

const MemberTwo = () => {
    const member = members[1];
    return (
        <div className="bg-slate-950 text-white min-h-screen pt-24">
        
              {/* Hero */}
              <section className="max-w-7xl mx-auto px-6 py-12">
        
                <div className="grid lg:grid-cols-2 gap-10 items-center">
        
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-3xl w-full max-w-md mx-auto shadow-xl"
                  />
        
                  <div>
        
                    <h1 className="text-5xl font-bold">
                      {member.name}
                    </h1>
        
                    <h3 className="text-cyan-400 text-2xl mt-4">
                      {member.role}
                    </h3>
        
                    <p className="text-gray-300 leading-8 mt-8">
                      {member.about}
                    </p>
        
                    <div className="flex gap-5 mt-8 text-3xl">
        
                      <a href={member.github}>
                        <FaGithub />
                      </a>
        
                      <a href={member.linkedin}>
                        <FaLinkedin />
                      </a>
        
                      <a href={member.facebook}>
                        <FaFacebook />
                      </a>
        
                    </div>
        
                  </div>
        
                </div>
        
              </section>
        
              {/* Skills */}
        
              <section className="max-w-7xl mx-auto px-6 py-16">
        
                <h2 className="text-4xl font-bold mb-10">
                  Skills
                </h2>
        
                <div className="flex flex-wrap gap-4">
        
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-cyan-600 px-5 py-3 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
        
                </div>
        
              </section>
        
              {/* Experience */}
        
              <section className="max-w-7xl mx-auto px-6 py-16">
        
                <h2 className="text-4xl font-bold mb-10">
                  Experience
                </h2>
        
                {member.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 p-6 rounded-xl mb-5"
                  >
                    <h3 className="text-2xl font-bold">
                      {exp.company}
                    </h3>
        
                    <p className="text-cyan-400">
                      {exp.role}
                    </p>
        
                    <p>{exp.year}</p>
                  </div>
                ))}
        
              </section>
        
              {/* Education */}
        
              <section className="max-w-7xl mx-auto px-6 py-16">
        
                <h2 className="text-4xl font-bold mb-10">
                  Education
                </h2>
        
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 p-6 rounded-xl"
                  >
                    <h3 className="text-2xl">
                      {edu.degree}
                    </h3>
        
                    <p>{edu.institute}</p>
        
                    <p>{edu.year}</p>
        
                  </div>
                ))}
        
              </section>
        
              {/* Projects */}
        
              <section className="max-w-7xl mx-auto px-6 py-20">
        
                <h2 className="text-4xl font-bold mb-10">
                  Projects
                </h2>
        
                <div className="grid md:grid-cols-2 gap-8">
        
                  {member.projects.map((project, index) => (
        
                    <div
                      key={index}
                      className="bg-slate-900 rounded-2xl overflow-hidden"
                    >
        
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-56 object-cover"
                      />
        
                      <div className="p-6">
        
                        <h3 className="text-2xl font-bold">
                          {project.name}
                        </h3>
        
                        <p className="text-cyan-400 mt-2">
                          {project.tech}
                        </p>
        
                        <div className="flex gap-4 mt-6">
        
                          <a
                            href={project.live}
                            className="bg-cyan-500 px-5 py-2 rounded-lg"
                          >
                            Live
                          </a>
        
                          <a
                            href={project.github}
                            className="border px-5 py-2 rounded-lg"
                          >
                            GitHub
                          </a>
        
                        </div>
        
                      </div>
        
                    </div>
        
                  ))}
        
                </div>
        
              </section>
        
            </div>
    );
};

export default MemberTwo;