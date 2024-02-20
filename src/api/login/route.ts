import { NextRequest, NextResponse } from "next/server";

export default function loginHandler( req : NextRequest ) {

    return NextResponse.json( req.body, { status: 200 })

}