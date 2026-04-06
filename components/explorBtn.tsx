'use client'
import Image from "next/image";
const ExplorBtn = () => {
    return (
        <button type="button" id="explore-btn" onClick={() =>console.log('button click ')} className="text-gray-200 mt-7 mx-auto">
        <a  href="#events" className="text-sm ">
            Explore More
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
        </a></button>
    )
}
export default ExplorBtn
