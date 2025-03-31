"use client";
// Function component with state using useState hook
import React, { useState, useEffect } from 'react';
import PrizeCard from './prize-card';
import Grid from '@mui/material/Grid2';

const getItems = async () => {
    const url = `http://localhost:3001/getItems`;
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

function PrizePanel(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getItems();
            setItems(data);
        }
        fetchData();
    }, []);

    return (
        <Grid container spacing={2}>
        {items.map((item) => (
          <PrizeCard key={item.id} item={item}/>
        ))}
      </Grid>
    );
}

export default PrizePanel