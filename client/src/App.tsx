import { LanguageProvider, useLanguage } from "@/providers/LanguageProvider";
import { LibI18nProvider } from "GC-UI-COMPONENTS/client/src/lib/ui-library/providers/AppLanguageLibUiProvider/index.provider";
import { ConfigProvider } from "GC-UI-COMPONENTS/client/src/lib/ui-library/providers/AppEnviromentProvider/index.provider";
import { appEnvironment } from "@/config/environment";
import AppRoutes from "@/routes";

function AppWithLibrary() {
  const { lang, setLang } = useLanguage();

  return (
    <ConfigProvider 
      parentConfig={appEnvironment} 
      priority="auto"
    >
      <LibI18nProvider 
        language={lang} 
        onLanguageChange={setLang}
      >
        <AppRoutes />
      </LibI18nProvider>
    </ConfigProvider>
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
