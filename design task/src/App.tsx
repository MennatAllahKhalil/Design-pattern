import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";
import { toast } from "./components/utils";

function App() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <h1 className="text-7xl font-bold text-center">Hello, World</h1>

      <div className="space-x-2">
        <Button onClick={() => toast("Message Default")}>Default</Button>
        <Button onClick={() => toast.success("Message Success")}>
          Success ✅
        </Button>
        <Button onClick={() => toast.error("Message Error")}>Error ❌</Button>
        <Button
          onClick={() => {
            toast.dismissAll();
          }}
        >
          Remove All
        </Button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
