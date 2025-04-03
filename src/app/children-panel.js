import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { fetchAllChildrenData } from './lib/data.js';
import ChildCard from './child-card.js';


export default async function ChildrenPanel(props) {
    const { isParentView } = props;
    const childrenData = await fetchAllChildrenData();
    

    return (
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <ChildCard child={childrenData[0]} isParentView={isParentView} style={{backgroundColor: "blue"}}/>
                    </Grid>
                    <Grid size={4}>
                        <ChildCard child={childrenData[1]} isParentView={isParentView} style={{backgroundColor: "red"}}/>
                    </Grid>
                    <Grid size={4}>
                        <ChildCard child={childrenData[2]} isParentView={isParentView} style={{backgroundColor: "green"}}/>
                    </Grid>
                </Grid>
        </Box>
    );
}