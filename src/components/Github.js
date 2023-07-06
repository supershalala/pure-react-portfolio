import React, { useState, useEffect } from 'react';

import { Col } from 'react-bootstrap';



const Github = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=6`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      <h2>Check Out My Latest Repos</h2>
      <div className="row">
        {repos.map((repo, index) => (
          <Col key={repo.id} xs={12} md={6} lg={4} className={`my-3 ${index % 2 === 0 ? 'even-col' : ''}`}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Github;
