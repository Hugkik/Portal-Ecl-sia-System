import Footer from "../../Componentes/Footer/Footer"
import Header from "../../Componentes/Header/Header"
import FormEvents from "../../Componentes/FormEvents/FormEvents"
import TxtTypeEvent from "../../Componentes/FormEvents/TxtTypeE"






function TypeEvents(){
    return(
     <div>
        
    
    
    <div className="d-flex flex-column vh-100">
        <Header />
        <TxtTypeEvent/>
        <FormEvents/>
        <div className="flex-grow-1 bg-white"></div>
        <Footer />
      </div>
    
     
      
     </div>
    )
}

export default TypeEvents
