import "./index.css";
import { QueryProvider } from "./context/QueryProvider";
import { AppRouter } from "./routes";

function App() {
    return (
        <QueryProvider>
            <AppRouter />
        </QueryProvider>
    );
}

export default App;
