import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function PrivacyPolicy() {
  return (
    <div className="flex-1 w-full bg-white text-gray-800">
      
      {/* Header section */}
      <div className="bg-[#1B8A6B]/5 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#1B8A6B] hover:text-[#156d54] font-medium mb-8 group transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#1B8A6B] text-gray-700 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Puzzle Ayat Tafsir ("we", "our", or "us"). We are committed to protecting your privacy and ensuring a safe educational environment for all users, especially children.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information Collection</h2>
            <p className="leading-relaxed mb-4">
              We collect minimal information to ensure the proper functioning of our application:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>App Usage Data:</strong> We may collect anonymous diagnostic data (such as crash logs) to improve app performance.</li>
              <li><strong>Local Storage:</strong> Your progress (e.g., completed puzzles, unlocked levels) is saved locally on your device. We do not transmit this data to our servers.</li>
              <li><strong>No Personal Information:</strong> We do not ask for, collect, or store any personally identifiable information (PII) such as names, addresses, phone numbers, or email addresses within the app.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How Data is Used</h2>
            <p className="leading-relaxed">
              Any anonymous data collected is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To maintain and improve the App's functionality.</li>
              <li>To fix bugs and crash issues.</li>
              <li>To understand general usage patterns without identifying individual users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-party Services</h2>
            <p className="leading-relaxed">
              The App may use third-party services that collect information used to identify you.
              Link to privacy policy of third-party service providers used by the app:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1B8A6B] hover:underline">Google Play Services</a></li>
              <li><a href="https://firebase.google.com/policies/analytics" target="_blank" rel="noopener noreferrer" className="text-[#1B8A6B] hover:underline">Google Analytics for Firebase (for crash reporting only)</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Children's Privacy</h2>
            <p className="leading-relaxed">
              We take children's privacy very seriously. Our App is designed for children and families. 
              We comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13. 
              If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. 
              We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-medium text-gray-900">Email:</p>
              <a href="mailto:hakedtech.contact@gmail.com" className="text-[#1B8A6B] hover:underline">hakedtech.contact@gmail.com</a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
