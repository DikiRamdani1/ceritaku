import Image from "next/image"
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";
import { FaFaceSadCry } from "react-icons/fa6";

const ListBooks = ({ api }) => {
    return (
        <>
            {api.status != 404 ?
                <div className="w-full h-auto min-h-[80vh] mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 justify-items-center gap-3">
                    {api.data.map(book => {
                        return (
                            <Link key={book.id} href={`/books/${book.id}`}>
                                <div className="w-full md:max-w-36 h-auto relative group">
                                    <div className="w-full h-[350px] sm:h-[300px] lg:h-[200px] relative overflow-hidden">
                                        <div className="pl-2 pr-1 pb-0.5 flex items-end bg-purple-600 absolute top-0 right-0 rounded-es-2xl z-10">
                                            <MdOutlineStar className="text-lg text-yellow-500" />
                                            <h6 className="text-xs">{book.rating}</h6>
                                        </div>
                                        <Image className="w-full h-full object-cover scale-110 group-hover:scale-125" src={book.image} alt={`gambar ${book.name} `} width={2000} height={2000} />
                                    </div>
                                    <div className="w-full h-auto px-1 pt-2 flex flex-col">
                                        <h1 className="line-clamp-1 md:line-clamp-2">{book.name}</h1>
                                        <h1 className="line-clamp-1 text-sm opacity-70">{book.category}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                :
                <div className="w-full h-auto min-h-[80vh] flex flex-col items-center justify-center">
                    <FaFaceSadCry className="text-9xl"/>
                    <h1 className="text-4xl mt-7">Not found</h1>
                </div>}
        </>
    )
}

export default ListBooks

