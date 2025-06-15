import { Metadata } from 'next';
// If the file is at d:\My Heart\project\components\CareersForm.tsx, use:
import CareersForm from '../../components/CareersForm';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Explore career opportunities at AceTech Marketing and become part of our innovative team.',
  openGraph: {
    title: 'Careers - Join Our Team',
    description: 'Explore career opportunities at AceTech Marketing and become part of our innovative team.',
  },
};

export default function Careers() {
  return (
    <>
      <CareersForm />
    </>
  );
}
