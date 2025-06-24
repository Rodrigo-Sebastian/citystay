import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/citystay-logo.png';

const LoginHeader = () => {
  return (
    <div className='m-auto border-b'>
        <div className='login-header m-auto flex items-center justify-between p-8'>
            <Link href="/">
                <Image src={Logo} alt="CityStay Logo" width="150" height="100" />          
            </Link>
            <Link href="/" className='px-6 py-3 bg-blue-500 rounded-full transition ease-in-out duration-300 hover:bg-blue-700'>
                <h1 className='text-white'>start</h1>
            </Link>
        </div>
    </div>
  )
}

export default LoginHeader