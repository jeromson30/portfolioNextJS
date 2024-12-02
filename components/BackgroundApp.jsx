import Image from 'next/image'
import bgImage from '@/public/background.webp'

const BackgroundApp = function(){
    return(
        <>
        {/* <Image src={bgImage} alt='Fond du site' placeholder='blur' fill sizes='100vw' className='object-cover z-index:-1'/> */}

        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        </>
    )
}

export default BackgroundApp