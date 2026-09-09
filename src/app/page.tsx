import Desktop from "@/components/os/Desktop";
import { WindowManagerProvider } from "@/components/os/WindowManager";

export default function Home() {
  // Land with About already open. An empty desk tells a first-time visitor
  // nothing, and opening one window up front also demonstrates that windows
  // are the interface rather than decoration.
  return (
    <WindowManagerProvider initialOpen={["about"]}>
      <Desktop />
    </WindowManagerProvider>
  );
}
