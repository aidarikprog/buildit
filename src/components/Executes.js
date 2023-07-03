import icon1 from './assets/ex1.svg'

const Executes = () => {
  return (
    <>
      <div className="container max-w-w">
        <div className="py-[180px]">
          <h1 className="text-[#486A6F] font-bold text-4xl leading-[48px] mb-[60px] text-center">
            Innovative Execution
          </h1>
          <div className="flex items-center space-x-5 justify-center flex-wrap ">
            <div className='p-[50px] '>
              <img src={icon1} alt="icon" className="mb-5" />
              <h1 className="mb-3 text-[#486A6F] text-2xl leading-[44px] font-bold">
                Featured Listing
              </h1>
              <p className="text-[#678C92] leading-8 font-medium w-[268px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className='p-[50px] '>
              <img src={icon1} alt="icon" className="mb-5" />
              <h1 className="mb-3 text-[#486A6F] text-2xl leading-[44px] font-bold">
              Available Properties
              </h1>
              <p className="text-[#678C92] leading-8 font-medium w-[268px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className='p-[50px]'>
              <img src={icon1} alt="icon" className="mb-5" />
              <h1 className="mb-3 text-[#486A6F] text-2xl leading-[44px] font-bold">
              In the News
              </h1>
              <p className="text-[#678C92] leading-8 font-medium w-[268px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Executes
