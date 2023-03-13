import Image from 'next/image'

export const getStaticProps = async () => {
    
}

const Hero = ({ title, subtitle, source }) => {
    return ( 
        <div className="hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Image src={source} alt="hero" width={600} height={500} />
        </div>
     );
}
 
export default Hero;