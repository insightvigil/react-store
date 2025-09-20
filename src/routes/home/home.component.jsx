import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router';

const Home = () => {
  
  
  return (
    <>
      
      <Directory/>
      <Outlet/>
    </>
  )
}

export default Home
