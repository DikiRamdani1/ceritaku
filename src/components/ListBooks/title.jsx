import Link from "next/link"

const Title = ({title, link}) => {
    return (
        <div className="w-full flex items-end justify-between">
            <div>
                <h1 className="text-3xl josefin">{title}</h1>
            </div>
            <Link className="hover:text-purple-600" href={link}>see all</Link>
        </div>
    )
}

export default Title