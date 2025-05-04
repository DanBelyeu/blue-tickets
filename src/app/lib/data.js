'use server'

import postgres from 'postgres';
 
const sql = postgres({
    host                 : process.env.POSTGRES_HOST,            // Postgres ip address[s] or domain name[s]
    port                 : process.env.POSTGRES_PORT,          // Postgres server port[s]
    database             : process.env.POSTGRES_DATABASE,            // Name of database to connect to
    username             : process.env.POSTGRES_USER,            // Username of database user
    password             : process.env.POSTGRES_PASSWORD,
 })

export async function fetchAllChildrenData() {
    try {
        const data = await sql`SELECT * FROM children order by id`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchChildData(child) {
    try {
        const data = await sql`SELECT * FROM children where name = ${ child }`;
        return data[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchAllActiveItems() {
    try {
        const data = await sql`select * from items where status`;
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function addItem(formData) {
    const {name, description, cost} = formData;    
    try {
        await sql`INSERT INTO items (name, description, cost, status) values (${name}, ${description}, ${cost}, true)`; 
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Faild to insert item.');
    }
}