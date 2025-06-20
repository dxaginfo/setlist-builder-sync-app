import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

// Redux store
import { store } from './store';

// Auth components
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Main app components
import Dashboard from './pages/Dashboard';
import SetlistDetail from './pages/setlists/SetlistDetail';
import SetlistCreate from './pages/setlists/SetlistCreate';
import SetlistEdit from './pages/setlists/SetlistEdit';
import SongLibrary from './pages/songs/SongLibrary';
import SongDetail from './pages/songs/SongDetail';
import SongCreate from './pages/songs/SongCreate';
import SongEdit from './pages/songs/SongEdit';
import PerformanceMode from './pages/performance/PerformanceMode';
import UserProfile from './pages/user/UserProfile';
import Settings from './pages/user/Settings';
import NotFound from './pages/NotFound';

// Layout components
import MainLayout from './components/layouts/MainLayout';
import MinimalLayout from './components/layouts/MinimalLayout';

// Create a React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Create MUI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              {/* Auth routes with minimal layout */}
              <Route element={<MinimalLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>

              {/* Performance mode (full screen) */}
              <Route path="/setlists/:id/perform" element={<PerformanceMode />} />

              {/* Main app routes with standard layout */}
              <Route element={<MainLayout />}>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/setlists">
                    <Route index element={<Navigate to="/" replace />} />
                    <Route path="new" element={<SetlistCreate />} />
                    <Route path=":id" element={<SetlistDetail />} />
                    <Route path=":id/edit" element={<SetlistEdit />} />
                  </Route>
                  <Route path="/songs">
                    <Route index element={<SongLibrary />} />
                    <Route path="new" element={<SongCreate />} />
                    <Route path=":id" element={<SongDetail />} />
                    <Route path=":id/edit" element={<SongEdit />} />
                  </Route>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>
              </Route>
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;