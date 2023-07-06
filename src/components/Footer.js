import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CustomFooter = () => {
  return (
    <footer className="footer py-3" style={{ backgroundColor: "rgb(25, 23, 22)" }}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>
              <Nav.Link
                href="https://www.linkedin.com/in/adamshalala/"
                target="_blank"
                style={{color: 'white'}}
              >
                LinkedIn
              </Nav.Link>
              ,
              <Nav.Link href="https://github.com/supershalala" target="_blank" style={{color: 'white'}}>
                GitHub
              </Nav.Link>
              ,
              <Nav.Link href="https://twitter.com/AdamShalala" target="_blank" style={{color: 'white'}}>
                Twitter
              </Nav.Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
