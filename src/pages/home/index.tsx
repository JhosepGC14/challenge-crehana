import Layout from "../../components/Layout";
import ContainerSearch from './components/ContainerSearch/index';
import ListCountries from './components/ListCountries/index';

const HomePage = () => {
  return (
    <Layout>
      <section>
        <ContainerSearch/>
      </section>
    </Layout>
  );
};

export default HomePage;
