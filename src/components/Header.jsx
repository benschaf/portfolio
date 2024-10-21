import React from 'react';

function Header ({ children }) {
  return (
<>
    <header className='fixed w-full z-40 flex justify-between p-4'>
      {children}
    </header>
    <div className='hidden md:block h-28'></div>
</>
  );
};

export default Header;
