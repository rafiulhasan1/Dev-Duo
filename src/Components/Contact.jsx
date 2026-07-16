import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-5"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-5">
            Feel free to contact us anytime.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <div>

            <div className="bg-slate-900 p-8 rounded-3xl">

              <div className="flex items-center gap-5">

                <FaEnvelope className="text-cyan-400 text-3xl"/>

                <div>

                  <h2 className="text-white text-xl">

                    Email

                  </h2>

                  <p className="text-gray-400">

                    contact@example.com

                  </p>

                </div>

              </div>

            </div>

            <div className="bg-slate-900 p-8 rounded-3xl mt-6">

              <div className="flex items-center gap-5">

                <FaPhone className="text-cyan-400 text-3xl"/>

                <div>

                  <h2 className="text-white text-xl">

                    Phone

                  </h2>

                  <p className="text-gray-400">

                    +880 1700 000000

                  </p>

                </div>

              </div>

            </div>

            <div className="bg-slate-900 p-8 rounded-3xl mt-6">

              <div className="flex items-center gap-5">

                <FaLocationDot className="text-cyan-400 text-3xl"/>

                <div>

                  <h2 className="text-white text-xl">

                    Address

                  </h2>

                  <p className="text-gray-400">

                    Dhaka, Bangladesh

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <form className="bg-slate-900 rounded-3xl p-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none mb-5"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none mb-5"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none mb-5"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none"
              ></textarea>

              <button
                className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl w-full text-white"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;