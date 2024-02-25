import { LANGUAGE_VERSIONS } from './data'

const fetchUrl = 'https://emkc.org/api/v2/piston/execute'

export const executeCodeAPI = async (language, code) => {
    const response = await fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language,
        version: LANGUAGE_VERSIONS[language],
        files: [
          {
            content: code,
          },
        ],
      }),
    })
    const data = await response.json()
    return data

}
