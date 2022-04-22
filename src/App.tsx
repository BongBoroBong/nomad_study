import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  background-color: blue;
`;
function App() {
  return <Wrapper />;
}

export default App;
