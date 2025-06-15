import { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactSection from '@/components/ContactSection'
import ContactInfoSection from '@/components/ContactInfoSection'

export const metadata: Metadata = {
  title: 'Contact Us - Let\'s Transform Your Business Together',
  description: 'Get in touch with ManageEx to discuss your business management needs. Professional consulting and strategic solutions await.',
  openGraph: {
    title: 'Contact ManageEx - Let\'s Transform Your Business',
    description: 'Ready to optimize your business operations? Contact us today to get started.',
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ContactInfoSection />
    </>
  )
}