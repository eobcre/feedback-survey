import Answer from './components/Answer';
import NextButton from './components/NextButton';
import PageDisplay from './components/PageDisplay';
import PreviousButton from './components/PreviousButton';
import Question from './components/Question';

const App = () => {
  return (
    <div>
      <PageDisplay />
      <Question />
      <Answer />
      <PreviousButton />
      <NextButton />
    </div>
  );
};

export default App;
