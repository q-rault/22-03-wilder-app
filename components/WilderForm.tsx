import styles from '../styles/WilderFormStyles.module.css';
import { createWilder } from '../api/wilderAPI';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    wilderName: yup.string().required(),
    wilderCity: yup.string().required(),
  })
  .required();

interface IAddWilderFormProps {
  setWilders: any;
}

const AddWilderForm = ({ setWilders }: IAddWilderFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      wilderName: '',
      wilderCity: '',
    },
  });
  const onSubmit = async (newWilder: any) => {
    const { wilderName, wilderCity } = newWilder;
    try {
      const result = await createWilder(wilderName, wilderCity);
      if (result?.data?.success) {
        setWilders((prevState: any) => [...prevState, result.data.result]);
        resetField('wilderName');
        resetField('wilderCity');
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form + ' container'}
    >
      <label htmlFor="name-input" className={styles.label}>
        Name :
      </label>
      <input
        className={styles.input}
        {...register('wilderName')}
        autoComplete="off"
      />
      <p>{errors.wilderName?.message}</p>
      <label htmlFor="city-input">City :</label>
      <input
        className={styles.input}
        {...register('wilderCity')}
        autoComplete="off"
      />
      <p>{errors.wilderCity?.message}</p>

      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddWilderForm;
