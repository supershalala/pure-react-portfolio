import React from 'react';
import Github from '../components/Github';

const Portfolio = () => {
  const username = 'supershalala';

  return (
    <div>
      <h1>Previous Works</h1>
      <Github username={username} />
    </div>
  );
};

export default Portfolio;
