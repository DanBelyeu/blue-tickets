"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TicketCard from './ticket-card';
import styles from "./page.module.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function TicketPanel(props) {
    const [coltonCount, setColtonCount] = useState(0);
    const [ethanCount, setEthanCount] = useState(0);
    const [wesleyCount, setWesleyCount] = useState(0);

    const handleClick = (child) => {
        switch(child) {
            case "colton": setColtonCount(coltonCount + 1);
            break;
            case "ethan": setEthanCount(ethanCount + 1)
            break;
            case "wesley": setWesleyCount(wesleyCount + 1)
            break;
        }

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper elevation={2}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TicketCard name="Colton"/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="Ethan"/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="Wesley"/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default TicketPanel