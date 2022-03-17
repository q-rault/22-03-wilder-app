import Image from 'next/image';
import blank_profile from '../public/blank_profile_picture.png';

import Skill, { ISkill } from './SkillComponent';
import styles from '../styles/WilderCardStyles.module.css';
import InlineButton from './InlineButtonComponent';
import { replaceAtId, updateWilderFromSkills } from '../utils/wilder.utils';
import SkillForm from './SkillForm';
import { updateWilder, deleteWilder } from '../api/wilderAPI';

export interface IWilder {
  city: string;
  name: string;
  _id: string;
  skills?: ISkill[];
}

export interface IWilderProps {
  wilder: IWilder;
  setWilders: any;
}

const WilderCard = ({ wilder, setWilders }: IWilderProps) => {
  const { name, city, skills } = wilder;

  const handleRemove = async (): Promise<void> => {
    try {
      const result = await deleteWilder(wilder._id);
      if (result?.data?.result?.deletedCount) {
        setWilders((prevState: IWilder[]) => {
          return replaceAtId(prevState, wilder._id);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleWilderUpdate = async (
    skillToUpdate: ISkill,
    increment: number
  ): Promise<void> => {
    try {
      const newWilder = updateWilderFromSkills(
        wilder,
        skillToUpdate,
        increment
      );
      const result = await updateWilder(wilder._id, newWilder);
      setWilders((prevState: IWilder[]) => {
        return replaceAtId(prevState, wilder._id, result?.data?.updatedWilder);
      });
    } catch (err: unknown) {
      console.log(err);
    }
  };

  return (
    <article className={styles.card}>
      <Image src={blank_profile} alt={`${name}Profile`} />
      <h3>
        {name} @ {city}{' '}
        <InlineButton handleClick={handleRemove}>&#10005;</InlineButton>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills?.map((skill) => (
          <Skill
            key={skill.title}
            skill={skill}
            handleMinus={() => handleWilderUpdate(skill, -1)}
            handlePlus={() => handleWilderUpdate(skill, +1)}
          />
        ))}
        <SkillForm
          newSkillChange={({ newSkillTitle }: { newSkillTitle: string }) =>
            handleWilderUpdate(
              { title: newSkillTitle.toLowerCase(), votes: 0 },
              +1
            )
          }
        />
      </ul>
    </article>
  );
};

export default WilderCard;
