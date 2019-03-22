import styled from 'styled-components';
import { prop } from 'styled-tools';

import Checkbox from './Checkbox';
import Input from './Input';
import Feedback from './Feedback';
import FormGroup from './FormGroup';
import Label from './Label';
import Multichoice from './Multichoice';
import Textarea from './Textarea';
import Password from './Password';
import RemoteFilter from './RemoteFilter';
import Select from './Select';

const Form = styled.form`
  display: flex;
  flex-direction: ${prop('direction', 'column')};
`;

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Feedback = Feedback;
Form.FormGroup = FormGroup;
Form.Label = Label;
Form.Multichoice = Multichoice;
Form.Textarea = Textarea;
Form.Password = Password;
Form.Select = Select;
Form.RemoteFilter = RemoteFilter;

export default Form;
