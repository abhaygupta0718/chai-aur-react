import React from 'react'

function Card({username,btnText="visit me"}) {
    console.log(username)
    return (
        <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
  
  <img
    src="https://cdn.marvel.com/content/2x/ironman_lob_mas_hlf_02_0.jpg"
    alt="AirMax Pro"
    className="h-full w-full object-cover"
  />

  
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>

    <button class="mt-3 inline-flex items-center text-sm font-semibold text-white">
      {btnText }
    </button>
  </div>

</div>
    )
}

export default Card
