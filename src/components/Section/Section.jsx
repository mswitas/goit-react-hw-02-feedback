import React, { Component } from "react";
import PropTypes from "prop-types";

class Section extends Component {
    static defaultProps = { title: "" };
    static propTypes = { title: PropTypes.string.isRequired };
    
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