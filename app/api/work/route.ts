import { NextResponse } from "next/server";

interface WorkItem{
    img: string;
    descTitle : string;
    desc : string;
    keyword : string[];
    color : string[];
    font : string;
    tools : string[];
    date : string;
    contribution : string;
    type : string;
    original : string;
    git : string;
    create : string;
}
interface WorkData{
    data : WorkItem[]
}

export async function GET() : Promise<NextResponse>{
    const data :WorkItem[] = [
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩",
            desc : "xxx 사이트 클론 코딩",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Clone",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩2",
            desc : "xxx 사이트 클론 코딩2",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Project",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩3",
            desc : "xxx 사이트 클론 코딩3",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩4",
            desc : "xxx 사이트 클론 코딩4",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩5",
            desc : "xxx 사이트 클론 코딩5",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩6",
            desc : "xxx 사이트 클론 코딩6",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩7",
            desc : "xxx 사이트 클론 코딩7",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩8",
            desc : "xxx 사이트 클론 코딩8",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩9",
            desc : "xxx 사이트 클론 코딩9",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        {
            img: "https://via.placeholder.com/500",
            descTitle : "xxx 사이트 클론 코딩10",
            desc : "xxx 사이트 클론 코딩9",
            keyword : ["#심플", "깔끔","반응형"],
            color : ["yellow", "orange", "green"],
            font : "Noto Sans KR",
            tools : ["Figma", "VS CODE", "GIT"],
            date : "5일",
            contribution : "100%",
            type : "Webapp",
            original : "https://www.subway.co.kr",
            git : "http://www.github.com",
            create : "https://www.naver.com"
        },
        
    ]
    return NextResponse.json({data} as WorkData);
}