import React from "react";
import { Title } from "../Title";
import { Description } from "../Description";

export const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="container text-center">
        <div className="row justify-content-center">
          <Title title="About Me" />
        </div>

        <div className="row justify-content-center py-4">
          <Description
            description="I’m an enthusiast in the field of web programming, passionate about building dynamic and meaningful web applications. My journey began with creating simple projects using HTML and CSS, and over time, I’ve grown into developing fully functional, modern web pages that bring real value to users.

I actively manage my own Instagram profile, where I share code snippets, mini-projects, and insights related to HTML, CSS, and JavaScript, inspiring others who are also starting their web development journey.

I’m now nearing completion of the Front-End Academy at Brainster, where I’ve gained solid, hands-on experience in technologies such as HTML5, modern CSS, SCSS for structured styling, Bootstrap for responsive design, JavaScript for interactivity, TypeScript, and the React framework for building scalable, component-based applications. Additionally, I’ve learned to collaborate and manage projects using GitHub, preparing me for efficient and professional teamwork in real-world environments."
          />
        </div>
      </div>
    </div>
  );
};
