import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positiveFeedback: 0,
    }
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }

  onLeaveFeedback(event) {
    switch (event.target.id) {
      case "Good":
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case "Neutral":
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
      break;
      case "Bad":
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
      break;
      default:
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback() {
    this.setState(state => {
      return { total: state.good + state.neutral + state.bad };
    }); 
  }

  countPositiveFeedbackPercentage() {
    this.setState(state => {
      const positivePercentage = Math.round(state.good / state.total * 100);
      return { positiveFeedback: positivePercentage };
    });
  }
  
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />  
          )}    
        </Section>
      </div>
    );
  }
}  

export default App;
