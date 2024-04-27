import React from 'react';
import './css/TrendingSkills.css'

const skillsData = [
  {
    title: 'Artificial Intelligence (AI) & Machine Learning (ML)',
    description:
      'Develop intelligent systems that can learn, reason, and make decisions.'
  },
  {
    title: 'Cloud Computing',
    description:
      'Design, develop, and deploy applications on cloud platforms for scalability and efficiency.'
  },
  {
    title: 'Cybersecurity',
    description:
      'Protect systems, networks, and data from cyberattacks and threats.'
  },
  {
    title: 'Data Science & Analytics',
    description:
      'Extract valuable insights from data to inform decision-making and business strategies.'
  },
  {
    title: 'DevOps',
    description:
      'Combine development, operations, and security to streamline software delivery.'
  },
  {
    title: 'Full-Stack Development',
    description:
      'Build and maintain both front-end and back-end components of web applications.'
  },
  {
    title: 'Internet of Things (IoT)',
    description:
      'Design and develop interconnected devices that collect and exchange data.'
  },
  {
    title: 'Software Development Methodologies (Agile, Scrum)',
    description:
      'Embrace flexible and iterative software development processes for adaptability.'
  },
  {
    title: 'Blockchain',
    description:
      'Develop secure and transparent distributed ledger technologies for various applications.'
  }
];

export default function TrendingSkills() {
  return (
    <section className="trending-skills">
      <h2>Trending Skills in 2024 (Engineering)</h2>
      <p>
        The engineering landscape is constantly evolving, and new skills are
        emerging as in-demand assets. This list highlights some of the most
        trending skills for engineers in 2024. Mastering these skills can
        help you stay competitive and advance your career in the engineering
        field.
      </p>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </li>
          
        ))}
      </ul>
      <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
    </section>
  );
}
