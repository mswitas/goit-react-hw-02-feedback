import React, { Component } from "react";

class Section extends Component {
    static defaultProps = { title: "" };

    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;
        return (
            <section>
                <h2>{title}</h2>
                {this.props.children}
            </section>
        );
    }
}

export default Section;