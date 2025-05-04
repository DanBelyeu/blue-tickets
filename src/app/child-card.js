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
import { unstable_noStore } from 'next/cache';

export default function ChildCard({child, isParentView, style}) {
    unstable_noStore()    
    const router = useRouter();

    const updateTicketCount = async (updatedTicketCount) => {
        child.ticket_count = updatedTicketCount;
        await updateChildSecondaryData(child);
        router.refresh();
    };

    return (
        <Card style={style}>
            <CardContent>
                <h1 style={{ textAlign: 'center', fontSize: 100}}>{child.name.charAt(0).toUpperCase()}</h1>
                <Stack alignItems="center" justifyContent="center" direction="row" gap={1}>
                    <Typography variant="h4">{child.ticket_count}</Typography>
                    <LocalActivityOutlinedIcon fontSize="large"/>
                </Stack>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Stack spacing={2}>
                {!isParentView && 
                <Button variant="contained" size="large" endIcon={<LocalActivityOutlinedIcon />} onClick={() => updateTicketCount(child.ticket_count+1)}>Get</Button>}
                {isParentView && 
                    <>
                        <IconButton aria-label="decrement" onClick={() => updateTicketCount(child.ticket_count-1)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton aria-label="increment" onClick={() => updateTicketCount(child.ticket_count+1)}>
                            <AddIcon />
                        </IconButton>
                    </>
                }
                </Stack>

            </CardActions>
        </Card>
    );
}