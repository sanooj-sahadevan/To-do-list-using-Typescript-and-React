/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {  useState } from 'react'
import Iput from './input'
import Btn from './button'


type Items = {
  title: string;
  id: string
}

const imageHeader = () => {

  const [item, setItem] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("")


  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault()
    setItem((prev) => [...prev, { title: inputValue, id: Date.now().toString() }])
    setInputValue('')
  }


  const handleDelete = (id: string) => {

    setItem((prev) => prev.filter((data) => data.id !== id))
  }

  return (
    <div className='flex items-centre mb-8'>
      <img src="https://images.app.goo.gl/wZw3UWbGGm4ZCkbP8" alt="" />
      <img src="" alt="" />


      <div className='w-[350px]'>

        <form className='mb-5' onSubmit={handleSumbit} action="">
                        <Iput  inputValue={inputValue} setInputValue={setInputValue} type='text'/>
          {/* <input type="text" name="" id="" value={inputValue} className='w-full p-2 rounded-sm mb-2' onChange={(event)=>setInputValue(event.target.value)} /> */}

<Btn   className='bg-gray-700 w-full p-2'>ADD </Btn>
        </form>



        <div className=' h-52 overflow-y-auto'>

          {item.map((data) => (
            <div key={data.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
              <p>{data.title}</p>
              <button onClick={() => handleDelete(data.id)} ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="30" viewBox="0 0 64 64">
                <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
              </svg></button>
            </div>

          ))}


        </div>
      </div>
    </div>
  )
}

export default imageHeader
