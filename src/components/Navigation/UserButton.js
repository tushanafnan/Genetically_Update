import { useContext } from 'react';
import { UserContext } from '../Context/Context';
import { NavDropdown } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
const UserButton = () => {
    const { user } = useContext(UserContext)
    const saveUserInfo = localStorage.getItem('user') //user will get info from context
    const userInfo = JSON.parse(saveUserInfo)
    const handleLogOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        // Dont Need to put user.email as it will show you email id on frontend instead of DropDown

        userInfo && (

            <NavDropdown
                className="fa-solid fa-user"
                id="fa-solid fa-user"
            >
                <NavDropdown.Item href={ROUTES.ACCOUNT}>Profile</NavDropdown.Item>
                <NavDropdown.Item  href="/billing"> Billing </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
            </NavDropdown>

        )

    )

};

export default UserButton;