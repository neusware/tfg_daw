import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="ml-64 p-6 min-h-screen bg-gray-100">
      {children}
    </main>
  );
};

export default MainContent;
