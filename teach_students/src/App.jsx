import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./pages/home.css"; 
import banner from "./assets/ImageBanner.png";
import mainbanner2 from "./assets/mainbanner2.png";
import mainbanner from "./assets/mainbanner.png"; 
import image from "./assets/rightsideimage.jpg";
import mapPakistan from "./assets/PakistanMap.jpg";
import document from "./assets/document.png";
import lock from "./assets/lock.png";
import maninsuit from "./assets/maninsuit.png";
import growth from "./assets/growth.png";
import handshake from "./assets/handshake.png";
import results from "./assets/results.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import whatsapp from "./assets/whatsapp.png";
import tllogowhite from "./assets/tllogowhite.png";



function App() {
  return (

     


    <div>
      <div className="banner-container">
      <img src={mainbanner2} alt="Banner" className="banner-img"/>
    </div>
      
      <section className="find-teacher-container">
        <p className="subtitle">"Connecting Schools with the Best Educators."</p>
        <h2 className="title">Find A Teacher</h2>

        <div className="card-grid">

          <div className="card">
            <h3>01.</h3>
            <h4>Teachers</h4>
            <p>Subscribe and receive job opportunities that match your qualifications and preferences.</p>
          </div>

            <div className="card">
            <h3>02.</h3>
            <h4>Schools</h4>
            <p>Post job vacancies and connect with the best educators for your institution.</p>
          </div>

          <div className="card">
            <h3>03.</h3>
            <h4>Private Tutoring</h4>
            <p>Parents and students can find qualified tutors for personalized learning.</p>
          </div>

          <div className="card">
            <h3>04.</h3>
            <h4>Continuous Learning Program</h4>
            <p>Teachers can enhance their skills through professional development opportunities.</p>
          </div>

          </div>
</section>

{/* Section for Content on left and image on right */}


<section class="find-a-teacher">
  <div class="left-content">
    <h2>For Your Hiring & Teaching Needs</h2>
    <p class="intro">
      Teach-Link is an online platform designed to connect passionate educators with students seeking personalized learning. Whether you're a teacher looking to share your expertise or a student searching for the right mentor, Teach-Link makes the process seamless and direct.
    </p>

    <div class="services">
      <div class="service-column">
        <h3>Services for Teachers:</h3>
        <ul>
          <li><strong>Instant Job Alerts:</strong> Browse verified teacher profiles and choose educators based on subject expertise, teaching style, and availability.</li>
          <li><strong>Private Tutoring Opportunities:</strong> Offer one-on-one tutoring and connect with students.</li>
          <li><strong>Professional Development:</strong> Access continuous learning programs to enhance your skills.</li>
          <li><strong>Exclusive Community:</strong> Join a supportive network of educators sharing experiences, tips, and opportunities.</li>
        </ul>
      </div>
      <div class="service-column">
        <h3>Services for Students:</h3>
        <ul>
          <li><strong>Personalized Teacher Selection:</strong> Browse verified teacher profiles and choose educators based on subject expertise, teaching style, and availability.</li>
          <li><strong>Flexible Learning Options:</strong> Learn at your own pace with online sessions tailored to your schedule and academic goals.</li>
          <li><strong>Direct Communication:</strong> Contact teachers directly to discuss your needs, expectations, and preferred learning methods.</li>
          <li><strong>Verified Educators:</strong> Connect with teachers who have passed a quality screening process to ensure reliable instruction.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="right-image">
    <img 
        src={image} 
        alt="image"
      />
  </div>
</section>

<section className="HighQualityTeachers">
  <div>
    <h1>High Quality Teachers</h1>
    <h3>Only 55.1% of teachers that apply make through our application process</h3>
  </div>
</section>

<section className="PakistanMap">
  <div>
    <h1>Over 2000 Teachers in 150+ Cities</h1>
    <img 
        src={mapPakistan}
        alt="image"
      />
  </div>
</section>

      <section className="hiringteacher">
        <p className="subtitle">"For Your Hiring & Teaching Needs"</p>
        <h2 className="title">How We Work with Educators & Students</h2>

        <div className="card-grid">

          <div className="carding">
            <img src={document} alt="document"/>
            <h4>Instant Job Postings - Teacher share their vacancies, and student receive them in real-time.</h4>
          </div>

          <div className="carding">
            <img src={maninsuit} alt="maninsuit"/>
            <h4>Direct Applications - Teacher apply directly through the offered job links.</h4>
          </div>

          <div className="carding">
            <img src={lock} alt="lock"/>
            <h4>Private and Public Listings - Students and Teachers can choose to post jobs publicly or anonymously.</h4>
          </div>
          </div>
</section>

    <div className="promo-wrapper">
      <div className="promo-left">
        <h1>Why Choose Teach-Link?</h1>
      </div>
      <div className="promo-right">
        <div className="benefit">
          
            <img src={handshake} alt="" />
          
          <div className="text">
            <h3>Reliability</h3>
            <p>A trusted platform connecting educators and schools across Lebanon.</p>
          </div>
        </div>
        <div className="benefit">
          
            <img src={results} alt="" />
          
          <div className="text">
            <h3>Quality</h3>
            <p>Verified job postings and professional teaching opportunities.</p>
          </div>
        </div>
        <div className="benefit">
          
            <img src={growth} alt="" />
          
          <div className="text">
            <h3>Result</h3>
            <p>Fast hiring process with direct communication between schools and teachers.</p>
          </div>
        </div>
      </div>
    </div>

{/* Form for sending a querry */}

<section className="contact-wrapper">
  <div className="side-column"></div>

  <div className="middle-column">
    <h2 className="form-heading">Have Questions?</h2>
    <p className="form-subtext">Drop your phone number, and we'll reach out to assist you.</p>
    <form className="phone-form" onSubmit={(e) => {
      e.preventDefault();
      alert("Thanks! We'll contact you soon.");
    }}>
      <input type="tel" placeholder="Your phone number" required />
      <button type="submit">SUBMIT</button>
    </form>
  </div>

  <div className="side-column"></div>
</section>


{/* Testimonials section*/}


<section className="testimonials">
  <h2 className="testimonial-heading">What People Say</h2>
  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p className="testimonial-text">
        "Find-A-Teacher helped me land my dream job within days. The platform is intuitive, and the job alerts are spot-on."
      </p>
      <h4 className="testimonial-author">— Amina R., English Teacher</h4>
    </div>

    <div className="testimonial-card">
      <p className="testimonial-text">
        "We filled a critical teaching position faster than ever before. The direct application system saved us time and connected us with top-tier candidates."
      </p>
      <h4 className="testimonial-author">— Mr. Tariq, Principal</h4>
    </div>

    <div className="testimonial-card">
      <p className="testimonial-text">
        "I found a qualified tutor for my son in just two clicks. The process was smooth, and the results were immediate."
      </p>
      <h4 className="testimonial-author">— Sadia K., Parent</h4>
    </div>
  </div>
</section>

{/* Footer section */}



<footer className="footer">
  <div className="footer-left">
    <img 
        src={tllogowhite}
        alt="image"
        className="footer-logo"
      />
    <p>At Teach-Link, we believe in empowering both educators and learners by removing barriers and building meaningful academic connections.</p>
  </div>

  <div className="footer-middle">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#signup">Signup</a></li>
    </ul>
  </div>

  <div className="footer-right">
    <form onSubmit={(e) => {
      e.preventDefault();
      alert("Subscribed!");
    }}>
      <input type="email" placeholder="Your email" required />
      <button type="submit">Subscribe</button>
    </form>
    <div className="social-icons">

      <img 
        src={facebook}
        alt="image"
      />
      <img 
        src={instagram}
        alt="image"
      />
      <img 
        src={whatsapp}
        alt="image"
      />
      <img 
        src={twitter}
        alt="image"
      />




    </div>
  </div>
</footer>

</div>

  );
}

export default App;
