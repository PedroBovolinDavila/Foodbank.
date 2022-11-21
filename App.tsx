import { NativeBaseProvider, Text } from "native-base";
import { Details } from "./src/screens/Details";

export default function App() {
  return (
    <NativeBaseProvider>
      <Details />
    </NativeBaseProvider>
  );
}
