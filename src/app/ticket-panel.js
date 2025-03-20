"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TicketCard from './ticket-card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


function TicketPanel(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper elevation={2}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TicketCard name="colton"/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="ethan"/>
                    </Grid>
                    <Grid size={4}>
                        <TicketCard name="wesley"/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default TicketPanel