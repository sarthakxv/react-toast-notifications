import { useState, useReducer, createContext } from "react";
import { ToastType } from "../components/Notifications/Toast";
import { toastReducer } from "./toastReducer";
import { ToastContainer } from "../components/Notifications";

export const ToastContext = createContext({
  success: (message: string) => {},
  warning: (message: string) => {},
  info: (message: string) => {},
  error: (message: string) => {},
});

const ToastContextProvider = ({
  children,
}: Readonly<React.PropsWithChildren>) => {
  const initialState = {
    toasts: new Array<ToastType>(),
  };

  // useReducer hook to manage `toasts` state
  const [state, toastsDispatch] = useReducer(toastReducer, initialState);

  // Adds a new toast to the context
  const addToast = (type: string, message: string) => {
    const id = Math.floor(Math.random() * 10000000);
    // `action` object is passed to dispath()
    toastsDispatch({
      type: "ADD_TOAST",
      payload: {
        id,
        type,
        message,
      },
    });
  };

  // Removes toast of given id from the context
  const deleteToast = (id: number) => {
    toastsDispatch({
      type: "DELETE_TOAST",
      payload: { id },
    });
  };

  // Add methods for each type of Toast
  const success = (message: string) => {
    addToast("success", message);
  };

  const warning = (message: string) => {
    addToast("warning", message);
  };

  const info = (message: string) => {
    addToast("info", message);
  };

  const error = (message: string) => {
    addToast("error", message);
  };

  return (
    <ToastContext.Provider value={{ success, warning, info, error }}>
      <ToastContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
