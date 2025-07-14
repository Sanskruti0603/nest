

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authSliceActions } from "./store/authSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      dispatch(authSliceActions.login());
      dispatch(authSliceActions.changeRole(role));
    }
  }, []);

  return (
    <>
      <Header />
      <MainRoutes />
      <AdminRoutes />
      <Footer />
    </>
  );
};

export default App;
