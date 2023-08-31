import Answer from './components/Answer';
import Button from './components/Button';
import PageDisplay from './components/PageDisplay';
import Question from './components/Question';

const App = () => {
  const handleClickPrevious = () => {
    console.log('previous');
  };

  const handleClickNext = () => {
    console.log('next');
  };

  return (
    <div>
      <PageDisplay />
      <Question />
      <Answer />
      <Button onClick={handleClickNext} label='Previous' />
      <Button onClick={handleClickPrevious} label='Next' />
    </div>
  );
};

export default App;
