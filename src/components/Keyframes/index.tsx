import { motion } from "framer-motion"

export default function Keyframes () {
    return (
        <motion.div 
            animate={{ 
                scale: [1,2,2,1 ,1],
                rotate: [0,0,270,270,0],
                borderRadius: ["20%","20%","50%","50%","0%"]
            }}
            transition={{ duration: 5 }}
            className="w-[100px] h-[100px] bg-black"/>
    )
}