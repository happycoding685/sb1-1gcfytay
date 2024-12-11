import React from 'react';
import { Post } from '../post/Post';

const POSTS = [
  {
    id: 1,
    username: 'johndoe',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop',
    caption: 'Beautiful sunset at the beach! 🌅',
    likes: 1234
  },
  {
    id: 2,
    username: 'janedoe',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=600&h=600&fit=crop',
    caption: 'Coffee time ☕️',
    likes: 856
  }
];

export function Feed() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {POSTS.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}