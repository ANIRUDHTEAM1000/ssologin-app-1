import React from 'react'

function SuccessPage({url}){
  return (
    <div className='text-center mt-5' style={{color:"green"}} ><h2>Successfully  logged  into  {url}</h2>
    <br/>
    <h2>Cookie  set  Successfully  for  {url}</h2>
    </div>
  )
}

export default SuccessPage
