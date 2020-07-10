import TimelineItem from '../components/TimelineItem'
import timelineContent from '../components/timelineContent'

export default () => {
  const renderTimelineContent = () =>
    timelineContent.map(item => (
      <TimelineItem title={item.title} content={item.content} />
    ))

  return (
    <>
      <section>
        What I've been working on the past few years. A more formal resume can
        be{' '}
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
        <ul className='list-none m-0 p-0'>{renderTimelineContent()}</ul>
      </div>
    </>
  )
}
