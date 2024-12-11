import React from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export function Post({ username, userImage, image, caption, likes }: PostProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="p-4 flex items-center">
        <img 
          src={userImage} 
          alt={username} 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="ml-3 font-medium">{username}</span>
      </div>
      
      <img src={image} alt="Post" className="w-full aspect-square object-cover" />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-600"><Heart className="w-6 h-6" /></button>
            <button className="hover:text-gray-600"><MessageCircle className="w-6 h-6" /></button>
            <button className="hover:text-gray-600"><Send className="w-6 h-6" /></button>
          </div>
          <button className="hover:text-gray-600"><Bookmark className="w-6 h-6" /></button>
        </div>
        
        <p className="font-medium mb-1">{likes.toLocaleString()} likes</p>
        <p>
          <span className="font-medium mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </article>
  );
}