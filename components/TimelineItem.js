function TimelineItem ({ title, content }) {
  return (
    <li className='mb-2'>
      <div className='flex items-center mb-1'>
        <div className='bg-gray-500 rounded-full h-8 w-8' />
        {typeof title === 'string' ? (
          <div
            className='flex-1 ml-4 font-medium'
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <div className='flex-1 ml-4 font-medium'>{title}</div>
        )}
      </div>
      {typeof content === 'string' ? (
        <div className='ml-12' dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className='ml-12'>{content}</div>
      )}
    </li>
  )
}

export default TimelineItem
