import React from 'react';
import './about.css'; // Import your CSS file

const About = () => {
  return (
    <>
    <section className="About-sec">
      <div className="left-section">
        <div className="main-heading">About Us</div>
      </div>
      <div className="right-section">
        <div className="main-text">
          Integrity Data Services Private Limited is an India-based outsourcing and offshore
          consulting company, where integrity, expertise, and empowerment intersect to deliver exceptional
          Knowledge Process outsourcing solutions.
        </div>

        <div className="main-block">
          <div className="block">
            <div className="first">
              30+
            </div>
            <div className="second">
              <hr className="linee" />
              <h3>Years of Experience</h3>
            </div>
          </div>
          <div className="block">
            <div className="first">
              4
            </div>
            <div className="second">
              <hr className="linee" />
              <h3>Countries</h3>
            </div>
          </div>
          <div className="block">
            <div className="first">
              30+
            </div>
            <div className="second">
              <hr className="linee" />
              <h3>Dedicated Experts</h3>
            </div>
          </div>
          <div className="block">
            <div className="first">
              24H
            </div>
            <div className="second">
              <hr className="linee" />
              <h3>Time Frame</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="vision">
      <div className="vision-text">
        At Integrity Data Services, our vision is to be <span className="orange">recognized as the benchmark for
        reliability and trust</span> in the Knowledge Process Outsourcing (KPO) industry. <br />
        <br /><br />
        Our vision is not just about being a service provider, it’s about <span className="orange">becoming a trusted
        partner</span> who plays a critical role in our clients’ success. We strive to <span className="orange">
        innovate and adapt to the ever-changing needs of the industry</span>, ensuring that we remain at the
        forefront of KPO services.
      </div>
      <div className="vision-heading">Our Vision</div>
    </section>

    <section className="why-us">
      <div className="wfirst">
        <div className="wsub-heading">WHY US</div>
        <div className="wheading">Experience The Difference</div>
      </div>
      <div className="wsecond">
        <div className="frow">
          <div className="wblock">
            <div className="fst">
              24/7
            </div>
            <div className="snd">
              Operations
            </div>
          </div>
          <div className="wblock" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
            <div className="fst">
              Commitment
            </div>
            <div className="snd" style={{ paddingTop: '9%' }}>
              to Excellence
            </div>
          </div>
          <div className="wblock" style={{ backgroundColor: 'rgba(229, 244, 210, 0.8)' }}>
            <div className="fst" style={{ fontSize: '3.4rem' }}>
              Integrity
            </div>
            <div className="snd" style={{ paddingTop: '20%' }}>
              at Forefront
            </div>
          </div>
        </div>
        <div className="srow">
          <div className="wblock" style={{ backgroundColor: 'rgba(161, 233, 239, 0.6)' }}>
            <div className="fst">
              20+ Years
            </div>
            <div className="snd">
              Experience
            </div>
          </div>
          <div className="wblock" style={{ backgroundColor: 'rgba(241,143,22,0.7)' }}>
            <div className="fst" style={{ fontSize: '3.5rem' }}>
              Cost-Effective
            </div>
            <div className="snd">
              Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;