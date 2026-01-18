import React from "react";
import { motion } from "framer-motion";

const ProfileCard = ({
  avatarSrc,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative group ${className} flex justify-center`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-sm mx-auto">
        {/* Card Container */}
        <motion.div
          className="relative border border-white/10 rounded-2xl shadow-2xl overflow-hidden min-h-[500px] aspect-[3/4]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Profile Picture - Covering entire container */}
          <img
            src={avatarSrc}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Animated Background Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
