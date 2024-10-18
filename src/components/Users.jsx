import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Links from "./Links";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers || []);
  const handleDelete = id => {
    // make sure user is confirmed to delete
    fetch(`https://coffee-store-server-nu-plum.vercel.app/user/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0) {
        console.log('User deleted successfully!')
        // remove the user from the UI
        const remainingUsers = users.filter(user => user._id !== id);
        setUsers(remainingUsers);
      }
    })
  }
  return (
    <div className="px-24 py-2">
      <Helmet>
        <title>Users | Coffee Store</title>
      </Helmet>
      <Links/>
      <h2 className="text-center text-5xl my-8">Users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map(user =>
                <tr>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td><button onClick={() => handleDelete(user._id)} className="btn">X</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;