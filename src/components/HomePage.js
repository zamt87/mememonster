import React from "react";
import HomePageLayout from "./HomePageLayout";
import apiroute from "../api/apiroute";

class HomePage extends React.Component {
  state = { data: "" };

  getMemeTemplates = async () => {
    try {
      const memes = await apiroute.get("/get_memes");
      this.setState({ data: memes });
      console.log(memes);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getMemeTemplates();
  }

  render() {
    if (!this.state.data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="wrapper">
        <h1>Welcome to Meme Monster</h1>
        <HomePageLayout memeDrop={this.state.data.data.data} />
      </div>
    );
  }
}

export default HomePage;
