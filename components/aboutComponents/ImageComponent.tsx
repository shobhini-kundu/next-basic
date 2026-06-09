import Image from 'next/image';
import React from 'react'
interface ICountProps{countData: number;}
const ImageComponent: React.FC <ICountProps> = ({ countData }) => {
return (
<>
    <div className="">
        <div>
            <Image className='h-50! w-auto!' width={70} height={50} unoptimized src="/assets/bird.jpg" alt="image" />
        </div>
        <div> 
            count value {countData}
        </div>
    </div>
</>
    
)}

export default ImageComponent
