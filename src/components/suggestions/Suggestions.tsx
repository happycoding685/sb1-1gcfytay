import React from 'react';

const SUGGESTIONS = [
  {
    id: 1,
    username: 'photography_lover',
    userImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    username: 'traveler_123',
    userImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    username: 'foodie_adventures',
    userImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop',
  }
];

export function Suggestions() {
  return (
    <div className="hidden lg:block w-80 fixed right-0 top-20 p-6">
      <h2 className="text-gray-500 font-medium mb-4">Suggestions For You</h2>
      <div className="space-y-4">
        {SUGGESTIONS.map(suggestion => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={suggestion.userImage} 
                alt={suggestion.username} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-sm">{suggestion.username}</p>
                <p className="text-xs text-gray-500">Suggested for you</p>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-medium">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}