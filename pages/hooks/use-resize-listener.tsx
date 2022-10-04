import { useEffect, useState } from "react";

export type WindowSize = "s" | "m" | "l";
export const useResize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>("s");
    useEffect(() => {
        const getWindowSize = (): WindowSize => window.innerWidth >= 1150 ? "l" : window.innerWidth >= 655 ? "m" : "s";
        const setSizeState = () => {
            const currentSize = getWindowSize();
            setWindowSize(currentSize)
        }
        window.addEventListener('resize', setSizeState, true);
        return () => {
            window.removeEventListener('resize', setSizeState, true);
        }
    }, []);
    return windowSize;
}