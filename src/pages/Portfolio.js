import React from 'react';
import Github from '../components/Github';

const Portfolio = () => {
  const username = 'supershalala';

  return (
    <div>
      <h1>My App</h1>
      <Github username={username} />
    </div>
  );
};

export default Portfolio;
