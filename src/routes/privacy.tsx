import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Solc AI" },
      { name: "description", content: "How Solc AI collects, uses, and protects your personal data." },
    ],
  }),
  component: Privacy,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <PageShell title="Privacy Policy – Solc AI">
      <p className="text-center text-sm text-muted-foreground -mt-6 mb-10">
        Effective: 10 July 2026 · Last updated: 10 July 2026
      </p>

      <Section title="Google API Services User Data Disclosure">
        <p>
          To comply with the Google API Services User Data Policy, we clearly disclose our data practices regarding Google user data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Data Accessed:</strong> Our application accesses your Google account name (display name), Google email address, and Google user ID via OAuth 2.0.</li>
          <li><strong className="text-foreground">Data Usage:</strong> This data is used solely for authentication, secure account creation, and identifying your user account within our system. We do not use Google user data for marketing, advertising, or any third-party profiling.</li>
          <li><strong className="text-foreground">Data Sharing:</strong> Your Google data is shared only with Google Firebase (Authentication provider) and RevenueCat (Subscription management). No other third parties receive your Google user data.</li>
          <li><strong className="text-foreground">Data Storage & Protection:</strong> Data is stored in Firebase Firestore (encrypted at rest) and transmitted via HTTPS/TLS encryption. Access is restricted to authenticated requests only.</li>
          <li><strong className="text-foreground">Data Retention & Deletion:</strong> Data is retained until account deletion. Users can delete their account in-app (Settings → Delete Account) or by contacting support.solcai@gmail.com. All data is permanently deleted within 30 days of the request.</li>
        </ul>
      </Section>

      <Section title="1. Introduction and scope">
        <p>This Privacy Policy ("Policy") describes how we collect, use, store, share, and protect personal data when you use the Solc AI mobile application, any related web interfaces, and the backend systems that operate the service (together, the "Service"). Solc AI is an AI-powered calorie and nutrition tracker that estimates the nutritional content of food from photos, barcodes, and menus.</p>
        <p>By using the Service, you acknowledge that your personal data will be processed as described in this Policy, unless applicable law requires otherwise.</p>
      </Section>

      <Section title="2. Data controller">
        <p>The data controller is Kristóf Zsolt Németh, a sole trader established in Hungary. As we operate as an independent developer entity, you may contact us directly for any privacy concerns.</p>
        <p>Privacy contact email: <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">support.solcai@gmail.com</a></p>
      </Section>

      <Section title="3. Legal framework">
        <p>If you are in the European Economic Area (including Hungary), the General Data Protection Regulation (EU) 2016/679 ("GDPR") and national laws (e.g. Hungarian Act CXII of 2011 on informational self-determination) apply.</p>
        <p>This Policy explains: what data we process; why and on what legal basis; how long we keep it; who we share it with; your rights; and how to exercise them.</p>
      </Section>

      <Section title="4. Categories of personal data (overview)">
        <p>Depending on how you use the Service, we may process:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Account & identity data:</strong> Email address, unique user ID, display name (username) provided by you or your auth provider.</li>
          <li><strong className="text-foreground">Authentication data:</strong> OAuth identifiers and secure tokens from Google or Apple, or an email/password credential managed by Firebase Authentication.</li>
          <li><strong className="text-foreground">Profile & health-related inputs:</strong> Gender, age, height, current and target weight, activity level, and dietary goals you enter during onboarding or in Settings.</li>
          <li><strong className="text-foreground">Nutrition & activity data:</strong> Logged meals (food names, calories, protein, carbohydrates, fat, portion sizes, meal type, date), water intake, weight logs, favorites, and daily nutrition goals.</li>
          <li><strong className="text-foreground">Image & media data:</strong> Photos of food, menus, or product packaging that you capture or upload for AI analysis.</li>
          <li><strong className="text-foreground">Product lookup data:</strong> Barcode numbers you scan, which may be sent to a public food database to retrieve product nutrition information.</li>
          <li><strong className="text-foreground">Purchase &amp; enquiry data:</strong> your subscription status and plan, the email address used at checkout, and the email address and first name you enter in the questionnaire on our website. Payment card details are handled solely by our Merchant of Record and are never seen or stored by us.</li>
          <li><strong className="text-foreground">Technical & log data:</strong> IP address, device model, OS version, app version, crash logs, and (if enabled) push notification tokens.</li>
        </ul>
      </Section>

      <Section title="5. Purposes and legal bases (GDPR Article 6)">
        <p><strong className="text-foreground">5.1. Performance of Contract (Art. 6(1)(b)).</strong> We process your data to provide the core services you signed up for: analyzing food photos, barcodes, and menus to estimate nutritional values; calculating personalized calorie and macronutrient goals from your profile; logging your meals, water, and weight; synchronizing your data across devices; and displaying your progress and statistics.</p>
        <p><strong className="text-foreground">5.2. Legitimate interests (Art. 6(1)(f)).</strong> We process technical logs to ensure the security of our infrastructure, prevent fraudulent or abusive use of AI resources, and perform basic analytics to improve app performance and reliability.</p>
        <p><strong className="text-foreground">5.3. Consent (Art. 6(1)(a)).</strong> We rely on your explicit consent when you grant the app permission to use your Camera, access your Photo Library, or send you Push Notifications. You can withdraw these permissions at any time in your device settings.</p>
        <p><strong className="text-foreground">5.4. Legal obligation (Art. 6(1)(c)).</strong> We may process data to comply with tax laws regarding subscriptions or to respond to valid legal requests from authorities.</p>
      </Section>

      <Section title="6. Special categories of data">
        <p>Solc AI does not intentionally collect "sensitive" data within the meaning of GDPR Article 9. The profile inputs used to calculate your goals (such as weight, height, and age) are treated as ordinary personal data used solely to provide the tracking functionality. If you choose to enter notes about allergies, medical diets, or health conditions, you provide this data voluntarily, and we process it only to display it back to you within your account. Please avoid entering sensitive information you do not wish to store.</p>
      </Section>

      <Section title="7. Automated decision-making and profiling">
        <p>Our AI features provide estimates and suggestions (for example, recognizing that a photo shows an apple and estimating its calories, or recommending the healthiest dish on a menu). These are technical suggestions that you can review and edit before saving. They do not constitute automated decision-making producing legal or similarly significant effects under GDPR Article 22.</p>
      </Section>

      <Section title="8. Processors and third-party services">
        <p>We use the following specialized providers to operate the app:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Google Firebase</strong> – cloud hosting, Firestore database, and user authentication.</li>
          <li><strong className="text-foreground">Google Gemini AI</strong> – analyzes your food, menu, and packaging images and text to estimate nutritional content. Images are transmitted to Gemini through our own secure backend proxy for the sole purpose of returning the analysis.</li>
          <li><strong className="text-foreground">Railway</strong> – hosts our backend processing logic (including the AI proxy) that connects the app to the Gemini service.</li>
          <li><strong className="text-foreground">Open Food Facts</strong> – a public food-product database queried by barcode number to retrieve packaged-product nutrition information. Only the barcode number is sent; no account or personal data is shared.</li>
          <li><strong className="text-foreground">RevenueCat</strong> – securely manages mobile and web subscriptions.</li>
          <li><strong className="text-foreground">Paddle.com Market Ltd</strong> – Merchant of Record for subscriptions purchased on our website; processes payments, invoicing, applicable taxes and refunds, and receives the email and billing details you enter at checkout.</li>
          <li><strong className="text-foreground">Apple / Google Sign-In</strong> – allows you to sign in securely without creating a separate password.</li>
        </ul>
        <p>We enter into data processing agreements with our processors where required, and they may only process your data on our instructions.</p>
      </Section>

      <Section title="9. International transfers">
        <p>Our processors (such as Google) operate globally. This means your data may be transferred to and stored in the United States or other countries. We ensure these transfers are protected by appropriate safeguards, such as Standard Contractual Clauses (SCCs) approved by the European Commission, to ensure a high level of data protection.</p>
      </Section>

      <Section title="10. Data retention">
        <p>We follow the principle of storage limitation:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Active account data:</strong> kept as long as you have an account.</li>
          <li><strong className="text-foreground">Logged meals, water, weight, and goals:</strong> kept until you delete them or your account is closed.</li>
          <li><strong className="text-foreground">Uploaded images:</strong> processed for analysis and are not retained on our servers longer than necessary to return the result; the analyzed values you save are stored as text in your account, not the original photo (unless a feature explicitly states otherwise).</li>
          <li><strong className="text-foreground">Technical logs:</strong> automatically deleted or anonymized after 30 to 90 days.</li>
          <li><strong className="text-foreground">Account deletion:</strong> upon request, all your data is permanently purged from our active systems within 30 days.</li>
        </ul>
      </Section>

      <Section title="11. Your rights (GDPR)">
        <p>You have the following rights, which you can exercise at any time:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Right of Access:</strong> obtain a copy of your personal data.</li>
          <li><strong className="text-foreground">Right to Rectification:</strong> ask us to correct inaccurate information.</li>
          <li><strong className="text-foreground">Right to Erasure:</strong> request the deletion of your account and data.</li>
          <li><strong className="text-foreground">Right to Restriction:</strong> ask us to stop processing your data temporarily.</li>
          <li><strong className="text-foreground">Right to Data Portability:</strong> receive your logged data in a structured, commonly used format.</li>
          <li><strong className="text-foreground">Right to Object:</strong> object to processing based on legitimate interests.</li>
          <li><strong className="text-foreground">Right to Withdraw Consent:</strong> withdraw any consent (camera, photos, notifications) at any time.</li>
        </ul>
        <p>To exercise these rights, email us at <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">support.solcai@gmail.com</a>. You may also delete your account directly in the app via Settings → Delete Account.</p>
      </Section>

      <Section title="12. Security measures">
        <p>We protect your data using industry-standard measures. All data in transit is encrypted via TLS/SSL. Database storage is encrypted at rest. Access to your data is restricted to authenticated requests, and we strictly limit internal access to production databases to only what is necessary for maintenance and support. API keys and credentials for AI services are held server-side and are never embedded in the app.</p>
      </Section>

      <Section title="13. Children's privacy">
        <p>Solc AI is not intended for children under the age of 16. We do not knowingly collect personal data from children. If we discover that such data has been collected without appropriate consent, we will take immediate steps to delete it.</p>
      </Section>

      <Section title="14. Cookies and local storage">
        <p>On mobile devices, we use local storage to remember your session and preferences (for example, your language choice and "Remember me" sign-in) so you don't have to log in every time. On any web interface, we use only strictly necessary cookies required for the functioning of the site and subscription management.</p>
      </Section>

      <Section title="15. Changes to this policy">
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting a notice in the app or sending an email notification. Your continued use of the app after such changes constitutes acceptance.</p>
      </Section>

      <Section title="16. Contact and complaints">
        <p>If you have questions about this Policy or our data practices, please contact us at <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">support.solcai@gmail.com</a>.</p>
        <p>You also have the right to lodge a complaint with a data protection authority. In Hungary, this is the NAIH (Nemzeti Adatvédelmi és Információszabadság Hatóság, <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.naih.hu</a>).</p>
      </Section>
    </PageShell>
  );
}
