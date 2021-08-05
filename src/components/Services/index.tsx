import '../../styles/Services/services.scss';

import DesignUI from '../../assets/design.svg';

export function Services() {
  return (
    <section className="servicesSection">
      <div className="boxTitle">
        <h2>SERVIÇOS</h2>
        <div className="boxShadow"></div>
      </div>

      <div className="boxSubTitle">
        <h3>Proporcionamos uma melhor experiência</h3>
        <div className="boxShadow"></div>
      </div>

      <div className="servicesContainer">
        <div className="designUI">
          <h3>85%</h3>

          <div className="skillContainer">
            <div className="skills skillBar"></div>
          </div>

          <h4>Design UI</h4>

          <p>Photoshop, Illustrator</p>

          <div className="backDots">dots</div>
        </div>

        <div className="informationDesign">
          <img src={DesignUI} alt="Design UI" />

          <h3>Design</h3>

          <div></div>

          <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>

          <button>Saiba mais &#8594;</button>
        </div>
      </div>
    </section>
  );
}