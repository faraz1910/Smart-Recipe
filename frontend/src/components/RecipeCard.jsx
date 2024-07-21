import React from 'react'

const RecipeCard = () => {
  return (
    <div className='border rounded p-4 bg-white hovor:shadow-xl transition-all ease-in-out'>
        <div className=''>
            <img src="https://static.fanpage.it/wp-content/uploads/sites/22/2021/08/paneer-tikka.jpg" alt="" />
        </div>
        <div className='mt-2'>
            <div>
                <h1 className='font-medium text-lg'>Paneer Tikka</h1>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi illum at unde eius, necessitatibus fugiat exercitationem ipsam voluptas? Cupiditate, rerum odit perspiciatis earum aperiam ipsa reiciendis nostrum ipsum excepturi?</p>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard