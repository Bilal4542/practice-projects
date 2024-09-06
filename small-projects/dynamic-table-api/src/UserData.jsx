import React from 'react'

const UserData = ({users}) => {
  return (
    <div>
      {users.map((user, index) => (
        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="px-6 py-4">
            {user.id}
        </td>
        <td class="px-6 py-4">
            {user.name}
        </td>
        <td class="px-6 py-4">
            {user.email}
        </td>
        <td class="px-6 py-4">
            {user.address.city}
        </td>
    </tr>
      ))}
    </div>
  )
}

export default UserData
