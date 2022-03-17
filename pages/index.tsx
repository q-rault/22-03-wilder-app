import { useEffect, useState } from 'react';
import AddWilderForm from '../components/WilderForm';
import CardList from '../components/CardListComponent';
import { readWilders } from '../api/wilderAPI';
import { NextPage } from 'next';
import { IWilder } from '../components/WilderCardComponent';

const Home: NextPage = () => {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  const fetchData = async () => {
    try {
      const result = await readWilders();
      setWilders(result?.data?.result || []);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <AddWilderForm setWilders={setWilders} />
      <CardList wilders={wilders} setWilders={setWilders} />
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
