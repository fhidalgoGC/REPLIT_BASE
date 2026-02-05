import { SidebarLayout, useSidebarLayout } from "GC-UI-COMPONENTS/client/src/lib/ui-library/layouts/SidebarLayout";
import { useLanguage } from "@/providers/LanguageProvider";
import { translations } from "@/i18n";

interface MainLayoutProps {
  children: React.ReactNode;
}

function Sidebar() {
  const { collapsed, toggleCollapse } = useSidebarLayout();
  const { lang } = useLanguage();
  const t = translations[lang];

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
          <h3 style={{ margin: '0 0 16px 0' }}>{t.layout.menu}</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }} data-testid="link-home">
              {t.layout.home}
            </a>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }} data-testid="link-about">
              {t.layout.about}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

function LanguageSelector() {
  const { lang, setLang, availableLanguages } = useLanguage();
  const t = translations[lang];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '14px' }}>{t.layout.language}:</span>
      <select
        data-testid="select-language"
        value={lang}
        onChange={(e) => setLang(e.target.value as 'es' | 'en')}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        {availableLanguages.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

function Toolbar() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div 
      data-testid="toolbar-section"
      style={{ 
        background: '#16a34a', 
        height: '60px', 
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <h3 style={{ margin: 0 }}>{t.app.title}</h3>
      <LanguageSelector />
    </div>
  );
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <SidebarLayout
        sidebarContent={<Sidebar />}
        toolbarContent={<Toolbar />}
        sidebarExpandedWidth={220}
        sidebarCollapsedWidth={60}
        toolbarHeight={60}
      >
        <div 
          data-testid="main-section"
          style={{ 
            background: '#dc2626', 
            minHeight: '100%',
            color: 'white',
            padding: '24px'
          }}
        >
          {children}
        </div>
      </SidebarLayout>
    </div>
  );
}
