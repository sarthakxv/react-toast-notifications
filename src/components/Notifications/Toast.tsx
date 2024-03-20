import {
  XCircleIcon,
  XMarkIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const toastTypes = {
  success: {
    icon: <CheckCircleIcon />,
    iconClass: "success-icon",
    progressBarClass: "success",
  },
  warning: {
    icon: <ExclamationCircleIcon />,
    iconClass: "warning-icon",
    progressBarClass: "warning",
  },
  info: {
    icon: <InformationCircleIcon />,
    iconClass: "info-icon",
    progressBarClass: "info",
  },
  error: {
    icon: <XCircleIcon />,
    iconClass: "error-icon",
    progressBarClass: "error",
  },
};

export interface ToastType {
  type: "success"| "warning" | "error" | "info",
  message: string,
  id: number
}

export const Toast = ({
  type,
  message,
  id
}: ToastType) => {
  const { icon, iconClass, progressBarClass } = toastTypes[type];

  return (
    <div className="inline-flex items-center bg-white shadow-sm rounded-lg p-4 relative w-full max-w-80 overflow-hidden">
      <span>{icon}</span>
      <p className="text-[#151626] text-sm font-medium ml-3">{message}</p>
      <button className="cursor-pointer border-none bg-none ml-auto">
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Toast;
