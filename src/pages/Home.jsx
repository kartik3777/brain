import React, { useState, useEffect, useRef } from 'react'
import "./pages.css";
import Login from './Login';
import Footer from './Footer';
import "./contact.css";
import { motion, useInView, useAnimation } from 'framer-motion';
import Profile from './Profile';


function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();
  // let logoItem = useRef('hello');
  // console.log(logoItem);
  useEffect(() => {
    console.log(isInView);
   if(isInView){
mainControls.start("visible")
   }

  }, [isInView])

  const [is, setIs] = useState(false);
  function showLogin(){
    console.log("showlogin called");
    setTimeout(myGreeting, 4000);
    function myGreeting(){
       setIs(true)
       console.log(is);
    }
    console.log(is);
  }
  return (
    <motion.div 
    variants={{
      hidden: {opacity: 0, y: 75},
      visible: {opacity: 1, y: 0},
    }}
    initial="hidden"
    animate="visible"
    transition={{duration: 0.7, delay:0.45}}

    onLoad={showLogin} className='home'>
      {console.log("inside home")}
      {console.log(is)}
      {is? <Login />:null }
      <div className="main">
        {/* <img src="./welcome.png" alt="" /> */}
        {/* <div className="welcome-content"> */}
        <div className="welcome-note">
          <h1>Welcome to BrainFiles</h1>
          <h2>Unique Education System that pushes you to success</h2>
          {/* <p>Embark on your journey to IIT success with our digital coaching. Tailored guidance, comprehensive resources, and expert support await you. Let's work together to conquer the JEE and turn your dream of becoming an IITian into reality!</p> */}
          <p>
          Dreaming of studying at the prestigious IIT? Make your aspirations come true with our cutting-edge Digital Course, tailored specifically for aspiring engineers like you! Our innovative program is meticulously crafted to equip you with the professional guidance, abundant resources, and expert support needed to conquer the rigorous marathon of securing a spot at the top Engineering Institution in India.

          </p>
        </div>
     
      </div>
      <motion.div 

       variants={{
        hidden: {opacity: 0, y: 126},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate= {mainControls}
      transition={{duration: 0.8, delay:0.25}}

      ref={ref}  className="about-main">
        <div className="about-box">
          <div className="about-content">
            <h1>About us</h1>
            {/* <p>BrainFiles is a premier coaching institute renowned for its exceptional preparation programs catering to a wide range of competitive exams and educational streams. Specializing in JEE (Main+Advanced), Pre-Medical (NEET-UG).
              At BrainFiles, our primary focus is on nurturing a robust foundation of knowledge and conceptual understanding among our students, ensuring their success in competitive exams. We provide a conducive environment that fosters holistic learning and personal growth, empowering students to achieve their career aspirations.
              Our core values of Determination, Honesty, Authenticity, Integrity, Devotion, Humanism, and Social Ethics are deeply ingrained in our academic programs.
              With a team of highly qualified and experienced faculty members, BrainFiles is committed to providing unwavering support to students, ensuring their holistic development and success. We offer personalized attention, value-based education, and abundant resources to our students, aiming to instill ethical and responsible leadership qualities in them.
            </p> */}
            <p>
            BrainFiles is a premier coaching institution that believes that every student has the potential to excel in their desired field and has the right to a proven preparation program and mentorship, for unlocking the Gateway to his dream college. 
            <br /> 
            {/* <br /> */}
            We provide a wide range of courses for becoming proficient in competitive exams and other educational streams, specializing in JEE (Main+Advanced) and Pre-Medical (NEET-UG), which aims to ensure success by nurturing a robust foundation of knowledge and conceptual understanding among our students. Our esteemed faculty comprises seasoned educators and industry professionals who with their wealth of experience and insider skill, offer unparalleled guidance and assistance, at every step of our students’ journey, ensuring their holistic development and academic excellence.
<br />
<br />
Our curriculum is methodically designed to cover all aspects of the curriculum, from mastering the complete NEET and JEE syllabus to honing problem-solving aptitudes, we leave no stone unturned in empowering students to achieve their career aspirations. Our engaging online platform offers interactive sessions, immersive simulations and real-world case studies to ensure that you grasp complex concepts with ease and enjoyment.
<br />
Our scholastic series are deeply ingrained with the core values of Determination, Honesty, Authenticity, integrity, Devotion, perseverance, and Social Ethics that will enhance the personal growth of a student.

            </p>
          </div>
        </div>
      </motion.div>
      <div className="contact-1">
            <p
              style={{
                width: "90%",
                padding: "15px",
                lineHeight: "1.3",
                fontSize: "20px",
                backgroundColor: "",
                margin: "10px",
                textAlign: "left"
              }}
            >
              {/* "Experience the educational revolution with Brain Files! Join us and
              embark on your journey to success!" */}
            </p>
            <Profile />
          </div> 

      {/* <Second /> */}
      <Footer />
    </motion.div>
  )
}

export default Home
