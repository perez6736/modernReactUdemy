import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";

function UsersList() {
  const [isLoadingUsers, setLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users; // will grab state from users
  });

  useEffect(() => {
    setLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch(() => setLoadingUsersError(true))
      .finally(() => setLoadingUsers(false));
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error fetching data....</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
