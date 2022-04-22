import React from 'react';
import { createRoot } from 'react-dom/client';
import { css, Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';
import { theme } from './libs/theme';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              body {
                margin: 0;
                padding: 0;
              }
            `}
          />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
