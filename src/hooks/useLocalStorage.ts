export const useLocalStorage = <T>() => {
    const setItem = (key: string, value: T) => {
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const getItem = (key: string): T | null => {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    };

    return { setItem, getItem };
};
