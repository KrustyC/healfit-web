import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Form = styled.form`
  display: flex;
  flex-direction: ${prop('direction', 'column')};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const Feedback = styled.span`
  color: red;
  margin-top: 3px;
  font-size: 10px;
  display: none;
  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
`;

const Input = styled.input`
  ${({ theme }) => css`
    padding: 10px 3px;
    border: 2px solid ${theme.colors.border};
    border-radius: 5px;
  `}

  :invalid {
    ${Feedback} {
      display: block;
    }
  }
`;

const Textarea = styled.textarea`
  width: ${prop('width', '100%')};
  ${({ theme }) => css`
    padding: 10px 3px;
    border: 2px solid ${theme.colors.border};
    border-radius: 5px;
  `}
  :invalid {
    ${Feedback} {
      display: block;
    }
  }
`;

Form.FormGroup = FormGroup;
Form.Label = Label;
Form.Feedback = Feedback;
Form.Input = Input;
Form.Textarea = Textarea;

export default Form;
