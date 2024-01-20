import { Pool } from 'pg'

const pool = new Pool({
    user: "postgres",
    password: "jas123",
    host: 5432,
    database: "pos"
})


export default pool