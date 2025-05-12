import React from 'react'

const ChatMessaging = ({user_name,user_msg}) => {
  return (
    <div className='flex align-items py-2 '>
      <img
              className="h-6 w-6 cursor-pointer"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
        <span className='font-bold px-2'>{`${user_name} : `}</span>
        <span>{user_msg}</span>
    </div>
  )
}

export default ChatMessaging
