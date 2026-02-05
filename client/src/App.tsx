import { Switch, Route } from "wouter";
import { MainLayout } from "@/layouts/main.layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";

function App() {
  return (
    <Switch>
      {/* Rutas publicas sin layout (login, registro, etc.) */}
      {/* <Route path="/login" component={LoginPage} /> */}
      {/* <Route path="/register" component={RegisterPage} /> */}

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
