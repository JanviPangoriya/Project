import { memo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Card from "../../Component/Card";
import { Group } from "../../model/Group";
import {
  groupLoadingSelector,
  groupQueryCompletedSelector,
  groupQuerySelector,
} from "../../selectors/groups.selectors";
import { uiSideBarSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
import { ImSpinner9 } from "react-icons/im";
import Alert from "../../Component/Alert/Alert";
import { useDispatch } from "react-redux";
import {
  queryAction,
  selectGroupAction,
  selectGroupIdAction,
} from "../../store/actions/groups.actions";

interface Props {}
const Groups: React.FC<Props> = () => {
  // const sidebarStatus = useAppSelector((state) => state.
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupQueryCompletedSelector);
  const loading = useAppSelector(groupLoadingSelector);
  useEffect(() => {
    dispatch(queryAction(""));

    // eslint-disable-next-line
  }, []);
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
            dispatch(queryAction(e.target.value));
          }}
        />
        <FaSearch className={" absolute left-10 w-6 h-6 mb-3 text-gray-700 "} />
      </label>
      {loading && <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />}
      {groups &&
        groups.map((g: any, index: number) => {
          return (
            <>
              <div
                className="flex py-2.5 px-3"
                onClick={(e: any) => {
                  dispatch(selectGroupAction(g as Group));
                  dispatch(selectGroupIdAction(g.id));
                  history.push("/groups/" + g.id);
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
        })}
      {!loading && groups.length === 0 && (
        <Alert theme="error" fill="solid" className="ml-8">
          No Data Found
        </Alert>
      )}
    </div>
  );
};

Groups.defaultProps = {};
export default memo(Groups);
