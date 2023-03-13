import Image from 'next/image';
import placeholder from '../public/img-placeholder.png';

const DropdownMenuItem = () => {
    return ( 
        <div className="dropdown-menu-items">
            <Image src={placeholder} alt="vercel" width={150} height={100} />
            <Image src={placeholder} alt="next" width={150} height={100} />
            <Image src={placeholder} alt="logo" width={150} height={100} />
        </div>
     );
}
 
export default DropdownMenuItem;