import Layout from '@/components/Layout';
import BaseShowcase from '@/components/BaseShowcase'
import HomeContact from '@/components/Homepage/HomeContact'
import ContactForm from '@/components/Contactpage/ContactForm'

export default function ContactPage() {
    return (
        <Layout>
            <BaseShowcase pageTitle="Contact Us" tagLine="We create brand new corporate identities!" />
            <ContactForm />
            <HomeContact />
        </Layout>
    );
}
