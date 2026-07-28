import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Solc AI" },
      { name: "description", content: "Terms of Use governing the Solc AI mobile application and related services." },
    ],
  }),
  component: Terms,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function Terms() {
  return (
    <PageShell title="Terms of Use – Solc AI">
      <p className="text-center text-sm text-muted-foreground -mt-6 mb-10">
        Effective: 10 July 2026 · Last updated: 10 July 2026
      </p>

      <Section title="Legal Notice">
        <p>Please read these Terms of Use carefully before using the Service. By using Solc AI, you agree to be bound by these provisions and the applicable store terms.</p>
      </Section>

      <Section title="1. General provisions">
        <p><strong className="text-foreground">1.1. Parties and Governing Terms.</strong> These Terms of Use ("Terms") govern your use of the Solc AI mobile application and related services (the "Service").</p>
        <p>Contact: <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">support.solcai@gmail.com</a></p>
        <p>The individual or legal entity using the Service is referred to as "User", "you".</p>
        <p><strong className="text-foreground">1.2. Acceptance.</strong> By downloading, installing, registering, signing in, or using any feature of the Service, you agree to these Terms and, where separately referenced, the Privacy Policy. If you do not agree, do not use the Service.</p>
        <p><strong className="text-foreground">1.3. Language.</strong> The official language of these Terms is English. In case of conflict, the English version prevails, to the extent permitted by law.</p>
      </Section>

      <Section title="2. Description of the Service">
        <p><strong className="text-foreground">2.1. Features (indicative).</strong> The Service may include, depending on the current app version and your subscription or trial status:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recording food and meals (manually or via image-based input, barcode scanning, or menu scanning)</li>
          <li>Estimating calories and macronutrients (protein, carbohydrates, fat) from photos, barcodes, and menus using artificial intelligence</li>
          <li>Tracking water intake, body weight, and progress toward personalized goals</li>
          <li>Calculating personalized daily calorie and macronutrient targets from your profile inputs</li>
          <li>Viewing statistics, history, and a meal log</li>
          <li>Subscription or trial-based features (subject to Apple App Store or Google Play rules)</li>
        </ul>
        <p>The Service's content and features may change (updates, new or discontinued functionality).</p>
        <p><strong className="text-foreground">2.2. Not professional advice.</strong> The Service—including AI-generated nutritional estimates, calorie values, macronutrient breakdowns, and menu or dietary suggestions—is not: medical, dietary, or nutritional advice; official food safety guidance; or financial, tax, or legal advice. AI estimates are approximate and may be inaccurate. Always verify information on packaging (nutrition facts, allergens, expiry dates), and consult a qualified professional before making health, dietary, or medical decisions. Use of the Service and consumption of food is at your own risk.</p>
      </Section>

      <Section title="3. Registration, account, security">
        <p><strong className="text-foreground">3.1. Account creation.</strong> Certain features may require registration or third-party sign-in (e.g. Google, Apple). Information you provide must be accurate where required.</p>
        <p><strong className="text-foreground">3.2. Account security.</strong> You are responsible for passwords and access to your account. The Provider is not liable for unauthorised access resulting from your negligence.</p>
        <p><strong className="text-foreground">3.3. Suspension and deletion.</strong> The Provider may suspend or delete your account if you materially or repeatedly breach these Terms, or if required by law or competent authority. You may request deletion of your account as described in the Privacy Policy and in-app options (Settings → Delete Account), where available.</p>
      </Section>

      <Section title="4. Acceptable use">
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Service lawfully and in accordance with these Terms</li>
          <li>Not misuse the Service for harassment, illegal content, or harm to others</li>
          <li>Not attempt to circumvent security, hack, overload, or disrupt the Service (including abusive automated access)</li>
          <li>Not upload content that infringes third-party rights (e.g. photos of identifiable persons without consent, unauthorised copyrighted material)</li>
        </ul>
        <p>The Provider may remove content and restrict access where misuse is suspected.</p>
      </Section>

      <Section title="5. User content and licence">
        <p><strong className="text-foreground">5.1. Your content.</strong> You retain your rights in content you upload or submit (images, text, meal and tracking data) ("User Content"), subject to the licence below.</p>
        <p><strong className="text-foreground">5.2. Licence to the Provider.</strong> You grant the Provider a non-exclusive, worldwide, revocable licence to host, store, process, display, and technically reproduce User Content as needed to operate, secure, and improve the Service, and for limited aggregated or anonymised analytics that does not identify you, unless separate consent is required by law.</p>
        <p><strong className="text-foreground">5.3. Your representations.</strong> You represent that your User Content does not violate third-party rights and that you have the right to upload it.</p>
      </Section>

      <Section title="6. Artificial intelligence (AI)">
        <p><strong className="text-foreground">6.1. Nature and limitations.</strong> AI features rely on probabilistic models; they may be wrong (misrecognition of a food item, inaccurate calorie or macronutrient estimates, unsuitable suggestions). We do not warrant accuracy or fitness for your individual situation (allergies, health conditions, religious or medical diets, weight-management goals, etc.).</p>
        <p><strong className="text-foreground">6.2. No liability for AI output.</strong> To the extent permitted by mandatory law, the Provider is not liable for direct or indirect consequences of AI-generated content (e.g. illness, allergic reaction, adverse health outcome, or financial loss where relevant), except where liability cannot be excluded under applicable law.</p>
      </Section>

      <Section title="7. Subscriptions, Fees, and Payment">
        <p><strong className="text-foreground">7.1. Platform Terms.</strong> If you purchase a subscription through the Apple App Store or Google Play, the respective store's terms and conditions apply to billing and payments. These Terms do not replace store terms.</p>
        <p><strong className="text-foreground">7.2. Auto-Renewal.</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period. Your account will be charged for renewal within 24 hours prior to the end of the current period.</p>
        <p><strong className="text-foreground">7.3. Management and Cancellation.</strong> You can manage your subscriptions and turn off auto-renewal by going to your Account Settings on the App Store or Google Play after purchase. Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.</p>
        <p><strong className="text-foreground">7.4. Pricing and changes.</strong> Prices are as shown in the app or store. The Provider may change prices for new billing periods in line with store rules and with reasonable notice to Users.</p>
        <p><strong className="text-foreground">7.5. Website purchases and Merchant of Record.</strong> Subscriptions purchased on our website are sold and processed by Paddle.com Market Ltd, which acts as the Merchant of Record for those transactions and is responsible for payment processing, invoicing and applicable taxes.</p>
        <p><strong className="text-foreground">7.6. Refunds and cancellation.</strong> You may cancel at any time; cancellation stops future renewals and you keep access until the end of the paid period. Website purchases are covered by a 30-day money-back guarantee, and consumers in the EU/EEA and UK also have a statutory right of withdrawal. Purchases made through the Apple App Store are refunded by Apple under Apple\u2019s policies. Full details, including how to request a refund, are set out in our <a href="/refund" className="text-gold hover:underline">Refund Policy</a>, which forms part of these Terms.</p>
      </Section>

      <Section title="8. Intellectual property">
        <p><strong className="text-foreground">8.1. Provider materials.</strong> The app, design, branding, documentation, and related materials are the intellectual property of the Provider or its licensors. You may not copy, modify, reverse engineer, or exploit them beyond what mandatory law allows.</p>
        <p><strong className="text-foreground">8.2. Third parties.</strong> The Service may include third-party components, images, and SDKs; their licences and terms apply.</p>
      </Section>

      <Section title="9. Changes, suspension, and termination of the Service">
        <p><strong className="text-foreground">9.1. Changes.</strong> The Provider may modify the Service (add, change, or remove features). Material adverse changes may require notice where mandatory law so requires.</p>
        <p><strong className="text-foreground">9.2. Discontinuation.</strong> The Provider may discontinue the whole or part of the Service. Where feasible, reasonable advance notice will be given, unless immediate termination is required (law, security).</p>
      </Section>

      <Section title="10. Limitation of liability">
        <p><strong className="text-foreground">10.1. "As is".</strong> The Service is provided "as is" and "as available". We do not warrant uninterrupted or error-free operation, except as required by mandatory law.</p>
        <p><strong className="text-foreground">10.2. Indirect damages.</strong> To the maximum extent permitted by mandatory law, the Provider is not liable for indirect, consequential, or lost profit claims, except where liability cannot be excluded.</p>
        <p><strong className="text-foreground">10.3. Cap on liability.</strong> Where liability cannot be excluded and is established, the Provider's aggregate liability may be limited to the amount you paid for the Service in the 12 months before the claim.</p>
      </Section>

      <Section title="11. Mandatory law and consumers">
        <p>If you are a consumer under applicable law, unfair clauses may be void; mandatory consumer protection rules take precedence.</p>
      </Section>

      <Section title="12. Dispute resolution and governing law">
        <p><strong className="text-foreground">12.1. Governing law.</strong> These Terms are governed by the laws of Hungary, without prejudice to mandatory EU consumer protections.</p>
        <p><strong className="text-foreground">12.2. Jurisdiction.</strong> Disputes shall be brought before the courts of Hungary, unless mandatory law provides otherwise.</p>
        <p><strong className="text-foreground">12.3. EU online dispute resolution.</strong> If you are an EU consumer, you may use the European Commission's ODR platform: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
      </Section>

      <Section title="13. Contact">
        <p>Email: <a href="mailto:support.solcai@gmail.com" className="text-gold hover:underline">support.solcai@gmail.com</a></p>
      </Section>

      <Section title="14. Legal – LICENSED APPLICATION END USER LICENSE AGREEMENT">
        <p>Apps made available through the App Store are licensed, not sold, to you. Your license to each App is subject to your prior acceptance of either this Licensed Application End User License Agreement ("Standard EULA"), or a custom end user license agreement between you and the Application Provider ("Custom EULA"), if one is provided. Your license to any Apple App under this Standard EULA or Custom EULA is granted by Apple, and your license to any Third Party App under this Standard EULA or Custom EULA is granted by the Application Provider of that Third Party App. Any App that is subject to this Standard EULA is referred to herein as the "Licensed Application." The Application Provider or Apple as applicable ("Licensor") reserves all rights in and to the Licensed Application not expressly granted to you under this Standard EULA.</p>
        <p><strong className="text-foreground">a. Scope of License:</strong> Licensor grants to you a nontransferable license to use the Licensed Application on any Apple-branded products that you own or control and as permitted by the Usage Rules. The terms of this Standard EULA will govern any content, materials, or services accessible from or purchased within the Licensed Application as well as upgrades provided by Licensor that replace or supplement the original Licensed Application, unless such upgrade is accompanied by a Custom EULA. Except as provided in the Usage Rules, you may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not transfer, redistribute or sublicense the Licensed Application and, if you sell your Apple Device to a third party, you must remove the Licensed Application from the Apple Device before doing so. You may not copy (except as permitted by this license and the Usage Rules), reverse-engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the Licensed Application, any updates, or any part thereof (except as and only to the extent that any foregoing restriction is prohibited by applicable law or to the extent as may be permitted by the licensing terms governing use of any open-sourced components included with the Licensed Application).</p>
        <p><strong className="text-foreground">b. Consent to Use of Data:</strong> You agree that Licensor may collect and use technical data and related information—including but not limited to technical information about your device, system and application software, and peripherals—that is gathered periodically to facilitate the provision of software updates, product support, and other services to you (if any) related to the Licensed Application. Licensor may use this information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you.</p>
        <p><strong className="text-foreground">c. Termination:</strong> This Standard EULA is effective until terminated by you or Licensor. Your rights under this Standard EULA will terminate automatically if you fail to comply with any of its terms.</p>
        <p><strong className="text-foreground">d. External Services:</strong> The Licensed Application may enable access to Licensor's and/or third-party services and websites (collectively and individually, "External Services"). You agree to use the External Services at your sole risk. Licensor is not responsible for examining or evaluating the content or accuracy of any third-party External Services, and shall not be liable for any such third-party External Services. Data displayed by any Licensed Application or External Service, including but not limited to financial, medical and location information, is for general informational purposes only and is not guaranteed by Licensor or its agents. You will not use the External Services in any manner that is inconsistent with the terms of this Standard EULA or that infringes the intellectual property rights of Licensor or any third party. You agree not to use the External Services to harass, abuse, stalk, threaten or defame any person or entity, and that Licensor is not responsible for any such use. External Services may not be available in all languages or in your Home Country, and may not be appropriate or available for use in any particular location. To the extent you choose to use such External Services, you are solely responsible for compliance with any applicable laws. Licensor reserves the right to change, suspend, remove, disable or impose access restrictions or limits on any External Services at any time without notice or liability to you.</p>
        <p><strong className="text-foreground">e. NO WARRANTY:</strong> YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED APPLICATION IS AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION AND ANY SERVICES PERFORMED OR PROVIDED BY THE LICENSED APPLICATION ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED APPLICATION AND ANY SERVICES, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND OF NONINFRINGEMENT OF THIRD-PARTY RIGHTS. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY TO YOU.</p>
        <p><strong className="text-foreground">f. Limitation of Liability:</strong> TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE LICENSED APPLICATION, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Licensor's total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.</p>
        <p><strong className="text-foreground">g. Export Control:</strong> You may not use or otherwise export or re-export the Licensed Application except as authorized by United States law and the laws of the jurisdiction in which the Licensed Application was obtained. In particular, but without limitation, the Licensed Application may not be exported or re-exported (a) into any U.S.-embargoed countries or (b) to anyone on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Department of Commerce Denied Persons List or Entity List. By using the Licensed Application, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use these products for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons.</p>
        <p><strong className="text-foreground">h. US Government End Users:</strong> The Licensed Application and related documentation are "Commercial Items", as that term is defined at 48 C.F.R. §2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation", as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States.</p>
        <p><strong className="text-foreground">i. Governing Law:</strong> Except to the extent expressly provided in the following paragraph, this Agreement and the relationship between you and Apple shall be governed by the laws of the State of California, excluding its conflicts of law provisions. You and Apple agree to submit to the personal and exclusive jurisdiction of the courts located within the county of Santa Clara, California, to resolve any dispute or claim arising from this Agreement. If (a) you are not a U.S. citizen; (b) you do not reside in the U.S.; (c) you are not accessing the Service from the U.S.; and (d) you are a citizen of one of the countries identified below, you hereby agree that any dispute or claim arising from this Agreement shall be governed by the applicable law set forth below, without regard to any conflict of law provisions, and you hereby irrevocably submit to the non-exclusive jurisdiction of the courts located in the state, province or country identified below whose law governs: If you are a citizen of any European Union country or Switzerland, Norway or Iceland, the governing law and forum shall be the laws and courts of your usual place of residence. Specifically excluded from application to this Agreement is that law known as the United Nations Convention on the International Sale of Goods.</p>
        <p>For more details, visit the official Apple Standard EULA page: <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a></p>
      </Section>

      <Section title="15. Final provisions">
        <p>If any provision is invalid in part, the remainder remains in effect. Failure to enforce a right does not waive that right.</p>
      </Section>
    </PageShell>
  );
}
