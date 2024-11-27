import Image from 'next/image'

export default function Logo(){
    return(
        <Image src={'/logo.png'} alt='Jeromson.fr' width={36} height={36} priority className='cursor-pointer w-auto h-auto'/>
    )
}