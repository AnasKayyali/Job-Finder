import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SearchBar from "./Components/SearchBar"
import Navbar from "./Components/Navbar"
import JobDetails from "./Components/JobDetails"
import WantLogin from "./Components/WantLogin"
import SignUp from "./Components/SignUp"
import WantPostJob from "./Components/WantPostJob"

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}> 
        <Router>
          <Navbar />  
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/users/:detailsId" element={<JobDetails />} />
            <Route path="/login" element={<WantLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/postjob" element={<WantPostJob />} />
          </Routes>  
        </Router>
      </QueryClientProvider>
    </>
  )
}