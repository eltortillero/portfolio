import { useEffect, useState } from "react";
import { WindowSize } from "./hooks.api";

export const useResizableImage = (initialSize: number, windowSize: WindowSize): number => {
    console.log(initialSize)
    const [size, setSize] = useState<number>(initialSize);
    const calculateNewSize = (imgSizePx: number, ratio: number) => Math.floor(imgSizePx * ratio);
    useEffect(() => {
        switch (windowSize) {
            case "l":
                setSize(initialSize);
                break;
            case "m":
                const mediumSize = calculateNewSize(initialSize, .7);
                setSize(mediumSize);
                break;
            case "s":
                const smallSize = calculateNewSize(initialSize, .5);
                setSize(smallSize);
                break;
            default:
                break;
        }
    }, [initialSize, windowSize]);
    return size;
}