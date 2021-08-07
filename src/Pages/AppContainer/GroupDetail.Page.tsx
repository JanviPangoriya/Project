import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface GroupDetailProps {}

const GroupDetail: React.FC<GroupDetailProps> = (props) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [id, setId] = useState((groupId as unknown) as number);
  return (
    <>
      <div className="mt-20 w-screen h-11/12">
        hello
        <h1>{id}</h1>
        <div className="space-x-3 ml-40 bottom-6 flex justify-between absolute ">
          <button
            className="px-3 py-2 w-28 border-2 text-black text-lg border-red-400 bg-red-300 hover:bg-red-200 hover:border-none"
            onClick={() => {
              setId(id - 1);
            }}
          >
            Previous
          </button>
          <button
            className="px-3 py-2 w-40 border-2 text-black text-lg border-green-400 bg-green-300 hover:bg-green-200 hover:border-none"
            onClick={() => {
              setId(id + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

GroupDetail.defaultProps = {};

export default React.memo(GroupDetail);
