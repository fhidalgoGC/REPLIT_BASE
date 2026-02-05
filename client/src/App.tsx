import { LanguageProvider, useLanguage } from "@/providers/LanguageProvider";
import { LibI18nProvider } from "GC-UI-COMPONENTS/client/src/lib/ui-library/providers/AppLanguageLibUiProvider/index.provider";
import AppRoutes from "@/routes";

function AppWithLibrary() {
  const { lang, setLang } = useLanguage();

  return (
    <LibI18nProvider 
      language={lang} 
      onLanguageChange={setLang}
    >
      <AppRoutes />
    </LibI18nProvider>
  );
}

function App() {
  return (
    <LanguageProvider initial="es">
      <AppWithLibrary />
    </LanguageProvider>
  );
}

export default App;
