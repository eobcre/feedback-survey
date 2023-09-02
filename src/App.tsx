import { useState } from 'react';

import Answer from './components/Answer';
import Button from './components/Button';
import PageDisplay from './components/PageDisplay';
import Question from './components/Question';

import { questions } from './data/questions';

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  // buttons
  const handleClickPrevious = () => {
    questionIndex > 0 ? setQuestionIndex(questionIndex - 1) : '';
  };

  const handleClickNext = () => {
    questionIndex < questions.length - 1
      ? setQuestionIndex(questionIndex + 1)
      : '';
  };

  return (
    <div className='flex justify-center items-center bg-[#F4FAFF] h-screen'>
      <div className='bg-white rounded-xl px-16 w-[600px] h-[330px]'>
        <PageDisplay />
        <Question questionIndex={questionIndex} />
        <Answer />
        <div className='flex justify-between mt-16'>
          <Button
            onClick={handleClickPrevious}
            label='Previous'
            disabled={questionIndex === 0}
            className='border border-black rounded py-2 w-[120px]'
          />
          <Button
            onClick={handleClickNext}
            label='Next'
            disabled={questionIndex === questions.length - 1}
            className='bg-[#567FEA] text-white rounded py-2 w-[120px]'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
