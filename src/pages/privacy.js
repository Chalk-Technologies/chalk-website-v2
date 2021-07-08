import React from "react";
import styled from "styled-components";
import { Trans } from "@lingui/macro";

import Layout from "../components/Layout";
import Seo from "../components/SEO";

const Privacy = () => {
  return (
    <>
      <Seo title="Terms and conditions" />
      <Layout>
        <section className="min-h-screen pt-36">
          <h1 className="pb-12 pl-8 text-5xl text-white uppercase pt-36 font-heading">
            <Trans>Terms and conditions</Trans>
          </h1>
          <div className="relative">
            <Image className="bg-center bg-cover bg-termsandconditions py-96" />
            <div className="absolute top-0 left-0 z-10 w-1 h-full mt-24 ml-24 bg-chalk-orange" />
          </div>
        </section>
        <section className="bg-chalk-gray">
          <TermsAndConditionsContainer className="container px-8 py-16 mx-auto font-body">
            <h1 class="font-heading flex justify-center text-3xl my-8">
              <Trans>Terms and Conditions</Trans>
            </h1>
            <p>
              <Trans>
                These terms and conditions outline the rules and regulations for
                the use of Chalk Technologies Ltd.'s Website, located at
              </Trans>
              <a
                style={{ marginLeft: ".2rem" }}
                href="https://beta.chalk-technologies.com"
                target="_blank"
              >
                https://beta.chalk-technologies.com
              </a>
              .
            </p>
            <p>
              <Trans>
                By accessing this website we assume you accept these terms and
                conditions. Do not continue to use BETA if you do not agree to
                take all of the terms and conditions stated on this page.
              </Trans>
            </p>
            <p>
              <Trans>
                The following terminology applies to these Terms and Conditions,
                Privacy Statement and Disclaimer Notice and all Agreements:
                "Client", "You" and "Your" refers to you, the person log on this
                website and compliant to the Company’s terms and conditions.
              </Trans>
            </p>
            <p>
              <Trans>
                "The Company", "Ourselves", "We", "Our" and "Us", refers to our
                Company.
              </Trans>
            </p>
            <p>
              <Trans>
                "Party", "Parties", or "Us",refers to both the Client and
                ourselves.
              </Trans>
            </p>
            <p>
              <Trans>
                All terms refer to the offer, acceptance and consideration of
                payment necessary to undertake the process of our assistance to
                the Client in the most appropriate manner for the express
                purpose of meeting the Client’s needs in respect of provision of
                the Company’s stated services, in accordance with and subject
                to, prevailing law of Netherlands.
              </Trans>
            </p>
            <p>
              <Trans>
                Any use of the above terminology or other words in the singular,
                plural, capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </Trans>
            </p>
            <h2 class="text-2xl font-heading mt-12">
              <Trans>Cookies</Trans>
            </h2>
            <p>
              <Trans>We employ the use of cookies.</Trans>
            </p>
            <p>
              <Trans>
                By accessing BETA, you agreed to use cookies in agreement with
                the Chalk Technologies Ltd.'s Privacy Policy.
              </Trans>
            </p>
            <p>
              <Trans>
                Most interactive websites use cookies to let us retrieve the
                user’s details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier
                for people visiting our website. Some of our
                affiliate/advertising partners may also use cookie{" "}
              </Trans>
            </p>
            <h2 class="text-2xl font-heading mt-12">License</h2>
            <p>
              <Trans>
                Unless otherwise stated, Chalk Technologies Ltd. and/or its
                licensors own the intellectual property rights for all material
                on BETA.
              </Trans>
            </p>
            <p>
              <Trans>All intellectual property rights are reserved.</Trans>
            </p>
            <p>
              <Trans>
                You may access this from BETA for your own personal use
                subjected to restrictions set in these terms and conditions.
              </Trans>
            </p>
            <p>
              <Trans>
                You must not: Republish material from BETA Sell, rent or
                sub-license material from BETA Reproduce, duplicate or copy
                material from BETA Redistribute content from BETA This Agreement
                shall begin on the date hereof.
              </Trans>
            </p>
            <p>
              <Trans>
                Our Terms and Conditions were created with the help of the Terms
                And Conditions Generator and the Privacy Policy Generator.
              </Trans>
            </p>
            <p>
              <Trans>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website.
              </Trans>
            </p>
            <p>
              <Trans>
                Chalk Technologies Ltd. does not filter, edit, publish or review
                Comments prior to their presence on the website.
              </Trans>
            </p>
            <p>
              <Trans>
                Comments do not reflect the views and opinions of Chalk
                Technologies Ltd. ,its agents and/or affiliates.
              </Trans>
            </p>
            <p>
              <Trans>
                Comments reflect the views and opinions of the person who post
                their views and opinions.
              </Trans>
            </p>
            <p>
              <Trans>
                To the extent permitted by applicable laws, Chalk Technologies
                Ltd. shall not be liable for the Comments or for any liability,
                damages or expenses caused and/or suffered as a result of any
                use of and/or posting of and/or appearance of the Comments on
                this website.
              </Trans>
            </p>
            <p>
              <Trans>
                Chalk Technologies Ltd. reserves the right to monitor all
                Comments and to remove any Comments which can be considered
                inappropriate, offensive or causes breach of these Terms and
                Conditions.
              </Trans>
            </p>
            <p>
              <Trans>
                You warrant and represent that: You are entitled to post the
                Comments on our website and have all necessary licenses and
                consents to do so; The Comments do not invade any intellectual
                property right, including without limitation copyright, patent
                or trademark of any third party; The Comments do not contain any
                defamatory, libelous, offensive, indecent or otherwise unlawful
                material which is an invasion of privacy The Comments will not
                be used to solicit or promote business or custom or present
                commercial activities or unlawful activity.
              </Trans>
            </p>
            <p>
              <Trans>
                You hereby grant Chalk Technologies Ltd. a non-exclusive license
                to use, reproduce, edit and authorize others to use, reproduce
                and edit any of your Comments in any and all forms, formats or
                media.
              </Trans>
            </p>
            <p>
              <Trans>
                Hyperlinking to our Content The following organizations may link
                to our Website without prior written approval: Government
                agencies; Search engines; News organizations; Online directory
                distributors may link to our Website in the same manner as they
                hyperlink to the Websites of other listed businesses; and System
                wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </Trans>
            </p>
            <p>
              <Trans>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                We may consider and approve other link requests from the
                following types of organizations: commonly-known consumer and/or
                business information sources; dot. com community sites;
                associations or other groups representing charities; online
                directory distributors; internet portals; accounting, law and
                consulting firms; and educational institutions and trade
                associations.
              </Trans>
            </p>
            <p>
              <Trans>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Chalk Technologies Ltd. ; and (d) the link is in the context
                of general resource information.
              </Trans>
            </p>
            <p>
              <Trans>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Chalk Technologies Ltd. . Please include
                your name, your organization name, contact information as well
                as the URL of your site, a list of any URLs from which you
                intend to link to our Website, and a list of the URLs on our
                site to which you would like to link.
              </Trans>
            </p>
            <p>
              <Trans>Wait 2-3 weeks for a response.</Trans>
            </p>
            <p>
              <Trans>
                Approved organizations may hyperlink to our Website as follows:
                By use of our corporate name; or By use of the uniform resource
                locator being linked to; or By use of any other description of
                our Website being linked to that makes sense within the context
                and format of content on the linking party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                No use of Chalk Technologies Ltd. 's logo or other artwork will
                be allowed for linking absent a trademark license agreement.
              </Trans>
            </p>
            <p>
              <Trans>
                iFrames Without prior approval and written permission, you may
                not create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </Trans>
            </p>
            <h2 class="pt-12 text-xl font-heading">
              <Trans>Content Liability</Trans>
            </h2>
            <p>
              <Trans>
                We shall not be hold responsible for any content that appears on
                your Website.
              </Trans>
            </p>
            <p>
              <Trans>
                You agree to protect and defend us against all claims that is
                rising on your Website.
              </Trans>
            </p>
            <p>
              <Trans>
                No link(s) should appear on any Website that may be interpreted
                as libelous, obscene or criminal, or which infringes, otherwise
                violates, or advocates the infringement or other violation of,
                any third party rights.
              </Trans>
            </p>
            <p>
              <Trans>
                You must not: Republish material from BETA Sell, rent or
                sub-license material from BETA Reproduce, duplicate or copy
                material from BETA Redistribute content from BETA This Agreement
                shall begin on the date hereof.
              </Trans>
            </p>
            <p>
              <Trans>
                Our Terms and Conditions were created with the help of the Terms
                And Conditions Generator and the Privacy Policy Generator.
              </Trans>
            </p>
            <p>
              <Trans>
                Parts of this website offer an opportunity for users to post and
                exchange opinions and information in certain areas of the
                website.
              </Trans>
            </p>
            <p>
              <Trans>
                Chalk Technologies Ltd. does not filter, edit, publish or review
                Comments prior to their presence on the website.
              </Trans>
            </p>
            <p>
              <Trans>
                Comments do not reflect the views and opinions of Chalk
                Technologies Ltd. ,its agents and/or affiliates.
              </Trans>
            </p>
            <p>
              <Trans>
                Comments reflect the views and opinions of the person who post
                their views and opinions.
              </Trans>
            </p>
            <p>
              <Trans>
                To the extent permitted by applicable laws, Chalk Technologies
                Ltd. shall not be liable for the Comments or for any liability,
                damages or expenses caused and/or suffered as a result of any
                use of and/or posting of and/or appearance of the Comments on
                this website.
              </Trans>
            </p>
            <p>
              <Trans>
                Chalk Technologies Ltd. reserves the right to monitor all
                Comments and to remove any Comments which can be considered
                inappropriate, offensive or causes breach of these Terms and
                Conditions.
              </Trans>
            </p>
            <p>
              <Trans>
                You warrant and represent that: You are entitled to post the
                Comments on our website and have all necessary licenses and
                consents to do so; The Comments do not invade any intellectual
                property right, including without limitation copyright, patent
                or trademark of any third party; The Comments do not contain any
                defamatory, libelous, offensive, indecent or otherwise unlawful
                material which is an invasion of privacy The Comments will not
                be used to solicit or promote business or custom or present
                commercial activities or unlawful activity.
              </Trans>
            </p>
            <p>
              <Trans>
                You hereby grant Chalk Technologies Ltd. a non-exclusive license
                to use, reproduce, edit and authorize others to use, reproduce
                and edit any of your Comments in any and all forms, formats or
                media.
              </Trans>
            </p>
            <p>
              <Trans>
                Hyperlinking to our Content The following organizations may link
                to our Website without prior written approval: Government
                agencies; Search engines; News organizations; Online directory
                distributors may link to our Website in the same manner as they
                hyperlink to the Websites of other listed businesses; and System
                wide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising
                groups which may not hyperlink to our Web site.
              </Trans>
            </p>
            <p>
              <Trans>
                These organizations may link to our home page, to publications
                or to other Website information so long as the link: (a) is not
                in any way deceptive; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products
                and/or services; and (c) fits within the context of the linking
                party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                We may consider and approve other link requests from the
                following types of organizations: commonly-known consumer and/or
                business information sources; dot.
              </Trans>
            </p>
            <p>
              <Trans>
                com community sites; associations or other groups representing
                charities; online directory distributors; internet portals;
                accounting, law and consulting firms; and educational
                institutions and trade associations.
              </Trans>
            </p>
            <p>
              <Trans>
                We will approve link requests from these organizations if we
                decide that: (a) the link would not make us look unfavorably to
                ourselves or to our accredited businesses; (b) the organization
                does not have any negative records with us; (c) the benefit to
                us from the visibility of the hyperlink compensates the absence
                of Chalk Technologies Ltd. ; and (d) the link is in the context
                of general resource information.
              </Trans>
            </p>
            <p>
              <Trans>
                These organizations may link to our home page so long as the
                link: (a) is not in any way deceptive; (b) does not falsely
                imply sponsorship, endorsement or approval of the linking party
                and its products or services; and (c) fits within the context of
                the linking party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                If you are one of the organizations listed in paragraph 2 above
                and are interested in linking to our website, you must inform us
                by sending an e-mail to Chalk Technologies Ltd. .
              </Trans>
            </p>
            <p>
              <Trans>
                Please include your name, your organization name, contact
                information as well as the URL of your site, a list of any URLs
                from which you intend to link to our Website, and a list of the
                URLs on our site to which you would like to link.
              </Trans>
            </p>
            <p>
              <Trans>Wait 2-3 weeks for a response.</Trans>
            </p>
            <p>
              <Trans>
                Approved organizations may hyperlink to our Website as follows:
                By use of our corporate name; or By use of the uniform resource
                locator being linked to; or By use of any other description of
                our Website being linked to that makes sense within the context
                and format of content on the linking party’s site.
              </Trans>
            </p>
            <p>
              <Trans>
                No use of Chalk Technologies Ltd. 's logo or other artwork will
                be allowed for linking absent a trademark license agreement.
              </Trans>
            </p>
            <p>
              <Trans>
                iFrames Without prior approval and written permission, you may
                not create frames around our Webpages that alter in any way the
                visual presentation or appearance of our Website.
              </Trans>
            </p>
            <p>
              <Trans>
                Content Liability We shall not be hold responsible for any
                content that appears on your Website.
              </Trans>
            </p>
            <p>
              <Trans>
                You agree to protect and defend us against all claims that is
                rising on your Website.
              </Trans>
            </p>
            <p>
              <Trans>
                No link(s) should appear on any Website that may be interpreted
                as libelous, obscene or criminal, or which infringes, otherwise
                violates, or advocates the infringement or other violation of,
                any third party rights.
              </Trans>
            </p>
            <h2 class="pt-12 text-xl font-heading">
              <Trans>Your Privacy</Trans>
            </h2>
            <p>
              <Trans>
                Please read Privacy Policy Reservation of Rights We reserve the
                right to request that you remove all links or any particular
                link to our Website.
              </Trans>
            </p>
            <p>
              <Trans>
                You approve to immediately remove all links to our Website upon
                request.
              </Trans>
            </p>
            <p>
              <Trans>
                We also reserve the right to amen these terms and conditions and
                it’s linking policy at any time.
              </Trans>
            </p>
            <p>
              <Trans>
                By continuously linking to our Website, you agree to be bound to
                and follow these linking terms and conditions.
              </Trans>
            </p>
            <p>
              <Trans>
                Removal of links from our website If you find any link on our
                Website that is offensive for any reason, you are free to
                contact and inform us any moment.
              </Trans>
            </p>
            <p>
              <Trans>
                We will consider requests to remove links but we are not
                obligated to or so or to respond to you directly.
              </Trans>
            </p>
            <p>
              <Trans>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.
              </Trans>
            </p>
            <p>
              <Trans>
                Disclaimer To the maximum extent permitted by applicable law, we
                exclude all representations, warranties and conditions relating
                to our website and the use of this website.
              </Trans>
            </p>
            <p>
              <Trans>
                Nothing in this disclaimer will: limit or exclude our or your
                liability for death or personal injury; limit or exclude our or
                your liability for fraud or fraudulent misrepresentation; limit
                any of our or your liabilities in any way that is not permitted
                under applicable law; or exclude any of our or your liabilities
                that may not be excluded under applicable law.
              </Trans>
            </p>
            <p>
              <Trans>
                The limitations and prohibitions of liability set in this
                Section and elsewhere in this disclaimer: (a) are subject to the
                preceding paragraph; and (b) govern all liabilities arising
                under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </Trans>
            </p>
            <p>
              <Trans>
                As long as the website and the information and services on the
                website are provided free of charge, we will not be liable for
                any loss or damage of any nature.
              </Trans>
            </p>
          </TermsAndConditionsContainer>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;

const Image = styled.div`
  clip-path: polygon(0 50%, 100% 0%, 100% 100%, 0 100%);
`;

const TermsAndConditionsContainer = styled.div`
  p {
    margin: 1rem 0;
  }
`;
