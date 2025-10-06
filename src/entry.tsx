import ReactDOM from 'react-dom/client';

import { App } from './App';


export const appEntry = (startPath: string, id: string): void => {
  const { container, shadow } = createEntry(id);
  if (!container) {
    throw new Error(`No container found with id: ${id}`);
  }
  const root = ReactDOM.createRoot(container);
  root.render(<App target={shadow} />);
};

export const createEntry = (id: string): { container?: HTMLDivElement, shadow: ShadowRoot } => {
  const fragment = document.createDocumentFragment();
  const entry = document.createElement('div');

  const shadow = entry.attachShadow({ mode: 'open' });
  const styleNode = document.createElement('style');
  styleNode.textContent = resetStyles;
  entry.shadowRoot?.appendChild(styleNode);

  const container = document.createElement('div');
  container.id = id;
  entry.shadowRoot?.appendChild(container);
  fragment.appendChild(entry);
  document.body.appendChild(fragment);
  return { container, shadow };
};

export const resetStyles = `
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: #000;
    background: transparent;
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
