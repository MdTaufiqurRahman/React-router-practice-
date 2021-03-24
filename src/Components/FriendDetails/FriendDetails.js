import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <p>Show details of Friend Components: {friend.id} </p>
            <h2>{friend.name}</h2>
            <p>{friend.username}</p>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>

        </div>
    );
};

export default FriendDetails;