import { useState } from 'react'
import { executeCodeAPI } from '../utils/apiCall'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

const CodeOutput = ({ language, editorRef }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState(null)
  const [isError, setIsError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const { toast } = useToast()

  const runCode = async () => {
    const code = editorRef.current.getValue()
    if (!code) return
    try {
      setIsLoading(true)
      const { run } = await executeCodeAPI(language, code)
      setOutput(run.output.split('\n'))
      if (run.stderr) {
        setIsError(true)
        setErrorText(run.stderr)
      } else {
        setIsError(false)
      }
    } catch (err) {
      toast({
        title: err.message || 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-80 w-6/12'>
      <Button
        onClick={runCode}
        disabled={isLoading}
        className='rounded text-blue-400 mb-2'
        variant='outline'
      >
        {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        {isLoading ? 'Running...' : 'Run Code'}
      </Button>
      <div
        className={`h-[80vh] p-4 ${isError ? 'text-red-400' : ''} border ${
          isError ? 'border-red-500' : 'border-gray-300'
        } rounded-sm`}
      >
        {isError ? (
          <p>{errorText}</p>
        ) : (
          <>
            <p>Output:</p>
            {output && output.length > 0 ? (
              output.map((line, i) => <p key={i}>{line}</p>)
            ) : (
              <p>Click "Run Code" to see the output here</p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CodeOutput
