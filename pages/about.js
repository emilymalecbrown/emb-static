import TimelineItem from 'components/TimelineItem'
import timelineContent from 'components/timelineContent'

export default () => {
  const renderTimelineContent = () =>
    timelineContent.map(item => (
      <TimelineItem title={item.title} content={item.content} />
    ))

  return (
    <div className='prose mb-16'>
      <p className='m-0'>
        Here's some of what I've been working on the past few years. Theres been
        a lot of life stuff in here too!
      </p>
      <div className='relative mt-4 mb-8'>
        <div
          className='border-r-2 border-gray-500 absolute h-full'
          style={{ left: '15px', top: '15px', paddingLeft: '1.75em' }}
        />
        <ul className='list-none m-0 p-0'>{renderTimelineContent()}</ul>
      </div>
    </div>
  )
}
