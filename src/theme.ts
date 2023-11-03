type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

export const theme = {
  colors: {
    main: 'var(--r-base03)',
    dark: {
      base3: 'var(--r-base03)',
      base2: 'var(--r-base02)',
      base1: 'var(--r-base01)',
      base0: 'var(--r-base00)',
    },
    light: {
      base3: 'var(--r-base3)',
      base2: 'var(--r-base2)',
      base1: 'var(--r-base1)',
      base0: 'var(--r-base0)',
    },
    yellow: 'var(--r-yellow)',
    orange: 'var(--r-orange)',
    red: 'var(--r-red)',
    magenta: 'var(--r-magenta)',
    violet: 'var(--r-violet)',
    blue: 'var(--r-blue)',
    cyan: 'var(--r-cyan)',
    green: 'var(--r-green)',
    lorax: 'var(--r-lorax)',
    calypso: 'var(--r-calypso)',
    lime: 'var(--r-lime)',
  },
  fonts: {
    main: 'var(--r-main-font)',
    size: {
      caption: '.8rem',
      code: '1.2rem',
      main: 'var(--r-main-font-size)',
      h1: 'var(--r-heading1-size)',
      h2: 'var(--r-heading2-size)',
      h3: 'var(--r-heading3-size)',
      h4: 'var(--r-heading4-size)',
      h5: 'var(--r-heading5-size)',
    },
  },
  spacing: (size: number) => `${size * 8}px`,
  breakpoints: {
    sm: `600px`,
    md: `900px`,
    lg: `1200px`,
    xl: `1600px`,
    down: (breakpoint: Breakpoint) => `@media (max-width: ${theme.breakpoints[breakpoint]})`,
    up: (breakpoint: Breakpoint) => `@media (min-width: ${theme.breakpoints[breakpoint]})`,
  },
};

export type Theme = typeof theme;
