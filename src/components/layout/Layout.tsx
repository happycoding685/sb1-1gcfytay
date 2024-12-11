import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <Header />
      <Outlet />
    </div>
  );
}