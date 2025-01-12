export interface AnimeData {
    mal_id: number;
    title: string;
    image_url: string;
    [key: string]: any;
}

export interface ApiResponse<T> {
    data: T;
    pagination?: {
        last_visible_page: number;
        has_next_page: boolean;
    };
    [key: string]: any;
}

export const getAnime = async <T = any>(resource: string, query: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};

export const getAnimeResponse = async <T = AnimeData[]>(resource: string, objectProperty: string): Promise<T> => {
    const response = await getAnime<T>(resource, "");
    const data: T = response.data?.flatMap((item: any) => item[objectProperty]) || [];
    return data;
};

export const getAnimeResponseResource = async <T = any>(resource: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};

export const getCharacterAnime = async <T = any>(resource: string, query: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};

export const getPictureById = async (resource: string, id: string, objectProperty: string): Promise<string> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}/${id}/${objectProperty}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data
};