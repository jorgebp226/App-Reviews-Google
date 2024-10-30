import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AppLayout} from './components/layout/AppLayout';
import {AuthComponent} from './components/auth/AuthComponent';
import { useAuthStore } from './store/auth';

Amplify.configure(awsconfig);

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      {!isAuthenticated ? <AuthComponent /> : <AppLayout />}
    </>
  );
}

export default App;