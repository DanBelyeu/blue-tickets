'use server'

import postgres from 'postgres';
 
const sql = postgres({
    host                 : process.env.POSTGRES_HOST,            // Postgres ip address[s] or domain name[s]
    port                 : process.env.POSTGRES_PORT,          // Postgres server port[s]
    database             : process.env.POSTGRES_DATABASE,            // Name of database to connect to
    username             : process.env.POSTGRES_USER,            // Username of database user
    password             : process.env.POSTGRES_PASSWORD,
 })
 
export async function updateChildSecondaryData(child) {
    const { id, ticket_count, prize } = child;
        
    try {
        await sql`update children set ticket_count = ${ticket_count}, prize = ${prize} where id = ${id}`;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}