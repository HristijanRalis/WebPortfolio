interface LearnMoreBtnProps {
  targetId: string;
}

export const LearnMoreBtn = ({ targetId }: LearnMoreBtnProps) => {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button onClick={handleClick} className="learnMoreBtn">
      Learn More
    </button>
  );
};
