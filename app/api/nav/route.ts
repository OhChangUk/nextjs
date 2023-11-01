import { NextResponse } from "next/server";

interface NavItem{
    name : string,
    link : string
}
interface NavData{
    data : NavItem[]
}

export async function GET() : Promise<NextResponse>{
    const data :NavItem[] = [
        {
            name : "소개",
            link : "/about",
        },
        {
            name : "스킬",
            link : "/skill"
        },
        {
            name : "프로젝트",
            link : "/project"
        }
    ]
    return NextResponse.json({data} as NavData);
}