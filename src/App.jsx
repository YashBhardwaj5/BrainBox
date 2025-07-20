import './App.css'
import { Button } from './components/Button'
import { Plus } from './icons/Plusicon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <div className='container mx-auto'>
          <div className='max-w-2xl mx-auto'>
              tailwind setup
              <Button variant="primary" size="sm" text="Small" startIcon={<Plus size="sm"/>}/>
              <Button variant="secondary" size="md" text="Add Content" startIcon={<Plus size="md"/>}/>
              <Button variant="secondary" size="lg" text="Add Content" startIcon={<ShareIcon size="lg"/>}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
