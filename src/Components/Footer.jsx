import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">

              Dev Duo

            </h2>

            <p className="text-gray-400 mt-6 leading-8">

              We build beautiful, responsive and modern
              websites using the latest technologies.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Services

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Web Development</li>

              <li>Frontend Design</li>

              <li>Backend Development</li>

              <li>UI / UX Design</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">

              Connect

            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaFacebookF />
              </a>

            </div>

            <button
              onClick={scrollTop}
              className="mt-8 flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition"
            >

              <FaArrowUp />

              Back to Top

            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center">

            © {year} Dev Duo Portfolio. All Rights Reserved.

          </p>

          <p className="text-gray-500 text-center">

            Designed with ❤️ using React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;