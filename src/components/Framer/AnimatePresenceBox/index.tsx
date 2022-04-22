import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const boxVariants = {
  entry: (isBack: boolean) => ({
    opacity: 0,
    scale: 0,
    x: isBack ? -500 : 500,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  exit: (isBack: boolean) => ({
    opacity: 0,
    scale: 0,
    x: isBack ? 500 : -500,
    transition: { duration: 1 },
  }),
};
function AnimatePresenceBox() {
  const [back, setBack] = useState(false);
  const [show, setShow] = useState(0);

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          key={show}
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit">
          {show}
        </Box>
      </AnimatePresence>
      <button
        onClick={() => {
          setShow(prev => prev + 1);
          setBack(false);
        }}>
        next
      </button>
      <button
        onClick={() => {
          setShow(prev => prev - 1);
          setBack(true);
        }}>
        prev
      </button>
    </Wrapper>
  );
}

export default AnimatePresenceBox;
