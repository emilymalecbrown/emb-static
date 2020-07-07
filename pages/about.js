export default () => (
  <>
    <section>
      This is written like a life timeline, but it's mostly about work
      <em>for relevancy</em>. I've lived a lot of life outside of these bullets
      and that is important to me. A more formal resume can be{' '}
      <a className='underline' href={'./files/resume.pdf'}>
        downloaded here
      </a>
      .
    </section>
    <div className='relative my-8'>
      <div
        className='border-r-2 border-gray-500 absolute h-full top-0'
        style={{ left: '15px' }}
      />
      <ul className='list-none m-0 p-0'>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              September 1994 to 2016 - Childhood.
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
              Spring 2016 - Graduated McGill University - Montreal, QC
            </div>
          </div>
          <div className='ml-12'>
            I studied psychology and minored in Spanish. I worked at the McGill
            Computer Store all four years of my undergrad, selling hardware and
            software to professors and students. I played beer-league softball
            in Montreal in the summers and spent a lot of time lounging in the
            park.
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              October 2016 - Graduated Grace Hopper Program at Fullstack Academy
              - New York, NY
            </div>
          </div>
          <div className='ml-12'>
            Right after graduating from university, I went to study "coding". I
            had done some programming on the side - for fun and enrichment -
            during my undergrad and knew it was something I liked. Also, I
            wanted a job.
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              October 2016 to March 2017 - Teaching Fellow at the Grace Hopper
              Program - New York, NY
            </div>
          </div>
          <div className='ml-12'>
            I stayed at Grace Hopper as an employee and mentored students
            learning JavaScript in CS fundamentals and web development.
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              March 2017 to November 2018 - Front-End Engineer at Celect - New
              York, NY
            </div>
          </div>
          <div className='ml-12'>
            I worked as part of a small front-end team for a machine-learning
            company. We built a design system for the companies various
            analytics platforms with Vue.js components. We also build the
            interfaces and dashboards where our various retail customers could
            interact with their data and analytics. The company was{' '}
            <a
              className='underline'
              href={'https://news.nike.com/news/nike-celect-acquisition'}
            >
              acquired by Nike
            </a>{' '}
            around a year after I left.
          </div>
        </li>
        <li className='mb-2'>
          <div className='flex items-center mb-1'>
            <div className='bg-gray-500 rounded-full h-8 w-8' />
            <div className='flex-1 ml-4 font-medium'>
              November 2018 to September 2019 - Software Engineer at Vox Media -
              New York, NY
            </div>
          </div>
          <div className='ml-12'>
            I worked at Vox Media on the revenue team. I touch lots of ads
            stuffs.
          </div>
        </li>
      </ul>
    </div>
  </>
)
