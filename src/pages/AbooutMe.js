import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const linkedinDP = 'https://media.licdn.com/dms/image/C5603AQFpEcBRA4ooxg/profile-displayphoto-shrink_200_200/0/1540187816840?e=1694044800&v=beta&t=KFN-5Djre8rQTrFQLZxDpCaPqMx5u_-g6iuKppsf0Gc';

const AboutMe = () => {
return (

    <Container className='pt-5'>
      <Row>
        <Col className="text-center">
          <Image src={linkedinDP} alt="Image 1" className="mx-auto"/>
          <h3 className='pt-2'>Adam Shalala</h3>
        </Col>
        
      </Row>

      

      <Row className='pt-3'>
      <p>
      I am Adam Shalala, a junior full stack web developer who had the privilege of learning at Sydney University. My passion for coding and web development has driven me to constantly learn and grow. With a strong foundation in web development principles and a keen eye for detail, I strive to create dynamic and user-friendly websites that exceed expectations. Problem-solving and effective communication are among my strengths, making me a valuable asset to any team. With a drive for continuous learning and a dedication to producing high-quality results, I am poised to make a significant impact in the world of web development.

      </p>



      </Row>
    </Container>



);



};

export default AboutMe;