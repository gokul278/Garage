import Mainroutes from './Pages/Mainroutes/Mainroutes';
import { LanguageProvider } from './Context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Mainroutes />
    </LanguageProvider>
  );
}

export default App;
