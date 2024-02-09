import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
    static defaultProps = {
        options: [],
        onLeaveFeedback: () => {},
    }
    static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    }
    
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={css.btnsList}>
                {options.map(option => {
                    return (
                        <li key={option}><button type="button" id={option} onClick={onLeaveFeedback}>{option}</button></li>
                    );
                })}
            </ul>
        )
    }
}

export default FeedbackOptions;