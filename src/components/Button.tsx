type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <>
      <button onClick={onClick} className={`text-sm ${className}`}>
        {label}
      </button>
    </>
  );
};

export default Button;
