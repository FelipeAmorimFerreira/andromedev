import React from "react";
import Layout from "../components/layouts/layout";
import Margarete from "../assets/svg/margarete.svg";
import Planet1 from '../assets/svg/planeta1.svg';
import Planet2 from '../assets/svg/planeta2.svg';
import Planet3 from '../assets/svg/planeta3.svg';
import Planet4 from '../assets/svg/planeta4.svg';
import Planet5 from '../assets/svg/planeta5.svg';
import Logo from '../assets/png/andromedev.png'
import '../styles/home.css'

const Home = () => {
  return (
    <Layout>
      <section className="w-full linear">
        <div className="w-full flex justify-center mx-auto max-w-3xl my-8">
          <article>
            <div className="xl:max-w-lg flex flex-col items-center justify-center xl:mx-auto">
              <img
                src={Logo}
                alt="Andromedev Logo"
              />
              <p className="p-2 text-white text-center sm:text-xl">
                O primeiro evento organizado de mentoria pela OpenDevUFCG com o intuito de incentivar a participação de estudantes
                da UFCG em projetos open source!
            </p>
              <div className="p-2 block w-full py-6 px-6 text-center">
                <a className="text-white w-full block bg-blue-700 hover:bg-blue-600 px-4 py-2" href="#">
                  INSCRIÇÕES
                </a>
              </div>
            </div>
          </article>
          <article className="w-1/2 relative">
            <img
              className="absolute inset-0 h-full w-full"
              src={Margarete}
              alt="Margarete Happy!"
            />
          </article>
        </div>
      </section>
      <section className="planets-section relative">
        <img className="planet absolute z-10 h-auto" src={Planet1} alt="Planet1" />
        <img className="planet absolute z-10 h-auto" src={Planet2} alt="Planet2" />
        <img className="planet absolute z-10 h-auto" src={Planet3} alt="Planet3" />
        <img className="planet absolute z-10 h-auto" src={Planet4} alt="Planet4" />
        <img className="planet absolute z-10 h-auto" src={Planet5} alt="Planet5" />
      </section>
    </Layout>
  );
};

export default Home;
