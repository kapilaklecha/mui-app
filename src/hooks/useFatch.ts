import { useEffect, useState } from 'react';

interface FetchDataOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: BodyInit;
}

const useFetch = <T>(url: string, options?: FetchDataOptions) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: options?.method || 'GET',
                    headers: options?.headers || {},
                    body: options?.body || null,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error instanceof Error ? error : new Error('An unknown error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options?.method, options?.headers, options?.body]);
    console.log(data)

    return { data, error, loading };
};

export default useFetch;
