import { FC } from 'react';
import * as Dialog from '@/components/ui/dialog';
import { Paragraph } from './typography/paragraph';
import { Button } from './ui/button';
import { Images } from '@/lib/images';

interface SuccessRegistrationDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SuccessRegistrationDialog: FC<SuccessRegistrationDialogProps> = ({
  open,
  setOpen,
}) => {
  const handleDialogClose = () => setOpen(false);

  return (
    <Dialog.Dialog open={open} onOpenChange={setOpen}>
      <Dialog.DialogContent className="max-w-xs sm:max-w-md md:max-w-xl bg-transparent border-purpleLight px-4 py-10 lg:p-16">
        <section className="flex flex-col items-center text-center">
          <div className="relative lg:w-4/6 mx-auto mb-14 lg:m-0 self-center">
            <img
              src={Images.Congratulation}
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white text-16 md:text-24 lg:text-28 font-600 font-montserrat leading-normal lg:leading-9 mb-4">
            Congratulations!
            <br />
            You have successfully registered.
          </h2>
          <Paragraph className="text-12 md:text-14 mb-4">
            Yes, it was easy and you did it! check your mail box for next step
          </Paragraph>
          <Button className="w-full" onClick={handleDialogClose}>
            Back
          </Button>
        </section>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};

export default SuccessRegistrationDialog;
