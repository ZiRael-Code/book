import pg from "pg";
import {config} from "../lib/config.js"

// default pool is 10 connections
export const pool = new pg.Pool({
    connectionString: config.DATABASE_URL,
})