
import PortalInput from "../../components/PortalInput/PortalInput"; 
import ActiveUserContext from '../../shared/activeUserContext'
import server from '../../shared/server'; 
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import './UserDetailsTab.css'; 

function UserDetailsTab(props) {
   
    const { id } = useParams();

    const activeUser = useContext(ActiveUserContext);
    const [userProfile, setUserProfile] = useState(null);
    const [cities, setCities] = useState("");

    //get user details from server by user id
    useEffect(() => {
        if(id) {
        
            const data = {userId: id};
            server(activeUser, data, "GetUserProfileById").then(res => {
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    setUserProfile(res.data.profile);
                }
            }, err => {
                console.error(err);
            })   ; 
            
            
            server(activeUser, data, "GetCities").then(res => {
                if (res.data.error) {
                    alert(res.data.error);
                } else {
                    setCities(res.data);
                }
            }, err => {
                console.error(err);
            })    ; 

           

        }
    }, []);

 
   
    if (cities){
        console.log (cities); 
    }



    //handle changes in values 
    function fnameChanged(fname){
        console.log(fname); 
    }

    function lnameChanged(lname){
        console.log(lname); 
    }
 
    function ar_fnameChanged(){

    }

    function ar_lastnameChanged(){

    }


    function phoneChanged(){

    }

    function addPhoneNumberChanged (){

    }

    function phoneBelongsToChanged(){

    }

    function birthdayChanged (){

    }

    function tznumberChanged(){

    }
 
    function addressChanged(){

    }


    let firstname = ""; 
    let lastname = ""; 
    let ar_firstname = ""; 
    let  ar_lastname = ""; 
    let phone = ""; 
    let addPhoneNumber = ""; 
    let phoneBelongsTo = ""; 
    let birthday = ""; 
    let tznumber = ""; 
    let userCity = ""; 
    let address = ""; 

    if (userProfile){
        firstname  = userProfile.firstname; 
        lastname = userProfile.lastname; 

        ar_firstname =   userProfile.firstnameinarabic; 
        ar_lastname  =   userProfile.lastnameinarabic; 

        phone = userProfile.phone; 
        addPhoneNumber = userProfile.phone2; 
        phoneBelongsTo = userProfile.phone2owner; 

        birthday = userProfile.birthday; 
        tznumber = userProfile.tznumber; 

        let cityid = userProfile.cityid; 
        if (cityid){
            if (cities){
                // cities.forEach(city => {
                //     testArray.push({"value":city.cityid, "name":city.name});
                // });
                let resCity = cities.find(city => city.cityid === cityid );  
                userCity =  resCity.name; 
           }
        }

        address = userProfile.address; 
    }
     

    return (
        <div>
            <h1>TEST</h1>
          
            {/* first name & last name - hebrew */}
            <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="שם פרטי בעברית"
                        value={firstname}
                        placeholder="שם פרטי בעברית"
                        onHandleChange={fnameChanged}
                    ></PortalInput>
                 

                </div>
                <div className="col-6">
                    <PortalInput 
                        title="שם משפחה בעברית"
                        value={lastname}
                        placeholder="שם משפחה בעברית"
                        onHandleChange={lnameChanged}
                    ></PortalInput>   

                </div>
            </div>

            {/* first name & last name - arabic */}
            <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="שם פרטי בערבית"
                        value={ar_firstname}
                        placeholder="שם פרטי בערבית"
                        onHandleChange={ar_fnameChanged}
                    ></PortalInput>
                </div>
                <div className="col-6">
                    <PortalInput 
                        title="שם משפחה בערבית"
                        value={ar_lastname}
                        placeholder="שם משפחה בערבית "
                        onHandleChange={ar_lastnameChanged}
                    ></PortalInput>   

                </div>
            </div>
             
           {/* phone number   */}
           <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="מס' טלפון"
                        value={phone}
                        placeholder="מס' טלפון"
                        onHandleChange={phoneChanged}
                    ></PortalInput>
                </div>
           </div>

           {/* additional phone number & belongs to  */}
           <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="מס' טלפון נוסף"
                        value={addPhoneNumber}
                        placeholder="00000000000000"
                        onHandleChange={addPhoneNumberChanged}
                    ></PortalInput>
                </div>
                <div className="col-6">
                    <PortalInput 
                        title="שייך ל-"
                        value={phoneBelongsTo}
                        placeholder="שייך ל -  "
                        onHandleChange={phoneBelongsToChanged}
                    ></PortalInput>   

                </div>
            </div>

            {/* birth day & T.Z number */}
            <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="תאריך לידה"
                        value={birthday}
                        placeholder="00/00/0000"
                        onHandleChange={birthdayChanged}
                    ></PortalInput>
                </div>
                <div className="col-6">
                    <PortalInput 
                        title="מספר תעודת זהות"
                        value={tznumber}
                        placeholder="000000000"
                        onHandleChange={tznumberChanged}
                    ></PortalInput>   
                </div>
            </div>


              {/* city & address */}
              <div className="row">
                <div className="col-6">
                    <PortalInput 
                        title="עיר"
                        value={userCity}
                        placeholder="שם העיר"
                    
                    ></PortalInput>
                </div>
                <div className="col-6">
                    <PortalInput 
                        title="כתובת"
                        value={address}
                        placeholder="רחוב ומספר בית"
                        onHandleChange={addressChanged}
                    ></PortalInput>   
                </div>
            </div>



        </div>
    )

  
}

export default UserDetailsTab;