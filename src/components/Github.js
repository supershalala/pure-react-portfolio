import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import '../index.css';

const Github = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

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

  useEffect(() => {
    const fetchUnsplashImages = async () => {
      const urls = await Promise.all(
        repos.map(async (repo) => {
          try {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(repo.name)}&client_id=PPmNV3IiGnmcsezouaLWcwAj_u9ZQiQd0NTsNtkcsM0`
            );
            const data = await response.json();
            if (data.results.length > 0) {
              return data.results[0].urls.small;
            } else {
              return null;
            }
          } catch (error) {
            console.error('Error fetching Unsplash image:', error);
            return null;
          }
        })
      );
      setImageUrls(urls);
    };

    fetchUnsplashImages();
  }, [repos]);

  return (
    <div>
      <div className="row">
        {repos.map((repo, index) => (
          <Col key={repo.id} xs={12} sm={6} lg={4} className="my-3">
            {imageUrls[index] && (
              <div className="github-img-container">
                <img src={imageUrls[index]} alt={repo.name} className="github-img" />
              </div>
            )}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              {repo.name}
            </a>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Github;
