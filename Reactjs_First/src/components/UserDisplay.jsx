import React from 'react'
import users from './UserData'
import UserCard from './UserCard'

const UserDisplay = () => {
  return (
    <>
        <div className='row_card'>
            {users.map((user, index) => (
                <UserCard key={index.id} user={user} />
            ))}
        </div>
    </>
  )
}

export default UserDisplay