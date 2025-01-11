export interface AnimeData {
    mal_id: number;
    title: string;
    image_url: string;
    [key: string]: any; // Tambahkan properti lain jika diperlukan
}

export interface ApiResponse<T> {
    data: T;
    pagination?: {
        last_visible_page: number;
        has_next_page: boolean;
    };
    [key: string]: any; // Tambahkan properti lain jika ada
}

// Fungsi utama untuk fetch data anime
export const getAnime = async <T = any>(resource: string, query: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};

// Fungsi untuk memproses response API dengan properti tertentu
export const getAnimeResponse = async <T = AnimeData[]>(resource: string, objectProperty: string): Promise<T> => {
    const response = await getAnime<T>(resource, "");
    const data: T = response.data?.flatMap((item: any) => item[objectProperty]) || [];
    return data;
};

// Fungsi untuk fetch data tanpa query (hanya berdasarkan resource)
export const getAnimeResponseResource = async <T = any>(resource: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
};
