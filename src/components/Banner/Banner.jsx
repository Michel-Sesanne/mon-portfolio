import './banner.scss';

export default function Banner({bannerImg, tagline}) {    
    if (bannerImg && tagline) {
        return (            
            <section className='banner'>
                <div className='tagline'>
                    <h1>{tagline}</h1>
                </div>               
                <img src={bannerImg} alt="ordinateur avec code à l'écran" />                
            </section>
        )
    }else{
        return (
            <div className='banner'>
                <img src={bannerImg} alt="ordinateur avec code à l'écran" />
            </div>
        )
    }
}