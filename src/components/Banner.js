import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/milo.jpeg';
import aiImg from '../assets/img/ai2.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web & Mobile App Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      {/* <img 
                style={{
                  width:'200px',
                  height:'200px',
                  borderRadius:'20px',
                  marginBottom:'40px'
             
                  }}
                src={logo} alt="Logo" /> */}
        <Row className="align-items-center">

         <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={aiImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>  
          <Col xs={12} md={6} xl={7}>
         
         <TrackVisibility>
           {({ isVisible }) =>
           <div style={{borderRadius: '100px', textAlign:'start'}} className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            
             {/* <span className="tagline">Welcome to my Portfolio</span> */}
           
             <h1 >{`Felix Milome: `} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web & Mobile App Developer"]'><span className="wrap">{text}</span></span></h1>
               
            
                
                 {/* proficient in both frontend and backend technologies:</p> */}
            
                  <span>JavaScript/TypeScript, Node Js, Express, React Js/Native, Mongo Db, MsSql/Sql, Js Ethical Hacking, Python, Php and many more</span><br></br><br></br>
                  <span>+ Over 10 years experience, </span><br></br>
                  <span>+ Harvard X Certified </span><br></br>
                    <span>+  Full-stack programmer </span>
        
                  <a style={{textDecoration:'none'}}  href="https://www.linkedin.com/in/felix-milome-9a15435b/" target="_blank">
                    <div className="social-icon">
                     

                    </div>
                    <button onClick={() => console.log('connect')}> My Linked in<ArrowRightCircle size={25} /></button>
                  </a>
           </div>}
         </TrackVisibility>
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}
