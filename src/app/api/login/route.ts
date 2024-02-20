import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json( { 
        data :[ {
            id:1,
            nombre:"Jorge"
        }]

     })

}

export async function POST() {

    return NextResponse.json( { 
        data :[ {
            id:1,
            nombre:"Jorge"
        }]

     })

}