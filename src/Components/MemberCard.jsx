import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const MemberCard = ({ member }) => {
  return (
    <div
      className="group bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 hover:border-cyan-400 duration-500"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-80 object-cover group-hover:scale-110 duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-7">

        <h2 className="text-3xl font-bold text-white">
          {member.name}
        </h2>

        <p className="text-cyan-400 mt-2">
          {member.role}
        </p>

        <p className="text-gray-400 mt-5 leading-7">
          {member.shortBio}
        </p>

        {/* Skills */}

        <div className="flex flex-wrap gap-2 mt-6">

          {member.skills.slice(0,4).map(skill=>(
            <span
              key={skill}
              className="bg-slate-800 px-4 py-2 rounded-full text-sm text-cyan-300"
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Social */}

        <div className="flex gap-5 mt-8 text-2xl text-white">

          <a href={member.github}>
            <FaGithub className="hover:text-cyan-400"/>
          </a>

          <a href={member.linkedin}>
            <FaLinkedin className="hover:text-cyan-400"/>
          </a>

          <a href={member.facebook}>
            <FaFacebook className="hover:text-cyan-400"/>
          </a>

        </div>

        {/* Button */}

        <Link to={`/member/${member.slug}`}>

          <button
            className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl text-white font-semibold duration-300"
          >
            View Portfolio
          </button>

        </Link>

      </div>
    </div>
  );
};

export default MemberCard;