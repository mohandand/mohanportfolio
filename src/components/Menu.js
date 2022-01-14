import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function Menu(){
    return(
        <div>
           <Navbar bg="myRed" variant="dark" sticky="top" expand="lg" collapseOnSelect>
               <Navbar.Brand >
                   MohanDandigam
               </Navbar.Brand>
               <Navbar.Toggle/>
                <Navbar.Collapse>
                  <Nav className="menu">
                    {/* <NavDropdown title="Products">
                            <NavDropdown.Item href="">Tea</NavDropdown.Item>
                            <NavDropdown.Item href="">Cofee</NavDropdown.Item>
                    </NavDropdown> */}  
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">Resume</Nav.Link>
                     <Nav.Link href="">Works</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                   </Nav>
                </Navbar.Collapse>
           </Navbar>
        </div>
    )
}

export default Menu;