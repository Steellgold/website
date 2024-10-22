import { useEffect, useState } from "react";

export const useHostname = () => {
    const [url, setUrl] = useState<string>("");
    useEffect(() => {
        setUrl(window.location.hostname);
    }, []);
    return url;
};