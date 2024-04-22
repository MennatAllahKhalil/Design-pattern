import { Toast, ToastProps } from "./Toast";
import { useEffect, useState } from "react";
import { observable } from "./utils";

export function ToastContainer() {
  const [toasts, setToasts] = useState<
    Pick<ToastProps, "id" | "message" | "variant">[]
  >([]);

  useEffect(() => {
    return observable.subscribe((event) => {
      if (event.type === "Add_TOAST") {
        setToasts((prevToasts) => [...prevToasts, event.toast]);
      }
      if (event.type === "REMOVE ALL") {
        setToasts([]);
      }
    });
  }, []);
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => {}}
        />
      ))}
    </div>
  );
}
