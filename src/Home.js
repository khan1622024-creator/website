import React from "react";

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Hi, I'm Alim Khan 👋</h1>
        <h2>B.Tech CSE Student</h2>
        <p>
          Passionate about Web Development, Java, and Backend Technologies.
          Currently learning React and Spring Boot.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript & React</li>
          <li>Java & Spring Boot</li>
          <li>MySQL</li>
        </ul>
      </section>

      <section className="stats">
        <h2>My Journey</h2>
        <p>📚 3rd Semester CSE Student</p>
        <p>💻 10+ Mini Projects Completed</p>
        <p>🚀 Currently Building Full Stack Applications</p>
      </section>
    </div>
  );
}

export default Home;
