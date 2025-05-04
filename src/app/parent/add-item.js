"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addItem } from '../lib/data';


function AddItem(props) {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        cost: 0,
        // image: ''
      });
    
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behaviour
        // Process and send formData to the server or perform other actions
        addItem(formData)
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <TextField
                label="Cost"
                variant="outlined"
                fullWidth
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                required
            />
            {/* <TextField
                label="Image"
                variant="outlined"
                fullWidth
                name="image"
                value={formData.image}
                onChange={handleChange}
            /> */}
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default AddItem