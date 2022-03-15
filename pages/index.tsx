import { useEffect, useState } from 'react';
import AddWilderForm from '../components/WilderForm';
import CardList from '../components/CardListComponent';
import { readWilders } from '../api/wilderAPI';

const Home = () => {
  const [wilders, setWilders] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const fetchData = async () => {
    try {
      const result = await readWilders();
      setWilders(result.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [trigger]);

  const handleTrigger = () => {
    setTrigger(trigger + 1);
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <AddWilderForm handleTrigger={handleTrigger} />
      <CardList wilders={wilders} handleTrigger={handleTrigger} />
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
