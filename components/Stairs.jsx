import { motion } from "framer-motion"

// variantes
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
};

// calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
    const totalSteps = 10; // number of steps
    return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs. 
        Each div will have the same animation defined by the stairsAnimation object.
        the delay fot each di is calculated dynamically based on its reverserd index,
        creating a staggered effect with decreasing delay for each subsequent step.

    */}
    {[...Array(6)].map((_, index) =>
        <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial" animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.2, 
                ease: 'easeInOut', 
                delay: reverseIndex(index) * 0.1,
            }} 
            className="h-full w-full bg-gray-900 relative"
            />
    )}
    </>
  )
}

export default Stairs