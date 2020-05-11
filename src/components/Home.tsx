import * as React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack! lalalalala</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;