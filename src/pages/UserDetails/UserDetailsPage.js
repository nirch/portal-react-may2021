import React, { useContext, useEffect, useState } from 'react';
import './UserDetailsPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import back_arrow from '../../assets/images/back_arrow.svg';
import copy_icon from '../../assets/images/copy_icon.svg';
import save_icon from '../../assets/images/save_icon.svg';
import profile_icon from '../../assets/images/profile_icon.svg';
import edit_icon from '../../assets/images/edit_icon.svg';
import { useParams } from "react-router-dom";
import server from '../../shared/server'
import upload from '../../shared/upload'

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const { id } = useParams();
    const activeUser = useContext(ActiveUserContext);
    const [userProfile, setUserProfile] = useState(null);
    const [img, setImg] = useState(null);
    const hiddenFileInput = React.useRef(null);

    useEffect(() => {
        if(id) {
            const data = {userId: id};
            server(activeUser, data, "GetUserProfileById").then(res => {
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    console.log(res.data.profile);
                    setUserProfile(res.data.profile);
                    setImg(res.data.profile.image);
                }
            }, err => {
                console.error(err);
            })    
        }
    }, []);

    if (!activeUser) {
        return <Redirect to='/' />
    }

    function openFileUploader() {
        hiddenFileInput.current.click();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            console.log(e.target.files[0])
            const data = {imagefile: e.target.files[0], type: "post"};
            upload(activeUser, data, "uploadDoc").then(res => {
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    
                    console.log(res.data);
                }
            }, err => {
                console.error(err);
              
            })
            setImg(URL.createObjectURL(e.target.files[0]));
        } else {
            setImg("");
        }
    }

    return (
        <div className="p-user-details">
            <PortalNavbar handleLogout={handleLogout}/>
            {userProfile && <div className="user-header">
                <div className="right-col">
                    <h1>{userProfile.firstname}</h1>
                    <h1>{userProfile.lastname}</h1>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="change-pwd" name="change-pwd"/>
                        <label>שינוי סיסמה</label>
                    </div>
                    <p className="date-created">נרשם ב: <span>{userProfile.registerdate}</span></p>
                </div>

                <div className="left-col">
                    <div className="actions-wrapper">
                        <img src={back_arrow} alt=""/>
                        <img src={copy_icon} alt=""/>
                        <img src={save_icon} alt=""/>
                    </div>
                    <div className="image-wrapper">
                        <img className={`user-image ${img ? 'img' : ''}`} src={img ? img : profile_icon} alt=""/>
                        <div className="edit-wrapper">
                            <input type="file" accept="image/*" ref={hiddenFileInput} onChange={handleFileChange}/>
                            <img className="edit-icon" src={edit_icon} alt="" onClick={openFileUploader}/>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default UserDetailsPage;