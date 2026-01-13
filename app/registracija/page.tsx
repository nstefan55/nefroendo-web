"use client";

import { useEffect } from "react";

const RegistracijaPage = () => {
  useEffect(() => {
    // Load JotForm script
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/YOUR_FORM_ID";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-bg py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Registracija</h1>
          <div className="accent-line mb-8" />

          <p className="text-center text-neutral-secondary mb-8 text-lg">
            Prijavite se na NefroEndo 2026 konferenciju popunjavanjem obrasca
            ispod.
          </p>

          {/* JotForm Embed Container */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <div className="text-center text-neutral-secondary py-12">
              <p className="mb-4">JotForm će biti učitan ovdje</p>
              <p className="text-sm">
                Zamijenite{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  YOUR_FORM_ID
                </code>{" "}
                s pravim JotForm ID-em
              </p>

              {/* Placeholder instructions */}
              <div className="mt-8 text-left max-w-xl mx-auto">
                <h3 className="font-semibold mb-2">
                  Upute za integraciju JotForm-a:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Napravite obrazac na JotForm.com</li>
                  <li>Kopirajte embed kod ili form ID</li>
                  <li>Zamijenite YOUR_FORM_ID u komponenti</li>
                  <li>Ili koristite iframe metodu ispod</li>
                </ol>
              </div>
            </div>

            {/* Alternative: Direct iframe embed (uncomment and add your form URL) */}
            {/* <iframe
              id="JotFormIFrame"
              title="Registracijski obrazac"
              onLoad={() => window.parent.scrollTo(0,0)}
              allowFullScreen
              src="https://form.jotform.com/YOUR_FORM_ID"
              frameBorder="0"
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '539px',
                border: 'none',
              }}
              scrolling="no"
            /> */}
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-secondary text-sm">
              Imate pitanja? Kontaktirajte nas na{" "}
              <a
                href="mailto:info@nefro.hr"
                className="text-accent-blue hover:underline"
              >
                info@nefro.hr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistracijaPage;
