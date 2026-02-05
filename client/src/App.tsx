import { SidebarLayout, useSidebarLayout } from "GC-UI-COMPONENTS/client/src/lib/ui-library/layouts/SidebarLayout";

function MySidebar() {
  const { collapsed, toggleCollapse } = useSidebarLayout();

  return (
    <div 
      data-testid="sidebar-section"
      style={{ 
        background: '#2563eb', 
        height: '100%', 
        color: 'white',
        padding: '16px',
        minWidth: collapsed ? '60px' : '200px'
      }}
    >
      <button 
        data-testid="button-toggle-sidebar"
        onClick={toggleCollapse}
        style={{
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '16px'
        }}
      >
        {collapsed ? '>' : '<'}
      </button>
      {!collapsed && (
        <div>
          <h3 style={{ margin: '0 0 16px 0' }}>Sidebar (A)</h3>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>Area azul - Sidebar</p>
        </div>
      )}
    </div>
  );
}

function MyToolbar() {
  return (
    <div 
      data-testid="toolbar-section"
      style={{ 
        background: '#16a34a', 
        height: '60px', 
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <h3 style={{ margin: 0 }}>Toolbar (B)</h3>
      <span style={{ marginLeft: '16px', fontSize: '14px', opacity: 0.8 }}>Area verde - Toolbar</span>
    </div>
  );
}

function MainContent() {
  return (
    <div 
      data-testid="main-section"
      style={{ 
        background: '#dc2626', 
        minHeight: '100%',
        color: 'white',
        padding: '24px'
      }}
    >
      <h1 style={{ margin: '0 0 16px 0' }}>Main Content (C)</h1>
      <p style={{ opacity: 0.8 }}>Area roja - Contenido principal</p>
      <p style={{ marginTop: '16px' }}>Este contenido tiene scroll automatico si excede el espacio.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <SidebarLayout
        sidebarContent={<MySidebar />}
        toolbarContent={<MyToolbar />}
        sidebarExpandedWidth={220}
        sidebarCollapsedWidth={60}
        toolbarHeight={60}
      >
        <MainContent />
      </SidebarLayout>
    </div>
  );
}

export default App;
