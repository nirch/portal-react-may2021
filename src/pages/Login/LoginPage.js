import React, { useState, useContext } from 'react';
import { Container, Form } from 'react-bootstrap'
import './LoginPage.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'
import logo_image from '../../assets/images/logo.svg';
import AlertComponent from '../../components/alert/Alert';

const LoginPage = (props) => {
    const { handleLogin } = props;
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const activeUser = useContext(ActiveUserContext);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const login = () => {

        if(!email || !pwd)
		{
            setAlertMessage("נא להזין פרטי משתמש");
            setAlertType("error");
            setShowAlert(true);
			// alert("נא להזין פרטי משתמש");
			return;
        }
        
        const data = {email, pass: pwd};
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {
                setAlertMessage(res.data.error);
                setAlertType("error");
                setShowAlert(true);
                // alert("error in login");
            } else {
                handleLogin(res.data);
            }
        }, err => {
            // show alert?
            console.error(err);
        })
    }

    if (activeUser) {
        return <Redirect to='/courses' />
    }

    return (

        <div className="p-login">
            <div className="logo-wrapper">
                <img src={logo_image} alt=""/>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control value={email} type="email" placeholder="אימייל" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control value={pwd} type="password" placeholder="סיסמה" onChange={e => setPwd(e.target.value)}/>
                </Form.Group>

                <div className="submit-btn" onClick={login}>התחברות</div>
                <span className="forget-password">שכחתי סיסמה</span>
            </Form>
            
            <AlertComponent show={showAlert} text={alertMessage} type={alertType} onClose={() => setShowAlert(false)}/>
        </div>
    );
}

export default LoginPage;