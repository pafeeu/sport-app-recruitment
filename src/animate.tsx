import { motion } from "framer-motion";
import {ReactNode} from "react";

const initial = {
    x: '-100%'
}
const show = {
    x:0
}
const exit = {
    x: '200%'
}
const transition = {
    transition: {
        easing: 'linear'
    }
}

export default function AnimateDiv({name, children}:{name:string, children:ReactNode}) {
    return <motion.div key={name} initial={initial} animate={show} exit={exit} transition={transition}>{children}</motion.div>
}