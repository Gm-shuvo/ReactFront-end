import React from 'react'
import './UserList.css'
import UserItem from './UserItem'

const UserList = props => {
    if ( props.items.lenght === 0 ) {
        return (
            <div className='center'>
                <h2>No User</h2>
            </div>
        )
        
    }
  
    return (
        <ul>{props.items.map( user => {
            return (
                <UserItem key={user.id}
                    id={user.id}
                    name={user.name}
                    image={user.image}
                    placeCount={user.places} />
            )
        } )
        }
    
        </ul>
    )
}

export default UserList
