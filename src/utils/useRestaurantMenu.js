import { useState, useEffect } from "react";
import { MENU } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
