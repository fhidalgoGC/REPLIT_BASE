import { LanguageProvider } from "@/providers/LanguageProvider";
import AppRoutes from "@/routes";

function App() {
  return (
    <LanguageProvider initial="es">
      <AppRoutes />
    </LanguageProvider>
  );
}

export default App;
