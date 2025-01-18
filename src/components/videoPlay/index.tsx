import { IoClose } from "react-icons/io5";
import useFetchDetails from '../../hooks/useFetchDetails';
import { VideoData, VideoPlayProps } from "../../types";



const VideoPlay = ({ data, close, media_type,}: VideoPlayProps) => {
  const { data: videoData } = useFetchDetails<VideoData>(`/${media_type}/${data?.id}/videos`);
  const videoKey = videoData?.results?.[0]?.key;
  const videoSrc = videoKey ? `https://www.youtube.com/embed/${videoKey}` : "";

  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'> 
        <div className='bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>
          
          <button onClick={close} className=' absolute -right-1 -top-6 text-3xl z-50'>
              <IoClose/>
          </button>

          <iframe
          src={videoSrc}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />



        </div>
    </section>
  )
}

export default VideoPlay