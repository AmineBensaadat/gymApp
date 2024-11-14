// src/pages/dashboard.js
import Layout from '../components/Layout';
import withAuth from '../utils/withAuth';

const Dashboard = () => (
  <Layout>
    <h1>Welcome </h1>
    {/* Add your dashboard content here */}
  </Layout>
);

export default withAuth(Dashboard);
