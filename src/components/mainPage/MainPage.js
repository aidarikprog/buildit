import Main from './Main'
import NavBar from './navbar/NavBar'

const MainPage = () => {
  return (
    <>
      <div className='bg-gradient-to-t from-[#C6DBFF] to-[#E1EBFA] h-[100vh]'>
        <NavBar />
        <Main />
      </div>
    </>
  )
}

export default MainPage
