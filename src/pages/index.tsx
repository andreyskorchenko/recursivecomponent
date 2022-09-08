import type { NextPage } from 'next';
import { files } from '../data/files';
import { Expander } from '../components/Expander';

const Home: NextPage = () => {
  return <Expander item={files} />;
};

export default Home;
