import React from "react";

class HomePageLayout extends React.Component {
  componentDidMount() {
    console.log(this.props.memeDrop.memes);
  }

  renderMemeList() {
    const { memes } = this.props.memeDrop;
    const memesPics = memes.map((el) => {
      return (
        <li>
          <img src={el.url} alt="meme-picture" />
        </li>
      );
    });
    return memesPics;
  }

  render() {
    return (
      <div>
        <h1>Welcome to Meme Monster</h1>
        <ul>{this.renderMemeList()}</ul>
      </div>
    );
  }
}

export default HomePageLayout;
