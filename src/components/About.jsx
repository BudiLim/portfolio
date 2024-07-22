import React from 'react'
import aboutImg from '../assets/foto.jpeg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque at est repellendus fugit aliquam temporibus error similique ipsa esse reprehenderit veniam accusamus quis, eveniet cupiditate, tempore atque laudantium. Error, minima.
                        Velit dolorum exercitationem, in atque asperiores dolor recusandae quae nam suscipit reprehenderit at placeat, sint quis quas et maxime earum corrupti! Repudiandae veritatis est cupiditate officia excepturi natus voluptates labore.
                    </p>
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0 transform transition-transform duration-300 hover:scale-105' src={aboutImg} width={300} height={300}/>
        </div>
    </div>
  )
}

export default About