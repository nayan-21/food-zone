import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        count2: 1,
    }

  }

  render() {
    const { name, location } = this.props;
    const{count, count2} = this.state;
    return (
      <div className="userclass">
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <h2>{name} </h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
