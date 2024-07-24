import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/navbar"
import getBooks from "@/libs/api-books/api"
import Image from "next/image"
import { MdOutlineStar } from "react-icons/md";


const Page = async ({ params }) => {
    const { id } = params
    const books = await getBooks('books', `id=${id}`)

    return (
        <main>
            <Navbar />
            <div className="h-auto pb-20 md:px-20 lg:px-52 md:mt-20 flex flex-col md:flex-row md:gap-x-3">
                <div className="w-full md:w-60 h-80 justify-center sticky top-[50px] sm:top-[70px]">
                    <Image className="w-full h-full object-cover" src={books.data[0].image} alt={`gambar ${books.data[0].name}`} width={2000} height={2000} />
                </div>
                <div className="w-full h-auto relative z-10">
                    <div className="w-full h-auto px-3 pt-8 pb-4 bg-base-200 relative">
                        <h1 className="text-4xl josefin line-clamp-1">——{books.data[0].name}</h1>
                        <div className="w-40 ml-[75px] mt-2 flex justify-between">
                            <h6 className="text-lg opacity-70">{books.data[0].category}</h6>
                            <h6 className="text-lg opacity-70">{books.data[0].terbit}</h6>
                        </div>
                        <div className="absolute top-1 right-1 flex items-end">
                            <MdOutlineStar className="text-3xl text-yellow-400" />
                            <h6>{books.data[0].rating}</h6>
                        </div>
                    </div>
                    <div className="w-full h-auto p-3 min-h-[80vh] mt-3 bg-base-200">
                        <p>{books.data[0].cerita}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page