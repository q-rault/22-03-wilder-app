import styles from '../styles/SkillStyles.module.css';
import InlineButton from './InlineButtonComponent';

export interface ISkill {
  title: string;
  votes: number;
}

interface ISkillProps {
  skill: ISkill;
  handleMinus: () => void;
  handlePlus: () => void;
}

const Skill = ({ skill, handleMinus, handlePlus }: ISkillProps) => {
  const { title, votes } = skill;
  return (
    <li className={styles.li}>
      <InlineButton handleClick={handleMinus}>-</InlineButton>
      {title}
      <InlineButton handleClick={handlePlus}>+</InlineButton>
      <span className={styles.votes}>{votes}</span>
    </li>
  );
};

export default Skill;
