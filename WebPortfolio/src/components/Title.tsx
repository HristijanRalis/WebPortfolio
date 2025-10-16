interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <h1 className="Title">{title}</h1>;
};
