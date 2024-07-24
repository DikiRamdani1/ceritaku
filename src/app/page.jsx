import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ListBooks from "@/components/ListBooks/listBooks"
import Title from "@/components/ListBooks/title"
import TrendingBooks from "@/components/ListBooks/trendingBooks"
import Navbar from "@/components/Navbar/navbar"
import Search from "@/components/Search"
import getBooks from "@/libs/api-books/api"

const Page = async () => {
  const books = await getBooks("books", "limit=12")
  const booksNew = await getBooks("books/new", "limit=12")
  const booksTrending = await getBooks("books/trending", "limit=5")
  return (
    <main>
      <Navbar />
      <section className="w-full sticky top-0">
        <Hero />
      </section>
      <div className="w-full h-auto px-3 md:px-5 lg:px-40 py-20 flex flex-col md:flex-row gap-x-3 bg-base-100 border-t-2 border-base-300 relative z-10">
        <div className="w-full">
          <Search />
          <section className="py-4 mt-10">
            <Title title={"New Books"} link={"/new"} />
            <ListBooks api={booksNew} />
          </section>

          <section className="w-full h-auto mt-3 block md:hidden">
          <h1 className="text-3xl josefin">Trending Books</h1>
          <div className="w-full h-auto flex relative hide-scrollbar">
              <TrendingBooks api={booksTrending} />
            </div>
          </section>

          <section className="py-4">
            <Title title={"Books"} link={"/books"} />
            <ListBooks api={books} />
          </section>
        </div>
        <div className="w-[38%] md:h-[583px] lg:h-[87vh] p-1 hidden md:block sticky top-[71px] overflow-hidden">
          <div className="w-full h-full relative z-10 overflow-hidden">
            <div className="px-2 bg-base-100">
              <h1 className="text-2xl">Trending Books</h1>
            </div>
            <TrendingBooks api={booksTrending} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Page 