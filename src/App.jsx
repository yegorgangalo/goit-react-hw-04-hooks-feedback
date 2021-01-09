import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from './components/Notification';

function App () {
  const  [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (value) => {
      if(value==='good'){setGood(prevValue => prevValue+1)}
      if(value==='neutral'){setNeutral(prevValue => prevValue+1)}
      if(value==='bad'){setBad(prevValue => prevValue+1)}
    }

  const countTotalFeedback = () => {
        return good + neutral + bad;
    }

  const countPositiveFeedbackPercentage = () => {
      return countTotalFeedback() === 0 ? 0 :
        Math.round(good / countTotalFeedback() * 100);
    }

      return (
          <Section title="Please leave Feedback">
          {/* <FeedbackOptions options={{ 'good': good, 'neutral':neutral, 'bad':bad}} onLeaveFeedback={addFeedback}/> */}
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={addFeedback}/>
            {countTotalFeedback() === 0 ?
            <Notification message="No feedback given"/> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={`${countPositiveFeedbackPercentage()}%`}
            />}
          </Section>
        )
}

export default App;
