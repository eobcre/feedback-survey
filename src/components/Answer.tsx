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
            type='radio'
            id={`linked-${index}`}
            onClick={() => handleClick(index)}
            className={`relative inline-block border-2 border-[#B1CDF1] rounded-full appearance-none cursor-pointer mx-4 w-3 h-3 ${
              index < 9
                ? `after:content-[''] after:absolute after:top-[3px] after:left-[10px] after:w-[2.1rem] after:h-[0.1rem] after:bg-[#B1CDF1]`
                : ''
            } ${
              clicked === index
                ? 'bg-black border-[#F4F9FF] shadow scale-150 after:w-[1.28rem] after:h-[0.07rem]'
                : ''
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
