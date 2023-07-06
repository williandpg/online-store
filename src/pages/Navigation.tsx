import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

function Navigation() {
  return (
    <>
      <aside>
        <Categories />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navigation;
