import React, { Component } from 'react'

export class Flexbox extends Component {
  render() {
    return (
      <div >
        <div className=" container d-flex justify-content-between">
        <button type="button" class="btn btn-outline-primary"onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" class="btn btn-outline-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default Flexbox
