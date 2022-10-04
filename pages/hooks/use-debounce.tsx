import { useEffect, useState } from "react";

export const useDebounce = <T, V extends number>(value: T, delay: V): T => {
    const [bounced, setBounced] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setBounced(value);
        }, delay)
        return () => {
            return clearTimeout(handler);
        }
    }, [value, delay]);
    return bounced;
};