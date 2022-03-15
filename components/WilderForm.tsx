import { useState } from "react";
import styles from "../styles/WilderFormStyles.module.css";
import { createWilder } from "../api/wilderAPI";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    wilderName: yup.string().required(),
    wilderCity: yup.string().required(),
  })
  .required();

function AddWilderForm({ handleTrigger }) {
  const [error, setError] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const { wilderName, wilderCity } = data;
    try {
      const result = await createWilder(wilderName, wilderCity);
      if (result.data.success) {
        setError("");
        handleTrigger();
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form + " container"}
    >
      <label htmlFor="name-input" className={styles.label}>
        Name :
      </label>
      <input className={styles.input} {...register("wilderName")} />
      <p>{errors.wilderName?.message}</p>
      <label htmlFor="city-input">City :</label>
      <input className={styles.input} {...register("wilderCity")} />
      <p>{errors.wilderCity?.message}</p>

      {error !== "" && <p>{error}</p>}
      <button className={styles.button}>Add</button>
    </form>
  );
}

export default AddWilderForm;
