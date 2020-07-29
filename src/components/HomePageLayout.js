import React from "react";
import MemeCard from "./MemeCard";

class HomePageLayout extends React.Component {
  componentDidMount() {
    //console.log(this.props.memeDrop.memes);
  }

  renderMemeList() {
    const { memes } = this.props.memeDrop;
    const memesPics = memes.map((el) => {
      return <MemeCard memeInfo={el} key={el.id} />;
    });
    return memesPics;
  }

  render() {
    return <div className="meme-list">{this.renderMemeList()}</div>;
  }
}

export default HomePageLayout;
