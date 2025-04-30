

import './hero.css'

const Hero = ()=>{
    return(
        <div className='hero'> 
            <img className="profile" src='/assets/images/bon.png' alt='profile'></img>

            <div className='info-text'>
                <p className='heading'>Boniface Ouma</p>
                <p className='subheading'>Digital Solutions for Business and Startups</p>
                <p className='body-text'>Software engineer specializing in data science, AI and Cloud Native Solutions designed to address business challenges.</p>
            </div>
            <div>
                <button type='submit'>Discuss Your Pojects</button>
                <button type='submit'>View Portfolio</button>
            </div>
            


        </div>
    )
}

export default Hero;