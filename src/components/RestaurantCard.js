import { LOGO } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;

  return (
    <div className="res-card w-48 m-4 bg-[#F0F0D7] rounded-md h-[400px]">
      <div className="res-logo ">
        <img
          className="res-logo-img p-1 rounded-md "
          src={LOGO + cloudinaryImageId}
          alt="Restaurant Logo"
        />
      </div>
      <div className="res-data p-2">
        <h1 className="font-medium">{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2 className="font-bold p-1">{avgRating}</h2>
      </div>
    </div>
  );
};

export const withOpenLable = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 bg-black text-white my-auto rounded-sm p-1">Open</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
