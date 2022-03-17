import styles from '../styles/SkillStyles.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { KeyboardEvent } from 'react';

const schema = yup
  .object()
  .shape({
    newSkillTitle: yup.string().required(),
  })
  .required();

type SkillFormValues = {
  newSkillTitle: string;
};

export interface ISkillFormProps {
  newSkillChange: (props: SkillFormValues) => Promise<void>;
}

const SkillForm = ({ newSkillChange }: ISkillFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SkillFormValues>({
    resolver: yupResolver(schema),
  });
  const handleKeyUp = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(newSkillChange)();
    }
  };
  return (
    <>
      <li className={styles.li} onKeyUp={handleKeyUp}>
        <input {...register('newSkillTitle')} autoComplete="off" />
      </li>
      <p>{errors.newSkillTitle?.message}</p>
    </>
  );
};

export default SkillForm;
