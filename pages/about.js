import TimelineItem from 'components/TimelineItem'
import timelineContent from 'components/timelineContent'

export default () => {
  const renderTimelineContent = () =>
    timelineContent.map(item => (
      <TimelineItem title={item.title} content={item.content} />
    ))

  return (
    <>
      <p className='m-0'>
        What I've been working on the past few years. A more formal resume can
        be{' '}
        <a className='underline' href={'./files/resume.pdf'}>
          downloaded here
        </a>
        .
      </p>
      <div className='relative mt-4 mb-8'>
        <div
          className='border-r-2 border-gray-500 absolute h-full'
          style={{ left: '15px', top: '15px' }}
        />
        <ul className='list-none m-0 p-0'>{renderTimelineContent()}</ul>
      </div>
    </>
  )
}
