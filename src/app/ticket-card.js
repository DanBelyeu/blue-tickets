"use client";
// Function component with state using useState hook
import React, { useState, useEffect }  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const updateBackend = (name, count) => {
    return fetch('http://localhost:3001/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({name, count})})
    .then(response =>{
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
    .catch(error => {
        console.error("There was an error:", error);
    })
};

const getCount = (name) => {
    const url = `http://localhost:3001/ticketCount/${name}`;
    return fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .catch(error => {
          console.error("There was an error:", error);
        });    
}

function TicketCard(props) {
    const { name } = props;
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(getCount(name))
    }, []);

    const handleClick = () => {
        setCount(updateBackend(name, count));
    };

    return (
        <Card>
            <CardContent>
                <h1 style={{ textAlign: 'center' }}>{count}</h1>
                <Button variant="contained" size="large" onClick={handleClick}>{name}</Button>
            </CardContent>
        </Card>
    );
}

export default TicketCard