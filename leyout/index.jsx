import Footer from "../components/Footer"
import Header from "../components/Header"

function Leyout({children}) {
    return (
        <div>
           <Header></Header> 
           {children}
           <Footer></Footer>
        </div>
    )
}

export default Leyout
