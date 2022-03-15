export const updateSkills = (skills, skillToUpdate, increment) => {
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

export const updateWilder = (wilder, newSkills) => {
  return { ...wilder, skills: newSkills };
};

export const updateWilderFromSkills = (wilder, skillToUpdate, increment) => {
  const newSkills = updateSkills(wilder.skills, skillToUpdate, increment);
  return updateWilder(wilder, newSkills);
};
