const Answer: React.FC = () => {
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
            className='h-3 w-3 rounded-full border-2 border-[#B1CDF1] appearance-none cursor-pointer checked:bg-black checked:border-black'
          />
        </div>
      ))}
    </div>
  );
};

export default Answer;
