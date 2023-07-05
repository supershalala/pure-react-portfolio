import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const linkedinDP = 'https://media.licdn.com/dms/image/C5603AQFpEcBRA4ooxg/profile-displayphoto-shrink_200_200/0/1540187816840?e=1694044800&v=beta&t=KFN-5Djre8rQTrFQLZxDpCaPqMx5u_-g6iuKppsf0Gc';

const AboutMe = () => {
return (

    <Container>
      <Row>
        <Col>
          <Image src={linkedinDP} alt="Image 1" />
          <h3>Image 1 Title</h3>
        </Col>
        
      </Row>
    </Container>



);



};

export default AboutMe;