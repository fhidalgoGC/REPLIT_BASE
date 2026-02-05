import { Switch, Route } from "wouter";
import { publicRoutes, mainRoutes, mainLayout as MainLayout } from "./feature-routes";

export default function AppRoutes() {
  return (
    <Switch>
      {/* Rutas publicas con sus propios layouts */}
      {publicRoutes.map((route) => {
        const Layout = route.layout;
        const Component = route.component;
        return (
          <Route key={route.path} path={route.path}>
            <Layout>
              <Component />
            </Layout>
          </Route>
        );
      })}

      {/* Rutas con MainLayout */}
      <Route>
        <MainLayout>
          <Switch>
            {mainRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
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
