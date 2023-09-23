import { Paragraph } from '@/components/typography/paragraph';
import { Section, SectionHeader } from '@/components/typography/section';
import { Button } from '@/components/ui/button';
import { Icons } from '@/lib/icons';
import { Images } from '@/lib/images';
import { Routes } from '@/lib/routes';
import { Link } from 'react-router-dom';
import * as Accordion from '@/components/ui/accordion';
import { faqTitleData } from '@/configs/faq-titles';
import { timelineData } from '@/configs/timeline-data';
import { Separator } from '@/components/ui/separator';
import { Flare } from '@/components/ui/flare';
import { Sparkle } from '@/components/ui/sparkle';
import { navLinksData } from '@/configs/navlinks-data';
import { Instagram, Twitter, Facebook, Linkedin, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="main">
      <Section className="!pb-0">
        <div className="flex justify-center lg:col-span-full lg:ml-auto lg:mb-16">
          <h2 className="relative w-max font-montserrat font-700 text-16 lg:text-36 italic text-center">
            Igniting a Revolution in HR Innovation
            <span className="absolute right-0 -bottom-3">
              <Icons.HeroUnderline className="w-28 h-3 lg:w-64" />
            </span>
          </h2>
        </div>
        <article className="py-10 flex flex-col items-center lg:self-center lg:items-start">
          <h4 className="text-32 lg:text-80 font-clash font-700 text-center lg:text-left mb-2 whitespace-nowrap">
            getlinked Te
            <span className="relative before:w-5 before:h-6 lg:before:w-20 lg:before:h-20 before:inline before:bg-[url(/creative.png)] before:bg-no-repeat before:bg-contain before:absolute before:left-1 before:-top-4 lg:before:-top-14 lg:before:left-3">
              c
            </span>
            h
            <br />
            Hackathon&nbsp;<span className="text-purpleLight">1.0</span>&nbsp;
            <span className="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-[url(/chain.png)] bg-no-repeat bg-contain relative top-1 lg:top-2"></span>
            &nbsp;
            <span className="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-[url(/boom.png)] bg-no-repeat bg-contain relative top-1"></span>
          </h4>
          <Paragraph className="text-center lg:text-left max-w-sm mb-6 lg:mb-10">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a Big
            prize
          </Paragraph>
          <Button asChild className="mb-4 lg:mb-16">
            <Link to={Routes.REGISTER}>Register</Link>
          </Button>
          <div className="flex items-center gap-x-6">
            <Paragraph className="font-unica text-48 lg:text-64">
              00<small className="text-14">H</small>
            </Paragraph>
            <Paragraph className="font-unica text-48 lg:text-64">
              00<small className="text-14">M</small>
            </Paragraph>
            <Paragraph className="font-unica text-48 lg:text-64">
              00<small className="text-14">S</small>
            </Paragraph>
          </div>
        </article>
        <div className="w-screen h-[80vw] lg:w-[calc(50vw-8px)] lg:ml-0 lg:h-auto -ml-4 relative after:inline-block after:h-[85vw] after:w-[85vw] lg:after:w-[40vw] lg:after:h-[40vw] after:bg-[url(/vr-imagination.png)] after:bg-no-repeat after:bg-cover after:absolute after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2">
          <img
            src={Images.BoyWithVr}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
        <Flare className="left-1/4 top-0" />
        <Flare className="right-40 top-1/2" />
        <Sparkle className="w-8 left-32 top-12" />
        <Sparkle className="w-4 left-1/2 top-1/4" color="gray" />
        <Sparkle className="w-6 left-1/4 bottom-1/4" color="gray" />
      </Section>
      <Section className="gap-x-24">
        <div className="relative h-[80vw] mx-auto mb-14 lg:m-0 lg:h-[40vw] justify-self-end">
          <img
            src={Images.BigIdea1}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <Paragraph className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-[50%] text-center">
            The Big
            <br />
            Idea
          </Paragraph>
        </div>
        <article className="self-center text-center max-w-lg mx-auto lg:text-left">
          <SectionHeader className="mb-4">
            Introduction to getlinked
            <br />
            <span className="inline-block text-purpleLight mt-2">
              tech Hackathon 1.0
            </span>
          </SectionHeader>
          <Paragraph>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a
            design maverick, or a concept wizard, you'll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the
            boundaries of technology, and creating solutions that can change the
            world, that's what we're all about!
          </Paragraph>
        </article>
        <Sparkle className="w-4 left-20 top-3/4" color="purple" />
        <Sparkle className="w-6 right-1/4 top-1/4" color="purple" />
      </Section>
      <Section>
        <article className="order-1 max-w-lg mx-auto lg:justify-self-end lg:order-none text-center self-center lg:text-left">
          <SectionHeader className="mb-4">
            Introduction to getlinked
            <br />
            <span className="inline-block text-purpleLight mt-2">
              tech Hackathon 1.0
            </span>
          </SectionHeader>
          <Paragraph>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a
            design maverick, or a concept wizard, you'll have the chance to transform
            your ideas into reality. Solving real-world problems, pushing the
            boundaries of technology, and creating solutions that can change the
            world, that's what we're all about!
          </Paragraph>
        </article>
        <div className="h-[80vw] mx-auto mb-6 lg:m-0 lg:h-[50vw] justify-self-end">
          <img src={Images.Hero3} alt="" className="w-full h-full object-cover" />
        </div>
        <Flare className="left-40 top-0" />
        <Flare className="right-40 bottom-20" />
        <Sparkle className="w-4 left-1/4 top-20" color="gray" />
        <Sparkle className="w-6 right-1/2 top-1/2" color="white" />
      </Section>
      <Section>
        <div className="h-[80vw] mx-auto mb-6 lg:m-0 lg:h-[50vw] self-center justify-self-end">
          <img src={Images.Hero4} alt="" className="w-full h-full object-contain" />
        </div>
        <article className="order-1 max-w-lg mx-auto lg:justify-self-start lg:order-none text-center self-center lg:text-left">
          <SectionHeader className="mb-4">
            Judging Criteria
            <br />
            <span className="inline-block text-purpleLight mt-2">
              Key attributes
            </span>
          </SectionHeader>
          <ul className="flex flex-col space-y-6 mb-10">
            <li>
              <span className="text-purpleLight">Innovation and Creativity:</span>
              &nbsp;Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or introduces
              innovative features.
            </li>
            <li>
              <span className="text-purpleLight">Functionality:</span>&nbsp;Determine
              the potential impact of the solution in the real world. Does it address
              a significant problem, and is it relevant to the target audience?
              Judges would assess the potential social, economic, or environmental
              benefits.
            </li>
            <li>
              <span className="text-purpleLight">Impact and Relevance:</span>
              &nbsp;Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </li>
            <li>
              <span className="text-purpleLight">Technical Complexity:</span>&nbsp;
              Evaluate the technical sophistication of the solution. Judges would
              consider the complexity of the code, the use of advanced technologies
              or algorithms, and the scalability of the solution.
            </li>
            <li>
              <span className="text-purpleLight">Adherence to Hackathon Rules:</span>
              &nbsp;Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific requirements
            </li>
          </ul>
          <Button>Read more</Button>
          <Sparkle className="w-4 left-1/4 top-20" color="purple" />
          <Sparkle className="w-4 left-1/2 top-1/2" color="gray" />
          <Sparkle className="w-6 right-1/2 bottom-120" color="white" />
        </article>
        <Flare className="left-20 top-3/4" />
        <Flare className="right-40 bottom-0" />
      </Section>
      <Section>
        <article className="order-1 max-w-lg mx-auto mb-10 lg:mb-14 lg:justify-self-end lg:order-none text-center self-center lg:text-left">
          <SectionHeader className="mb-4">
            Frequently asked
            <br />
            <span className="inline-block text-purpleLight mt-2">Question</span>
          </SectionHeader>
          <Paragraph>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </Paragraph>
          <Accordion.Accordion type="single" collapsible className="w-full">
            {faqTitleData.map(({ id, title, content }) => (
              <Accordion.AccordionItem key={id} value={id} className="mb-2">
                <Accordion.AccordionTrigger className="text-left">
                  {title}
                </Accordion.AccordionTrigger>
                <Accordion.AccordionContent>{content}</Accordion.AccordionContent>
              </Accordion.AccordionItem>
            ))}
          </Accordion.Accordion>
        </article>
        <div className="h-[80vw] mx-auto mb-6 lg:m-0 lg:h-[50vw] justify-self-end">
          <img src={Images.Hero5} alt="" className="w-full h-full object-cover" />
        </div>
        <Sparkle className="w-4 left-1/4 top-20" color="purple" />
        <Sparkle className="w-4 left-1/2 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/4 bottom-20" color="white" />
      </Section>
      <Section className="lg:grid-cols-1">
        <article className="max-w-lg mx-auto mb-10 lg:mb-14 lg:justify-self-end lg:order-none self-center lg:text-left">
          <SectionHeader className="mb-4 text-center ">Timeline</SectionHeader>
          <Paragraph className="text-center ">
            Here is the breakdown of the time we anticipate using for the upcoming
            event.
          </Paragraph>
        </article>
        <ul className="flex flex-col space-y-10">
          {timelineData.map(({ title, content, date }, index) => {
            const titleNode = (
              <h3 className="mb-2 lg:mb-3 text-12 lg:text-24 text-purpleLight font-700">
                {title}
              </h3>
            );
            const contentNode = <Paragraph className="text-12">{content}</Paragraph>;
            return (
              <li
                key={index}
                className="group grid grid-cols-[auto,1fr] gap-x-6 lg:grid-cols-[1fr,auto,1fr] lg:gap-x-14 lg:min-h-[10rem] lg:first:h-60"
              >
                <article className="text-right group-even:lg:order-3 group-even:lg:text-left max-w-lg self-end group-odd:lg:justify-self-end hidden lg:block">
                  {titleNode}
                  {contentNode}
                </article>
                <div className="group-even:lg:order-2 h-full grid grid-rows-[1fr,auto] gap-y-3 before:inline-block before:w-1 lg:before:w-1.5 before:h-full before:bg-purpleLight before:justify-self-center">
                  <span className="flex justify-center items-center w-6 h-6 lg:w-14 lg:h-14 rounded-full bg-purpleLight">
                    {index + 1}
                  </span>
                </div>
                <article className="group-even:lg:order-1 group-even:lg:text-right group-even:lg:justify-self-end text-left max-w-lg self-end">
                  <div className="mb-2 lg:mb-3 block lg:hidden">
                    {titleNode}
                    {contentNode}
                  </div>
                  <h4 className="text-12 lg:text-24 text-purpleLight font-700">
                    {date}
                  </h4>
                </article>
              </li>
            );
          })}
        </ul>
        <Sparkle className="w-4 left-1/4 top-20" color="purple" />
        <Sparkle className="w-4 left-1/4 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/4 bottom-1/4" color="white" />
      </Section>
      <Section className="lg:grid-cols-[auto,1fr] lg:grid-rows-[auto,1fr] lg:gap-x-20">
        <article className="mb-10 lg:col-start-2 max-w-lg mx-auto lg:justify-self-end lg:order-none text-center self-center lg:text-left">
          <SectionHeader className="mb-4">
            Prizes and
            <br />
            <span className="inline-block text-purpleLight mt-2">Rewards</span>
          </SectionHeader>
          <Paragraph>
            Highlight of the prizes and rewards for winners and participant
          </Paragraph>
        </article>
        <div className="mb-28 lg:mb-0 lg:col-start-1 lg:row-span-full h-[80vw] mx-auto lg:m-0 lg:h-auto lg:w-[40vw] justify-self-end">
          <img src={Images.Hero6} alt="" className="w-full h-full object-cover" />
        </div>
        <ul className="lg:col-start-2 lg:justify-self-center w-full flex items-center justify-center gap-x-3 md:gap-x-5 lg:gap-x-12">
          <li className="h-32 w-24 xl:h-72 xl:min-w-[12rem] border border-purpleLight rounded-lg p-2 text-center flex flex-col justify-end relative before:block before:w-5/6 before:h-[65%] before:bg-[url(/silver_medal1.png)] before:bg-no-repeat before:bg-cover before:absolute before:left-0 before:right-0 before:mx-auto before:-top-1/2 before:translate-y-1/4">
            <h3 className="text-24 xl:text-36 font-700">
              2nd
              <br />
              <span className="text-12 xl:text-24 font-600">Runner</span>
            </h3>
            <h4 className="text-14 xl:text-32 font-700 text-purpleLight">
              N300,000
            </h4>
          </li>
          <li className="h-40 w-24 xl:h-72 xl:min-w-[12rem] border border-purpleLight rounded-lg p-2 text-center flex flex-col justify-end relative before:block before:w-[150%] before:h-full before:bg-[url(/gold_medal1.png)] before:bg-no-repeat before:bg-contain before:bg-center before:absolute before:left-1/2 before:-top-full before:-translate-x-1/2 before:translate-y-1/2">
            <h3 className="text-24 xl:text-36 font-700">
              1st
              <br />
              <span className="text-12 xl:text-24 font-600">Runner</span>
            </h3>
            <h4 className="text-14 xl:text-32 font-700 text-purpleLight">
              N400,000
            </h4>
          </li>
          <li className="h-32 w-24 xl:h-72 xl:min-w-[12rem] border border-purpleLight rounded-lg p-2 text-center flex flex-col justify-end relative before:block before:w-5/6 before:h-[65%] before:bg-[url(/bronze_medal1.png)] before:bg-no-repeat before:bg-cover before:absolute before:left-0 before:right-0 before:mx-auto before:-top-1/2 before:translate-y-1/4">
            <h3 className="text-24 xl:text-36 font-700">
              3rd
              <br />
              <span className="text-12 xl:text-24 font-600">Runner</span>
            </h3>
            <h4 className="text-14 xl:text-32 font-700 text-purpleLight">
              N150,000
            </h4>
          </li>
        </ul>
        <Flare className="left-1/4 top-1/2 -translate-y-1/2" />
        <Flare className="right-0 top-3/4" />
        <Sparkle className="w-4 left-1/4 top-1/3" color="purple" />
        <Sparkle className="w-4 left-1/3 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/2 bottom-20" color="white" />
        <Sparkle className="w-4 left-1/2 top-1/3" color="purple" />
        <Sparkle className="w-4 left-1/4 top-1/2" color="gray" />
        <Sparkle className="w-6 right-20 bottom-20" color="gray" />
      </Section>
      <Section className="lg:grid-cols-1">
        <SectionHeader className="mb-4">Partners and Sponsors</SectionHeader>
        <Paragraph>
          Getlinked Hackathon 1.0 is honored to have the following major companies as
          its partners and sponsors
        </Paragraph>
        <ul className="grid grid-cols-3 p-4 border border-purpleLight rounded-lg">
          {[
            Images.LibertyCompany,
            Images.LibertyPay,
            Images.Winwise,
            Images.WhisperSMS,
            Images.Paybox,
            Images.VizualPlay,
          ].map((image, index) => (
            <li key={index} className="relative">
              <div className="w-full h-[20vw] max-w-[10rem] max-h-[10rem] mx-auto p-3">
                <img
                  src={image}
                  alt="Sponsors"
                  className="w-full h-full object-contain"
                />
              </div>
              {[0, 1, 3, 4].includes(index) && (
                <Separator
                  orientation="vertical"
                  className="absolute h-5/6 right-0 top-1/2 -translate-y-1/2"
                />
              )}
              {index < 3 && (
                <Separator
                  orientation="horizontal"
                  className="absolute bottom-0 w-5/6 left-1/2 -translate-x-1/2"
                />
              )}
            </li>
          ))}
        </ul>
        <Flare className="left-1/4 top-40" />
        <Flare className="right-0 top-3/4" />
        <Sparkle className="w-4 left-1/4 top-10" color="purple" />
        <Sparkle className="w-4 right-20 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/2 bottom-20" color="white" />
      </Section>
      <Section className="gap-x-12">
        <div className="mb-16 lg:mb-0 max-w-lg mx-auto lg:justify-self-end">
          <div className="mb-16">
            <SectionHeader className="mb-4">
              Privacy Policy and
              <br />
              <span className="inline-block text-purpleLight mt-2">Terms</span>
            </SectionHeader>
            <h6 className="mb-7">Last updated on September 12, 2023</h6>
            <Paragraph>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </Paragraph>
          </div>
          <article className="p-5 md:p-6 lg:p-10 border border-purpleLight rounded-lg">
            <Paragraph className="mb-6">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your data when
              you participate in our tech hackathon event. By participating in our
              event, you consent to the practices described in this policy.
            </Paragraph>
            <h3 className="text-purpleLight mb-2">Licensing Policy</h3>
            <h4 className="mb-4">Here are terms of our Standard License</h4>
            <ul className="mb-6">
              <li className="flex items-start gap-x-3.5">
                <span className="mt-2">
                  <Icons.HeroCheckmark className="w-4 h-4" />
                </span>
                The Standard License grants you a non-exclusive right to navigate and
                register for our event
              </li>
              <li className="flex items-start gap-x-3.5">
                <span className="mt-2">
                  <Icons.HeroCheckmark className="w-4 h-4" />
                </span>
                You are licensed to use the item available at any free source sites,
                for your project developement
              </li>
            </ul>
            <Button className="relative left-1/2 -translate-x-1/2">Read more</Button>
          </article>
        </div>
        <div className="h-[107vw] lg:h-[50vw] self-center relative before:inline-block before:w-3/4 before:h-3/4 before:bg-[url(/lock.png)] before:bg-no-repeat before:bg-contain before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-1/4 before:translate-y-1/4">
          <img src={Images.Hero7} alt="" className="w-full h-full object-contain" />
        </div>
        <Flare className="left-1/4 bottom-1/4 " />
        <Sparkle className="w-4 left-1/4 top-10" color="purple" />
        <Sparkle className="w-4 right-20 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/2 bottom-20" color="white" />
      </Section>
      <Section className="gap-y-10 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-12 ">
        <article className="max-w-lg">
          <Link
            to={Routes.HOME}
            className="inline-block text-white text-16 md:text-20 lg:text-36 font-clash font-700 mb-4"
          >
            get<span className="text-purpleLight">Linked</span>
          </Link>
          <Paragraph className="mb-10">
            Getlinked Tech Hackathon is a technology innovation program established
            by a group of organizations with the aim of showcasing young and talented
            individuals in the field of technology
          </Paragraph>
          <div className="flex items-center gap-x-4">
            <Paragraph>Terms of Use</Paragraph>
            <Separator orientation="vertical" className="w-1 h-8" />
            <Paragraph>Privacy Policy</Paragraph>
          </div>
        </article>
        <article className="max-w-lg lg:justify-self-center">
          <h3 className="mb-3 text-purpleLight text-13 md:text-14">Useful Links</h3>
          <ul className="flex flex-col space-y-3 mb-3">
            {navLinksData.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-18 text-white font-400 font-montserrat"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 text-purpleLight text-12 md:text-13">
            <h4>Follow us</h4>
            <ul className="flex items-center space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((icon, index) => {
                const Icon = icon;
                return (
                  <li key={index} className="text-white">
                    <Link to="#">
                      <Icon className="w-4 h-4" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <article>
          <h3 className="mb-3 text-purpleLight text-13 md:text-14">Contact Us</h3>
          <ul className="flex flex-col space-y-3">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <Paragraph>+234 679 81819</Paragraph>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <Paragraph>27,Alara Street Yaba 100012 Lagos State</Paragraph>
            </li>
          </ul>
        </article>
        <Flare className="left-1/4 bottom-1/4 " />
        <Sparkle className="w-4 left-1/4 top-10" color="purple" />
        <Sparkle className="w-4 right-20 top-1/2" color="gray" />
        <Sparkle className="w-6 right-1/2 bottom-20" color="white" />
      </Section>
    </main>
  );
}
