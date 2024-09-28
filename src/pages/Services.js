import React, { useEffect, useState } from 'react';
import "./services.css";
const Services = () => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: '0px',
    height: '0px',
    opacity: 0,
    transition: 'all 0.5s ease',
  });
  const [lastHoveredCardIndex, setLastHoveredCardIndex] = useState(
    localStorage.getItem('lastHoveredCardIndex') || 0
  );

  useEffect(() => {
    const cards = document.querySelectorAll('a.card');
    const background = document.querySelector('background');

    const initialCardRect = cards[lastHoveredCardIndex]?.getBoundingClientRect();
    if (initialCardRect) {
      const x = initialCardRect.left + window.scrollX + initialCardRect.width / 2;
      const y = initialCardRect.top + window.scrollY + initialCardRect.height / 2;

      setBackgroundStyle((prevStyle) => ({
        ...prevStyle,
        width: `${initialCardRect.width}px`,
        height: `${initialCardRect.height}px`,
        transform: `translate(${x - initialCardRect.width / 2}px, ${
          y - initialCardRect.height / 2
        }px)`,
        opacity: 0,
      }));
    }

    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', function () {
        const rect = card.getBoundingClientRect();
        const x = rect.left + window.scrollX + rect.width / 2;
        const y = rect.top + window.scrollY + rect.height / 2;

        setBackgroundStyle({
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          transform: `translate(${x - rect.width / 2}px, ${y - rect.height / 2}px)`,
          opacity: 1,
        });

        setLastHoveredCardIndex(index);
        localStorage.setItem('lastHoveredCardIndex', index);
      });

      card.addEventListener('mouseleave', () => {
        setBackgroundStyle({
          width: '0px',
          height: '0px',
          opacity: 0,
        });
      });

      card.addEventListener('click', () => {
        card.classList.toggle('zoomed');
        if (card.classList.contains('zoomed')) {
          card.style.position = 'fixed';
          card.style.top = '50%';
          card.style.left = '50%';
          card.style.transform = 'translate(-50%, -50%)';
          card.style.width = '90vw';
          card.style.height = '90vh';
          card.style.zIndex = '1000';
          document.body.classList.add('overflow');
          cards.forEach((otherCard) => {
            if (otherCard !== card) otherCard.classList.add('opacity-0');
          });
        } else {
          card.style = {};
          document.body.classList.remove('overflow');
          cards.forEach((otherCard) => {
            if (otherCard !== card) otherCard.classList.remove('opacity-0');
          });
        }
      });
    });
  }, [lastHoveredCardIndex]);

  return (
    <section>
      <div className="container max-w-5xl mx-auto px-8">
        <div className="serv-main">
          What Will <span style={{ color: '#f18f16' }}>You</span> Get
        </div>
        <div className="card-wraper">
          <div className="background" style={backgroundStyle}></div>
          {[
            {
              title: 'Bookkeeping Services',
              description:
                'Experience seamless financial management with our comprehensive Bookkeeping services. From efficient Accounts payable and receivable management to accurate Bank and Credit Card Reconciliation, we\'ve got you covered. Trust our dependable financial reporting and analysis to keep your business on track for success.',
            },
            {
              title: 'Payroll Services',
              description:
                'Enhance employee satisfaction and streamline your HR processes with our payroll outsourcing services. We ensure precise and timely salary preparation, guaranteeing employee satisfaction. Experience the certainty and efficiency of our comprehensive payroll solutions for seamless HR management.',
            },
            {
              title: 'Bankruptcy',
              description:
                'We offer a wide range of Bankruptcy Support Services tailored to meet the specific needs of insolvency professionals and organizations. Our expert team of professionals has in-depth knowledge of bankruptcy laws and regulations as per your country, enabling us to deliver high-quality and accurate services.',
            },
            {
              title: 'Tax Return Preparations',
              description:
                'Our highly skilled team is dedicated to helping you meet all your tax-related statutory requirements. With our expertise and attention to detail, we ensure compliance with the highest standards, delivering accurate and timely corporate tax returns. Trust us for comprehensive tax assistance you can rely on.',
            },
            {
              title: 'Corporate Research',
              description:
                'At Integrity Data Services, we bring certainty and precision to the process of preparing employee salaries, ensuring timely and accurate transfers that enhance employee satisfaction. Our comprehensive payroll outsourcing services are designed to streamline HR handling and optimize efficiency, empowering your organization for success.',
            },
            {
              title: 'Back Office Support',
              description:
                'While the front office is the "face" of a company, the back office is its backbone. We help you cut down your operational costs by providing top-notch infrastructure and handpicked talent to handle your business activities at reasonable costs.',
            },
          ].map((service, index) => (
            <a
  href="#"
  className="card relative group block p-2 h-full w-full"
  key={index}
  onClick={(e) => e.preventDefault()} // Prevents the default link action
>

              <div className="card-main">
                <div className="card-inner">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
