import { ThemeColors } from './types';

export const darkColors: ThemeColors = {
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
