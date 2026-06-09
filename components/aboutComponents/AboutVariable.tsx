"use client"
import React, { useEffect, useState } from 'react'
import ImageComponent from './ImageComponent';

const AboutVariable = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("count value is ", count);
  } , [count])
  return (
    <div>
      <div>
        current value = {count}
      </div>
      <div>
        <button className='bg-blue-500 text-white p-2 rounded'
        onClick={() => setCount(count + 1)}>
          Increase</button>
        </div>
        <ImageComponent countData={count} />
      </div>
    
  )}

export default AboutVariable