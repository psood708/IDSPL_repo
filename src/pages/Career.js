import React, { useState, useEffect } from 'react';
import './career.css'; // Import your CSS file

const Career = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_no: '',
    gender: '',
    position: '',
    dob: '',
    qualification: '',
    portfolio_website: '',
    resume: null,
    last_company: '',
    years_experience: '',
    months_experience: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, ...rest } = formData; // Destructure form data

    const formattedData = `
      Name: ${first_name} ${last_name}
      Email: ${email}

      ${Object.entries(rest) // Convert remaining data to key-value pairs
        .map(([key, value]) => `- ${key}: ${value}`)
        .join('\n')}
    `;

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/service_id/template_id/users/user_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your template ID
          user_id: 'YOUR_USER_ID', // Replace with your user ID
          from_name: 'Integrity Careers Form',
          to_name: 'HR - IDSPL',
          reply_to: email,
          subject: 'New Job Application',
          message: formattedData,
          attachments: [formData.resume ? formData.resume : null], // Attach resume if available
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        // Clear form or show success message
        // ...
      } else {
        console.error('Failed to send email:', response.statusText);
        // Handle error gracefully
        // ...
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error gracefully
      // ...
    }
  };

  return (
    <div className='car'>
      <div className="integrity" style={{ color: '#057588' }}>
        Careers <span style={{ color: 'orange' }}>@Integrity</span>
      </div>

      <div className="container-career">
        <h1>Apply Here</h1>
        <p>
          Cultivating Pride and Leadership at Integrity Data Services. Your growth trajectory is guided by transparent policies. Interested in joining our dynamic team? Fill out the form below.
        </p>

        <form action="your-server-side-script-url" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="first_name"
              placeholder="First name *"
              required
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name *"
              required
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile_no"
              placeholder="Mobile No *"
              required
              value={formData.mobile_no}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <select name="gender" required value={formData.gender} onChange={handleChange}>
              <option value="" disabled selected>Gender *</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group full">
            <input
              type="text"
              name="position"
              placeholder="Position you are applying for"
              required
              value={formData.position}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth (DD/MM/YYYY) *"
              required
              value={formData.dob}
              onChange={handleChange}
            />
            <input
              type="text"
              name="qualification"
              placeholder="Highest Qualification"
              required
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              name="portfolio_website"
              placeholder="Portfolio website (optional)"
              value={formData.portfolio_website}
              onChange={handleChange}
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
            />
          </div>
          <p className="note">Upload Resume (Max size 1 MB)</p>

          <div className="form-group">
            <input
              type="text"
              name="last_company"
              placeholder="Last company you worked for"
              value={formData.last_company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group small-inputs">
            <input
              type="number"
              name="years_experience"
              placeholder="Years of Experience"
              value={formData.years_experience}
              onChange={handleChange}
            />
            <input
              type="number"
              name="months_experience"
              placeholder="Months of Experience"
              value={formData.months_experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <textarea
              name="comments"
              placeholder="Reference / Comments / Questions"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group full">
            <input type="submit" value="Submit Application" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;