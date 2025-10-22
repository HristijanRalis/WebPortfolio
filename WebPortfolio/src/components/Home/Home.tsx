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
        <div className="BannerContainer">
          <h5 className="subTitle">Hello I'm Hristijan</h5>
          <h1 className="mainTitle mb-3">
            The best things come from living{" "}
            <span className="quote">outside of your comfort zone.</span>
          </h1>
          <p className="mainDesc">
            I'm an enthusiast in the field of web programming
          </p>
        </div>

        <button className="goOnAboutMe" onClick={scrollToAbout}>
          About Me
        </button>
      </div>
    </div>
  );
};
