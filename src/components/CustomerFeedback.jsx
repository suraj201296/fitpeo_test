import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
    },
    {
      name: 'Dianne Russell',
      avatar: 'https://i.pravatar.cc/150?img=6',
      rating: 4,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
    },
    {
      name: 'Devon Lane',
      avatar: 'https://i.pravatar.cc/150?img=7',
      rating: 4,
      feedback: 'Normally my wings are lean and meaty and tender, and their wings are lean and meaty and tender and...'
    }
  ];

  return (
    <div className="bg-gray-700 p-4 rounded-lg h-full">
      <h2 className="text-xl font-semibold text-gray-300 mb-4">Customer's Feedback</h2>
      <div className="space-y-4 overflow-y-auto h-[25rem] custom-scrollbar">
        {feedbacks.map((feedback, index) => (
          <div key={index} className={`${index !== feedbacks.length - 1 ? 'border-b border-gray-500' : ''} pb-4`}>
            <div className="flex items-center mb-2">
              <img className="w-10 h-10 rounded-full" src={feedback.avatar} alt={feedback.name} />
              <div className="ml-3">
                <p className="text-gray-300 font-semibold">{feedback.name}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={` ${i < feedback.rating ? 'text-yellow-300' : 'text-gray-500'} `} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
