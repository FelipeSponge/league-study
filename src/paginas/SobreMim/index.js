import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"About the game"}>
      <h3 className={styles.subtitulo}>League of Legends</h3>
      <img
        src={fotoSobreMim}
        alt="foto do logo de league of legends"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Is a popular multiplayer online battle arena (MOBA) game developed and
        published by Riot Games. Since its release in 2009, it has grown to
        become one of the most played and watched games in the world, attracting
        millions of players and viewers.
      </p>
      <p className={styles.paragrafo}>
        In the game, two teams of five players each compete against each other
        with the primary objective of destroying the enemy's Nexus, a structure
        located within their base. Each player controls a unique "champion" with
        special abilities and roles, such as damage dealing, tanking, or
        supporting teammates. Success in the game requires teamwork, strategy,
        and quick reflexes.
      </p>
      <p className={styles.paragrafo}>
        League of Legends features a dynamic and ever-evolving gameplay
        experience, with regular updates, new champions, and various game modes.
        It has a thriving esports scene, with tournaments like the League of
        Legends World Championship (Worlds) where the best teams from around the
        globe compete for fame, glory, and substantial prize money.
      </p>
      <p className={styles.paragrafo}>
        The game is free to play, with a monetization model based on cosmetic
        items, such as skins for champions, which allow players to customize
        their appearance. This business model, along with consistent updates and
        community engagement, has helped League of Legends maintain its
        popularity for over a decade.
      </p>
      <p className={styles.paragrafo}>
        If you’re looking for a competitive and challenging game with a massive
        community and rich lore, League of Legends might be worth a try!
      </p>
    </PostModelo>
  );
}
