"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function AddItem(props) {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        cost: null,
        image: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behaviour
        // Process and send formData to the server or perform other actions

        return fetch('https://localhost:3001/addItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData)})
        .then(response =>{
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
                setFormData({
                    name: '',
                    description: '',
                    cost: null,
                    image: ''
                  })
                console.log('Form data submitted:', formData);
            })
        .catch(error => {
            console.error("There was an error:", error);
        })
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
            <TextField
                label="Image"
                variant="outlined"
                fullWidth
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default AddItem