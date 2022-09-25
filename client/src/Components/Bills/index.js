import React from "react";
import{ UnivTable } from "../Table";
function Bills() {
  return (
    <div className="w-full  m-10">
              <h1 className="text-3xl m-4 text-left">Bills</h1>
      <div className="flex justify-between">
        <UnivTable />
      </div>
    </div>
  );
}

export default Bills;
