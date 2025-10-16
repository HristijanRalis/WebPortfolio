import { LearnMoreBtn } from "../learnMoreBtn";

export const Home = () => {
  return (
    <div className="HOME">
      <div className="BANNER">

          <div className="row ">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img src="/images/ralisMain.png" alt="" className="BannerImage" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-start">
              <h1 className="TITLE">
                <span>Hi, I am </span> Hristian Ralevski
              </h1>
              <p className="description">
                I’m interested in field of web development and creating a
                dinamicand modern leyouts for web pages. Now I'm at Brainster
                academy for Front-End .
              </p>
              <LearnMoreBtn targetId="aboutMe" />
            </div>
          </div>
     
      </div>
    </div>
  );
};
