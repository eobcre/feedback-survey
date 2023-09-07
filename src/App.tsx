import { useState } from 'react';

import Answer from './components/Answer';
import Button from './components/Button';
import PageDisplay from './components/PageDisplay';
import ProgressBar from './components/ProgressBar';
import Question from './components/Question';

import { questions } from './data/questions';

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // buttons
  const handleClickPrevious = () => {
    questionIndex > 0 ? setQuestionIndex(questionIndex - 1) : '';
    currentPage > 1 ? setCurrentPage((prevState) => prevState - 1) : '';
  };

  const handleClickNext = () => {
    questionIndex < questions.length - 1
      ? setQuestionIndex(questionIndex + 1)
      : '';
    currentPage < 3 ? setCurrentPage((prevState) => prevState + 1) : '';
  };

  const progressCal = () => {
    const barWidth = 120;
    const totalPages = 3;
    return (currentPage / totalPages) * barWidth;
  };

  return (
    <div className='flex justify-center items-center bg-[#F4FAFF] h-screen'>
      <div className='bg-white rounded-xl px-16 w-[600px] h-[330px]'>
        <PageDisplay currentPage={currentPage} />
        <ProgressBar progressCal={progressCal} />
        <Question questionIndex={questionIndex} />
        <Answer />
        <div className='flex justify-between mt-16'>
          <Button
            onClick={handleClickPrevious}
            label='Previous'
            className='border border-black rounded py-2 w-[120px]'
          />
          <Button
            onClick={handleClickNext}
            label='Next'
            className='bg-[#567FEA] text-white rounded py-2 w-[120px]'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
