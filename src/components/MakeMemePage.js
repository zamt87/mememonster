import React from "react";
import apiroute from "../api/apiroute";
import Header from "./Header";
import Footer from "./Footer";

class MakeMeme extends React.Component {
  state = { template_id: "", text0: "", text1: "", makeMeme: "" };

  makeTheMeme = async (event) => {
    event.preventDefault();
    if (!this.state.text0 && !this.state.text1) {
      alert("You must enter at least one text area before submitting.");
      return;
    }

    let bodyFormData = new FormData();
    bodyFormData.append("template_id", this.state.template_id);
    bodyFormData.append("username", "gajowel");
    bodyFormData.append("password", "ZB=bJ8=WK33j6mP");
    bodyFormData.append("text0", this.state.text0);
    bodyFormData.append("text1", this.state.text1);

    try {
      const makeMeme = await apiroute("/caption_image", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: bodyFormData,
      });
      this.setState({ makeMeme });
      console.log(makeMeme);
      this.setState({ text0: "", text1: "" });
    } catch (err) {
      console.log(err);
    }
  };

  completedMeme = () => {
    if (!this.state.makeMeme) {
      return (
        <div className="image-place-holder center-align">
          Your image will appear here once you click Submit.
        </div>
      );
    }

    const { url } = this.state.makeMeme.data.data;
    const fbUrl = url.slice(22, url.length);

    return (
      <div>
        <img
          src={this.state.makeMeme.data.data.url}
          alt={this.props.match.params.name}
        />
        <iframe
          title="fb-share"
          src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fi.imgflip.com%2F${fbUrl}&layout=button_count&size=small&width=77&height=20&appId`}
          width="77"
          height="20"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=${url}`}
        >
          Tweet
        </a>
      </div>
    );
  };

  makeMemeContent = () => {
    return (
      <div>
        <img
          src={`https://i.imgflip.com/${this.props.match.params.url}`}
          alt={this.props.match.params.name}
        />
      </div>
    );
  };

  componentDidMount() {
    //this.makeTheMeme();
    this.setState({ template_id: this.props.match.params.id });
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper-memebox">
          <h1 className="center-align">Create Your Meme</h1>
          <div className="make-meme-content">
            {this.makeMemeContent()}
            <div className="completed-meme">{this.completedMeme()}</div>
          </div>
          <div className="meme-instructions center-align">
            Submit the texts you want to appear on the meme.
          </div>
          <form
            onSubmit={this.makeTheMeme}
            className="meme-submit center-align"
          >
            <div className="field">
              <div className="text-label">
                <label>Text Field 1</label>
              </div>
              <input
                className="textInput"
                value={this.state.text0}
                onChange={(e) => this.setState({ text0: e.target.value })}
              />
            </div>
            <div className="field">
              <div className="text-label">
                <label>Text Field 2</label>
              </div>
              <input
                className="textInput"
                value={this.state.text1}
                onChange={(e) => {
                  this.setState({ text1: e.target.value });
                }}
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MakeMeme;
