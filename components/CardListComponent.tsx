import WilderCard from "./WilderCardComponent";
import styles from "../styles/CardListStyles.module.css";

const CardList = ({ wilders, handleTrigger }) => {
  return (
    <main className={styles.container + " container"}>
      <h2>Wilders</h2>
      <section className={styles["card-row"]}>
        {wilders.map((wilder) => (
          <WilderCard
            key={wilder.name}
            wilder={wilder}
            handleTrigger={handleTrigger}
          />
        ))}
      </section>
    </main>
  );
};

export default CardList;
