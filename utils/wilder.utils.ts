import { ISkill } from '../components/SkillComponent';
import { IWilder } from '../components/WilderCardComponent';

export const updateSkills = (
  skills: ISkill[],
  skillToUpdate: ISkill,
  increment: number
) => {
  const existingSkill = skills.find(
    (skill) => skill.title === skillToUpdate.title
  );

  if (!existingSkill) {
    return [...skills, { ...skillToUpdate, votes: increment }];
  }

  if (existingSkill.votes + increment < 1) {
    return skills.filter((skill) => skill.title !== existingSkill.title);
  }

  return skills.map((skill) => {
    return skill.title === skillToUpdate.title
      ? { ...skill, votes: skill.votes + increment }
      : skill;
  });
};

export const updateWilder = (wilder: IWilder, newSkills: ISkill[]) => {
  return { ...wilder, skills: newSkills };
};

export const updateWilderFromSkills = (
  wilder: IWilder,
  skillToUpdate: ISkill,
  increment: number
) => {
  const newSkills = updateSkills(
    wilder.skills ? wilder.skills : [],
    skillToUpdate,
    increment
  );
  return updateWilder(wilder, newSkills);
};

export const replaceAtId = (array: any[], _id: string, modifiedItem?: any) => {
  const clonedArray = [...array];
  const index = clonedArray.findIndex((wilder: any) => wilder._id === _id);
  if (modifiedItem) {
    clonedArray.splice(index, 1, modifiedItem);
  } else {
    clonedArray.splice(index, 1);
  }
  return clonedArray;
};
