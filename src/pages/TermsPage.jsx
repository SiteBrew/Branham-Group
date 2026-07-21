import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the Branham Group, Inc. website located at branhamgroup.com (the "Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this Site.\n\nBranham Group, Inc. reserves the right to modify these terms at any time. Your continued use of the Site after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: '2. Use of the Site',
    body: `You may use this Site for lawful purposes only. You agree not to:\n\n- Use the Site in any way that violates applicable local, state, national, or international laws or regulations\n- Attempt to gain unauthorized access to any part of the Site or any connected systems\n- Transmit any unsolicited or unauthorized advertising or promotional material\n- Impersonate any person or entity or misrepresent your affiliation with any person or entity\n- Use automated tools to scrape, crawl, or otherwise extract data from the Site without our written permission\n- Interfere with or disrupt the integrity or performance of the Site`,
  },
  {
    title: '3. Intellectual Property',
    body: `All content on this Site — including text, graphics, logos, photographs, images, and software — is the property of Branham Group, Inc. or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws.\n\nYou may view, download, and print pages from the Site for your personal, non-commercial use only, provided you do not modify the content and you retain all copyright and proprietary notices. No content from this Site may be reproduced, republished, uploaded, transmitted, or distributed without the express written permission of Branham Group, Inc.`,
  },
  {
    title: '4. Disclaimer of Warranties',
    body: `The information on this Site is provided on an "as is" basis without warranties of any kind, either express or implied. Branham Group, Inc. makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this Site.\n\nTo the fullest extent permitted by law, Branham Group, Inc. disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: '5. Limitation of Liability',
    body: `In no event shall Branham Group, Inc., its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of — or inability to use — this Site or its content.\n\nThis limitation applies regardless of whether the damages are based on warranty, contract, tort, or any other legal theory, and even if Branham Group, Inc. has been advised of the possibility of such damages.`,
  },
  {
    title: '6. Third-Party Links',
    body: `This Site may contain links to third-party websites for your convenience and reference. These links do not constitute an endorsement by Branham Group, Inc. of the linked site or its content. We have no control over third-party sites and accept no responsibility for their content, privacy practices, or availability.\n\nYou access third-party sites at your own risk.`,
  },
  {
    title: '7. Contact Forms & Communications',
    body: `Information submitted through our contact form is used solely to respond to your inquiry. Submitting a contact form does not create an attorney-client, contractor-client, or any other professional relationship between you and Branham Group, Inc.\n\nSubmission of a project inquiry does not constitute a binding agreement, proposal, or commitment of any kind on the part of Branham Group, Inc.`,
  },
  {
    title: '8. Governing Law',
    body: `These Terms of Use are governed by and construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Charleston County, South Carolina.`,
  },
  {
    title: '9. Contact Us',
    body: `If you have questions about these Terms of Use, please contact us:\n\nBranham Group, Inc.\n11 eWall Street\nMount Pleasant, SC 29464\n\nPhone: (843) 823-6078\nEmail: info@branhamgroup.com`,
  },
];

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Use | Branham Group, Inc.</title>
        <meta name="description" content="Read Branham Group's Terms of Use governing access to our website. Branham Group is a full-service EPC contractor based in Mount Pleasant, South Carolina." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branhamgroup.com/terms" />
        <meta property="og:title" content="Terms of Use | Branham Group, Inc." />
        <meta property="og:url" content="https://www.branhamgroup.com/terms" />
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Use</h1>
          <p className="text-gray-400 text-sm">Last Updated: May 2026</p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-charcoal-muted leading-relaxed mb-12 text-base border-l-4 border-gold pl-5">
            Please read these Terms of Use carefully before using the Branham Group, Inc. website.
            These terms govern your access to and use of our Site and constitute a legally binding
            agreement between you and Branham Group, Inc.
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
