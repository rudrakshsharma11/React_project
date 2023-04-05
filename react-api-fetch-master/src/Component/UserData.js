import React from 'react'

 const UserData = ({users}) => {
  return (
        <>
            {
                users.map((curUser) =>{
                    const { id,name,username,email} = curUser


                    return(
                        <tr key={id}>
                            <td>
                                {id}
                            </td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                        </tr>
                    )
;                })
            }
        </>
    )
}

export default UserData;
