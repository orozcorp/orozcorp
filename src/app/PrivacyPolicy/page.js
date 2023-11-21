const PrivacyPolicy = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h1>Privacy Policy for Orozcorp</h1>
      <p>Last Updated: {today}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Orozcorp.live. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website. We value your privacy and are committed to protecting your
          personal data.
        </p>
      </section>

      <section>
        <h2>2. Information Collection</h2>
        <p>
          We collect information in various ways, including but not limited to:
        </p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number, etc., when you register on our site or
            subscribe to our services.
          </li>
          <li>
            <strong>Browser and Device Information:</strong> Type of browser,
            device, operating system, and IP address.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you use the website
            and services.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            to track the activity on our service and hold certain information.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Use of Information</h2>
        <p>The information we collect may be used for:</p>
        <ul>
          <li>Providing and maintaining our service.</li>
          <li>Notifying you about changes to our service.</li>
          <li>
            Allowing you to participate in interactive features of our service.
          </li>
          <li>Providing customer care and support.</li>
          <li>Monitoring the usage of our service.</li>
          <li>Detecting, preventing, and addressing technical issues.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent Users' personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates, and advertisers for the purposes outlined above.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          We adopt appropriate data collection, storage, processing practices,
          and security measures to protect against unauthorized access,
          alteration, disclosure, or destruction of your personal information,
          username, password, transaction information, and data stored on our
          site.
        </p>
      </section>

      <section>
        <h2>6. Your Data Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete the information we have on you.</li>
          <li>Request the transfer of your personal data.</li>
          <li>
            Withdraw consent at any time where we are relying on consent to
            process your personal data.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Third-Party Websites</h2>
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third-party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <a href="mailto:contact@orozcorp.live">contact@orozcorp.live</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
