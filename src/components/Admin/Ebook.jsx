import { useState } from "react"
import moment from 'moment'

const Ebook = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-8 animate__animated animate__fadeIn">
      <button className="bg-indigo-500 px-6 py-2 rounded text-white font-medium" onClick={()=>setOpen(true)}>
        <i className="ri-add-line mr-2"></i>
        New Ebook
      </button>
      <div className="grid lg:grid-cols-4 gap-8">
        {
          Array(16).fill(0).map((item, index)=>(
            <div key={index}>
              <img
                src="https://random-image-pepebigotes.vercel.app/api/random-image"
              />
              <div className="px-4 pt-2 pb-4 border-l border-r border-b">
                <h1 className="text-[17px] font-medium capitalize mt-3 mb-1">Ebook Title</h1>
                <div className="flex gap-2 items-center">
                  <label className="text-lg font-medium">₹5000</label>
                  <del>₹6000</del> 
                  <label className="text-gray-500">(50% Off)</label>
                </div>
                <label className="text-sm text-gray-500">{moment().format('MMM DD YYYY, hh:mm:ss A')}</label>
                <div className="mt-4 space-x-3">
                  <button className="bg-green-400 text-white px-2 py-1 rounded">
                    <i className="ri-edit-line"></i>
                  </button>

                  <button className="bg-rose-400 text-white px-2 py-1 rounded">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        open &&
        <div className="bg-black bg-opacity-90 fixed bottom-0 left-0 w-full h-full animate__animated animate__fadeIn animate__faster">
          <aside 
            className="w-[480px] bg-white h-full fixed top-0 right-0 animate__animated animate__slideInRight animate__faster"
          >
            <div>
              <div className="py-4 px-6 flex justify-between items-center border-b border-gray-100">
                <h1 className="text-[17px] font-medium capitalize">Drawer title</h1>
                <button onClick={()=>setOpen(false)}>
                  <i className="ri-close-line"></i>
                </button>
              </div>
              <div className="p-6">
                <h1>My content here</h1>
              </div>
            </div>
          </aside>
        </div>
      }
    </div>
  )
}

export default Ebook