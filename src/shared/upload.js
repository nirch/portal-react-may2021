import axios from "axios";

async function upload(activeUser, data, type) {
    const phpDomain = 'https://pil1.appleseeds.org.il/dcnir/server/';

    // Adding the user's token to the payload
    data.token = activeUser ? activeUser.token : undefined;

    var formData = new FormData();
    formData.append("file", data.imagefile);

    // creating the request
    const request = {
        method: "post",
        url: phpDomain + "datagate.php?type=uploadDoc&token=" + data.token ,
        data: formData,
        headers : { 'Content-Type': 'multipart/form-data'},
    }

    const response = await axios(request);
    return response;

}

export default upload;