type PageProps = {
  currentPage: number;
};

const PageDisplay: React.FC<PageProps> = ({ currentPage }) => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <p className='text-gray-400 font-Arial'>{currentPage}/3</p>
    </div>
  );
};

export default PageDisplay;
