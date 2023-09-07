import { questions } from '../data/questions';

type Props = {
  questionIndex: number;
};

const Question: React.FC<Props> = ({ questionIndex }) => {
  const currentQuestion = questions[questionIndex];

  return (
    <div className='flex justify-center items-center mb-10'>
      <h2 className='font-Arial font-bold'>{currentQuestion.question}</h2>
    </div>
  );
};

export default Question;
