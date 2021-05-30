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
    const [alertVisibility, setAlertVisibility] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const login = () => {

        if(!email || !pwd)
		{
            setAlertMessage("נא להזין פרטי משתמש");
            setAlertType("error");
            setAlertVisibility("show")
			// alert("נא להזין פרטי משתמש");
			return;
        }
        
        const data = {email, pass: pwd};
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {
                setAlertMessage(res.data.error);
                setAlertType("error");
                setAlertVisibility("show")
            } else {//writing user's data
                server(res.data, {}, 'GetMyProfile').then(result => {
                    res.data.firstName =  result.data.firstname;
                    res.data.lastName =  result.data.lastname;
                    res.data.image =  result.data.image;
                    handleLogin(res.data);//saving in the localstorage
                });
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
            
            <AlertComponent visibility={alertVisibility} text={alertMessage} type={alertType} onClose={() => setAlertVisibility("hide")}/>
        </div>
    );
}

export default LoginPage;