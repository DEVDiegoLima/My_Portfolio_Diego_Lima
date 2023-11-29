import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>
          Sinta-se á vontade <br />
          para entra em contato!
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/diego-lima-a3aa81253/">
            linkedin.com/Diego Lima
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/DEVDiegoLima">
            github.com/DEVDiegoLima
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:diegogoncalvesreisdelima21@gmail.com">
            diegogoncalvesreisdelima21@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};
