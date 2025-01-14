import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import { navigation } from '../../content/index';
import UserIcon from '../userIcon';
import {ModeToggle} from '../ui/components/mode-toggle';
import { useTranslation } from "react-i18next";
import { CiGlobe  } from "react-icons/ci";

const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput, setSearchInput] = useState(removeSpace)
    const navigate = useNavigate()
   
    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`)
        }
    }, [searchInput])

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
    }

    const { t, i18n } = useTranslation();
    const [languageDropdown, setLanguageDropdown] = useState(false);
  
    const changeLanguage = (lang: string) => {
      i18n.changeLanguage(lang); 
      setLanguageDropdown(false);
    };
  

    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='container mx-auto px-3 flex items-center h-full'>
                <Link to={"/"}>
                    <BiSolidCameraMovie className='w-16 h-11 text-red-500'/>
                   
                </Link>

                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div key={nav.label + index}> 
                                    <NavLink 
                                        to={nav.href} 
                                        className={({ isActive }) => `px-2 hover:text-white  text-red-500 font-bold ${isActive && ""}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='placeholder:text-white bg-transparent px-4 py-1 border-solid border-2 rounded-md  border-white hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                    </form>
                    <div className='flex justify-between items-center gap-x-3'>

      

                      <div className="relative">
          <button
            onClick={() => setLanguageDropdown(!languageDropdown)}
            className="flex items-center gap-2 px-2 py-2 border bg-transparent text-white hover:bg-slate-100 hover:text-gray-800 rounded w-8 h-8"
          >
            <CiGlobe className="w-5 h-5" />
          </button>
          {languageDropdown && (
            <div className="absolute right-0 mt-4 w-32 bg-white text-black border rounded-md shadow-lg">
              <button
                onClick={() => changeLanguage("en")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("geo")}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                ქართული
              </button>
            </div>
          )}
        </div>

      
        <ModeToggle/>
        </div>
                    <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <UserIcon />
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header;
