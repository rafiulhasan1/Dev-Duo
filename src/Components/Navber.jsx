import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const { user } = useContext(AuthContext);

    const menus = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ]

    return (

        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center h-20">

                    <h1 className="text-3xl font-bold text-cyan-400">
                        Dev Duo
                        {
                            user && (
                                <h2 className="text-white font-semibold">
                                    {user.displayName}
                                </h2>
                            )
                        }
                    </h1>

                    <ul className="hidden md:flex gap-8 text-white">

                        {
                            menus.map(menu =>

                                <li key={menu}>
                                    <a
                                        href={`#${menu.toLowerCase()}`}
                                        className="hover:text-cyan-400 duration-300"
                                    >
                                        {menu}
                                    </a>
                                </li>

                            )
                        }

                    </ul>

                    <button
                        className="md:hidden text-3xl text-white"
                        onClick={() => setOpen(!open)}
                    >

                        {
                            open ? <IoClose /> : <HiOutlineMenuAlt3 />
                        }

                    </button>

                </div>

            </div>

            {
                open &&

                <div className="md:hidden bg-slate-900">

                    {
                        menus.map(menu =>

                            <a
                                key={menu}
                                href={`#${menu.toLowerCase()}`}
                                className="block px-6 py-5 text-white border-b border-slate-700 hover:bg-slate-800"
                                onClick={() => setOpen(false)}
                            >

                                {menu}

                            </a>

                        )
                    }

                </div>

            }

        </nav>

    )

}

export default Navbar;