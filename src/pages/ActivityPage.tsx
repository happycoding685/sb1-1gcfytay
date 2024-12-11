import React from 'react';

const ACTIVITIES = [
  { id: 1, username: 'johndoe', action: 'liked your photo', time: '1h ago' },
  { id: 2, username: 'janedoe', action: 'started following you', time: '2h ago' },
  { id: 3, username: 'photography_lover', action: 'commented on your post', time: '3h ago' }
];

export function ActivityPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Activity</h1>
      <div className="bg-white rounded-lg shadow-sm">
        {ACTIVITIES.map(activity => (
          <div key={activity.id} className="p-4 border-b last:border-b-0">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">{activity.username}</span>{' '}
                <span className="text-gray-600">{activity.action}</span>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}