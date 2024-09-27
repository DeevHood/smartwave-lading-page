interface CurvedBorderProps {
  className?: string;
}

export const CurvedBorder = ({ className = 'rotate-90'}: CurvedBorderProps) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 40H0V0C-9.05991e-06 20.5 11.5 40 40 40Z"
        fill="white"
      />
    </svg>
  );
};

export default Object.freeze({
  CurvedBorder,
})
