import React from 'react';

function Header ({ children }) {
  return (
<>
    <header className='fixed px-2 bottom-0 md:top-0 z-40 w-full h-fit flex items-center'>
      {children}
    </header>
    <div className='hidden md:block h-28'></div>
</>
  );
};

export default Header;
