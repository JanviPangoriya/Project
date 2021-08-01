import React, { useContext, useEffect, useState } from "react";
import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchGroups } from "../../api/group";
import AppContext from "../../App.context";
import Card from "../../Component/Card";

interface Props {}
const Dashboard: React.FC<Props> = () => {
  const {user} = useContext(AppContext);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<any>([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query, offset: offset })
      .then((response) => {
        console.log(response);
        setGroup(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, offset]);
  const change = (e: any) => {
    setQuery(e.currentTarget.value);
  };
  return (
    <>
    <div className="relative mt-24 md:ml-60 ">
        <div className="text-5xl ml-10 bg-gradient-to-tl from-red-600 to-gray-500 font-bold mb-2 bg-clip-text text-transparent">
          Welcome {user!.first_name} !!!
        </div>
        <label className="flex flex-row justify-between items-center">
          <input
            type="text"
            className="max-w-screen ml-5 sm:ml-8  justify-center mb-4 border-4 w-96 h-12 px-5 placeholder-gray-600 focus:placeholder-gray-300 "
            placeholder="Search . . . "
            onChange={change}
          />
          <FaSearch className=" absolute right-5 top-16 mt-2 w-5 h-5 text-gray-300 " />
        </label>

        {group &&
          group.map((g: any, index: number) => {
            return (
              <>
                <Card
                  key={index}
                  index={index}
                  group_image_url={
                    g.group_image_url === null
                      ? "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg"
                      : g.group_image_url
                  }
                  description={g.description}
                  name={g.name}
                  creator={g.creator}
                  state={g.state}
                />
              </>
            );
          })}
        <div className="flex flex-row justify-between items-center mx-4">
          <button
            className={
              "px-5 my-2 uppercase rounded-full h-12  " +
              (offset < 20
                ? "bg-gray-200 text-black "
                : "bg-red-500 text-white ")
            }
            disabled={offset < 20 ? true : false}
            onClick={() => {
              setOffset(offset - 20);
            }}
          >
            Previous
          </button>
          <button
            className={
              "px-5 my-2 uppercase rounded-full h-12 " +
              (offset >= 20
                ? "bg-gray-200 text-black"
                : "bg-red-500 text-white ")
            }
            disabled={offset >= 20 ? true : false}
            onClick={() => {
              setOffset(offset + 20);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
