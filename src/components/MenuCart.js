import { useState } from "react";
import ItemList from "./ItemList";

const MenuCart = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex()
  }

  let logic = data?.categories?.map((c) => c.itemCards);
  console.log("L", logic);
  

  return (
    <div>
      <div className=" w-6/12 mx-auto my-3 bg-white p-3 rounded-lg shadow-lg font-bold ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span>
            {data.title} ({data?.itemCards?.length || data?.categories?.length})
          </span>
          <span>🔽</span>
        </div>
          {showItems && <ItemList items={data?.itemCards || logic } />} 
      </div>
    </div>
  );
};

export default MenuCart;
