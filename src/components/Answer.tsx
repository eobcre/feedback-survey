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
        <div className='relative'>
          <input
            type='checkbox'
            id={`linked-${index}`}
            onClick={() => handleClick(index)}
            className={`relative inline-block border-2 border-[#B1CDF1] rounded-full appearance-none cursor-pointer mx-4 w-3 h-3 before:content-[''] before:absolute before:top-[3px] before:left-[10px] before:w-[2.1rem] before:h-[0.1rem] before:bg-[#B1CDF1] ${
              clicked === index ? 'bg-black border-black' : ''
            }`}
          />
          <label
            htmlFor={`linked-${index}`}
            className='absolute top-[2rem] left-[-1rem] text-xs w-[100px]'
          >
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Answer;
