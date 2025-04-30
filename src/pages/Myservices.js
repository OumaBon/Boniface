import './service.css'
import { Database } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';

const Myservices = () => {
  return (
    <div className="my-services">
       <p className='text-2xl font-bold'>My Services</p>
       <p>Specialized expertise in data science, AI, and cloud Solutions for business and startups</p>
<div className='fields'>
       <div className='card'>
        <Database/>
        <p className='text-lg font-bold'>Data Science</p>
        <p>I extract actionable insights from your business data to drive decion-making</p>
       </div>

       <div className='card'>
       <BrainCircuit/>
        <p className='text-lg font-bold'>Data Science</p>
        <p>I extract actionable insights from your business data to drive decion-making</p>
       </div>

       <div className='card'>
       <Cloud/>
        <p className='text-lg font-bold'>Data Science</p>
        <p>I extract actionable insights from your business data to drive decion-making</p>
       </div>

       </div>

    </div>
  )
}

export default Myservices
