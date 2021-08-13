import React from 'react';
import User from './User';

const userPerPage = 3;

const Users = ({users, page}) => {

    const startIndex = (page - 1) * userPerPage;
    const selectedUser = users.slice(startIndex, startIndex + userPerPage);

    return (
        <User selectedUser={selectedUser}/>
    )
}

export default Users
