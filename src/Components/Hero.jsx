import { motion } from "framer-motion";

const Hero = () => {

    return (

        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950"
        >
            {/* Blur Circle */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[50px_50px]"></div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">

                <p className="text-cyan-400 text-lg mb-4">
                    👋 Welcome To Dev Duo
                </p>

                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">

                    Building

                    <span className="text-cyan-400">
                        {" "}Modern{" "}
                    </span>

                    Web Experiences

                </h1>

                <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-8">

                    We build beautiful, responsive and modern websites
                    using React, Node.js, Express, MongoDB and Tailwind CSS.

                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-12">

                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full duration-300">

                        View Projects

                    </button>

                    <button className="border border-cyan-400 text-white px-10 py-4 rounded-full hover:bg-cyan-500 duration-300">

                        Contact Us

                    </button>

                </div>

            </div>

        </section>

    )

}

export default Hero