import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import UserDetail from "./UserDetail";

function User(props) {
  const [users, setUsers] = useState([]);
  const { path } = useRouteMatch();

  console.log("props", props);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User Page</h2>
      <Switch>
        <Route exact path={`${path}`}>
          <h3>List</h3>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`${path}/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </Route>
        <Route path={`${path}/:userId`}>
          <UserDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default User;
