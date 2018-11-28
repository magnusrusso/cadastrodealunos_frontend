import React from 'react';
import { IoIosAddCircle, IoIosAdd, IoIosSearch} from "react-icons/io";

const Header = () => 
<header>
    <div className="AppBar">
       <p className="buttonSearch">  <IoIosSearch />  </p>  {/*colocar os caras flutuantes antes*/}
       <h1 className="Title">Alunos</h1>
    </div>

    <div className="buttonAdd">
        <span  className="background"><IoIosAddCircle/></span>
        <span className="symbol"><IoIosAdd/></span>
    </div>

</header>

export default Header;