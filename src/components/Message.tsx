import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happiest Birthday Asmitaaa!!!
Lots of good wishes to youuu on your special day..
Even though we have met recently but still we know many things about each other. Our friendship just started and i hope we will be making some great memories together but ami toh kotha e bolina ehehehe 🤪 I'm starting this new year (24/11/2025)with a new friend as you and i hope our friendship will last forever.
And I wish in future tui jeno hill side e permenently shift kore jas as your hobby!!!!!!
        </p>
      </motion.div>
    </div>
  );
};


export default Message;
