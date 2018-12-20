import styled from 'styled-components';
import { prop } from 'styled-tools';

import FormGroup from './FormGroup';
import Label from './Label';
import Feedback from './Feedback';
import Input from './Input';
import Password from './Password';
import Textarea from './Textarea';

const Form = styled.form`
  display: flex;
  flex-direction: ${prop('direction', 'column')};
`;

Form.FormGroup = FormGroup;
Form.Label = Label;
Form.Feedback = Feedback;
Form.Input = Input;
Form.Password = Password;
Form.Textarea = Textarea;

export default Form;
