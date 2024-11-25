import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./module/Layouts";
import UserList from "./module/user/UserList";
import UserForm from "./module/user/UserForm";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="/list" element={<UserList />} />
      <Route path="/add" element={<UserForm />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
