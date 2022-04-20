import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: '100px',
  },
};

function Gesture() {
  return <Box variants={boxVariants} whileHover="hover" whileTap="click" />;
}

export default Gesture;
