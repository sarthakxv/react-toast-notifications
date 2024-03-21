import { ToastType } from "../components/Notifications/Toast";
/* It's for managing the states of the Toasts
1. Reducer Function
2. useReducer in ToastContextProvider, where we are managing the `notifications` state
*/
export const toastReducer = (state: { toasts: ToastType[] }, action: { type: string, payload: any }) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case "DELETE_TOAST":
      const updatedToasts = state.toasts.filter(
        (toast) => toast.id !== action.payload.id
      );
      return {
        ...state,
        toasts: updatedToasts
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

/**
payload = {
  id,
  type,
  message
}
*/