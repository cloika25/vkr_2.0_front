import React from 'react';
import { TextField as MTextField } from '@mui/material';
import { TextFieldProps } from './TextField.types';

const TextField: React.FC<TextFieldProps> = (props) => (<MTextField {...props} />);

export default TextField;
