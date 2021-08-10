import React, { useEffect, useState } from "react";
import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import {useHistory } from "react-router-dom";
import { fetchGroups } from "../../api/group";
import Card from "../../Component/Card";
import { Group } from "../../model/Group";
import {
  groupQueryCompletedSelector,
  groupQuerySelector,
} from "../../selectors/groups.selectors";
import { uiSideBarSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
import { ImSpinner9 } from "react-icons/im";
import { groupAction } from "../../store/actions/groups.actions";
import Alert from "../../Component/Alert/Alert";

interface Props {}
const Groups: React.FC<Props> = () => {
  // const sidebarStatus = useAppSelector((state) => state.isSideBarOpen);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector(groupQueryCompletedSelector);
  useEffect(() => {
    setIsLoading(true);
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      groupAction.querCompleted(query, groups);
      setIsLoading(false);
    }); // eslint-disable-next-line
  }, [query]);
  const sidebarStatus = useAppSelector(uiSideBarSelector);

  return (
    <div
      className={
        "relative mt-24 transfom duration-500  ml-5 " +
        (sidebarStatus ? "md:ml-64 " : "")
      }
    >
      <label className="relative flex flex-row justify-between items-center">
        <input
          type="text"
          className="max-w-screen ml-5 sm:ml-8  justify-center mb-4 border-4 border-gray-600 w-96 h-12 px-10 placeholder-gray-600 focus:placeholder-gray-300 "
          placeholder="Search . . . "
          value={query}
          onChange={(e) => {
            console.log(e.target.value);
            groupAction.query(e.target.value);
          }}
        />
        <FaSearch className={" absolute left-10 w-6 h-6 mb-3 text-gray-700 "} />
      </label>
      <div className="max-w-md ml-0  mt-5">
        {isLoading && query ? (
          <div className="">
            <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
          </div>
        ) : (
          groups && groups.length>0 ? (
          groups.map((g: any, index: number) => {
            return (
              <>
                <div
                  className="flex py-2.5 px-3"
                  onClick={(e: any) => {
                    groupAction.selectGroup(g as Group);
                    groupAction.selectGroupId(g.id);
                    history.push("/groups/"+g.id)
                  }}
                >
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
                </div>
              </>
            );
          })):<Alert className="ml-5 mr-18" fill="solid" theme="error"> NO RECORD FOUND</Alert>
        )}
      </div>
    </div>
  );
};

Groups.defaultProps = {};
export default memo(Groups);
