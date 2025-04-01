import React from "react";
import "./sir.css";

function Sir() {
  return (
    <div className="sir-out">
      <div className="sir-details">
        <div className="data-box">
          <div className="pic-box">
            <img src="sir-2.jpg" alt="" />
          </div>
          <p id="sir-name"> Devesh Dixit </p>
          <p className="sir-clg"> B.Tech(IIT-BHU) </p>
          <p>Designated partner and chief mentor</p>
        </div>
      </div>
      <h1 className="msg-head"> Message:</h1>
      <p className="sir-msg">
        At Brainfiles, we believe that success is not just about reaching a
        goal, but the journey of growth, learning, and development. It is our
        commitment to deliver high-quality education that nurtures not only the
        brightest minds but also empowers every student, no matter their
        starting point. Our philosophy is simple—every student deserves the best
        guidance and support to excel.
        <br />
        <br />
        Since our inception, Brainfiles has emerged as a trusted name in JEE
        preparation, a place where students find the right mix of rigorous
        academics, personal attention, and a supportive environment. We
        understand the dreams and expectations that students and parents entrust
        to us, and with dedication, expertise, and hard work, we help every
        student build a strong foundation of knowledge. Our focus remains on
        building a deep understanding of core concepts, which we believe is the
        cornerstone of academic excellence.
        <br />
        <br />
        At Brainfiles, our success comes not through shortcuts, but through the
        perseverance of our students and the personalized guidance they receive
        in every step of their journey. As the competition in today’s academic
        world continues to grow, our mission is to equip our students with the
        clarity and confidence they need to not only meet the challenge but to
        rise above it. With the unwavering support of our students and their
        families, Brainfiles continues to shine as a beacon of quality
        education, setting new standards in JEE preparation.
        <br />
        <br />
        I invite you all to embark on this journey of learning with us and take
        your first steps towards a bright and successful future.
        <br />
        <br />
        "Wishing you success and urging you to work hard towards your goal"
        <br />
        <span style={{fontWeight: 600, fontSize:"20px"}}>
          <br />
          Devesh Dixit

        </span>
        <br />
        {/* Director, Brainfiles */}
      </p>
    </div>
  );
}

export default Sir;
