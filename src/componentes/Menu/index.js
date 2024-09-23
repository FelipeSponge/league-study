import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/sobremim">About the game</MenuLink>
      </nav>
    </header>
  );
}
