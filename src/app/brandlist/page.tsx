"use client";
import reacTable from "react-table";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
interface Brand {
  name: string;
}

const Page = () => {
  const [brands, setBrand] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/brands", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setBrand(res));
  }, []);
  console.log(brands);
  return (
    <div className="mt-20">
      {brands?.length ? (
        <div>
         
          <table className="mx-auto ">
            <p className="text-xl font-semibold  mx-auto my-4 ">
              Brand list
            </p>
            <tr className="w-full mx-auto grid grid-cols-2  border-[1px] border-gray-700">
              <th>Sl</th>
              <th>Name</th>
            </tr>
            <tbody>
              {brands.map((brand: Brand, index: number) => (
                <div key={index + 1}>
                  <tr className=" mx-auto grid grid-cols-2">
                    <td>{index + 1}</td>
                    <td>{brand.name}</td>
                   
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
