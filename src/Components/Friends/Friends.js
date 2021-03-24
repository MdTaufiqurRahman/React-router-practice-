import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const styles = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={styles} >
            <h1>Name: {name}</h1>
            <h4>Email: {email}</h4>
            <Link to={`/friend/${id}`}>
                <button>Show My Details</button>
            </Link>

        </div>
    );
};

export default Friends;