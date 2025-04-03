// Function component with state using useState hook
'use client'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { Stack, Typography } from '@mui/material';
import { updateChildSecondaryData } from './lib/actions';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ChildCard({child, isParentView, style}) {
    console.log(child, isParentView);
    
    const router = useRouter();

    const updateTicketCount = async (updatedTicketCount) => {
        child.ticket_count = updatedTicketCount;
        await updateChildSecondaryData(child);
        router.refresh();
    };

    return (
        <Card style={style}>
            <CardContent>
                <h1 style={{ textAlign: 'center' }}>{child.name.toUpperCase()}</h1>
                <Stack alignItems="center" justifyContent="center" direction="row" gap={1}>
                    <Typography variant="h4">{child.ticket_count}</Typography>
                    <LocalActivityOutlinedIcon fontSize="large"/>
                </Stack>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                {!isParentView && <Button variant="contained" size="large" onClick={() => updateTicketCount(child.ticket_count+1)}>Get a Ticket!</Button>}
                {isParentView && 
                <>
                    <IconButton aria-label="decrement" onClick={() => updateTicketCount(child.ticket_count-1)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton aria-label="increment" onClick={() => updateTicketCount(child.ticket_count+1)}>
                        <AddIcon />
                    </IconButton>
                </>            }
            </CardActions>
        </Card>
    );
}