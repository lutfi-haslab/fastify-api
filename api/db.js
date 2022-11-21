import * as dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.url,
  user: process.env.user,
  password: process.env.pass,
  database: process.env.db,
});

pool.getConnection((err) => {
  if (err) {
    console.log("error connecting to db", err.stack);
    process.exit(1);
  }
  console.log("Connected to db...");
});

const excuteQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
          console.log("error excuting the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export {excuteQuery}
