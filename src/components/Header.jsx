import React from 'react';

function Header ({ children }) {
  return (
<>
    <header className='fixed top-0 left-0 w-full mx-auto px-4 py-6 bg-slate-400 flex justify-between'>
      {children}
    </header>
    <div className='h-20'></div>
</>
  );
};

export default Header;
