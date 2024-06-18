import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/milo.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id='connect'>
      
           
            <div style={{color:'gray',  width:'100vw',  textAlign:'center', padding:'10px 0', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/felix-milome-9a15435b/"><img src={navIcon1} alt="Icon" /></a>
                {/* <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div><br></br><br></br>
              
              <span>Felix Milome</span><br></br>
              <span>felixmilome@gmail.com</span><br></br>
              <span>+254 723 052 890</span>
           
              </div>
             
           
         
    </footer>
  )
}
