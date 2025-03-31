"use client";
// Function component with state using useState hook
import React, { useState, useEffect }  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { Stack, Typography } from '@mui/material';

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

function TicketCard(props) {
    const { name, style } = props;
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(getCount(name))
    }, [name]);

    const handleClick = () => {
        setCount(updateBackend(name, true));
    };

    return (
        <Card style={style}>
            <CardContent>
                <h1 style={{ textAlign: 'center' }}>{name.toUpperCase()}</h1>
                <Stack alignItems="center" justifyContent="center" direction="row" gap={1}>
                    <Typography variant="h4">{count}</Typography>
                    <LocalActivityOutlinedIcon fontSize="large"/>
                </Stack>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" size="large" onClick={handleClick}>Get a Ticket!</Button>
            </CardActions>

        </Card>
    );
}

export default TicketCard