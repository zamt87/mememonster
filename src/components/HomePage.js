import React from "react";
import HomePageLayout from "./HomePageLayout";
import apiroute from "../api/apiroute";

class HomePage extends React.Component {
  state = { data: "" };

  getMemeTemplates = async () => {
    try {
      const memes = await apiroute.get("/get_memes");
      this.setState({ data: memes });
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
    return <HomePageLayout memeDrop={this.state.data.data.data} />;
  }
}

export default HomePage;
