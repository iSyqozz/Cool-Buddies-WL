import { NextResponse, NextRequest } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";
import { WL_WALLETS } from "@/constants";

export async function GET(req: Request, res: Response) {
    try {
        const address = new NextURL(req.url).searchParams.get('address');
        if (!address) {
            return NextResponse.json(false);
        }
        if (!WL_WALLETS.includes(address)){
            return NextResponse.json(false);
        }else{
            return NextResponse.json(true);
        }
    }catch(e){
        console.log(e)
        return NextResponse.json(false)
    }
}

export const dynamic = 'force-dynamic'