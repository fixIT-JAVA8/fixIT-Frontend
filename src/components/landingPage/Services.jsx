import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import laptop from "../../assets/laptop.png"
import tv from "../../assets/tv.png"
import fridge from "../../assets/fridge.jpg"
import washingmachine from "../../assets/washingmachine.png"
import phone from "../../assets/phone.png"
import oven from "../../assets/oven.png"

const Services = () => {
  const list = [
    {
      title: "Laptops & Computers",
      img: laptop,
    },
    {
      title: "TVs and Home Theaters",
      img: tv,
    },
    {
      title: "Refrigerators",
      img: fridge,
    },
    {
      title: "Washing Machine",
      img: washingmachine,
    },
    {
      title: "Phones & Tablets",
      img: phone,
    },
    {
      title: "Ovens",
      img: oven,
    },
  ];

  return (
    <div className='my-12'>
      <div className='flex flex-col justify-center items-center gap-2 mb-10'>  
        <h1 className='text-4xl text-[#47bfb8] font-bold'>Shop for services by category</h1>
        <p className='text-lg text-gray-500'>Learn about all the ways we can set up, install and repair the tech and appliances in your home.</p>
      </div>
      <div className="mx-96 gap-16 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card shadow="sm" className='pb-4' key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-contain h-[150px] pt-6 px-10"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services