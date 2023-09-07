type ProgressProps = {
  progressCal: () => number;
};

const ProgressBar: React.FC<ProgressProps> = ({ progressCal }) => {
  const progressWidth = progressCal();

  return (
    <div className='flex justify-center items-center mb-5'>
      <span className='bg-[#E7F3FF] rounded-full w-[120px] h-[6px]'>
        <span
          style={{ width: `${progressWidth}px` }}
          className={`absolute z-10 bg-[#303D62] rounded-full h-[6px]`}
        ></span>
      </span>
    </div>
  );
};

export default ProgressBar;
