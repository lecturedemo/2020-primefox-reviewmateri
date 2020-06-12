import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

export default () => {
  const { userId } = useParams();
  const history = useHistory();
  const location = useLocation();

  console.log("location", location);

  /*

    1, 2, 3, 4 => push 4

    1, 2, 4, => replace 4
  
  */

  console.log("history", history);

  return (
    <div>
      <h3>User Detail {userId}</h3>
      <button onClick={() => history.replace("/")}>Click me</button>
    </div>
  );
};
