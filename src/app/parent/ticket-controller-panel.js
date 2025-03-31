"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TicketController from './ticket-controller.js';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


function TicketControllerPanel(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper elevation={2}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid size={4}>
                        <TicketController name="colton" style={{backgroundColor: "blue"}}/>
                    </Grid>
                    <Grid size={4}>
                        <TicketController name="ethan" style={{backgroundColor: "red"}}/>
                    </Grid>
                    <Grid size={4}>
                        <TicketController name="wesley" style={{backgroundColor: "green"}}/>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default TicketControllerPanel