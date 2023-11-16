"use client"
import React from 'react'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'


const ProjectCard = ({title, description, imageUrl, github, demoUrl}) => {
  return (
    <>
      <div className=' '>
  <div className='group relative h-52 md:h-60 bt-3  '
    style={{background : `url(${imageUrl})`, backgroundSize :"cover", backgroundPosition:"center",  backgroundRepeat:"no-repeat",  borderTopLeftRadius: "10px", borderTopRightRadius: "10px"
  }}
  >
    <div className=' group overlay w-full h-full absolute top-0 left-0 hidden  bg-black bg-opacity-80   group-hover:flex  items-center justify-center gap-8'>
      <Link href={demoUrl} target='_blank'>
        <EyeIcon className=' border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14' />
      </Link>
      <Link href={github} target='_blank'> 
        <CodeBracketIcon className=' border-white rounded-full border-2 p-2 text-gray-400 hover:text-white h-14 w-14 ' />
      </Link>
    </div>
  </div>
  {/* <!-- Add these styles to create a glassy card --> */}
  <div className='bg-[#181818] py-3 px-2 '
    style={{
      backdropFilter: "blur(10px)", // blur the background behind the card
      boxShadow: "0 0 10px rgba(0,0,0,0.1)", // add some shadow to the card
      opacity: "0.9", // make the card slightly transparent
      borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"
    }}
  >
    <h1 className='font-bold'>{title}</h1>
    <p className='italic text-[#ADB7BE]'>{description}</p>
  </div>
</div>

  </>
  
  )
}

export default ProjectCard
