import React, {Component} from 'react';

class Primary extends Component {
  constructor() {
    super()
    this.state= {
      showInfo: false,
    }
  }

  toggleInfo = () => {
    const currentInfoState = this.state.showInfo;
    this.setState({showInfo: !currentInfoState})
  }

  render() {
    const descript = false;
    console.log('St:Primary', this.state)

    return (
      <article className="Mini">
        <h1>Primary</h1>
        <button onClick={this.toggleInfo}>Click</button>
        {this.state.showInfo && <p>Example</p>}
      </article>
    )
  }
}

export default Primary;