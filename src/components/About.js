import aboutLogo1 from './assets/about1.svg'
import aboutLogo2 from './assets/about2.svg'
import aboutLogo3 from './assets/about3.svg'
import aboutLogo4 from './assets/about4.svg'
import aboutLogo5 from './assets/about5.svg'
import aboutImage from './assets/aboutImage.jpg'

const About = () => {
  return (
    <>
      <div className="bg-[#E1EBFA]">
        <div className="container max-w-w ">
          <div className=''>
            <div className="flex space-x-8 justify-center pt-8 my-12 flex-wrap">
              <img src={aboutLogo1} alt="logo" />
              <img src={aboutLogo2} alt="logo" />
              <img src={aboutLogo3} alt="logo" />
              <img src={aboutLogo4} alt="logo" />
              <img src={aboutLogo5} alt="logo" />
            </div>
            <div className="flex justify-between pb-[120px] items-center px-[50px] flex-wrap ">
              <img
                src={aboutImage}
                alt="photos"
                className="w-[500px] h-[375px]"
              />
              <div className="w-[500px] p-5">
                <h3 className="text-[#5BCCDE]">About</h3>
                <h1 className="py-5 text-[#486A6F] text-4xl leading-[48px] font-bold ">
                  Owner and investor with a reputation
                </h1>
                <p className="text-[#678C92] leading-8 font-medium mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="text-[#F4F7FF] leading-5 font-bold py-4 px-[70px] rounded-md bg-[#4397A4]">
                  Exprore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
