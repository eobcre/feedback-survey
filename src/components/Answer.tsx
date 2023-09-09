import { useState } from 'react';

const Answer: React.FC = () => {
  const [clicked, setClicked] = useState<number | null>(7);

  const inputAnswers = [
    'Totally disagree',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Totally agree',
  ];

  const handleClick = (index: number) => {
    setClicked(index);
  };

  return (
    <div className='flex justify-center'>
      {inputAnswers.map((answer, index) => (
        <div className='relative' key={index}>
          <input
            type='radio'
            id={`linked-${index}`}
            onClick={() => handleClick(index)}
            className={`relative top-[10px] left-[10px] border-2 border-[#B1CDF1] rounded-full appearance-none cursor-pointer mx-4 w-3 h-3 ${
              index < 9 &&
              `after:content-[''] after:absolute after:top-[3px] after:left-[10px] after:w-[2.1rem] after:h-[0.1rem] after:bg-[#B1CDF1]`
            } ${
              clicked === index && 'absolute bg-black border-[#F4F9FF] shadow'
            }`}
          />
          <label
            htmlFor={`linked-${index}`}
            className='absolute top-[2.2rem] left-[-1rem] text-xs w-[100px]'
          >
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Answer;
