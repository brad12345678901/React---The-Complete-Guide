import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // FUNCTION THAT EXECUTES UPON INSTANTIATE
  // STATE MUST BE AN OBJECT
  // AND STATE MUST BE STRICTLY STATE, NO CUSTOM NAMES
  // AND ONLY ONE STATE THAT GROUPS ALL DATA TOGETHER
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: "test",
    };
  }

  componentDidUpdate() {
    // try{
    //   trysomecodeHere();
    // } catch (err) {
    //   //handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error("No Users Provided");
    }
  }

  //FUNCTION DECLARED WITHIN THE CLASS, NOT WITHIN THE RENDER FUNCTION
  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
