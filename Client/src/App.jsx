import Layout from './components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout CssBaseline />
    </ThemeProvider>
  );
}

export default App;
