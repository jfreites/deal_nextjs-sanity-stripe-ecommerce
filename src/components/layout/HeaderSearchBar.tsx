import Form from 'next/form'

const HeaderSearchBar = () => {
  return (
    <Form action='/search'>
        <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <input type="text" name='query' placeholder='Search...'
            className='w-32 pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-transparent transition-colors'
            />
        </div>
    </Form>

  )
}

export default HeaderSearchBar