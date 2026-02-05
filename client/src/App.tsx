import { Switch, Route } from "wouter";
import { MainLayout } from "@/layouts/main.layout";
import { LoginLayout } from "@/layouts/login.layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { LoginPage } from "@/pages/login";

function App() {
  return (
    <Switch>
      {/* Rutas con LoginLayout */}
      <Route path="/login">
        <LoginLayout>
          <LoginPage />
        </LoginLayout>
      </Route>

      {/* Rutas con MainLayout */}
      <Route>
        <MainLayout>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route>
              <div data-testid="page-not-found">
                <h1>404 - Pagina no encontrada</h1>
              </div>
            </Route>
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
