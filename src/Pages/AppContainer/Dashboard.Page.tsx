import React, { useEffect } from "react";
import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchGroups } from "../../api/group";
import Card from "../../Component/Card";
import { useAppSelector } from "../../store";

interface Props {}
const Dashboard: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.me);

  const query = useAppSelector((state) => state.groupQuery);

  const groups = useAppSelector((state) => {
    const groupIds = state.groupQueryMap[state.groupQuery] || [];
    const group = groupIds.map((id) => state.groups[id]);
    return group;
  });
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) =>
      dispatch({
        type: "groups/fetch",
        payload: { groups: groups, query: query },
      })
    ); // eslint-disable-next-line
  }, [query]);

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
            onChange={(e) => {
              dispatch({ type: "groups/query", payload: e.target.value });
            }}
          />
          <FaSearch className=" absolute right-5 top-16 mt-2 w-5 h-5 text-gray-300 " />
        </label>

        {groups &&
          groups.map((g: any, index: number) => {
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
      </div>
    </>
  );
};

Dashboard.defaultProps = {};
export default memo(Dashboard);
