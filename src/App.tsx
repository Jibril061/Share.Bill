import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import CreateBill from './pages/CreateBill'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-bill" element={<CreateBill />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
