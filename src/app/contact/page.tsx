import SocialLinks from "@/components/SocialLinks";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Contact</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out if you&apos;d like to collaborate, discuss research, or have any questions.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                your.email@example.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Social Media</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

