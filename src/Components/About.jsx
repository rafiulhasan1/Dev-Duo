import members from "../data/members";
import MemberCard from "./MemberCard";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Meet Our Team
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Meet the talented developers behind our modern web experiences.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {members.map(member=>(
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;