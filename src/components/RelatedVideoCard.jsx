

const RelatedVideoCard = ({data}) => {
const { snippet} = data;

  const { channelTitle, thumbnails, title } = snippet;


  return (
    <div className="flex related-video-card">
      <img className='related-video-thumb' src={thumbnails?.medium?.url} alt="" />
        <div className='related-video-title'>
          <h4>{title}</h4>
          <p>{channelTitle}</p>
        </div>
      
    </div>
  );
}

export default RelatedVideoCard