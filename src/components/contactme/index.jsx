import Header from "../header";
import emailjs from '@emailjs/browser';
import {useRef} from "react";


export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
      .sendForm(
          'service_wbqsmui',
          'template_j1gu6xn',
           form.current,
           'v6u18fR5CNnkd7Jle'
      )
      .then (
          () => {
              alert("message sent");
              window.location.reload(false)
          },
          () => {
              alert('Error message not sent');
          }
      )
  }

  return (
    <section id="contactme">
      <Header heading={"Contact Me"} />
      <div id="contact">
        <p>
          I am interested in any freelance opportunites. Also if you have any questions or requests
          don't hesitate to contact me using the form provided.
        </p>
      <form ref={form} onSubmit={sendEmail}>
              <label htmlFor= "name">Name:</label><br/>
              <input type="text" name="name" id="name" required></input><br/>
              <label htmlFor= "email">Email:</label><br/>
              <input type="text" name="email" id="email" required></input><br/>
              <label htmlFor= "subject">Subject:</label><br/>
              <input type="text" name="subject" id="subject" required></input><br/>
              <label htmlFor= "message">Message:</label><br/>
              <textarea name="message" id="messsage" required></textarea><br/>
              <input type="submit" className="sButton" value="Send" />
            </form>
      </div>
      </section>
      )
    }