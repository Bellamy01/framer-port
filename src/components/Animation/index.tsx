import { motion } from "framer-motion"

export default function Animation () {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.05}}
            transition={{ duration: 1 }}
            className="w-[100px] h-[100px] bg-black"/>
    )
}