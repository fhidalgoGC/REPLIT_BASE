import { Switch, Route } from "wouter";
import { MainLayout } from "@/layouts/main.layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";

function App() {
  return (
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
  );
}

export default App;
