
interface ButtonProps {
  text: string;
  color?: string; 
  onClick?: () => void;
}

const Button = ({ 
  text, 
  color = 'bg-indigo-500 hover:bg-indigo-600', 
  onClick 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white font-semibold rounded-md transition-colors duration-200 ${color}`}
    >
      {text}
    </button>
  );
};

export default Button;