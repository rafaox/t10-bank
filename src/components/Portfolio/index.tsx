import '../../styles/Portfolio/portfolio.scss';

import Thumb1 from '../../assets/thumb/fish.png';
import Thumb2 from '../../assets/thumb/fish.png';
import Thumb3 from '../../assets/thumb/thumbnail-918x656-01-8be87c.png';
import Thumb4 from '../../assets/thumb/How-UX-UI-Design-Will-Help-Your-Business-Succeed.png';
import { Overlay } from './Overlay';

export function Portfolio() {
  return (
    <section className="portfolioSection">
      <div className="boxTitle">
        <h2>PORTFOLIO</h2>
        <div className="boxShadow"></div>
      </div>

      <div className="boxSubTitle">
        <h3>Meus trabalhos</h3>
        <div className="boxShadow"></div>
      </div>

      <div className="gridWorks">
        <div className="workItem">
          <img src={Thumb1} alt="Trabalhos" />
          <Overlay />
        </div>

        <div className="workItem">
          <img src={Thumb2} alt="Trabalhos" />
          <Overlay />
        </div>

        <div className="workItem">
          <img src={Thumb3} alt="Trabalhos" />
          <Overlay />
        </div>

        <div className="workItem">
          <img src={Thumb4} alt="Trabalhos" />
          <Overlay />
        </div>
      </div>
    </section>
  );
}