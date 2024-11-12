import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./module/Layouts";
import UserList from "./module/user/UserList";
import UserForm from "./module/user/UserForm";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="/list" element={<UserList />} />
      <Route path="/add" element={<UserForm />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
