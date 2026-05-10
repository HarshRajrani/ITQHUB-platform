import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundDepth from "../components/BackgroundDepth";
import EnquiryModal from "../components/EnquiryModal";
import ChatAssistant from "../components/ChatAssistant";

export default function MainLayout() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      {/* Global Background */}
      <BackgroundDepth />

      {/* Global Navbar */}
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />

      {/* Page Content */}
      <main>
        <Outlet context={{ openEnquiry: () => setEnquiryOpen(true) }} />
      </main>

      {/* Global Footer */}
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />

      {/* Global Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />

      {/* Global Chat Assistant */}
      <ChatAssistant />
    </>
  );
}
