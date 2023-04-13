import { StyledFooter } from "./style"
import logo from "../../Assets/Logo.png";
import {FaAngleUp} from "react-icons/fa"
const FooterComponent = () : any=>{

    return(<StyledFooter>
       <img src={logo} alt="" />
        <span>© 2022 -  Todos os direitos reservados.</span>
        
            <button><FaAngleUp/></button>
        
    </StyledFooter>)
}
export default FooterComponent