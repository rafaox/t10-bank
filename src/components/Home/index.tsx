import '../../styles/Home/home.scss';

import { ReactComponent as Work } from '../../assets/inovation-design-experience.svg';

export function Home() {
  return (
    <section className="homeSection">
      <div>
        <h1>Inovação, Design e</h1>
        <h1><strong>Experiência</strong></h1>
        <p>Sempre a frente em soluções digitais</p>

        <button>Saiba mais</button>
      </div>

      <Work />
    </section>
  );
}