import CodeEditor from './components/CodeEditor'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <div className='min-h-screen bg-brand-blue text-gray-500 px-6 py-8'>
      <CodeEditor />
      <Toaster />
    </div>
  )
}

export default App
