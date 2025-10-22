import { Title } from "../Title";

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="container">
        <div className="row text-center py-5">
          <Title title="Projects" />
        </div>
        <div className="ProjectsContainer">
          <a
            href="https://lfcmkd.netlify.app/"
            className="ProjectBody"
            target="_blank"
          >
            <div className="ProjectContent">
              <div className="ProjectImage">
                <img src="/images/LFC.png" alt="lfc" />
              </div>
              <div className="ProjectDescription">
                <h4>LFC</h4>
                <p>
                  LFC (Lecture For Coding) is my first major project with real
                  impact. Its main goal is to provide beginners with a solid
                  foundation in web development by teaching the fundamentals of
                  HTML, CSS, and JavaScript. In the future, the platform will be
                  expanded to include more advanced modules such as React,
                  Next.js, and Bootstrap, offering a complete learning path for
                  aspiring developers.
                </p>

                <div className="stacks">
                  <div className="stacksTitle">
                    <h4>stacks</h4>
                  </div>

                  <div className="stacksContent">
                    <button className="stackBtn">HTML</button>
                    <button className="stackBtn">CSS</button>
                    <button className="stackBtn">Javascript</button>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://youth-cann.netlify.app/"
            className="ProjectBody"
            target="_blank"
          >
            <div className="ProjectContent">
              <div className="ProjectImage">
                <img src="/images/YOUTH.png" alt="youth" />
              </div>
              <div className="ProjectDescription">
                <h4>Youth Can</h4>
                <p>
                  Youth Can is a platform that showcases the most valuable ideas
                  and perspectives of young people. It serves as a space where
                  youth can explore what truly matters in today’s world and
                  share their vision for a better future. At its core, the
                  platform embraces the belief that young people are the driving
                  force behind the progress of civil society, and that activism
                  is their most powerful tool for achieving positive social
                  change.
                </p>

                <div className="stacks">
                  <div className="stacksTitle">
                    <h4>stacks</h4>
                  </div>

                  <div className="stacksContent">
                    <button className="stackBtn">HTML</button>
                    <button className="stackBtn">CSS</button>
                    <button className="stackBtn">Javascript</button>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://safeblinkmk.netlify.app/#index"
            className="ProjectBody"
            target="_blank"
          >
            <div className="ProjectContent">
              <div className="ProjectImage">
                <img src="/images/safeblink.png" alt="safeblink" />
              </div>
              <div className="ProjectDescription">
                <h4>SafeBlink</h4>
                <p>
                  Safe Blink is a fully responsive, one-page web app focused on
                  educating users about safe internet navigation..
                </p>

                <div className="stacks">
                  <div className="stacksTitle">
                    <h4>stacks</h4>
                  </div>

                  <div className="stacksContent">
                    <button className="stackBtn">HTML</button>
                    <button className="stackBtn">CSS</button>
                    <button className="stackBtn">Javascript</button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
