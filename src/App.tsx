import { ThemeProvider } from 'contexts/ThemeContext';
import Main from 'pages/Main/Main';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
