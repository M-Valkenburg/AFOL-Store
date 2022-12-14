import { useEffect } from "react";
import { useLocation } from 'react-router'

const ScrollToTop = (): null => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return (null);
}
    
export default ScrollToTop;