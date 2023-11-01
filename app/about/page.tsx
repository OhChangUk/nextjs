import Image from "next/image";
import AboutComponent from '@/components/about'

export default function About(){
    return(
        <>
            <div className="w-full pt-12 mt-16 px-[2%] pb-8">
                <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                    <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">프로필</h3>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                        <div className="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md dark:bg-[#272929] dark:text-[#ebf4f1] text-center border">
                            <Image src="https://via.placeholder.com/300" alt="300" className="rounded-full mx-auto" width={300} height={300} />
                            <ul>
                                <li className="pl-5 box-border pt-6">오창욱 / Oh Chang Uk</li>
                                <li className="pl-5 box-border pt-6">1999.07.27</li>
                                <li className="pl-5 box-border pt-6"><a href="mailto:o2556@naver.com">o2556@naver.com</a></li>
                                {/*
                                    내부에서 넘어갈 때는 Link태그
                                    외부로 넘어갈 때는 a태그(네이버 같은 외부 사이트)
                                    React도 동일
                                 */}
                            </ul>
                        </div>
                        <div className="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                            <AboutComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}