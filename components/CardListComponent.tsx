import WilderCard, { IWilder } from './WilderCardComponent';
import styles from '../styles/CardListStyles.module.css';

const CardList = ({
  wilders,
  handleTrigger,
  setWilders,
}: {
  wilders: IWilder[];
  handleTrigger: () => void;
  setWilders: any;
}) => {
  return (
    <main className={styles.container + ' container'}>
      <h2>Wilders</h2>
      <section className={styles['card-row']}>
        {wilders.map((wilder) => (
          <WilderCard
            key={wilder.name}
            wilder={wilder}
            setWilders={setWilders}
          />
        ))}
      </section>
    </main>
  );
};

export default CardList;
