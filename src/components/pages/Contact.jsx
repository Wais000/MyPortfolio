import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { SiLinkedin, SiGithub, SiInstagram, SiFacebook } from "react-icons/si";

const Contact = () => {
  const form = useRef();
const [Submit, setSubmit] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(e.target.value)

    emailjs.sendForm('service_o5qejya', 'template_8pv5uqg', form.current, 'FHO27LgE9pVBxo6zt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
 
      alert("your email has been sent")

  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-boxes">
        <div className="contact-text">
          <div className='get-in-touch'>

          
          <h1>Get In Touch</h1>
          <p>
          Let me amplify your brand for a modern world!
          </p>
          </div>
          
          
          <hr />
          <div className="contactAtSocial">
            <p>Feeling social? </p>
            <p>Find me on these online spaces too!</p>
            <div className="externalLinks">
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/wais-nazari-91a062222/"
                    target="_blank"
                  >
                    <h2 className="linkedin">
                      <SiLinkedin />
                    </h2>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.instagram.com/wais_nazary/"
                    target="_blank"
                  >
                    <h2 className="instagram">
                      <SiInstagram />
                    </h2>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/Wais000" target="_blank">
                    <h2 className="githube">
                      <SiGithub />
                    </h2>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.facebook.com/Wais.Nazary/"
                    target="_blank"
                  >
                    <h2 className="facebook">
                      <SiFacebook />
                    </h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name . . ." name="to_name" />
          <input type="email" placeholder="Your Email . . ." name='email_from' />
          <textarea
            name="message"
            id=""
            cols="100"
            rows="10"
            placeholder="Type . . . "
          ></textarea>
          <button className="submit-btn" value="Send" >Submit</button>
        </form>
      </div>
    </div>
    
  );
};

export default Contact;
