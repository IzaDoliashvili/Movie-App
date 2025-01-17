import { useTranslation } from 'react-i18next';
import { mobileNavigation } from '../../content'
import { NavLink } from 'react-router-dom'


const MobileNavigation = () => {

    
const { t } = useTranslation();
  return (
    <section className='lg:hidden h-14  bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-evenly h-full '>
            {
                mobileNavigation.map((nav)=>{
                    return(
                        <NavLink 
                            key={nav.label+"mobilenavigation"} 
                            to={nav.href}
                            className={({isActive})=>`px-3 flex h-full items-center flex-col justify-evenly ${isActive && "text-white"}`}
                        >
                            <div className='text-2xl text-red-500'>
                                {nav.icon}
                            </div>
                            <p className='text-sm'>{t(nav.label)}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation