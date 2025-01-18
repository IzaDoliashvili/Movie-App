
import BannerHome from '../../components/bannerHome'
import { useSelector } from 'react-redux'
import HorizontalScollCard from '../../components/horisontalScrolCard'
import useFetch from '../../hooks/useFetch'
import { useTranslation } from "react-i18next";
import { RootState } from '../../store/movieSlice';
import { MediaItem } from '../..//types';




const Home = () => {
  const { t } = useTranslation();
  const trendingData = useSelector((state: RootState)  => state.movieoData.bannerData)
  const { data : nowPlayingData } = useFetch<MediaItem>('/movie/now_playing')
  const { data : topRatedData } = useFetch<MediaItem>('/movie/top_rated')
  const { data : popularTvShowData } = useFetch<MediaItem>('/tv/popular')
  
  return (
    <div>
        <BannerHome/>
        <HorizontalScollCard data={trendingData} heading={t("Trending")} trending={true} media_type={undefined} />
        <HorizontalScollCard data={nowPlayingData} heading={t("Now Playing")} media_type={"movie"} trending={undefined}/>
        <HorizontalScollCard data={topRatedData} heading={t("Top Rated Movies")} media_type={"movie"} trending={undefined}/>
        <HorizontalScollCard data={popularTvShowData} heading={t("Popular TV Show")} media_type={"tv"} trending={undefined}/>
        
        
    </div>
  )
}

export default Home
