import social1 from './assets/social1.jpg'
import social2 from './assets/social2.jpg'
import social3 from './assets/social3.jpg'
import social4 from './assets/social4.jpg'
import social5 from './assets/social5.jpg'
import social6 from './assets/social6.jpg'

const Socials = () => {
  return (
    <>
      <div className="container max-w-w">
        <div className='text-center mt-[120px] mb-[50px]'>
            <h3 className='text-[#5BCCDE] font-medium leading-8 pb-3'>Socials</h3>
            <h1 className='text-[#486A6F] text-4xl leading-[48px] font-bold mb-10'>On Instagram</h1>
            <div className='grid gap-5 grid-cols-social justify-center'>
                <img src={social1} alt="img" />
                <img src={social2} alt="img" />
                <img src={social3} alt="img" />
                <img src={social4} alt="img" />
                <img src={social5} alt="img" />
                <img src={social6} alt="img" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Socials
