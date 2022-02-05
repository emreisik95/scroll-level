import { useState, useEffect } from "react";

const useScrollLevel = () => {
    const [scrollLevel, setScrollLevel] = useState({
        scrollHeight : 0,
        scrollWidth : 0
    });

    const getScrolledPercentage = () => {
        var h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight',
            sl = 'scrollLeft',
            sw = 'scrollWidth';
        const scrollHeightPercentage = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        const scrollWidthPercentage = (h[sl]||b[sl]) / ((h[sw]||b[sw]) - h.clientWidth) * 100;
        setScrollLevel({
            scrollHeight : scrollHeightPercentage,
            scrollWidth : scrollWidthPercentage
            });
    }

    useEffect(() => {
        window.addEventListener("scroll", getScrolledPercentage);
        return () => window.removeEventListener("scroll", getScrolledPercentage);
        
    }, []);

  return scrollLevel;
};

export { useScrollLevel };