import React from 'react';
import Banner from './Banner';
import UserProfile from './UserProfile';

// Layout component will provide basic structure for all pages
const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Import Banner component */}
      <Banner />

      <div className='container mx-auto px-4 py-8 flex gap-8'>
        <div className='flex gap-8'>
          {/* User Profile sidebar that persists across pages */}
          <aside className='w-64 flex-shrink-0'>
            <UserProfile />
          </aside>

          {/* Main content */}
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
