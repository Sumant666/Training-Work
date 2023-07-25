import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }

    render() {
        return (
            <div className='product'>
                <h1 id='head1'>Task 2</h1>
                <div className="btnn">
                    <button id='btn' onClick={this.IncrementItem}>Click to increment by 1</button>
                    <button id='btn' onClick={this.DecreaseItem}>Click to decrease by 1</button>
                </div>
                <h2 id='head' >{this.state.clicks}</h2>
            </div>
        );
    }
}

export default Product;