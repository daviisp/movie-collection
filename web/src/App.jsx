import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { VideoContextProvider } from "./contexts/VideoContext";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout />
      </VideoContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
