import BackgroundApp from "./_components/BackgroundApp"
import Navbar from "./_components/NavBar"
import Main from "./_components/Main"


export default function LandingLayout({ children }){
    return(
        <>
            <BackgroundApp/>
            <Navbar />
            <Main />
            {children}
        </>
    )
}