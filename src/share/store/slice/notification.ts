import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type ToastPayload = {
  message: string;
  type: "success" | "warning" | "error";
} | string | Error;

type NotificationState = {
  toast: {
    message: string;
    type: "success" | "warning" | "error";
  } | null;
}

const initialState: NotificationState = {
  toast: null,
}
export const notification = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    toast: (state, action: PayloadAction<ToastPayload>) => {
      if (typeof action.payload == "string") {
        state.toast = {
          message: action.payload,
          type: "success",
        };
      } else if (action.payload instanceof Error) {
        console.error(action.payload);
        state.toast = {
          message: action.payload.message,
          type: "error",
        };
      } else {
        state.toast = {
          message: action.payload.message,
          type: action.payload.type,
        };
      }
    },
    unsetToast: (state) => {
      state.toast = null;
    },
    setToastError: (state, action: PayloadAction<string>) => {
      state.toast = {
        message: action.payload,
        type: "error"
      };
    }
  }
})

const { toast, unsetToast, setToastError } = notification.actions;

const setToast = (payload: unknown) => {
  let serialized;

  if (axios.isAxiosError(payload)) {
    serialized = {
      message: payload.response?.data?.message || payload.message || 'An unknown error occurred.',
      type: 'error',
    };
  } else if (payload instanceof Error) {
    serialized = {
      message: payload.message,
      type: 'error',
    };
  } else {
    serialized = payload; // Assume it's already serializable
  }

  return toast(serialized as ToastPayload);
};
export { unsetToast, setToast, setToastError };

export default notification;