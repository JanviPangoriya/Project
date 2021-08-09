import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchSpecificGroup } from "../../api/group";
import { handleError } from "../../Component/Card";
import { selctedGroupSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
import { groupAction } from "../../store/actions/groups.actions";

interface GroupDetailProps {}
const cssStyle = { minHeight: "713px" };
const GroupDetail: React.FC<GroupDetailProps> = (props) => {
  const history = useHistory();
  const grouptoshow = useAppSelector(selctedGroupSelector);
  const { groupId } = useParams<{ groupId: string }>();
  const [selectedId, setSelectedId] = useState(parseInt(groupId));
  useEffect(() => {
    fetchSpecificGroup(selectedId).then((response) => {
      groupAction.selectGroupId(selectedId);
      groupAction.selectGroup(response);
    });
  }, [selectedId]);
  const fetchNextGroup = () => {
    setSelectedId((selectedId) => selectedId + 1);
    history.push("/groups/" + (selectedId + 1));
  };
  const fetchPreviousGroup = () => {
    if (selectedId > 0) {
      setSelectedId((selectedId) => selectedId - 1);
      history.push("/groups/" + (selectedId - 1));
    }
  };
  return (
    <>
      <div
        className="pt-2 bg-gray-300 flex items-center mx-auto "
        style={cssStyle}
      >
        <div className="container mx-auto p-5 pb-4 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <img
            className="rounded-xl w-96 h-40 "
            src={
              grouptoshow?.group_image_url === null
                ? "https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
                : grouptoshow?.group_image_url
            }
            onError={handleError}
            alt=""
          />
          <div>
            <h1 className="mt-5 text-2xl font-semibold text-center uppercase">
              {grouptoshow?.name}
            </h1>
            <p className="mt-2 font-mono text-center ">
              {grouptoshow?.description}
            </p>
          </div>
          <p className="my-2 space-y-1 text-md font-semibold">
            <p>Created At - {grouptoshow?.created_at}</p>
            <p>Updated At - {grouptoshow?.updated_at}</p>
            <p>Chat Count - {grouptoshow?.chatCount}</p>
          </p>
          <div>
            <div className=" text-lg font-semibold uppercase underline ">
              State Details :
            </div>
            <p className="my-2 space-y-1 text-md font-semibold no-underline ">
              <p>State Code - {grouptoshow?.state?.state_code}</p>
              <p>Title - {grouptoshow?.state?.title}</p>
            </p>
          </div>
          <div className="mt-10 flex flex-row justify-between">
            <button
              className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
              onClick={fetchPreviousGroup}
            >
              Previous
            </button>
            <button
              className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
              onClick={fetchNextGroup}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

GroupDetail.defaultProps = {};

export default React.memo(GroupDetail);
