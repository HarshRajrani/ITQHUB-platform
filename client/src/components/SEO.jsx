import { useEffect } from "react";

/**
 * Custom SEO Component for React 19 compatibility.
 * Manages document title and meta description without external dependencies.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      // Find or create meta description tag
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
      
      // Update OG tags too
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null; // This component doesn't render anything
}
