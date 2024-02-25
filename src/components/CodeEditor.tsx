import { useState, useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import LanguageSelection from './LanguageSelection'
import { LANGUAGES_DEFAULT_TEXT } from '../utils/data'
import CodeOutput from './CodeOutput'

const CodeEditor = () => {
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')

  const editorRef = useRef(null)
  const onMount = editor => {
    editorRef.current = editor
    editor.focus()
  }

  const onSelected = language => {
    setLanguage(language)
    setValue(LANGUAGES_DEFAULT_TEXT[language])
  }

  return (
    <div className='flex gap-4'>
      <div className='w-6/12'>
        <LanguageSelection
          onSelected={onSelected}
          language={language[0].toUpperCase() + language.slice(1)}
        />
        <Editor
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            fontFamily: 'JetBrains Mono, monospace',
          }}
          height='80vh'
          theme='vs-dark'
          language={language}
          defaultValue={LANGUAGES_DEFAULT_TEXT[language]}
          onMount={onMount}
          value={value}
          onChange={value => setValue(value)}
        />
      </div>
      <CodeOutput language={language} editorRef={editorRef} />
    </div>
  )
}

export default CodeEditor
