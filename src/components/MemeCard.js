import React from "react";
import { Link } from "react-router-dom";

class MemeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { url, name, id } = this.props.memeInfo;
    const urlEdit = url.slice(22, url.length);
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Link to={`/makememe/${id}/${name}/${urlEdit}`}>
          <img ref={this.imageRef} src={url} alt={name} />
        </Link>
      </div>
    );
  }
}

export default MemeCard;
