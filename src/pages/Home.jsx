import React from 'react'
import "./pages.css";

function Second(){
  return (
    <div className='second'>
         <div className="head">
         <h1>What We Offer</h1>
         </div>
        
         <div className="out-box-1">
         <div className="scholar-1">
          <div className="scholar-1-content">
          <h1>One-to-One Mentoring</h1>
          <p>
          Brain Files offers invaluable personalized mentoring, providing students with one-on-one guidance from experienced educators. This tailored approach allows students to address specific learning needs, clarify doubts, and refine study strategies according to their individual requirements. Through personalized sessions, learners can deepen their understanding of subjects, enhance problem-solving skills, and improve overall academic performance. The supportive environment fosters confidence and empowers students to excel. Ultimately, personalized mentoring at Brain Files ensures a more effective and efficient learning experience, catering to the unique needs of each student.
          </p>
          </div>
         </div>
         </div>
         <div className="out-box-2">
         <div className="scholar-2">
          <div className="scholar-2-content">
          <h1>Scholarship on Coaching Fees Based on Merit List</h1>
          <p>
          Brain Files Coaching Institute provides scholarships to candidates based on their performance in entrance exams or merit assessments. These scholarships aim to alleviate financial constraints related to coaching fees, ensuring access to quality education regardless of socioeconomic backgrounds. By offering such support, the institute promotes equal opportunities for all students, fostering academic excellence and diversity within the student body. This initiative underscores Brain Files Coaching Institute's dedication to education as a tool for empowerment and societal progress, shaping a more equitable and prosperous future for individuals from diverse backgrounds.
          </p>
          </div>
         </div>
         </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="main">
        {/* <img src="./welcome.png" alt="" /> */}
        <div className="welcome-content">
          <div className="welcome-note">
            <h2>Welcome to BrainFiles.in</h2>
            <h1>Unique Education System <br />that pushes you to success</h1>
            <p>Hey, Jee aspirant here is your digital coaching to fulfill your dream to become an IITian Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, vitae? Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, consectetur!</p>
          </div>
        </div>

      </div>
        <div className="about-box">
        
        {/* <div className="about-heading"></div>  */}
        <div className="about-content">
          <h1>About us</h1>
      <p>BrainFiles is a premier coaching institute renowned for its exceptional preparation programs catering to a wide range of competitive exams and educational streams. Specializing in JEE (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG).

At BrainFiles, our primary focus is on nurturing a robust foundation of knowledge and conceptual understanding among our students, ensuring their success in both competitive exams and board-level education. We provide a conducive environment that fosters holistic learning and personal growth, empowering students to achieve their career aspirations.

Our core values of Determination, Honesty, Authenticity, Integrity, Devotion, Humanism, and Social Ethics are deeply ingrained in our academic programs. We are dedicated to not only academic excellence but also to the overall development of our students, both socially and culturally.

With a team of highly qualified and experienced faculty members, BrainFiles is committed to providing unwavering support to students, ensuring their holistic development and success. We offer personalized attention, value-based education, and abundant resources to our students, aiming to instill ethical and responsible leadership qualities in them.
</p>
</div>
      </div>

      <Second />
    </div>
  )
}

export default Home
