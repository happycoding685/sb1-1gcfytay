import React from 'react';
import { Settings } from 'lucide-react';
import { Post } from '../components/post/Post';

const PROFILE_POSTS = [
  {
    id: 1,
    username: 'currentuser',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop',
    caption: 'My latest adventure 🌄',
    likes: 423
  }
];

export function ProfilePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-2xl font-light">currentuser</h1>
              <button className="px-4 py-1.5 border border-gray-200 rounded-md font-medium">
                Edit Profile
              </button>
              <Settings className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex space-x-8">
              <span><b>1</b> post</span>
              <span><b>234</b> followers</span>
              <span><b>345</b> following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="grid grid-cols-3 gap-1 mt-4">
          {PROFILE_POSTS.map(post => (
            <div key={post.id} className="aspect-square">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}