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
                  LFC "Lecture For Coding" is my firs real project with impact.
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
                  LFC "Lecture For Coding" is my firs real project with impact.
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
                  LFC "Lecture For Coding" is my firs real project with impact.
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
