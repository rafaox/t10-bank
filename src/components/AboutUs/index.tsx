import '../../styles/AboutUs/aboutUs.scss';

import aboutUSImage from '../../assets/freelancer-bearded-man-taking-notes-laptop_85574-3146.png';

export function AboutUs() {
  return (
    <section className="aboutUSSection">
      <div className="boxTitle">
        <h2>SOBRE NÓS</h2>
        <div className="boxShadow"></div>
      </div>

      <div className="aboutUsContainer">
        <div className="aboutUsImageContainer">
          <img src={aboutUSImage} alt="Qual o seu próximo projeto?" />

          <div className="backDots">dots</div>
        </div>

        <div className="auInformation">
          <h2>Qual o seu próximo projeto?</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</p>

          <button>Download CV</button>
        </div>
      </div>
    </section>
  );
}