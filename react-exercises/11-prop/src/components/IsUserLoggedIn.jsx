import React from "react";

const IsUserLoggedIn = props => {
  /**
   * @example
   * <ul>
   *  <li>kishonisawesome is Logged In</li>
   *  <li>kishonisawesome is Logged In</li>
   *  <li>kishonisawesome is Logged In</li>
   * </ul>
   */
  return (
    <ul>
      {props.Users.map(user => {
        return (
          <li>
            {Object.values(user.name)}{" "}
            {user.isUserLoggedIn ? "Logged in" : "Logged off"}
          </li>
        );
      })}
    </ul>
  );
};

export default IsUserLoggedIn;
