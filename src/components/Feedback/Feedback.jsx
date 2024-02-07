import React, { Component } from "react";
import css from "./Feedback.module.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

class Feedback extends Component {
    render() {
        // const feedbackOptionsArray = ["Good", "Bad"];
        return (
            <div className={css.feedback}>
                <div className={css.feedbackBtns}>
                    <h2>Please leave feedback</h2>
                    <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback="test" />
                </div>
                <Statistics />
            </div>
        );
    }
}

export default Feedback;