import store from "@/redux/store";
import { logout } from "@/redux/toolkits/authSlice";

const monitorLocalStorage = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "token" && event.oldValue && !event.newValue) {
      store.dispatch(logout());
    }
  });
};

export default monitorLocalStorage;
