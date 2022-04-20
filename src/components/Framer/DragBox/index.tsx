import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  drag: {
    backgroundColor: 'rgb(46, 234, 113)',
    transition: {
      duration: 0.5,
    },
  },
};

function DragBox() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={biggerBoxRef}
        variants={boxVariants}
        whileDrag="drag"
        whileHover="hover"
        whileTap="click"
      />
    </BiggerBox>
  );
}

export default DragBox;
