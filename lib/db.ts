import { neon } from "@neondatabase/serverless";

// Verbindung zur Postgres-Datenbank herstellen
const sql = neon(process.env.DATABASE_URL!);

export default sql;

