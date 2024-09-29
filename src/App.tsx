import './App.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGetKiamoniBlocks } from './kiamoni';
import theme from './theme';
import { Provider } from './components';
import { filterAndArrangeBlocks } from './helper';
import { useGetKiamoniPages } from './hooks';

function App() {
  const getKiamoniBlocks = useGetKiamoniBlocks();
  const getKiamoniPages = useGetKiamoniPages();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {getKiamoniBlocks().map(({ name, component: Component, props }) => (
              <Route
                key={name}
                path={`blocks/${name.match(/\d+/)}`}
                element={
                  <Provider>
                    <Component {...props} />
                  </Provider>
                }
              />
            ))}
            {getKiamoniPages().map(({ name, pages }) => (
              <Route
                key={name}
                path={`${name === 'home' ? '' : `${name}`}`}
                element={filterAndArrangeBlocks(pages).map(
                  ({ component: Component, props }) => (
                    <Provider>
                      <Component {...props} />
                    </Provider>
                  )
                )}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
