import { ToastContext } from "../../contexts/ToastContext";

const ToastContextProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ToastContext.Provider value={{}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContextProvider;