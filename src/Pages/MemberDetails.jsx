import { Link, useParams } from "react-router-dom";
import members from "../data/members";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

const MemberDetails = () => {
  const { slug } = useParams();

  const member = members.find((item) => item.slug === slug);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl font-bold">Member Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white">

      {/* Hero Section */}

      <section className="pt-28 pb-20 px-5">

        <div className="max-w-7xl mx-auto">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-10"
          >
            <FaArrowLeft />
            Back Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div className="flex justify-center">

              <img
                src={member.image}
                alt={member.name}
                className="w-full max-w-md rounded-3xl shadow-2xl border border-slate-700"
              />

            </div>

            {/* Content */}

            <div>

              <p className="text-cyan-400 uppercase tracking-widest">

                Portfolio

              </p>

              <h1 className="text-5xl md:text-6xl font-black mt-4">

                {member.name}

              </h1>

              <h3 className="text-2xl text-gray-300 mt-4">

                {member.role}

              </h3>

              <p className="text-gray-400 leading-8 mt-8">

                {member.about}

              </p>

              {/* Contact */}

              <div className="space-y-5 mt-10">

                <div className="flex items-center gap-4">

                  <FaEnvelope className="text-cyan-400" />

                  <span>{member.email}</span>

                </div>

                <div className="flex items-center gap-4">

                  <FaPhoneAlt className="text-cyan-400" />

                  <span>{member.phone}</span>

                </div>

                <div className="flex items-center gap-4">

                  <FaMapMarkerAlt className="text-cyan-400" />

                  <span>{member.location}</span>

                </div>

              </div>

              {/* Social */}

              <div className="flex gap-6 mt-10 text-3xl">

                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 duration-300"
                >
                  <FaFacebook />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <h2 className="text-4xl font-bold mb-10">

          Skills

        </h2>

        <div className="flex flex-wrap gap-4">

          {member.skills.map((skill) => (

            <span
              key={skill}
              className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 duration-300"
            >
              {skill}
            </span>

          ))}

        </div>

      </section>
            {/* Experience Section */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>

          <p className="text-gray-400 mt-4">
            Professional journey and work experience.
          </p>

        </div>

        <div className="space-y-8">

          {member.experience.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                <div>

                  <h3 className="text-2xl font-bold">

                    {item.role}

                  </h3>

                  <p className="text-cyan-400 mt-2">

                    {item.company}

                  </p>

                </div>

                <span className="bg-cyan-500 px-5 py-2 rounded-full text-sm font-medium w-fit">

                  {item.year}

                </span>

              </div>

            </div>

          ))}

        </div>

      </section>





      {/* Education */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">

            Education

          </h2>

          <p className="text-gray-400 mt-4">

            Academic background and qualifications.

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {member.education.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold">

                {item.degree}

              </h3>

              <p className="text-cyan-400 mt-4">

                {item.institute}

              </p>

              <p className="text-gray-400 mt-3">

                {item.year}

              </p>

            </div>

          ))}

        </div>

      </section>




      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-3xl text-center p-8 border border-slate-800">

            <h2 className="text-5xl font-black text-cyan-400">

              20+

            </h2>

            <p className="mt-4 text-gray-400">

              Projects

            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl text-center p-8 border border-slate-800">

            <h2 className="text-5xl font-black text-cyan-400">

              4+

            </h2>

            <p className="mt-4 text-gray-400">

              Years Experience

            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl text-center p-8 border border-slate-800">

            <h2 className="text-5xl font-black text-cyan-400">

              15+

            </h2>

            <p className="mt-4 text-gray-400">

              Happy Clients

            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl text-center p-8 border border-slate-800">

            <h2 className="text-5xl font-black text-cyan-400">

              100%

            </h2>

            <p className="mt-4 text-gray-400">

              Dedication

            </p>

          </div>

        </div>

      </section>
            {/* Projects Section */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Some of my recent projects and works.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {member.projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="text-cyan-400 mt-3">
                  {project.tech}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>




      {/* CTA */}

      <section className="max-w-7xl mx-auto px-5 pb-24">

        <div className="bg-linear-to-r from-cyan-600 to-blue-600 rounded-3xl p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            Let's Build Something Amazing

          </h2>

          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">

            I'm always interested in exciting projects, collaborations,
            and freelance opportunities.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href={`mailto:${member.email}`}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="#"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>

          </div>

        </div>

      </section>




    </div>
  );
};

export default MemberDetails;