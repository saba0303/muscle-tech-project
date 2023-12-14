import './video.scss'
export default function VideoPlayer() {
    return <div className='video-wrapper'> <video autoPlay muted loop style={{ width: '100%' }}  >
        <source src='https://cdn.shopify.com/videos/c/o/v/c1c58702e7bd42bba15d3269ee9c28e5.mp4' type="video/mp4" id='video' />
        saba
    </video>
    </div>
}