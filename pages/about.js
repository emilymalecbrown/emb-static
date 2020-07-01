import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className='relative w-1/2 m-8'>
      <div
        className='border-r-2 border-gray-500 absolute h-full top-0'
        style={{ left: '15px' }}
      />
      <ul className='list-none m-0 p-0'>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              September 1994 - First Release
            </div>
          </div>
          <div className='ml-12'>
            <img src={'./images/baby.jpg'} />
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              Spring 1999 - Rode two-wheeler bike
            </div>
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              Spring 2016 - Graduated McGill University with a BA in Psychology
            </div>
          </div>
          <div className='ml-12'>
            I guess I studied psychology to try to understand the behavior of
            myself and others. Didn't full achieve.
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              July 2018 - More stuff happened
            </div>
          </div>
          <div className='ml-12'>
            Consequuntur odit explicabo officiis veniam incidunt non velit ex
            consectetur magnam minima vero hic impedit cumque, blanditiis autem
            distinctio facere dolor atque facilis, eos, labore sunt iusto.
            Beatae, quas, dolorem?
          </div>
        </li>
      </ul>
    </div>
  </Layout>
)
