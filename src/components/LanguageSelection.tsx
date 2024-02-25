import { useState } from 'react'
import { LANGUAGE_VERSIONS } from '@/utils/data'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function LanguageSelection({ language, onSelected }) {
  const [position, setPosition] = useState('bottom')

  const languageVersions = Object.keys(LANGUAGE_VERSIONS)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={'bg-gray-900 ml-2 mb-4 rounded  text-blue-400'}
      >
        <Button variant='outline' className='text-lg mb-2 -ml-0.3'>
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel className='bg-gray-900 text-white'>
          Languages to choose
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          className=' hover:bg-blue-500 hover:text-white'
          value={position}
          onValueChange={setPosition}
        >
          {languageVersions.map(lang => {
            return (
              <DropdownMenuRadioItem
                onClick={() => onSelected(lang)}
                key={lang}
                value={lang}
                className=' cursor-pointer bg-gray-900 text-neutral-300 '
              >
                {lang[0].toUpperCase() + lang.slice(1)}
                {'  '}
                {LANGUAGE_VERSIONS[lang]}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
