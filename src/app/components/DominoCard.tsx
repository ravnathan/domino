// src/components/DominoCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface DominoCard {
  values: number[];
}

export default function DominoCard({values}: DominoCard) {
  return (
    <motion.div
      className="flex items-center justify-center border rounded-lg p-4 m-2 bg-white shadow-lg"
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{values[0]}</span>
        <span className="text-xl font-bold">{values[1]}</span>
      </div>
    </motion.div>
  );
}


