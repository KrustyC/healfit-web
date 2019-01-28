import * as Yup from 'yup';

const validateInfo = {
  title: Yup.string().required('Please add a title to your recipe'),
  servings: Yup.number().required('Please add the servings'),
  description: Yup.string()
    .notRequired()
    .min(50, 'Please add a description of at least 50 letters'),
  category: Yup.string().required('Please add a category'),
  totalTime: Yup.string().required('Please how much is needed'),
  level: Yup.number()
    .required()
    .min(1)
    .max(3),
};

const validateIngridients = {
  ingridients: Yup.string().required('Please add at least 1 ingridient'),
};

const validateMethod = {
  method: Yup.string().required('Please add at least 1 step to your method'),
};

const validateStep1 = Yup.object().shape({ ...validateInfo });
const validateStep2 = Yup.object().shape({ ...validateIngridients });
const validateStep3 = Yup.object().shape({ ...validateMethod });

const validatePreview = Yup.object().shape({
  ...validateInfo,
  ...validateIngridients,
  ...validateMethod,
});

const validationSchema = [
  validateStep1,
  validateStep2,
  validateStep3,
  validatePreview,
];

export default validationSchema;
