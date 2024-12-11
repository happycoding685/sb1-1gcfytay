import React from 'react';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-800 hover:text-gray-600 transition-colors ${isActive ? 'text-blue-500' : ''}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">Instagram</NavLink>
        
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={linkClass} end>
            <Home className="w-6 h-6" />
          </NavLink>
          <NavLink to="/search" className={linkClass}>
            <Search className="w-6 h-6" />
          </NavLink>
          <NavLink to="/create" className={linkClass}>
            <PlusSquare className="w-6 h-6" />
          </NavLink>
          <NavLink to="/activity" className={linkClass}>
            <Heart className="w-6 h-6" />
          </NavLink>
          <NavLink to="/profile" className={linkClass}>
            <User className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}