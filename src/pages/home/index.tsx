
import BannerHome from '../../components/bannerHome'
import { useSelector } from 'react-redux'
import HorizontalScollCard from '../../components/horisontalScrolCard'
import useFetch from '../../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  const { data : topRatedData } = useFetch('/movie/top_rated')
  const { data : popularTvShowData } = useFetch('/tv/popular')
  
  return (
    <div>
        <BannerHome/>
        <HorizontalScollCard data={trendingData} heading={"Trending"} trending={true} media_type={undefined} />
        <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} trending={undefined}/>
        <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} trending={undefined}/>
        <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"} trending={undefined}/>
        
        
    </div>
  )
}

export default Home
