import registerPageImage from '../../assets/images/registerPageImage.png'
import yumLogo from '../../assets/images/yumLogo.png'
import LoginForm from '../../components/Auth/LoginForm'

const Login = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 bg-gradient-to-r from-teal-100 h-screen w-screen flex justify-end">

            <div className="lg:col-span-4 flex flex-col items-center justify-center ">
                <img src={yumLogo} alt="loading" width={170} height={170} className='pb-8'/>
                <LoginForm/>     
            </div>
            
            <div className="col-span-6 relative hidden lg:block">
                <img src={registerPageImage} alt="loading" className="absolute top-0 right-0" />
            </div>

        </div>
    )
}

export default Login;