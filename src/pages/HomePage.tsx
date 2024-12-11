import React from 'react';
import { Feed } from '../components/feed/Feed';
import { Suggestions } from '../components/suggestions/Suggestions';

export function HomePage() {
  return (
    <main className="flex">
      <Feed />
      <Suggestions />
    </main>
  );
}