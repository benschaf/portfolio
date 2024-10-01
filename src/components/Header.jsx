import React from 'react';

function Header ({ children }) {
  return (
<>
    <header className='fixed top-0 left-0 z-40 w-full mx-auto px-4 py-2 flex items-center'>
      {children}
    </header>
    <div className='hidden md:block h-28'></div>
</>
  );
};

export default Header;
