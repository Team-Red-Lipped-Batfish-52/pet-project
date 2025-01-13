import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile';
import SearchContainer from '../SearchContainer';
import SearchNavigation from '../SearchNavigation';
import SearchResults from '../SearchResults';

const SearchPage = () => {
  return (
    <Layout>
      <SearchContainer />
      <UserProfile />
    </Layout>
  );
};

export default SearchPage;
