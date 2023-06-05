"use client";
import reacTable from "react-table";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
interface User {
  name: string;
  email: string;
  password: string;
}
// interface Users  {
//     Users:[User]
// }
const Page = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  console.log(users);
  return (
    <div className="mt-20">
      {users?.length ? (
        <div>
          {" "}
          <table className="w-[-500px] mx-auto ">
            <p className="text-xl font-semibold w-max mx-auto my-4">
              User list
            </p>
            <tr className="grid grid-cols-3  border-[1px] border-gray-700">
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>{" "}
            <tbody>
              {users.map((user: User, index: number) => (
                <div key={index + 1}>
                  <tr className="w-[-500px] mx-auto grid grid-cols-3">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                </div>
              ))}
            </tbody>{" "}
          </table>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Page;
