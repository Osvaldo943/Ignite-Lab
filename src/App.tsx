import { ApolloProvider } from '@apollo/client'
import { Router } from "./Router"
import {Event} from "./pages/event"
import {client} from "./lib/apollo"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ApolloProvider>
    </div>
  )
}
export default App
