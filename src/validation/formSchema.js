import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters long.')
      .required('Name is Required'),
    size: yup
      .string()
      .oneOf(['Small', 'Medium', 'Large'], 'You must select a size.')
      .required('You must select a size'),
  });

export default formSchema