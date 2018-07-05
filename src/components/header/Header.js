import React from 'react';
import '../../css/main.css';

class Header extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         inputValue : ''
    //     }
    // }

    state = {
        inputValue: ''
    }

    inputHandle(event) {
        const { target } = event;
        this.setState({inputValue: target.value})
    }

    render () {
        return (
            <React.Fragment>
                <header>
                    <h1 className="logo">Header</h1>
                    <input
                        type="text"
                        onChange={(e) => this.inputHandle(e)}
                        value={this.state.inputValue}
                    />
                </header>
            </React.Fragment>
        )       
    }
}

export default Header;