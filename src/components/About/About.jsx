import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/chibi_minato.png")}
          alt="Imagem do minito chibi"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Front-End</h3>
              <p>
                Sou desenvolvedor front-end com experiência na construção de
                site responsivos e otimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Back-end</h3>
              <p>
                Venho aprimorando minhas habilidades no Back-end para um
                desenvolvimento rápido e otimizado.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
