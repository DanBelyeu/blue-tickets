"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TicketCard from './ticket-card.js';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


function TicketPanel(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TicketCard name="colton" style={{backgroundColor: "blue"}}/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="ethan" style={{backgroundColor: "red"}}/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="wesley" style={{backgroundColor: "green"}}/>
                    </Grid>
                </Grid>
        </Box>
    );
}

export default TicketPanel