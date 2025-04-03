"use client";
// Function component with state using useState hook
import React, { useState, useEffect } from 'react';
import PrizeCard from './prize-card';
import Grid from '@mui/material/Grid2';
import { fetchAllActiveItems } from './lib/data';

const getItems = async () => {
  const data = await fetchAllActiveItems();
  return data;
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