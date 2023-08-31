type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <>
      <button
        onClick={onClick}
        className='text-sm border border-black rounded w-[140px] py-2'
      >
        {label}
      </button>
    </>
  );
};

export default Button;
