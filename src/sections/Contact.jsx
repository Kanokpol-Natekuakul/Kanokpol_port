import React from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'

function Contact() {
  return (
    <section id='contact' className='min-h-screen font-mono flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8'>
        <RevealOnScroll>
        <div className='max-w-4xl mx-auto w-full'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-center'>
                Get In touch
            </h2>
            <form action="https://formsubmit.co/kanokpol30088@gmail.com"
            method="POST" className='space-y-4 sm:space-y-6'>
                <div className='relative'>
                    <input type="text" name="name" id="name" placeholder='Name....' required className='w-full bg-white/10 border border-red-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-red-500 focus:bg-red-500/5 focus:shadow-red-orange' />
                </div>
                <div className='relative'>
                    <input type="email" name="email" id="email" placeholder='example@gmail.com' required className='w-full bg-white/10 border border-red-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-red-500 focus:bg-red-500/5 focus:shadow-red-orange' />
                </div>
                <div className='relative'>
                    <textarea type="message" name="message" id="message" rows={6}  placeholder='Type your message....' required className='w-full bg-white/10 border border-red-500/20 rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:border-red-500 focus:bg-red-500/5 focus:shadow-red-orange resize-none' />
                </div>
                <button type='submit' className='w-full bg-gradient-to-r from-red-500 to-orange-500 flex justify-center cursor-pointer px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover-shadow-red-orange py-3 text-white'>
                    Submit
                </button>
            </form>
        </div> </RevealOnScroll>
    </section>
  )
}

export default Contact