import "tailwindcss/tailwind.css";
import "../styles/tailwind.css";
import "../styles/ie.css";
import BrowserContext from "../context/BrowserContext";
import React, { useState, useEffect, useMemo } from "react";
function MyApp({ Component, pageProps }) {

    const [isIE, setIsIE] = useState(undefined);

    useEffect(() => {
        setIsIE(/MSIE|Trident/.test(window.navigator.userAgent));
    }, []);

    const browserData = useMemo(
        () => ({
            isIE,
        }),
        [isIE]
    );
    return (
        <BrowserContext.Provider value={browserData}>
            <Component {...pageProps} />
        </BrowserContext.Provider>
    );
}

export default MyApp;
