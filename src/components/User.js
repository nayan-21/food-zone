import { useState } from "react";

const User = (props) => {
const{name, location}= props;
const [count] = useState(0);
const [count2] = useState(1);

  return (
    <div className="user">
        <h1>{count}</h1>
        <h1>{count2}</h1>
      <h2>{name}</h2>
      <h3>{location}</h3>
    </div>
  );
};

export default User;
