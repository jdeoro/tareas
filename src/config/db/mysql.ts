import { createPool } from 'mysql2/promise'

export const pool = createPool({
   host:"172.16.10.2",
   port:33306,
   user:"root",
   password:"prueba",
   database:"prueba"
})




// import mysql from 'serverless-mysql'

// export const conn =  mysql({
//   config: {
//     host: "172.16.10.2",
//     port: 33306,
//     user: "root",
//     password: "prueba",
//     database:"prueba"
  
//   }
// });


