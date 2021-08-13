import React from 'react'
import './styles.css';

const User = ({selectedUser}) => {
    return (
        <>
        <div className="wrapper">
           {
                selectedUser.map((curElem) => {
                    return (
                        
                            <div className="card-container">
                            <img src={curElem.avatar} alt={curElem.avatar} />
                                <div className="card-body">
                                    <div className="card-id" key={curElem.id}>{curElem.id}</div>
                                    <div className="card-email">{curElem.email}</div>
                                    <div className="name">
                                        <div className="card-fname">{curElem.first_name}</div>
                                        <div className="card-lname">{curElem.last_name}</div>
                                    </div>
                                </div>
                            </div>
                       
                    )
                })   
            }
            </div>
        </>
    )
}

export default User
