import { LearnMoreBtn } from "../learnMoreBtn";

export const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutMe");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="HOME">
      <div className="BANNER d-flex flex-column">
        <div className="row justify-content-center align-items-center w-50 ">
          <h5 className="subTitle">Hello I'm Hristijan</h5>
          <h1 className="mainTitle mb-3">
            The best thing come from living{" "}
            <span className="quote">outside of your comfort zone.</span>
          </h1>
          <p className="mainDesc">
            I'm an enthusiast in the field of web programming, passionate about
            building dynamic and meaningful web applications. My journey began
            with creating simple projects using HTML and CSS, and over time,
            I've grown into developing fully functional, modern web pages that
            bring real value to users.
          </p>
        </div>
        <button className="goOnAboutMe" onClick={scrollToAbout}>
          About Me
        </button>
      </div>
    </div>
  );
};
