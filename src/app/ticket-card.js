"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import styles from "./page.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function TicketCard(props) {
    const { name } = props;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
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