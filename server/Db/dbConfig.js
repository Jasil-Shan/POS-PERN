import pkg from 'pg';
const {Pool} = pkg

const pool = new Pool({
    user: 'postgres',
    password: 'jas123',
    host:'localhost',
    port: 5432,
    database: 'pos'
})


export default pool