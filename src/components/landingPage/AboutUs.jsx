import React from 'react'
import team from "../../assets/team.jpg"
import CountUp from "react-countup";
import { FaRegHandshake } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className='flex flex-row my-40'>
        <div className='flex flex-col w-1/2 pl-32 pr-20'>
            <p className='text-xl text-green1 font-light'>About Us</p>
            <h1 className='mt-1 mb-8 text-4xl text-blue2 font-bold'>Reliable services since 1992</h1>
            <p className='text-justify text-gray-500'>fixIT (Pvt) Limited has been delivering trusted and reliable repair services since 1992. With over three decades of experience, we have built a strong reputation for excellence in appliance repair, providing innovative solutions to meet customer needs. Our dedicated team ensures quick, efficient, and seamless repair management. At fixIT, we value quality service and customer satisfaction, making us a trusted partner for all your repair needs.</p>
            <div className='flex justify-between mt-10'>
                <div className='flex flex-col items-center'>
                    <FaRegHandshake className='text-5xl text-green1'/>
                    <div className='text-green1 font-bold' style={{ fontSize: "20px" }}>
                        <CountUp
                            start={0}
                            end={10450}
                            duration={3}
                        />
                    </div>
                    <p className='text-xs text-gray-500'>Customers we have served</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaTools className='text-4xl text-green1 mb-3'/>
                    <div className='text-green1 font-bold' style={{ fontSize: "20px" }}>
                        <CountUp
                            start={0}
                            end={251}
                            duration={3}
                        />
                    </div>
                    <p className='text-xs text-gray-500'>Technicians we have</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaRegCalendarCheck className='text-4xl text-green1 mb-3'/>
                    <div className='text-green1 font-bold' style={{ fontSize: "20px" }}>
                        <CountUp
                            start={0}
                            end={32}
                            duration={3}
                        />
                    </div>
                    <p className='text-xs text-gray-500'>Years of meeting clients needs</p>
                </div>
            </div>
            
        </div>
        <div className='w-1/2 pr-28'>
            <img src={team} alt="" />
        </div>
    </div>
  )
}

export default AboutUs