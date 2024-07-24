import Image from "next/image"
import Link from "next/link"
import { MdOutlineStar } from "react-icons/md";


const TrendingBooks = ({ api }) => {
    return (
        <div className="w-auto h-auto mt-2 flex md:flex-col">
            {api.data.map((book, index) => {
                return (
                    <Link key={book.id} href={`/books/${book.id}`}>
                        <div className="w-auto md:w-full h-auto md:h-[90px] mt-2 flex flex-col md:flex-row bg-base-100 hover:bg-purple-600 relative">
                            <div className="flex items-end py-0.5 absolute top-0 right-0">
                                <MdOutlineStar className="text-3xl md:text-xl text-yellow-400"/>
                                <h6 className="text-xl md:text-xs">{book.rating}</h6>
                            </div>
                            <div className="w-[190px] md:w-[27%] h-[300px] md:h-full relative">
                                <Image className="w-full h-full object-cover" src={book.image} alt={`gambar ${book.name}`} width={2000} height={2000}/>
                                <div className="w-full h-full flex items-center justify-center bg-black opacity-70 absolute top-0 z-10">
                                    <div>
                                        <h1 className="text-6xl josefin text-purple-600">{index + 1}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[73%] px-2 py-4 hidden md:block">
                                <h1 className="text-lg line-clamp-1">{book.name}</h1>
                                <h6 className="text-sm opacity-70">{book.category}</h6>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default TrendingBooks