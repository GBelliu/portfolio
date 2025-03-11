import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
  title: string;
  icon: JSX.Element;
}

export default function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
  return (
    <ConhecimentoContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  );
}
