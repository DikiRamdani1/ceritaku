import Footer from "@/components/Footer"
import ListBooks from "@/components/ListBooks/listBooks"
import Navbar from "@/components/Navbar/navbar"
import Search from "@/components/Search"
import getBooks from "@/libs/api-books/api"

const Page = async () => {
    const books = await getBooks('books/new', '')
    return (
        <main>
            <Navbar />
            <div className="px-3 pb-20 md:px-28 lg:px-60 mt-20 flex flex-col items-center">
                <div className="pb-7">
                    <h1 className="text-3xl josefin">New Books</h1>
                </div>
                <Search />
                <ListBooks api={books} />
            </div>
            <Footer />
        </main>
    )
}

export default Page