export function LoginPage() {
  return (
    <div data-testid="page-login">
      <h1 style={{ margin: '0 0 24px 0', textAlign: 'center', color: '#333' }}>
        Iniciar Sesion
      </h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label 
            htmlFor="email" 
            style={{ display: 'block', marginBottom: '4px', color: '#555', fontSize: '14px' }}
          >
            Correo electronico
          </label>
          <input
            id="email"
            type="email"
            data-testid="input-email"
            placeholder="tu@correo.com"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label 
            htmlFor="password" 
            style={{ display: 'block', marginBottom: '4px', color: '#555', fontSize: '14px' }}
          >
            Contrasena
          </label>
          <input
            id="password"
            type="password"
            data-testid="input-password"
            placeholder="Tu contrasena"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button
          type="submit"
          data-testid="button-login"
          style={{
            width: '100%',
            padding: '12px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '8px'
          }}
        >
          Entrar
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '24px', color: '#666', fontSize: '14px' }}>
        <a href="/" style={{ color: '#667eea' }} data-testid="link-back-home">
          Volver al inicio
        </a>
      </p>
    </div>
  );
}
