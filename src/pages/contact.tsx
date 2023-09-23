import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { SwitchComponents } from '@/components/switch-components';
import { Paragraph } from '@/components/typography/paragraph';
import { Section, SectionHeader } from '@/components/typography/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contactFormData } from '@/configs/form-data';
import { ContactForm, contactFormSchema } from '@/configs/validation-schema';
import { useMedia } from '@/hooks/use-media';

export default function Contact() {
  const { control, handleSubmit } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
  };

  const { isDesktop } = useMedia();

  return (
    <main className="main">
      <Section className="border-0 gap-x-20">
        <SwitchComponents
          currentNode={
            <SectionHeader className="text-purpleLight mb-6 text-center">
              Get in touch
            </SectionHeader>
          }
          pendingNode={
            <article className="self-center justify-self-end max-w-sm">
              <SectionHeader className="text-purpleLight mb-5">
                Get in touch
              </SectionHeader>

              <ul className="flex flex-col space-y-6 mb-8">
                <li>
                  <h5 className="mb-1 text-16">Contact address:</h5>
                  <Paragraph>27, Alara Street Yaba 100012 Lagos State</Paragraph>
                </li>
                <li>
                  <h5 className="mb-1 text-16">Contact phone number:</h5>
                  <Paragraph>+234-70-6798-1819</Paragraph>
                </li>
                <li>
                  <h5 className="mb-1 text-16">Visiting information:</h5>
                  <Paragraph>
                    We are open on Monday - Friday from 08:00am - 05:00pm
                  </Paragraph>
                </li>
              </ul>
              <article>
                <h4 className="text-purpleLight text-16 mb-2">Share on:</h4>
                <ul className="flex items-center space-x-4">
                  {[Instagram, Twitter, Facebook, Linkedin].map((icon, index) => {
                    const Icon = icon;
                    return (
                      <li key={index}>
                        <Link to="#">
                          <Icon className="w-4 h-4" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </article>
          }
          condition={isDesktop}
        />
        <div className="container mx-auto py-10 px-6 md:px-10 lg:p-16 lg:bg-[rgba(255,255,255,0.03)] lg:rounded-xl lg:max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-purpleLight text-20 font-clash font-600 mb-4">
              Questions or need assistance?
              <br />
              Let us know about it
            </h3>
            <Paragraph className="mb-8">
              Email us below to any question related to our event
            </Paragraph>
            <div className="flex flex-col gap-y-8">
              {contactFormData.map(({ id, name, type, placeholder }) => (
                <Controller
                  key={id}
                  name={name}
                  defaultValue=""
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const props = { id, placeholder, ...field };

                    return (
                      <div>
                        {type === 'input' ? (
                          <Input {...props} />
                        ) : (
                          <textarea
                            {...props}
                            style={{ resize: 'none' }}
                            className="flex h-32 w-full rounded-md border border-white bg-transparent px-6 py-3 lg:py-4 text-13 md:text-14 font-montserrat font-400 ring-offset-purpleLight placeholder:text-white/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purpleLight focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          ></textarea>
                        )}
                        {error && (
                          <Paragraph className="mt-1 text-red-500">
                            {error.message}
                          </Paragraph>
                        )}
                      </div>
                    );
                  }}
                />
              ))}
              <Button className="w-max relative left-1/2 -translate-x-1/2">
                Submit
              </Button>
            </div>
            <SwitchComponents
              currentNode={
                <article className="flex flex-col items-center mt-6">
                  <h4 className="text-purpleLight text-16 mb-2">Share on:</h4>
                  <ul className="flex items-center space-x-4">
                    {[Instagram, Twitter, Facebook, Linkedin].map((icon, index) => {
                      const Icon = icon;
                      return (
                        <li key={index}>
                          <Link to="#">
                            <Icon className="w-4 h-4" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              }
              pendingNode={null}
              condition={isDesktop}
            />
          </form>
        </div>
      </Section>
    </main>
  );
}
