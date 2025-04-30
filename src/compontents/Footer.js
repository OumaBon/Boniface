import './footer.css'
import { LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <p className='footer-logo'>BO</p>
            <p className='footer-brand'>Boniface Ouma</p>
            <p className='footer-brand-text'>Software engineer specializing in data science, AI, and cloud solutions for African businesses.</p>
        </div>
        <div className='footer-nav'>
            <div className='footer-nav-services'>
                <div className='provisions'>
                    <p>SERVICES</p>
                </div>
                <p>Data Science</p>
                <p>AI Solutions</p>
                <p>Cloud Architeture</p>
            </div>
            <div className='company'>
                <p>COMPANY</p>
                <p>About</p>
                <p>Portfolio</p>
                <p>Contact</p>
            </div>
        </div>
        <hr></hr>
        <div className='socials'>
            <a href=''> <LinkedinIcon/></a>
        </div>

      
    </footer>
  )
}

export default Footer
