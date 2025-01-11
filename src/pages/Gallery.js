import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './galler.css'; // Adjust the path if necessary

// Import your images (adjust paths as needed)
import img1 from '../images/02-THEFIRST.jpg';
import img2 from '../images/03-THEFIRST.jpg';
import img3 from '../images/IMG_0712.jpg';
import img4 from '../images/IMG_0722.jpg';
import img5 from '../images/IMG_0742.jpg';
import img6 from '../images/IMG_3355.jpg';
import img7 from '../images/IMG_6715.jpg';
import img8 from '../images/IMG_6630.jpg';
import img9 from '../images/IMG_6454.jpg';
import img10 from '../images/IMG_6700.jpg';

const Gallery = () => {
  const horizontalSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 500 && horizontalSectionRef.current) {
      const horizontalSections = [horizontalSectionRef.current];

      horizontalSections.forEach((sec) => {
        const thisPinWrap = sec.querySelector('.pin-wrap');
        const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
        const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

        gsap.fromTo(
          thisAnimWrap,
          {
            x: () => (thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()),
          },
          {
            x: () => (thisAnimWrap.classList.contains('to-right') ? getToValue() : 0),
            ease: 'none',
            scrollTrigger: {
              trigger: sec,
              start: 'top top',
              end: () => '+=' + (thisAnimWrap.scrollWidth - window.innerWidth),
              pin: thisPinWrap,
              invalidateOnRefresh: true,
              scrub: true,
            },
          }
        );
      });
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section>
      <div className="gall-head">Gallery</div>
      <section className="horizontal" ref={horizontalSectionRef}>
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            {/* Map over images to render items dynamically */}
            {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, index) => (
              <div className="item" key={index}>
                <img src={img} height="100%" width="auto" alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gallery;
 