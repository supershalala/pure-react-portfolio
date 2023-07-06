import React from 'react';
import Github from '../components/Github';
import '../index.css';

const Portfolio = () => {
  const username = 'supershalala';

  return (
    <div>
    
      <Github username={username} />
    </div>
  );
};

export default Portfolio;
