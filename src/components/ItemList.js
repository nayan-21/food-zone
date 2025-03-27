import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="border-black border-b text-left font-normal my-2 flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="font-medium">
                <span>{item?.card?.info?.name}</span>
                <p className=" text-sm mb-2">
                  {" ₹ "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
              <p className="text-xs font-light">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 relative bg-white rounded-lg mb-4  py-3">
              <button className="text-sm absolute px-2 py-1 text-center rounded-lg bg-black text-white left-[28%] top-[88%]" onClick={() => handleAddItems(item)}>
                Add +
              </button>
              <img src={LOGO + item?.card?.info?.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
