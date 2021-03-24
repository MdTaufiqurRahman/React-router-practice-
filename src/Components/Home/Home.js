import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setFriends(data))
    }, [])
    return (
        <div>
            <h1>This is All friends List</h1>
            {
                friends.map(friend => 
                <Friends friend={friend} ></Friends>)
            }
        </div>
    );
};

export default Home;