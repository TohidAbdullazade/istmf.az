import { QueryContextProvider } from "./context/QueryContext.tsx";
import { MainRoute } from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <main>
      <QueryContextProvider>
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </QueryContextProvider>
    </main>
  );
};

export default App;
