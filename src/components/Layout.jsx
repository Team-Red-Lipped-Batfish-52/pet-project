import React, { useState } from 'react';
import Banner from './Banner';
import UserProfile from './UserProfile';
import ZipSearch from './ZipSearch';

// Layout component will provide basic structure for all pages
const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* Import Banner component */}
      <Banner />
      <div className='container mx-auto px-4 py-8 flex gap-8'>
        <div className='flex gap-8'>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

// const [newLocation, setNewLocation] = useState(null);

{
  /* <div>
            {React.children.map(children, (child) =>
              React.cloneElement(child, { newLocation, setNewLocation })
            )}
          </div> */
}
