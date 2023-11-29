import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Oi, Eu sou Diego</h1>
          <p className={styles.description}>
            Desenvolvedor júnior especializado em React, procurando
            oportunidades para aplicar e aprimorar habilidades. Aberto a
            desafios, pronto para contribuir e aprender.
          </p>
          <a
            className={styles.contactBtn}
            href="mailto:diegogoncalveisreisdelima@gmail.com"
          >
            Contate Me
          </a>
        </div>
        <img
          className={styles.heroImg}
          src={getImageUrl("hero/miniMinato.png")}
          alt="minato com manto da raposa de nove caudas"
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
}

export default Hero;
