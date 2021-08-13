import React, {useEffect, useState}from 'react'
import User from './Users';
import Paging from './Paging'

const userPerPage = 3;

//'https://reqres.in/api/users?page=2'
const Page = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getUsers = async () => {
        setLoading(true);
        const response = await fetch('https://reqres.in/api/users?page=2');
        setLoading(false);
        const data = await response.json();
        setUsers(data.data);
        setTotalPages(Math.ceil(data.data.length / userPerPage));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const buttonClick = num => {
        setPage(num);
    }

    return (
        <>
            <h1>List of Users</h1>
            {
                loading ? <p>Loading...</p> : <>
                    <User users={users} page={page}/>
                    <Paging totalPages={totalPages} buttonClick={buttonClick}/>
                </>
            }
        </>
    )
}

export default Page
