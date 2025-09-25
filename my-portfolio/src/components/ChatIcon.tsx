
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const ChatIcon = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-white border border-gray-600 p-6 cursor-pointer rounded-full shadow-lg flex items-center justify-center w-12 h-12">
                <FontAwesomeIcon icon={faComment} className='text-gray-900' />
            </button>
        </div>
    );
};

export default ChatIcon;
