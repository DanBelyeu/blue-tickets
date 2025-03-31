"use client";
// Function component with state using useState hook
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { Stack, Typography } from '@mui/material';


const PrizeCard = (props) => {
    const { item } = props;
    return (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper>
            <Card>
            <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title="green iguana"
            />
            <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                <Stack direction="row" gap={0.5}>
                    <Typography variant="span">{item.cost}</Typography>
                    <LocalActivityOutlinedIcon/>
                </Stack>
            </CardContent>
            </Card>
            </Paper>
        </Grid>
    );
};

export default PrizeCard