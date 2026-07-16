const projects = [

    {
        title: "Travel Website",
        image: "https://picsum.photos/600/400?1",
        tech: "React • Firebase",
    },

    {
        title: "News Portal",
        image: "https://picsum.photos/600/400?2",
        tech: "React • Tailwind",
    },

    {
        title: "Ecommerce",
        image: "https://picsum.photos/600/400?3",
        tech: "Node • MongoDB",
    },

]

const Projects = () => {

    return (

        <section
            id="projects"
            className="bg-slate-950 py-24 px-6"
        >

            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold text-center text-white">

                    Featured Projects

                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">

                    {

                        projects.map(project =>

                            <div
                                key={project.title}
                                className="bg-slate-900 rounded-3xl overflow-hidden hover:-translate-y-3 duration-300 shadow-xl"
                            >

                                <img
                                    src={project.image}
                                    className="h-60 w-full object-cover"
                                />

                                <div className="p-7">

                                    <h2 className="text-white text-2xl font-bold">

                                        {project.title}

                                    </h2>

                                    <p className="text-cyan-400 mt-3">

                                        {project.tech}

                                    </p>

                                    <button className="mt-6 w-full bg-cyan-500 py-3 rounded-xl">

                                        View Project

                                    </button>

                                </div>

                            </div>

                        )

                    }

                </div>

            </div>

        </section>

    )

}

export default Projects