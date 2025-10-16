interface DescriptionProps {
  description: string;
}

export const Description = ({ description }: DescriptionProps) => {
  return <div className="DESC">{description}</div>;
};
