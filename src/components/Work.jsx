import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '2 years',
        details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },   
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '4 years',
        details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'

    },
    {
        year: 2020,
        title: 'Content Creator',
        duration: '5 years',
        details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'

    },

]

const Work = () => {

    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] m-5'>Work</h1>
            {data.map((item, idx)=>(
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details}
                />
            ))}
        </div>
    )
    }

export default Work