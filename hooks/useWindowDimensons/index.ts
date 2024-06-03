import { useState, useEffect } from "react";

function getWindowDimension() {
    const { innerWidth: width } = window;
    return {
        isDesktop: width >= 960,
    };
}

export default function useWindowDimensions(): {
    isDesktop: boolean;
} {
    const [windowDimension, setWindowDimension] = useState({
        isDesktop: false,
    });

    useEffect(() => {
        setWindowDimension(getWindowDimension());
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(getWindowDimension());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimension;
}