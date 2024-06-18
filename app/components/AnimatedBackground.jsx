'use client';

import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(20px); }
  100% { transform: translateY(0) translateX(0); }
`;

const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ color }) => color};
  border-radius: 50%;
  animation: ${move} 4s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

const colors = ['#FF6347', '#1E90FF', '#FFA500', '#6A5ACD', '#FFD700']; // Red, Blue, Orange, Purple, Yellow

const generateDots = (count) => {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  return dots;
};

const AnimatedBackground = ({ count = 50 }) => {
  const dots = useRef(generateDots(count));

  return (
    <div id="background">
      <Background>
        {dots.current.map((dot) => (
          <Dot
            key={dot.id}
            top={dot.top}
            left={dot.left}
            delay={dot.delay}
            color={dot.color}
          />
        ))}
      </Background>
    </div>
  );
};

export default AnimatedBackground;
