import './footer.scss';

export default function Footer() {
  return (
    <footer>
        <div itemscope itemtype="http://schema.org/Person">
            {/*import logoWhite from './logoWhite.svg';<img src={logoWhite} alt="logo MS en noir et blanc" />*/}
            <span itemprop="name">Michel Sesanne</span><br/>
            <span itemprop="jobTitle">Développeur web</span>
            <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <span itemprop="postalCode">69110 </span>  
                <span itemprop="addressLocality"> Sainte Foy-lès-Lyon</span>
            </div>
            <span itemprop="email"><a href="mailto:msesanne@gmail.com">msesanne@gmail.com</a></span>
        </div>
    </footer>
  )
}