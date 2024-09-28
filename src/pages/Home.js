import React from "react";
import "./home.css"; // Include your CSS
import img1 from "../images/WhatsApp Image 2023-07-12 at 12.21.19 PM (2).jpeg";
import img2 from "../images/IMG_6767.jpg"
import img3 from "../images/IMG_3355.jpg"
import img4 from "../images/IMG_0679.jpg"
import img5 from "../images/IMG_6544.jpg"
import img6 from "../images/IMG_2235.jpg"
import img7 from "../images/IMG_6736.jpg"
import img8 from "../images/IMG_2230.jpg"
import img9 from "../images/389ec91c-01d7-4ac8-8caa-fb5a81fbac17.jfif"
import img10 from "../images/IMG_2175.jpg"
import img11 from "../images/04-THEFIRST.jpg"
import img12 from "../images/IMG_0680.jpg" 
import img13 from "../images/IMG_0793.jpg"
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <section className="main-page">
        <div className="heading">
          <div className="main-head">
            Welcome to{" "}
            <span className="orange">
              Integrity Data Services <br /> Private Ltd.
            </span>
          </div>
          <div className="sub-head">
            More than an offshore consulting firm, we are{" "}
            <span className="bold">
              architects of efficiency and innovation
            </span>
            , redefining business boundaries with our{" "}
            <span className="bold">comprehensive service spectrum.</span>
          </div>
        </div>

        <div className="buttons">
          <a href="#">
          <Link to="/about"><div className="but but1" style={{ backgroundColor: "#cbe6eb", color: "#057588" }}>
              About <span className="bold">us</span>
            </div></Link>
          </a>
          <a href="#">
          <Link to="/services"> <div className="but but2">Services</div></Link>
          </a>
        </div>

        <div className="img">
          <div className="im">
            <img src={img1} alt="im1" />
          </div>
          <div className="im">
            <img src={img2} alt="im2" />
          </div>
          <div className="im">
            <img src={img3} alt="im3" />
          </div>
          <div className="im">
            <img src={img4} alt="im4" />
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="imag">
          <img src={img5} alt="Founder" />
        </div>
        <div className="fnd">
          <div className="found-main">
            Discover Integrity Data Services Pvt. Ltd: Pioneers in Innovative Solutions and Business Support
          </div>
          <div className="found-sub orange">
            At Integrity Data Services Pvt. Ltd., co-founded by Mrs. Kirti Patel and Mr. Trupal Patel, we
            redefine efficiency and innovation. Specializing in a broad range of services, we are committed to
            elevating your business through tailored solutions and expert support.
          </div>
        </div>
      </section>

      <section className="services">
        <div className="give">
          <div className="give-sub">WHAT WE GIVE</div>
          <div className="give-main">
            Services That Give You <span className="orange">Peace Of Mind</span>
          </div>
        </div>
        <div className="give-bottom">
          <div className="give-left">
            <div className="give-main-text">
              At Integrity Data Services Pvt. Ltd., co-founded by Mrs. Kirti Patel and Mr. Trupal Patel, we
              redefine efficiency and innovation. Specializing in a broad range of services, we are committed to
              elevating your business through tailored solutions and expert support.
            </div>
            <div className="give-link orange">Find Out More &gt;&gt;&gt;</div>
          </div>
          <div>
            <div className="give-grid">
              <div className="give-grid-links">
                <img style={{ objectPosition: "center" }} src={img6} alt="Service 1" />
              </div>
              <div className="give-grid-links">
                <img style={{ objectPosition: "bottom" }} src={img7} alt="Service 2" />
              </div>
             




              <div className="give-grid-links">
                <img style={{ objectPosition: "top" }} src={img8} alt="Service 3" />
              </div>
              <div className="give-grid-links">
                <img
                  style={{ objectPosition: "bottom" }}
                  src={img9}
                  alt="Service 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-help">
        <section className="design">
          <div className="desg-main">
            <div className="des-sub">WHO WE HELP</div>
            <div className="des-main">
              Streamlining Success for <span className="orange italics">CPA's</span> and{" "}
              <span className="orange italics">CPA Firms </span>with Expert Outsourcing Solutions
            </div>
          </div>
        </section>
        <section className="what">
          <div className="sec">
            <div className="sec-img">
              <img style={{ objectPosition: "top" }} src={img10} alt="Help 1" />
            </div>
            <div className="sec-text">
              Delivering exceptional <span className="orange">KPO solutions </span>with a focus on integrity and
              empowering women in the workplace.
            </div>
          </div>
          <div className="sec">
            <div className="sec-text">
              Providing expert <span className="orange"> back-office support</span> and specialized services,
              driven by visionary leadership and a <span className="orange">commitment to client success.</span>
            </div>
            <div className="sec-img">
              <img style={{ objectPosition: "center" }} src={img11} alt="Help 2" />
            </div>
          </div>
          <div className="sec">
            <div className="sec-img">
              <img style={{ objectPosition: "top" }} src={img12} alt="Help 3" />
            </div>
            <div className="sec-text">
              Offering top-tier outsourcing with <span className="orange">45+ years</span> of combined expertise
              in <span className="orange"> financial management and taxation.</span>
            </div>
          </div>
        </section>
      </section> 

      <section className="why_us">
        <div className="why-main">
          <div className="why-sub">WHY US</div>
          <div className="why-main-text">
            Settling for Average isn't in our{" "}
            <div className="orange bold italics">Vocabulary</div>
          </div>
        </div>
        <div className="why-bottom">
          <div className="why-text">
            <div className="why-head">Accountants that know your business</div>
            <div className="why-text-text">
              We operate on a 24-hour timeframe, meaning while you sleep, we work diligently to meet your needs,
              ensuring seamless workflow and timely deliverables. Leveraging 20 years of rich experience, we bring
              extensive knowledge and expertise to every project, ensuring superior outcomes and client satisfaction.
            </div>
          </div>
          <div className="why-img">
            <img style={{ objectPosition: "bottom" }} src={img13} alt="Why Us" />
          </div>
        </div>
      </section>

      <section className="testimon">
        <div className="test-main">
          <div className="test-sub">TESTIMONIALS</div>
          <div className="test-main-text orange">Why People Trust Us?</div>
        </div>
        <div className="test-grid">
          <div className="test-rw">
            <div className="long-test">
              <div className="cust-head" style={{ fontSize: "1rem", fontWeight: "700" }}>
                CUSTOMER STORIES
              </div>
              <div className="clust">
                <div className="clust-main">
                  "Integrity just handled it with ease! Professional Work by Experts."
                </div>
                <div style={{ fontWeight: "600", marginTop: "1%" }}>- XYZ LLC Corporation</div>
              </div>
            </div>
            <div className="short-test">
              <div className="data">DATA</div>
              <div className="data-text" style={{ marginTop: "24px" }}>
                <div style={{ fontSize: "85px", fontWeight: "700", padding: "0px", margin: "0px" }}>30+</div>
                <div style={{ fontStyle: "italic", fontSize: "1.3rem" }}>dedicated experts at your discretion</div>
              </div>
            </div>
          </div>
          <div className="test-rw">
            <div className="short-test">
              <div style={{ fontWeight: "700" }}>CUSTOMER STORIES</div>
              <div>
                <div style={{ fontSize: "1.5rem", marginTop: "3%" }}>50% YoY Growth, won’t be possible without IDSPL</div>
                <div style={{ fontWeight: "600", marginTop: "2%" }}>- David, APEX Corporation</div>
              </div>
            </div>
            <div className="long-test">
              <div className="data">DATA</div>
              <div className="data-text">
                <div style={{ fontSize: "85px", fontWeight: "700" }}>20+</div>
                <div style={{ fontStyle: "italic", fontSize: "1.5rem" }}>Years of Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

