import React, { Component } from "react";
import css from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
    static defaultProps = {
        options: [],
        onLeaveFeedback: () => {},
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