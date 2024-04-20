// layout.tsx

import React from 'react';
import Head from 'next/head';
import Header from './components/Header/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"  crossOrigin="anonymous" />
        <script src="https://kit.fontawesome.com/9a8523f19d.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </>
  );
};

export default Layout;
