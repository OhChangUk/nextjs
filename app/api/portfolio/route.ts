import { NextResponse } from "next/server";

interface NavItem{
    name : string,
    explanation : string
}
interface NavData{
    data : NavItem[]
}

export async function GET() : Promise<NextResponse>{
    const data :NavItem[] = [
        {
            "name" : "HTML5",
            "explanation" : "웹 페이지의 구조와 내용을 정의하는 마크업 언어입니다."
        }, 
        {
            "name" : "CSS3",
            "explanation" : "웹 페이지의 디자인, 레이아웃, 스타일을 정의하는 언어입니다."
        }, 
        {
            "name" : "JavaScript",
            "explanation" : "웹 페이지를 동적으로 제어하고 상호 작용을 가능하게 하는 프로그래밍 언어입니다."
        }, 
        {
            "name" : "React",
            "explanation" : "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다."
        }, 
        {
            "name" : "Tailwind",
            "explanation" : "클래스 기반의 스타일링 프레임워크입니다."
        }, 
        {
            "name" : "Github",
            "explanation" : " 소프트웨어 개발자들이 버전 관리와 협업을 할 수 있는 플랫폼입니다."
        }
    ]
    return NextResponse.json({data} as NavData);
}