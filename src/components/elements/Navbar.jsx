import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {

    let parent = {
        show: {
            staggerChildren: 0.1
        }
    }

    let child = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    }

    let navLinks = [
        { link: "Home", href: '#' },
        { link: "Projects", href: '#projects' },
    ]

    let charHome = [...navLinks[0].link]
    let charProjetcs = [...navLinks[1].link]

    const arrChar = [charHome, charProjetcs]

    console.log(arrChar)

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
                className='flex items-center gap-3'
                variants={parent}
                initial="hidden"
                animate="show"
            >
                {arrChar.map((char, i) => {
                    return (
                        <motion.a
                            key={i}
                            href="#"
                            variants={child}
                        >
                            {char}
                        </motion.a>
                    )
                })}
            </motion.nav>
        </motion.div>
    )
}

export default Navbar