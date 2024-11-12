import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { rootState } from "../../app/store";
import { ApiStatus } from "./user.type";
import { useEffect } from "react";
import { getUserlistAction } from "./UserSlice";
import { AppDispatch } from "../../app/store";
function UserList() {
  const { list, listStatus } = useSelector((state: rootState) => state.user);
  // console.log(listStatus);
  // console.log(list);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getUserlistAction());
  }, [dispatch]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStatus === ApiStatus.loading && (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          )}
          {listStatus === ApiStatus.error && (
            <tr>
              <td colSpan={4}>Error occurred while fetching data</td>
            </tr>
          )}
          {listStatus === ApiStatus.ideal && list.length > 0
            ? list.map((el, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>Action</td>
                </tr>
              ))
            : listStatus === ApiStatus.ideal && (
                <tr>
                  <td colSpan={4}>No users found</td>
                </tr>
              )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
