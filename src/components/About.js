import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1> About Us </h1>
      <User key = {1} name = {"Nayan (function)"} location = {"Palanpur"} />
      <UserClass key={2} name ={"Nayan (class)"} location ={"Palanpur"} />
    </div>
  );
};

export default About;
