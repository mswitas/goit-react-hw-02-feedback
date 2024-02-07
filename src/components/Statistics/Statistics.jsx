import React, { Component } from "react";

class Statistics extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive Feedback: {positivePercentage}%</p>
            </div>
        )
    }
}

export default Statistics;