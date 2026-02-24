import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="max-w-[430px] mx-auto min-h-screen bg-[var(--bg-primary)] relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
