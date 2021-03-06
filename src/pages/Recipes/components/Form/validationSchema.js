import * as Yup from 'yup';
import { convertToPlain } from 'uikit/organisms/Editor/utils';

const validateInfo = {
  title: Yup.string().required('Please add a title to your recipe'),
  servings: Yup.number().required('Please add the servings'),
  category: Yup.object().required('Please add a category'),
  totalTime: Yup.string().required(
    'Please tell us how much is needed for the recipe to be prepared'
  ),
  level: Yup.string().required(
    'Please select a difficulty level for this recipe'
  ),
};

const validateIngredients = {
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        quantity: Yup.string().required(),
        measurement: Yup.object()
          .shape({
            id: Yup.string().required(),
            name: Yup.string().required(),
          })
          .required(),
      })
    )
    .required('Please add some ingredients')
    .min(1, 'Add at least one ingredient'),
};

const validateMethod = {
  method: Yup.mixed()
    .required('Please add your recipe method')
    .test(
      'is-empty',
      'Please add at least 50 charachters',
      value => convertToPlain(value).trim().length > 50
    ),
};

const validateMore = {
  picture: Yup.string().required('Please add a picture of your recipe'),
  description: Yup.string().required('Please add a short description'),
  calories: Yup.number().notRequired(),
  carbohydrates: Yup.number().notRequired(),
  protein: Yup.number().notRequired(),
  fiber: Yup.number().notRequired(),
  fat: Yup.number().notRequired(),
};

const validateStep1 = Yup.object().shape({ ...validateInfo });
const validateStep2 = Yup.object().shape({ ...validateIngredients });
const validateStep3 = Yup.object().shape({ ...validateMethod });
const validateStep4 = Yup.object().shape({ ...validateMore });

const validatePreview = Yup.object().shape({});

const validationSchema = [
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validatePreview,
];

export default validationSchema;
