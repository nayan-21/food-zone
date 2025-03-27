import Simmar from "./Simmar";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCart from "./MenuCart";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Simmar />;

  const { text } = resInfo?.cards[0]?.card?.card;

  // const ItemCart =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.c
  // console.log(ItemCart);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const menuCart =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        const type = c?.card?.card?.["@type"];
        return (
          type ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
          type ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );

  console.log("M", menuCart);

  return (
    <div className="menu text-center bg-[#AAB99A]">
      <h1 className="font-bold pt-8 text-2xl mb-8">{text}</h1>

      {menuCart.map((menu, index) => {
        return (
          <MenuCart
            key={menu?.card?.card?.title}
            data={menu?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
