import './App.css'
import { Button } from './components/Button'
function App() {

  return (
    <>
      <div className='min-h-screen'>
        <div className='container mx-auto'>
          <div className='max-w-2xl mx-auto'>
              tailwind setup
              <Button variant="primary" size="sm" text="Small" />
              <Button variant="secondary" size="md" text="Medium" />
              <Button variant="secondary" size="lg" text="large" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
