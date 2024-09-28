import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './galler.css'; // Import your CSS file

// Import your image files
import img1 from '../images/02-THEFIRST.jpg';
import img2 from '../images/03-THEFIRST.jpg';
import img3 from '../images/IMG_0712.jpg';
import img4 from '../images/IMG_0742.jpg';
import img5 from '../images/IMG_3355.jpg';
import img6 from '../images/IMG_6630.jpg';
import img7 from '../images/IMG_6454.jpg';
import img8 from '../images/IMG_0722.jpg';

const Gallery = () => {
  const horizontalSectionsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 500) {
      const horizontalSections = horizontalSectionsRef.current.children;

      Array.from(horizontalSections).forEach((section, i) => {
        const thisPinWrap = section.querySelector('.pin-wrap');
        const thisAnimWrap = section.querySelector('.animation-wrap'); // Corrected line

        if (thisAnimWrap) { // Check if thisAnimWrap is not undefined
          const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

          gsap.fromTo(
            thisAnimWrap,
            {
              x: () =>
                thisAnimWrap.classList.contains('to-right') ? 0 : getToValue(),
            },
            {
              x: () =>
                thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => '+=' + (thisAnimWrap.scrollWidth - window.innerWidth),
                pin: thisPinWrap,
                invalidateOnRefresh: true,
                scrub: true,
              },
            }
          );
        }
      });
    }

    // Cleanup function to prevent memory leaks
    return () => {
      if (gsap.ticker.isActive()) {
        gsap.ticker.remove();
      }
    };
  }, []);

  return (
    <section>
      <div className="gall-head">Gallery</div>

      <section className="horizontal" ref={horizontalSectionsRef}>
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            {/* Replace these placeholders with your actual image URLs */}
            <div className="item">
              <img src={img1} height="100%" width="auto" alt="1" />
            </div>
            <div className="item">
              <img src={img2} height="100%" width="auto" alt="2" />
            </div>
            <div className="item">
              <img src={img3} height="100%" width="auto" alt="3" />
            </div>
            <div className="item">
              <img src={img4} height="100%" width="auto" alt="4" />
            </div>
            <div className="item">
              <img src={img5} height="100%" width="auto" alt="3" />
            </div>
            <div className="item">
              <img src={img6} height="100%" width="auto" alt="3" />
            </div>
            <div className="item">
              <img src={img7} height="100%" width="auto" alt="3" />
            </div>
            <div className="item">
              <img src={img8} height="100%" width="auto" alt="3" />
            </div>

            {/* Add more image items as needed */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gallery;