// to connect to Database we have to install pg package and its types for TypeScript.
// npm install pg
// This file provides a utility function to execute SQL queries against a PostgreSQL database using a connection pool.
// npm install --save-dev @types/pg
//  Make sure to adjust the database connection parameters (host, port, user, password, database) as needed for your environment.

import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "dvdrental",
    max: 5, // connection pool size
});

export async function executeQuery(query: string, values?: any[]) {
    const client = await pool.connect();

    try {
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error("DB Query Failed:", error);
        throw error;
    } finally {
        client.release();
    }
}