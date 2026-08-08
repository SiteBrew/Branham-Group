import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    body: `When you interact with our website, we may collect the following types of information:\n\n**Contact Form Submissions:** When you submit our contact form, we collect your name, email address, phone number (optional), and the content of your message. This information is used solely to respond to your inquiry.\n\n**Usage Data:** We may automatically collect certain technical information when you visit our site, including your IP address, browser type, device type, pages visited, and the time and date of your visit. This data helps us understand how our website is used and improve the experience.\n\n**Cookies:** We may use cookies and similar tracking technologies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect for the following purposes:\n\n- To respond to inquiries and communicate with you about your project\n- To provide, operate, and maintain our website\n- To understand and analyze how you use our website\n- To improve our website, services, and user experience\n- To comply with legal obligations\n\nWe do not sell, trade, or rent your personal information to third parties. We do not use your contact information for unsolicited marketing communications.`,
  },
  {
    title: '3. Information Sharing & Disclosure',
    body: `Branham Group, Inc. does not sell or share your personal information with third parties for their marketing purposes.\n\nWe may share your information only in the following limited circumstances:\n\n- **Service Providers:** With trusted vendors who assist in operating our website or conducting our business, subject to confidentiality obligations\n- **Legal Compliance:** When required by law or in response to valid legal processes, such as a court order or government request\n- **Business Transfers:** In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction`,
  },
  {
    title: '4. Data Security',
    body: `We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.\n\nIf you have reason to believe that your interaction with us is no longer secure, please contact us immediately at info@branham-group.com.`,
  },
  {
    title: '5. Third-Party Links',
    body: `Our website may contain links to third-party websites, including our social media profiles on LinkedIn, Facebook, and Instagram. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently. Our privacy policy applies only to information collected on branham-group.com.`,
  },
  {
    title: '6. Children\'s Privacy',
    body: `Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.`,
  },
  {
    title: '7. Your Rights & Choices',
    body: `Depending on your location, you may have certain rights regarding your personal information, including:\n\n- The right to access the personal information we hold about you\n- The right to request correction of inaccurate data\n- The right to request deletion of your personal information\n- The right to opt out of certain uses of your data\n\nTo exercise any of these rights, please contact us at info@branham-group.com or call (843) 823-6078. We will respond to your request within a reasonable timeframe.`,
  },
  {
    title: '8. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: '9. Contact Us',
    body: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:\n\nBranham Group, Inc.\n11 eWall Street\nMount Pleasant, SC 29464\n\nPhone: (843) 823-6078\nEmail: info@branham-group.com`,
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Branham Group, Inc.</title>
        <meta name="description" content="Read Branham Group's Privacy Policy. Learn how we collect, use, and protect your personal information when you visit our website or contact us about EPC services in South Carolina and the Southeast." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branham-group.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Branham Group, Inc." />
        <meta property="og:url" content="https://www.branham-group.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-charcoal pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm font-semibold uppercase tracking-wider mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last Updated: May 2026</p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-charcoal-muted leading-relaxed mb-12 text-base border-l-4 border-gold pl-5">
            Branham Group, Inc. ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy describes how we collect, use, and safeguard information when
            you visit our website or contact us through our online forms.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-charcoal mb-4">{s.title}</h2>
                <div className="text-charcoal-muted leading-relaxed text-sm space-y-3">
                  {s.body.split('\n\n').map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n- /g, '<br />• ')
                        .replace(/\n/g, '<br />')
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
