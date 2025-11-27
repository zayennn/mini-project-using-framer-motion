import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {

    const wordParent = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    }

    const charVariant = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    }

    const navLinks = [
        { link: "Home", href: "#" },
        { link: "Projects", href: "#projects" },
    ]

    return (
        <motion.div
            className="fixed top-0 left-0 w-full py-3 px-5 bg-white shadow-sm flex 
                        justify-between items-center"
        >
            <motion.a href="#">
                <i>
                    <motion.h1
                        className='font-bold text-2xl w-max'
                    >
                        MiniProject.
                    </motion.h1>
                </i>
            </motion.a>

            <motion.nav
                className='flex items-center gap-6'
                initial="hidden"
                animate="show"
            >
                {navLinks.map((item, i) => {
                    const chars = [...item.link]

                    return (
                        <motion.a
                            key={i}
                            href={item.href}
                            className="flex"
                            variants={wordParent}
                            initial="hidden"
                            animate="show"
                        >
                            {chars.map((c, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={charVariant}
                                >
                                    {c}
                                </motion.span>
                            ))}
                        </motion.a>
                    )
                })}
            </motion.nav>
        </motion.div>
    )
}

export default Navbar
