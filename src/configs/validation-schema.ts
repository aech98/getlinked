import { z } from 'zod';

const registerFormSchema = z.object({
  teamName: z.string().min(1, 'Field is required'),
  phone: z.string().min(1, 'Field is required'),
  email: z.string().min(1, 'Field is required').email('Email is not valid'),
  topic: z.string().min(1, 'Field is required'),
  category: z.enum(['frontend', 'backend', 'ui/ux'], {
    errorMap: (issue, ctx) => {
      if (issue.code === 'invalid_enum_value') {
        return { message: 'Select from category' };
      }

      return { message: ctx.defaultError };
    },
  }),
  groupSize: z.enum(['1', '2', '3', '4'], {
    errorMap: (issue, ctx) => {
      if (issue.code === 'invalid_enum_value') {
        return { message: 'Select from group size' };
      }

      return { message: ctx.defaultError };
    },
  }),
  termsAndConditions: z.literal(true, {
    invalid_type_error: 'Terms must be agreed',
  }),
});

type RegisterForm = z.infer<typeof registerFormSchema>;

export { registerFormSchema, type RegisterForm };

const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Field is required'),
  email: z.string().min(1, 'Field is required').email('Email is not valid'),
  message: z.string().min(50, 'Field should not be less than 50 characters'),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export { contactFormSchema, type ContactForm };
