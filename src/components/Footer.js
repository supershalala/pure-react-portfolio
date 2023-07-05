import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CustomFooter = () => {
return(

    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <p>
            Connect with me on:
            
            <Nav.Link href="https://www.linkedin.com/in/adamshalala/" target='_blank'>LinkedIn</Nav.Link>,
            
            <Nav.Link href="https://github.com/supershalala" target='_blank'>GitHub</Nav.Link>,
            
            <Nav.Link href="https://twitter.com/AdamShalala" target='_blank'>Twitter</Nav.Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
)


};

export default CustomFooter;