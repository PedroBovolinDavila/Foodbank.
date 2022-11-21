import { NativeBaseProvider } from "native-base";
import { Donate } from "./src/screens/Donate";

export default function App() {
  return (
    <NativeBaseProvider>
      <Donate />
    </NativeBaseProvider>
  );
}
