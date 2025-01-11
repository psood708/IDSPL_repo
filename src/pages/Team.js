import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import img1 from "../images/IMG_6501.jpg"
import img2 from "../images/IMG_6534.jpg"
import img3 from  "../images/gaurav.png"
import img4 from "../images/jyoti.png"
import img5 from "../images/khyati.png"
import img6 from "../images/nupur.png"
import img7 from "../images/kangana.png"
import img8 from "../images/anjali.png"
import "./team.css"
const teamMembers = [
  {
    name: "Kirti Patel",
    position: "Managing Director",
    imgSrc: img1,
    description: "Kirti Patel is a highly accomplished and visionary leader, renowned for her exceptional ability to drive significant growth within organizations. As the Managing Director at Integrity Data Services Private Limited, Kirti oversees business consulting, development, financial management, operational strategies, and the overall strategic planning of the company. Additionally, she is the founder of KTP Consulting, a firm with over two decades of experience in delivering consulting services. With hands-on expertise in Data Analysis, Data Management, Bookkeeping, Payroll, and Back-office support services, Kirti brings a wealth of practical knowledge to her roles. She holds degrees in Bachelor of Science and Bachelor of Law from Gujarat University. Kirti's leadership is marked by a commitment to excellence and a strategic approach that fosters sustained success.",
  },
  {
    name: "Trupal Patel",
    position: "Founder & Managing Partner",
    imgSrc: img2,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Gaurav Thakkar",
    position: "Senior Manager",
    imgSrc:img3,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Jyoti Rajpal",
    position: "Senior Manager",
    imgSrc: img4,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Khyati Gopani",
    position: "Manager",
    imgSrc: img5,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Nupur Shah",
    position: "Company Secretary",
    imgSrc: img6,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Kangana Trivedi",
    position: "Senior Search Analyst",
    imgSrc: img7,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Anjali Shah",
    position: "Analyst",
    imgSrc: img8,
    description: "Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="team content-section">
       <div className="row text-center" style = {{'margin-left' :'30%'}} >
          <div className="col-md-12">
            <h2 style={{ fontSize: "5.4rem", fontWeight: "700", color: "#f18f16" }}>Our Team</h2>
            <h3 className="caption gray">Meet the people who make awesome stuffs</h3>
          </div>
        </div>
      <div className="container">
       
        <div className="row1">
          {teamMembers.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="team-member">
                <figure>
                  <img src={member.imgSrc} alt={member.name} className="img-responsive" />
                  <figcaption>
                    <p>{member.description}</p>
                    <ul>
                      <li>
                        <a className="tmLink" href="#">
                          <FaFacebook size={32} />
                        </a>
                      </li>
                      <li>
                        <a className="tmLink" href="#">
                          <FaTwitter size={32} />
                        </a>
                      </li>
                      <li>
                        <a className="tmLink" href="#">
                          <FaLinkedin size={32} />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4 style={{fontSize:"1.7rem"}}>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
