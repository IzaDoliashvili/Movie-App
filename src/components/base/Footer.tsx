import MobileNavigation from "../mobileNavigation"


const Footer = () => {
  return (
    <>
    <MobileNavigation />
    
    <footer className='text-center bg-neutral-800 bg-opacity-35 text-red-500 py-2'>
        <div className='flex items-center justify-center gap-4'>
        © {new Date().getFullYear()} Movie App. All Rights Reserved
        </div>
    </footer>
    </>
  )
}

export default Footer