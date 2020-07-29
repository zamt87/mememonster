import React from "react";
import apiroute from "../api/apiroute";
import Modal from "./Modal";

class MakeMeme extends React.Component {
  makeTheMeme = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("template_id", "181913649");
    bodyFormData.append("username", "gajowel");
    bodyFormData.append("password", "ZB=bJ8=WK33j6mP");
    bodyFormData.append("text0", "Making a Web App with Angular");
    bodyFormData.append("text1", "Making a Web App with React");

    try {
      const makeMeme = await apiroute("/caption_image", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: bodyFormData,
      });
      console.log(makeMeme);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.makeTheMeme();
  }

  render() {
    return <div>Make Meme Folder</div>;
  }
}

export default MakeMeme;
