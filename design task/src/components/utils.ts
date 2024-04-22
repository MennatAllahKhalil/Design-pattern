import { ToastProps } from "./Toast";
import { Observable } from "./observable";
type Events = {
  type: "Add Toast" | "REMOVE ALL";
  toast: Pick<ToastProps, "id" | "message" | "variant">;
};
export const observable = new Observable<Events>();

export function toast(message: string) {
  observable.notify({
    type: "Add_TOAST",
    toast: {
      id: Math.random(),
      message,
    },
  });
}
toast.success = (message: string) => {
  observable.notify({
    type: "Add_TOAST",
    toast: {
      id: Math.random(),
      message,
      variant: "success",
    },
  });
};

toast.error = (message: string) => {
  observable.notify({
    type: "Add_TOAST",
    toast: {
      id: Math.random(),
      message,
      variant: "error",
    },
  });
};
toast.dismissAll = () => {
  observable.notify({ type: "REMOVE ALL" });
};
