import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile';
import SearchContainer from '../SearchContainer';
import SearchNavigation from '../SearchNavigation';
import SearchResults from '../SearchResults';

const SearchPage = () => {
  return (
    <Layout>
      <div className='flex gap-8 max-w-[1400px] mx-auto px-4'>
        <div className='w-64 flex-shrink-0'>
          <UserProfile />
        </div>
        <div className='flex-1 min-w-0'>
          <SearchContainer />
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
