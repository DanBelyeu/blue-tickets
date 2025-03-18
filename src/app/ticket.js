"use client";
// Function component with state using useState hook
import React, { useState }  from 'react';
import styles from "./page.module.css";
import Button from '@mui/material/Button';


function Ticket(props) {
    const [coltonCount, setColtonCount] = useState(0);
    const [ethanCount, setEthanCount] = useState(0);
    const [wesleyCount, setWesleyCount] = useState(0);

    const handleClick = (child) => {
        switch(child) {
            case "colton": setColtonCount(coltonCount + 1);
            break;
            case "ethan": setEthanCount(ethanCount + 1)
            break;
            case "wesley": setWesleyCount(wesleyCount + 1)
            break;
        }

    };

    return (
        <div>
            <div>
                <p>{coltonCount}</p>
                <p>{ethanCount}</p>
                <p>{wesleyCount}</p>
            </div>

            <div className={styles.ctas}>
                <Button variant="contained" size="large" onClick={() => handleClick("colton")}>Colton</Button>
                <Button variant="contained" size="large" onClick={() => handleClick("ethan")}>Ethan</Button>
                <Button variant="contained" size="large" onClick={() => handleClick("wesley")}>Wesley</Button>
            </div>
        </div>
    );
}

export default Ticket