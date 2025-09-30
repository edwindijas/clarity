export const dark = {
  main: {
    background: '#000',
    text: '#fff',
    primary: '#1a73e8',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    border: '#333',
  },

  // Component themes
  button: {
    default: {
      background: '#1a73e8',
      text: '#fff',
      hover: '#1669c1',
      disabled: '#555',
    },
    secondary: {
      background: '#ff4081',
      text: '#fff',
      hover: '#e73370',
    },
    outline: {
      background: 'transparent',
      text: '#1a73e8',
      border: '#1a73e8',
      hoverBg: 'rgba(26, 115, 232, 0.1)',
    },
  },

  warning: {
    background: '#ff9800',
    text: '#000',
    border: '#e68900',
  },

  text: {
    heading: '#fff',
    body: '#ddd',
    muted: '#aaa',
    link: '#1a73e8',
    linkHover: '#4d9cf5',
  },

  card: {
    background: '#111',
    border: '#222',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
  },

  input: {
    background: '#111',
    border: '#333',
    text: '#fff',
    placeholder: '#777',
    focusBorder: '#1a73e8',
  },
} as const;

export const light = {
  main: {
    background: '#ffffff',
    text: '#000000',
    primary: '#1a73e8',
    secondary: '#ff4081',
    success: '#2e7d32',
    warning: '#ed6c02',
    error: '#d32f2f',
    border: '#ddd',
  },

  button: {
    default: {
      background: '#1a73e8',
      text: '#ffffff',
      hover: '#1669c1',
      disabled: '#ccc',
    },
    secondary: {
      background: '#ff4081',
      text: '#ffffff',
      hover: '#e73370',
    },
    outline: {
      background: 'transparent',
      text: '#1a73e8',
      border: '#1a73e8',
      hoverBg: 'rgba(26, 115, 232, 0.1)',
    },
  },

  warning: {
    background: '#fff3e0',
    text: '#ed6c02',
    border: '#fbc02d',
  },

  text: {
    heading: '#000000',
    body: '#333333',
    muted: '#666666',
    link: '#1a73e8',
    linkHover: '#0d47a1',
  },

  card: {
    background: '#ffffff',
    border: '#eee',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },

  input: {
    background: '#ffffff',
    border: '#ccc',
    text: '#000000',
    placeholder: '#999',
    focusBorder: '#1a73e8',
  },
};
