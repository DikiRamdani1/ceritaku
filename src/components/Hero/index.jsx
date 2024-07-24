import Image from "next/image"

const Hero = () => {
    return (
        <div className="w-full h-[46vh] md:h-[20vh] lg:h-[46vh] flex justify-end relative">
            <div className="w-[43%] h-full hidden md:block relative overflow-hidden bg-hero"></div>
            <div className="w-full h-full px-3 sm:px-10 flex items-center bg-gradient-to-r from-base-200 from-60% via-transparent to-transparent absolute top-0">
                <p className="w-auto md:w-2/4 text-[18px] sm:text-3xl md:text-xl lg:text-3xl">From fiction to non-fiction, discover amazing books you can read at no cost. Start your literacy journey today!</p>
            </div>
        </div>
    )
}

export default Hero