const { Pool } = require('pg'); // postgres 모듈 불러오기
require('dotenv').config(); // .env 파일 사용 설정
 
const pool = new Pool ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports =  pool;  // {}로 감싸는 경우 pool 변수를 적어서 사용해야한다. 