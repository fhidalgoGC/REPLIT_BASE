export function HomePage() {
  return (
    <div data-testid="page-home">
      <h1 style={{ margin: '0 0 16px 0' }}>Pagina de Inicio</h1>
      <p>Bienvenido a la aplicacion.</p>
      <p style={{ marginTop: '16px', opacity: 0.8 }}>
        Esta es la pagina principal usando el MainLayout.
      </p>
    </div>
  );
}
