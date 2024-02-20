import { pool } from "@/config";
import { NextResponse } from "next/server";
import {RowDataPacket} from 'mysql2'



export async function GET() {

    return NextResponse.json( { 
        data :[ {
            id:1,
            nombre:"Jorge"
        }]

     })

}

export async function POST() {
     const resultado  = await pool.query<RowDataPacket[]>("select * from usuarios where id=2953")

     console.log(resultado[0][0])

    return NextResponse.json( { 
        data :[ {
            id:1,
            nombre:"Jorge"
        }]

     })

}