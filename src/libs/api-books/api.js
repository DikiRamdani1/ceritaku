const getBooks = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_API_PUBLIC}/${resource}?${query}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`
        },
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

export default getBooks