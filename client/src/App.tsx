import { AppLanguageProvider } from "GC-UI-COMPONENTS/client/src/lib/ui-library/providers/AppLanguageProvider/index.provider";
import AppRoutes from "@/routes";

function App() {
  return (
    <AppLanguageProvider initial="es">
      <AppRoutes />
    </AppLanguageProvider>
  );
}

export default App;
