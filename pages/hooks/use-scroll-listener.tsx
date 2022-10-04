import { useEffect, useState } from "react"

export const useScrollListener = (): boolean => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    useEffect(() => {
        const calculateCurrentScroll = () => (window.scrollY || 0) > 10;
        const setScrollState = () => {
            const scrolledState = calculateCurrentScroll();
            setScrolled(scrolledState);
        };
        window.addEventListener('scroll', setScrollState, true);
        return () => {
            window.removeEventListener('scroll', setScrollState, true);
        }
    }, []);

    return scrolled;
}