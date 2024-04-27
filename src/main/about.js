import React from 'react'
import './AboutUs.css'
export default function about() {
  return (
    <div className='about-us'>
      <h1 className="about-us__title">About Find You??</h1>
      <p className="about-us__description">
        Find You?? is a leading online platform designed to bridge the gap
        between job seekers and employers. We strive to empower both parties by
        providing a seamless and efficient recruitment experience.
      </p>
      <section className="about-us__benefits">
        <h2>What We Offer</h2>
        <ul className="about-us__benefits-list">
          <li>
            For Job Applicants: Find a wide range of job opportunities across
            various industries and locations. Easily apply for jobs and showcase
            your skills and experience through a user-friendly platform.
          </li>
          <li>
            For Recruiters: Reach out to a pool of qualified job seekers. Streamline
            your recruitment process by efficiently managing applications and
            connecting with the right candidates.
          </li>
          <li>
            For College Admin (Optional): Facilitate career opportunities for your
            students and alumni. Partner with recruiters to host job fairs and
            campus placements directly through our platform.
          </li>
        </ul>
      </section>
      <p className="about-us__conclusion">
        Join Find You?? today and unlock a world of possibilities!
        Whether you're a job seeker looking for your dream career or an employer
        seeking top talent, we're here to help you achieve your goals.
      </p>
      <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
      </footer>

    </div>
  )
}
