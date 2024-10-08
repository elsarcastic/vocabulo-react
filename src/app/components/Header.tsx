import { FaCircleInfo } from "react-icons/fa6";

export function Header() {
    return (
        <div className="flex justify-center items-center gap-2 m-2">
            <h1 className="font-bold text-4xl">vocábulo</h1>
            <FaCircleInfo fontSize={12} className="cursor-pointer"/>
        </div>
    )
}