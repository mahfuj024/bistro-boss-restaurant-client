import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://bistro-boss-restaurant-server-phi.vercel.app/menu")
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, []);

    return [menu, loading]
}

export default useMenu;