import { Images } from '@/lib/images';
import { Paragraph } from '@/components/typography/paragraph';
import { Section, SectionHeader } from '@/components/typography/section';
import { Controller, useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import * as Select from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { registerFormData } from '@/configs/form-data';
import { registerFormSchema, type RegisterForm } from '@/configs/validation-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import SuccessRegistrationDialog from '@/components/success-registration-dialog';
import { useMedia } from '@/hooks/use-media';
import { SwitchComponents } from '@/components/switch-components';

export default function Register() {
  const { input: inputConfig, dropdown: dropdownConfig } = registerFormData;

  const [dialogOpen, setDialogOpen] = useState(false);

  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    setDialogOpen(true);
  };

  const { isDesktop } = useMedia();

  return (
    <main className="main">
      <SwitchComponents
        currentNode={
          <SectionHeader className="py-6 text-purpleLight text-center">
            Register
          </SectionHeader>
        }
        pendingNode={null}
        condition={isDesktop}
      />
      <Section>
        <div className="relative h-[60vw] mx-auto mb-14 lg:m-0 lg:w-full self-center">
          <img
            src={Images.Resgister}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="self-center py-10 px-6 md:px-10 lg:p-16 lg:bg-[rgba(255,255,255,0.03)] lg:rounded-xl">
            <SwitchComponents
              currentNode={
                <SectionHeader className="py-12 text-purpleLight text-center">
                  Register
                </SectionHeader>
              }
              pendingNode={null}
              condition={!isDesktop}
            />
            <Paragraph className="mb-5">Be part of the movement!</Paragraph>
            <h3 className="capitalize text-24 mb-8">Create your account</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-7 mb-6">
              {inputConfig.map(({ id, name, type, label, placeholder }) => (
                <Controller
                  key={id}
                  defaultValue=""
                  control={control}
                  name={name}
                  render={({ field: { value, ...rest }, fieldState: { error } }) => (
                    <div className="">
                      <Label htmlFor={id} className="mb-2 lg:mb-3">
                        {label}
                      </Label>
                      <Input
                        id={id}
                        {...rest}
                        type={type}
                        value={value as string}
                        placeholder={placeholder}
                      />
                      {error && (
                        <Paragraph className="mt-1 text-red-500">
                          {error.message}
                        </Paragraph>
                      )}
                    </div>
                  )}
                />
              ))}
              {dropdownConfig.map(({ id, name, label, placeholder, values }) => (
                <Controller
                  key={id}
                  control={control}
                  name={name}
                  render={({ field, fieldState: { error } }) => (
                    <div className="lg:last:col-span-full lg:[:nth-child(1)_&]:col-span-full xl:last:col-auto xl:lg:[:nth-child(1)_&]:col-auto">
                      <Label htmlFor="category" className="mb-2 lg:mb-3">
                        {label}
                      </Label>
                      <Select.Select
                        value={field.value as string}
                        onValueChange={field.onChange}
                      >
                        <Select.SelectTrigger>
                          <Select.SelectValue placeholder={placeholder} />
                        </Select.SelectTrigger>
                        <Select.SelectContent side="bottom">
                          {values.map(({ value, label }) => (
                            <Select.SelectItem key={value} value={value}>
                              {label}
                            </Select.SelectItem>
                          ))}
                        </Select.SelectContent>
                      </Select.Select>
                      {error && (
                        <Paragraph className="mt-1 text-red-500">
                          {error.message}
                        </Paragraph>
                      )}
                    </div>
                  )}
                />
              ))}
            </div>
            <Paragraph className="mb-4 text-purpleLight text-12 font-montserrat italic">
              Please review your registration details before submitting
            </Paragraph>
            <Controller
              name="termsAndConditions"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="mb-6 flex items-center space-x-4">
                  <Checkbox
                    id="termsAndConditions"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label
                    htmlFor="termsAndConditions"
                    className={cn('leading-tight', { 'text-red-500': error })}
                  >
                    I agreed with the event terms and conditions and privacy policy
                  </Label>
                </div>
              )}
            />
            <Button className="w-full">Register</Button>
          </div>
        </form>
      </Section>
      <SuccessRegistrationDialog open={dialogOpen} setOpen={setDialogOpen} />
    </main>
  );
}
