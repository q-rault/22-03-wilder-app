import { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import AddWilderForm from '../components/WilderForm';
import CardList from '../components/CardListComponent';
import { readWilders } from '../api/wilderAPI';
import { NextPage } from 'next';
import { IWilder } from '../components/WilderCardComponent';
import config from '../config/config';

const client = new ApolloClient({
  uri: config.api.url,
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Query {
        getAllWilders {
          _id
          name
          city
          skills {
            _id
            title
            votes
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default Home;
