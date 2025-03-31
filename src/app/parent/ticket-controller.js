"use client";
// Function component with state using useState hook
import React, { useState, useEffect }  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Add } from '@mui/icons-material';

const updateBackend = (name, isIncrement) => {
    return fetch('http://blue-tickets-backend.charlie51.com/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({name, isIncrement})})
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

const getCount = async (name) => {
    const url = `http://blue-tickets-backend.charlie51.com/ticketCount/${name}`;
    return await fetch(url)
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

function TicketController(props) {
    const { name, style } = props;
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(getCount(name))
    }, [name]);

    const handleClick = (isIncrement) => {
        setCount(updateBackend(name, isIncrement));
    };

    return (
        <Card style={style}>
            <CardContent>
                <h1 style={{ textAlign: 'center' }}>{name.toUpperCase()}</h1>
                <h1 style={{ textAlign: 'center' }}>{count}</h1>
                <IconButton aria-label="decrement" onClick={() => handleClick(false)}>
                    <RemoveIcon />
                </IconButton>
                <IconButton aria-label="increment" onClick={() => handleClick(true)}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default TicketController