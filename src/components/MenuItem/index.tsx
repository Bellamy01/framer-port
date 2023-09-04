import { motion } from "framer-motion";

const variants = {
    open: {
        y:0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    close: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

type menuItemProps = {
    i: number
}

export default function MenuItem ({i}: menuItemProps) {
    const style = { border: `2px solid ${colors[i]}`};
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="m-0 p-0 list-none flex justify-center items-center cursor-pointer"
        >
            <div className=" w-10 h-10 rounded-full mr-5" style={style} />
            <div className="rounded-lg w-48 h-10 flex-1" style={style} />
        </motion.li>
    )
}