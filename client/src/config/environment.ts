// App-specific environment configuration
// These values will be merged with the library's defaults using "auto" priority

export const appEnvironment = {
  // Language Configuration (overrides library defaults)
  AVAILABLE_LANGUAGES: ['es', 'en'],
  DEFAULT_LANGUAGE: 'es',
  
  // Language-specific settings
  LANGUAGE_CONFIG: {
    es: {
      locale: 'es',
      dateFormat: 'dd/MM/yyyy',
      twoDigits: true,
    },
    en: {
      locale: 'en',
      dateFormat: 'MM/dd/yyyy',
      twoDigits: true,
    },
  },
  
  // Number format configuration
  NUMBER_FORMAT_CONFIG: {
    NUMBER_FORMAT_PATTERN: '0,000.00',
    NUMBER_ROUND_MODE: 'truncate',
    NUMBER_LOCATE: 'es-ES',
    NUMBER_MIN_DECIMALS: 2,
    NUMBER_MAX_DECIMALS: 4,
  },
  
  // Development environment detection
  IS_DEVELOPMENT: import.meta.env.DEV || import.meta.env.MODE === 'development',
  
  // App-specific configuration (ignored by library, available for our app)
  APP_NAME: 'Mi Aplicacion',
  APP_VERSION: '1.0.0',
};

export type AppEnvironment = typeof appEnvironment;
