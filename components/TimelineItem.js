function TimelineItem({ title, content }) {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-gray-600 rounded-full h-8 w-8 mt-8" />
        {typeof title === 'string' ? (
          <h3
            className="flex-1 ml-4 "
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h3 className="flex-1 ml-4 font-large">{title}</h3>
        )}
      </div>
      {typeof content === 'string' ? (
        <p className="ml-12" dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p className="ml-12">{content}</p>
      )}
    </>
  )
}

export default TimelineItem
