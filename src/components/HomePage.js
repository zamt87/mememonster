import React from "react";
import HomePageLayout from "./HomePageLayout";
import apiroute from "../api/apiroute";
import Header from "./Header";
import Footer from "./Footer";

class HomePage extends React.Component {
  state = { data: "" };

  getMemeTemplates = async () => {
    try {
      const memes = await apiroute.get("/get_memes");
      console.log(memes);
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

    return (
      <div>
        <Header />
        <div className="wrapper">
          <h1 className="center-align">Welcome to Meme Monster</h1>
          <p className="intro-instruction center-align">
            Click on an image start making memes of your own!
          </p>
          {console.log("console.log from HomePage.js", this.state)}
          <HomePageLayout memeDrop={this.state.data.data.data} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
