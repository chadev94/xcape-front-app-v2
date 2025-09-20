import styles from "@/styles/modules/menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={`${styles.menu} `}>XCAPE</div>
      <div className={`${styles.menu} `}>ROOMS</div>
      <div className={`${styles.menu} `}>RESERVATION</div>
    </div>
  );
};

export default Menu;
