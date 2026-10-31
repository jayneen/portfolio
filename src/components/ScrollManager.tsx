import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollManager() {
    const location = useLocation();
    const navigationType = useNavigationType();

    // Let React Router control scroll restoration.
    useEffect(() => {
        window.history.scrollRestoration = "manual";

        return () => {
            window.history.scrollRestoration = "auto";
        };
    }, []);

    useEffect(() => {
        const isProjectPage = location.pathname.startsWith("/projects/");
        const savedPosition = sessionStorage.getItem(
            "portfolioScrollPosition"
        );

        if (isProjectPage) {
            window.scrollTo(0, 0);
            return;
        }

        if (navigationType === "POP" && savedPosition !== null) {
            const scrollY = Number(savedPosition);

            // Wait until the page has rendered before restoring the position.
            const frame1 = requestAnimationFrame(() => {
                const frame2 = requestAnimationFrame(() => {
                    window.scrollTo(0, scrollY);
                    sessionStorage.removeItem("portfolioScrollPosition");
                });

                return frame2;
            });

            return () => cancelAnimationFrame(frame1);
        }

        window.scrollTo(0, 0);
    }, [location.pathname, location.key, navigationType]);

    return null;
}

export default ScrollManager;