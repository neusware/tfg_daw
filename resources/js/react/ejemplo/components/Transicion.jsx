import React from "react";
import { motion } from "framer-motion";

function Transicion({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}

        >
            {children}
        </motion.div>
    );
}

export default Transicion;
