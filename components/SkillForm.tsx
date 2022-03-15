import styles from "../styles/SkillStyles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    newSkill: yup.string().required(),
  })
  .required();

const SkillForm = ({ newSkillChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit(newSkillChange)();
    }
  };
  return (
    <li className={styles.li} onKeyUp={handleKeyUp}>
      <input {...register("newSkill")} />
    </li>
  );
};

export default SkillForm;
