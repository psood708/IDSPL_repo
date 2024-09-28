import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import img1 from "../images/IMG_6501.jpg"
import img2 from "../images/IMG_6537.jpg"
import img3 from  "../images/IMG_6534.jpg"
import "./team.css"
const teamMembers = [
  {
    name: "Kirti Patel",
    position: "Managing Director",
    imgSrc: img1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.",
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
    imgSrc: img3,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Khyati Gopani",
    position: "Manager",
    imgSrc: img3,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Nupur Shah",
    position: "Company Secretary",
    imgSrc: img3,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Kangana Trivedi",
    position: "Senior Search Analyst",
    imgSrc: img3,
    description: "Neque minima ea, a praesentium saepe nihil maxime quod esse numquam explicabo eligendi.",
  },
  {
    name: "Anjali Shah",
    position: "Analyst",
    imgSrc: img3,
    description: "Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="team content-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 style={{ fontSize: "5.4rem", fontWeight: "700", color: "#f18f16" }}>Our Team</h2>
            <h3 className="caption gray">Meet the people who make awesome stuffs</h3>
          </div>
        </div>
        <div className="row">
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
                <h4>{member.name}</h4>
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
