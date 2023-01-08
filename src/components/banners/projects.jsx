import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { projects } from "../../data/projects"

export default function Projects() {

    const [width, setWidth] = useState(0)

    const carousel = useRef()

    useEffect(() => {
        console.log(carousel)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <section className="w-full min-h-full py-12" id="1">
           <div className="flex flex-col font-bold text-[2.5rem] md:text-[4rem] align-baseline py-4 md:mx-10">
                <div>
                    <p>
                        Projects
                    </p>
                    
                </div>
                <div>
                    <motion.div 
                        ref={ carousel } 
                        whileTap={{ cursor: "grabbing" }} 
                        className="cursor-grab overflow-hidden"
                    >
                        <motion.div 
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }} 
                            className="flex"
                        >
                            { projects?.map(img => (
                                    <motion.div className="min-w-[40rem] p-8" key={ img.id }> {/* item */}
                                        <img src={ img.img } className="w-full rounded-lg pointer-events-none glow" />
                                    </motion.div>
                                )
                            ) }
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}