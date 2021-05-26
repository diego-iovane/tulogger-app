import React, {useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {NavLink, AnimHover, hoverVariants} from './NavElements'

const HoverableLink = ({children}) => {

    const [hovering, setHovering] = useState(false)

    return(
        <NavLink
        onHoverStart={() => setHovering(!hovering)} 
        onHoverEnd={() => setHovering(!hovering)}
        to="/trabajos">
            <AnimatePresence>
                {
                    hovering &&
                    <AnimHover 
                    variants={hoverVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    />
                }
            </AnimatePresence>
            {children}
        </NavLink>
    )
}

export default HoverableLink