export const getAnime = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const data = response.json()
    return data
}

export const getAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnime(resource);
    return response.data.flatMap(item => item.entry);
};

export const getAnimeResponseRecource = async (resource) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`)
    return response.json();
};
