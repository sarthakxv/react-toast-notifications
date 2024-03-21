import { useState, useReducer, createContext } from "react";
import { ToastType } from "../components/Notifications/Toast";

export const ToastContext = createContext({
  toasts: {},
  addToast: (id: number, type: string, message: string) => {},
  removeToast: (id: number) => {},
});

const ToastContextProvider = ({
  children,
}: Readonly<React.PropsWithChildren>) => {
  const [notifications, setNotifications] = useState({
    toasts: new Array<ToastType>()
  });

  // Adds a new toast to the context
  const addToast = (id: number, type: string, message: string) => {};

  // Removes toast of given id from the context
  const removeToast = (id: number) => {};

  return (
    <ToastContext.Provider
      value={{
        toasts: notifications,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
