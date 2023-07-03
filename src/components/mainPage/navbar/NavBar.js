import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className=" container max-w-w ">
        <div className="justify-between items-center font-noto pt-14 md:pb-0 flex">
          <a href="/#" className="text-[#486A6F] text-2xl font-bold ">
            Buildit
          </a>
          <ul className="md:flex space-x-[50px] items-center hidden ">
            <li>
              <a className="text-[#678C92]" href="/#">
                About
              </a>
            </li>
            <li>
              <a className="text-[#678C92]" href="/#">
                Services
              </a>
            </li>
            <li>
              <a className="text-[#678C92]" href="/#">
                Projects
              </a>
            </li>
            <li>
              <a className="text-[#678C92]" href="/#">
                Contact
              </a>
            </li>
            <button className="text-[#F4F7FF] font-bold leading-6 px-[25px] py-[10px] bg-[#4397A4] rounded-md ">
              Need a project?
            </button>
          </ul>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>

        <ul
          className={!open ? 'hidden' : 'w-full text-center space-y-3 h-full'}
        >
          <li>
            <a className="text-[#678C92]" href="/#">
              About
            </a>
          </li>
          <li >
            <a className="text-[#678C92]" href="/#">
              Services
            </a>
          </li>
          <li>
            <a className="text-[#678C92]" href="/#">
              Projects
            </a>
          </li>
          <li>
            <a className="text-[#678C92]" href="/#">
              Contact
            </a>
          </li>
          <button className="text-[#F4F7FF] font-bold leading-6 px-[25px] py-[10px] bg-[#4397A4] rounded-md ">
            Need a project?
          </button>
        </ul>
      </div>
    </>
  )
}

export default NavBar
