import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
              index={path === '/' ? true : undefined}
            />
          ))}

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
