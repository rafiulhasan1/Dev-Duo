const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 88 },
  { name: "React", value: 92 },
  { name: "Node JS", value: 80 },
  { name: "MongoDB", value: 75 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-5 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

          {skills.map((skill) => (
            <div key={skill.name}>

              <div className="flex justify-between mb-3">

                <span>{skill.name}</span>

                <span>{skill.value}%</span>

              </div>

              <div className="bg-slate-700 rounded-full h-4">

                <div
                  style={{ width: `${skill.value}%` }}
                  className="bg-cyan-400 h-4 rounded-full"
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;