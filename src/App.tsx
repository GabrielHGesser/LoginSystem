import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Switch} from 'react-router-dom'

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/profile">

          </Route>

          <Route path="/login">

          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

