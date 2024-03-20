import Toast, { ToastType } from "./Toast";

const ToastContainer = ({ toasts }: { toasts: ToastType[] }) => {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  )
}

export default ToastContainer;