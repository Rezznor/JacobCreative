import Layout from '@/components/Layout';
import BaseShowcase from '@/components/BaseShowcase'
import HomeContact from '@/components/Homepage/HomeContact'
import ContactForm from '@/components/Contactpage/ContactForm'
import ContactMap from '@/components/Contactpage/ContactMap'

export default function ContactPage() {
    return (
        <Layout>
            <BaseShowcase pageTitle="Contact Us" tagLine="We create brand new corporate identities!" />
            <ContactForm />
            <ContactMap />
            <HomeContact />
        </Layout>
    );
}
