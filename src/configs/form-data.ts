import { HTMLInputTypeAttribute } from 'react';
import { ContactForm, RegisterForm } from './validation-schema';

type InputType = {
  id: string;
  type: HTMLInputTypeAttribute;
  name: keyof RegisterForm;
  label: string;
  placeholder: string;
};

type DropdownType = {
  id: string;
  name: keyof RegisterForm;
  label: string;
  placeholder: string;
  values: { value: string; label: string | number }[];
};

const registerFormData: { input: InputType[]; dropdown: DropdownType[] } = {
  input: [
    {
      id: 'teamName',
      type: 'text',
      name: 'teamName',
      label: "Team's Name",
      placeholder: 'Enter the name of your group',
    },
    {
      id: 'phone',
      type: 'text',
      name: 'phone',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
    },
    {
      id: 'topic',
      type: 'text',
      name: 'topic',
      label: 'Project Topic',
      placeholder: 'What is your project topic',
    },
  ],
  dropdown: [
    {
      id: 'category',
      name: 'category',
      label: 'Project Category',
      placeholder: 'Select your category',
      values: [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'ui/ux', label: 'UI/UX' },
      ],
    },
    {
      id: 'groupSize',
      name: 'groupSize',
      label: 'Group Size',
      placeholder: 'Select your group size',
      values: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
      ],
    },
  ],
};

export { registerFormData, type InputType, type DropdownType };

type ContactFormData = {
  id: string;
  type: 'input' | 'textarea';
  name: keyof ContactForm;
  placeholder: string;
};
const contactFormData: ContactFormData[] = [
  {
    id: 'fullName',
    type: 'input',
    name: 'fullName',
    placeholder: 'Full Name',
  },
  {
    id: 'email',
    type: 'input',
    name: 'email',
    placeholder: 'Email Address',
  },
  {
    id: 'message',
    type: 'textarea',
    name: 'message',
    placeholder: 'Message',
  },
];

export { contactFormData, type ContactFormData };
