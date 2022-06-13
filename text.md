
/*

*/


 <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-semibold relative text-2xl bg-red-500 cursor-pointer">
            <h2>Awlad Hossain</h2>
            <MdMenu onClick={()=>setIsOpen(!isOpen)} name={isOpen?<AiOutlineClose/>:"MdMenu"} className="absolute right-8 cursor-pointer text-2xl md:hidden lg:hidden"/>
          </div>
          
          
        
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${isOpen?'top-1':'bottom-9'}`}>
            <li className="md:ml-8 text-2xl"><a href="">Home</a></li>
            <li className="md:ml-8 text-2xl"><a href="">About</a></li>
            <li className="md:ml-8 text-2xl"><a href="">Services</a></li>
            <li className="md:ml-8 text-2xl"><a href="">Blogs</a></li>
            <li className="md:ml-8 text-2xl"><a href="">Contact</a></li>
          </ul>
        </div>
      </div>