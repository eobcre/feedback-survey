import { useState } from 'react';

const Answer: React.FC = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const inputAnswers = [
    'Totally disagree',
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
        <div key={index} className='relative'>
          <label
            htmlFor={`linked-${index}`}
            className='absolute top-[2rem] left-[-1.1rem] text-xs w-[100px]'
          >
            {answer}
          </label>
          <input
            type='checkbox'
            id={`linked-${index}`}
            onClick={() => handleClick(index)}
            className={`border-2 border-[#B1CDF1] rounded-full appearance-none cursor-pointer w-3 h-3 ${
              clicked === index ? 'bg-black border-black' : ''
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Answer;
