import * as Yup from 'yup';
import Plain from 'slate-plain-serializer';

const validateInfo = {
  title: Yup.string().required('Please add a title to your recipe'),
  servings: Yup.number().required('Please add the servings'),
  category: Yup.object().required('Please add a category'),
  totalTime: Yup.string().required(
    'Please tell us how much is needed for the recipe to be prepared'
  ),
  level: Yup.number()
    .required()
    .min(1)
    .max(3),
};

const validateIngridients = {
  ingridients: Yup.array()
    .required('Please add some ingridients')
    .min(1, 'Add at least one ingridient'),
};

const validateMethod = {
  method: Yup.mixed()
    .required('Please add your recipe method')
    .test('is-empty', 'Please add at least 50 charachters', value =>
      Promise.resolve(Plain.serialize(value).trim().length > 50)
    ),
};

const validateMore = {
  description: Yup.string().notRequired(),
  // .min(50, 'Please add a description of at least 50 letters'),
  calories: Yup.number().notRequired(),
  carbohydrates: Yup.number().notRequired(),
  protein: Yup.number().notRequired(),
  fat: Yup.number().notRequired(),
};

const validateStep1 = Yup.object().shape({ ...validateInfo });
const validateStep2 = Yup.object().shape({ ...validateIngridients });
const validateStep3 = Yup.object().shape({ ...validateMethod });
const validateStep4 = Yup.object().shape({ ...validateMore });

const validatePreview = Yup.object().shape({
  ...validateInfo,
  ...validateIngridients,
  ...validateMethod,
  ...validateMore,
});

const validationSchema = [
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validatePreview,
];

export default validationSchema;
