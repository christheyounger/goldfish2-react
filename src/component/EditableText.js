import React, { Component } from "react";

class EditableText extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { value };
  }
  render() {
    const { key, update } = this.props;
    const { value } = this.state;
    return (
      <input
        type="text"
        style={{ border: "none" }}
        value={value}
        onChange={event => {
          this.setState({ value: event.target.value });
        }}
        onBlur={() => update({ key: value })}
      />
    );
  }
}

export default EditableText;
