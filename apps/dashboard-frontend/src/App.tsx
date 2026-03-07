import type {App} from "app"
import "./index.css"
import {treaty} from "@elysiajs/eden"
import {BrowserRouter, Route, Routes} from "react-router"
import {Signin} from "./pages/Signin"
import {Signup} from "./pages/Signup"
import {Dashboard} from "./pages/Dashboard"
import {Credits} from "./pages/Credits"
import {ApiKeys} from "./pages/ApiKeys"
import {Landing} from "./pages/Landing"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ElysiaClientContextProvider} from "./providers/Eden"

// const client = treaty<App>(process.env.BACKEND_URL || 'https://localhost:3000')
const client = treaty<App>( 'https://localhost:3000') //todo : line 14 and 15

const queryClient = new QueryClient()

export function App() {

  return (
    <ElysiaClientContextProvider value={client}>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/api-keys" element={<ApiKeys />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
    </ElysiaClientContextProvider>
  );
}

export default App;
