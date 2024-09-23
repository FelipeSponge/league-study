import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo2.png";
import minhaFoto from "assets/logolol2.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>WELCOME TO THE RIFT</h1>
        <p className={styles.paragrafo}>
          <strong>WHAT IS LEAGUE OF LEGENDS?</strong> League of Legends is a
          team-based strategy game where two teams of five powerful champions
          face off to destroy the other’s base. Choose from over 140 champions
          to make epic plays, secure kills, and take down towers as you battle
          your way to victory.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="logo league of legends"
        />
      </div>
    </div>
  );
}
