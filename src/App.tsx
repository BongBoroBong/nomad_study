import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 100vh;
`;

function App() {
  return <Wrapper />;
}

export default App;
