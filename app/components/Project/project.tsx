// components/Projects/Projects.tsx

import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <section id="page2">
      <div className="container">
        <h1>My Projects</h1>
        <div className="project">
          <div className="project-info">
            <h3>Awareness on Women Against Abuse</h3>
            <p>This is a Community Service Project where we worked as a team. In this project, we mainly focused on women in rural areas who are facing problems and not able to give any complaint. So our main goal is to make a platform available for every woman in rural area as they can register a complaint from our website.</p>
            <a href="https://women-against-abuse.web.app/home">Link to view complete website</a>
          </div>
          <div className="project-image">
            <img src="/woman.jpeg" alt="Project 1 Image" />
          </div>
        </div>
        <div className="project">
          <div className="project-info">
            <h3>Tourista</h3>
            <p>Toursita is a web application that aims about tourism in southern stats of India.
                    It is a Rect Js application.
                    The main goal of this application is whe a user search for a specific place it shows the results of that place 

                    and give the inforation about how much it costs for a person to travel that place.

                    This websitealso provides the step by step guide for how to plan a trip what are the neccesarry things to know about the trip.
</p>
           </div>
          <div className="project-image">
            <img src="/tour.jpeg" alt="Project 1 Image" />
          </div>
        </div><div className="project">
          <div className="project-info">
            <h3>Data Science</h3>
            <p>As I am very passionate about data science,

I started my journey from BHARATH INTERN!

where i engaged through several projects during that internship and gained experience in 

the vision of data science.
One of my best project is Gender-Age-Prediction that predicts the gender and age of a person from the image.

SMS classifier is also placed a key role for me to learn about NLP(Natural Language Processing).


check my github to know about my projects.</p>
           </div>
          <div className="project-image">
            <img src="/datascience.jpeg" alt="Project 1 Image" />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
