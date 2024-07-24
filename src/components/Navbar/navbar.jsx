import Link from "next/link";
import { AiOutlineDingtalk } from "react-icons/ai";
import NightMode from "./toggleNightMode";
const Navbar = async () => {
    return (
        <nav className="w-full pl-4 pr-14 sm:px-11 md:px-36 lg:px-72 py-2 flex items-center justify-between border-b-2 border-base-300 sticky top-0 bg-base-100 z-30">
            <Link href={"/"}>
                <div className="flex items-center">
                    <AiOutlineDingtalk className="text-3xl sm:text-5xl text-purple-600" />
                    <h1 className="josefin text-xl sm:text-3xl"><span className="text-purple-600">Cer</span>itaKu</h1>
                </div>
            </Link>
            <div className="w-auto sm:w-48 flex justify-between">
                <div className="hidden sm:block">
                    <Link href={"/books"}>Books</Link>
                </div>
                <details className="relative cursor-pointer">
                    <summary className="text-sm sm:text-base">Category</summary>
                    <ul className="bg-base-100 rounded-t-none p-2 absolute">
                        <li><Link href={"/category/Action"}>Action</Link></li>
                        <li><Link href={"/category/Adventure"}>Adventure</Link></li>
                        <li><Link href={"/category/Comedy"}>Comedy</Link></li>
                        <li><Link href={"/category/Drama"}>Drama</Link></li>
                        <li><Link href={"/category/Fantasy"}>Fantasy</Link></li>
                        <li><Link href={"/category/History"}>History</Link></li>
                        <li><Link href={"/category/Horor"}>Horor</Link></li>
                        <li><Link href={"/category/Mystery"}>Mystery</Link></li>
                        <li><Link href={"/category/Romance"}>Romance</Link></li>
                    </ul>
                </details>
            </div>
            <div>
                <NightMode />
            </div>
        </nav>
    )
}

export default Navbar