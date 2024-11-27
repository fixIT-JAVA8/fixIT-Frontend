import React from 'react'
import {Card, CardBody, Input, Textarea, Button } from "@nextui-org/react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className='flex flex-row mt-40 mb-20'>
        <div className='flex flex-col w-1/2 pl-32 pr-20'>
            <p className='text-xl text-green1 font-light'>Contact Us</p>
            <h1 className='mt-1 mb-8 text-4xl text-blue2 font-bold'>Get in touch with us</h1>
            <p className='text-justify text-gray-500'>We'd love to hear from you. Whether you have questions, need support, or want to learn more about our services, our team is here to help.</p>
            <div className='mt-10'>
                <div className='flex gap-8 mb-6 items-center'>
                    <MdOutlineAlternateEmail className='text-3xl text-green1'/>
                    <p className='text-gray-500'>customersupport@fixit.lk</p>
                </div>
                <div className='flex gap-8 mb-6 items-center'>
                    <FaPhoneAlt className='text-2xl text-green1'/>
                    <p className='text-gray-500'>+94 716 4561 741</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <FaLocationDot className='text-3xl text-green1'/>
                    <p className='text-gray-500'>No. 17, Bauddhaloka Road, Colombo 0040</p>
                </div>
            </div>
            
        </div>
        <div className='w-1/2 pr-28'>
            <Card>
                <CardBody className='py-4 px-12'>
                    <Input className='mb-4' type="email" variant="underlined" label="Email" placeholder="Enter your email" />
                    <Input type="text" variant="underlined" className='mb-4' label="Name" placeholder="Enter your name" />
                    <Textarea
                        label="Message"
                        placeholder="Enter your message"
                        variant="underlined"
                        className='mb-6'
                    />
                    <Button className="w-full bg-blue2 text-white font-bold">
                        Submit
                    </Button>
                </CardBody>
            </Card>
        </div>
    </div>
  )
}

export default ContactUs