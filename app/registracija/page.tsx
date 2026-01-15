"use client";

import { useState, FormEvent } from "react";

import Image from "next/image";
import { Link } from "lucide-react";

const JOTFORM_CONFIG = {
  formId: "YOUR_FORM_ID", // Replace with your JotForm Form ID
  // Field IDs - Find these in JotForm form builder (click field → Advanced → Field ID)
  fields: {
    firstName: "q3_firstName",
    lastName: "q4_lastName",
    street: "q9_street",
    city: "q10_city",
    zipCode: "q11_zipCode",
    email: "q5_email",
    phone: "q6_phone",
    organization: "q7_organization",
    orgAddress: "q12_orgAddress",
    vatOib: "q13_vatOib",
    country: "q14_country",
    jobTitle: "q8_jobTitle",
    registrationType: "q15_registrationType",
  },
};
// =============================================================================

interface FormData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zipCode: string;
  email: string;
  phone: string;
  organization: string;
  orgAddress: string;
  vatOib: string;
  country: string;
  jobTitle: string;
  registrationTypes: string[];
}

const REGISTRATION_OPTIONS = [
  {
    id: "specijalist",
    label: "SPECIJALIST",
    price: 300,
    note: "PDV nije uračunat u cijenu (PDV 25%)",
  },
  {
    id: "specijalizant",
    label: "SPECIJALIZANT",
    price: 200,
    note: "PDV nije uračunat u cijenu (PDV 25%)",
  },
  {
    id: "medicinske_sestre",
    label: "MEDICINSKE SESTRE I TEHNIČARI",
    price: 150,
    note: "PDV nije uračunat u cijenu (PDV 25%)",
  },
  {
    id: "student",
    label: "STUDENT",
    price: 0,
    note: null,
  },
  {
    id: "izlagac",
    label: "IZLAGAČ",
    price: 300,
    note: "PDV nije uračunat u cijenu (PDV 25%)",
  },
  {
    id: "virtualna",
    label: "VIRTUALNA KOTIZACIJA",
    price: 0,
    note: null,
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

const RegistracijaPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    email: "",
    phone: "",
    organization: "",
    orgAddress: "",
    vatOib: "",
    country: "",
    jobTitle: "",
    registrationTypes: [],
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "registrationTypes") {
      setFormData((prev) => ({
        ...prev,
        registrationTypes: checked
          ? [...prev.registrationTypes, value]
          : prev.registrationTypes.filter((id) => id !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Build FormData for JotForm API
      const jotFormData = new FormData();
      jotFormData.append(JOTFORM_CONFIG.fields.firstName, formData.firstName);
      jotFormData.append(JOTFORM_CONFIG.fields.lastName, formData.lastName);
      jotFormData.append(JOTFORM_CONFIG.fields.street, formData.street);
      jotFormData.append(JOTFORM_CONFIG.fields.city, formData.city);
      jotFormData.append(JOTFORM_CONFIG.fields.zipCode, formData.zipCode);
      jotFormData.append(JOTFORM_CONFIG.fields.email, formData.email);
      jotFormData.append(JOTFORM_CONFIG.fields.phone, formData.phone);
      jotFormData.append(
        JOTFORM_CONFIG.fields.organization,
        formData.organization
      );
      jotFormData.append(JOTFORM_CONFIG.fields.orgAddress, formData.orgAddress);
      jotFormData.append(JOTFORM_CONFIG.fields.vatOib, formData.vatOib);
      jotFormData.append(JOTFORM_CONFIG.fields.country, formData.country);
      jotFormData.append(JOTFORM_CONFIG.fields.jobTitle, formData.jobTitle);
      jotFormData.append(
        JOTFORM_CONFIG.fields.registrationType,
        formData.registrationTypes.join(", ")
      );

      const response = await fetch(
        `https://submit.jotform.com/submit/${JOTFORM_CONFIG.formId}/`,
        {
          method: "POST",
          body: jotFormData,
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          street: "",
          city: "",
          zipCode: "",
          email: "",
          phone: "",
          organization: "",
          orgAddress: "",
          vatOib: "",
          country: "",
          jobTitle: "",
          registrationTypes: [],
        });
      } else {
        throw new Error("Greška prilikom slanja obrasca");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Došlo je do greške. Molimo pokušajte ponovno."
      );
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="min-h-screen bg-neutral-bg py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-card p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Hvala na prijavi!</h2>
              <p className="text-neutral-secondary mb-8">
                Vaša registracija je uspješno zaprimljena. Uskoro ćete primiti
                potvrdu na email.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn btn-primary"
              >
                Nova registracija
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-bg py-6 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
            Registracija
          </h1>
          <div className="accent-line mb-6 sm:mb-8" />

          <p className="text-center text-neutral-secondary mb-8 text-lg">
            Prijavite se na NefroEndo 2026 konferenciju popunjavanjem obrasca
            ispod.
          </p>

          <div className="bg-white rounded-xl shadow-card p-4 sm:p-6 lg:p-8">
            <Image
              src="/images/nefro-hero-image-2.png"
              alt="Nefro Hero Image"
              width={1000}
              height={1000}
              className="pb-6 sm:pb-10"
            />
            <div className="text-lg sm:text-xl font-bold pb-6 sm:pb-8 uppercase">
              Opće Informacije
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Titula / Pozicija
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="Dr. med., spec. nefrolog"
                />
              </div>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    Ime <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="Vaše ime"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    Prezime <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="Vaše prezime"
                  />
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Ulica i kućni broj <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="Ulica i broj"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    Grad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="Zagreb"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    Poštanski broj <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="10000"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="email.adresa@gmail.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="+385 91 234 5678"
                />
              </div>

              <hr className="mt-8 sm:mt-12 mb-6 sm:mb-10 text-gray-200" />

              <div className="text-lg sm:text-xl font-bold pb-2 uppercase">
                Ispunite informacije ustanova/organizacija koji snose troškove
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Ustanova / Organizacija{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="Naziv tvrtke/organizacije"
                />
              </div>

              {/* Organization Address */}
              <div>
                <label
                  htmlFor="orgAddress"
                  className="block text-sm font-medium text-neutral-text mb-2"
                >
                  Adresa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orgAddress"
                  name="orgAddress"
                  value={formData.orgAddress}
                  onChange={handleChange}
                  required
                  suppressHydrationWarning
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                  placeholder="Ulica, broj, grad, poštanski broj"
                />
              </div>

              {/* VAT/OIB and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="vatOib"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    VAT Broj / OIB <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="vatOib"
                    name="vatOib"
                    value={formData.vatOib}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="12345678901"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-neutral-text mb-2"
                  >
                    Država <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all outline-none"
                    placeholder="Hrvatska"
                  />
                </div>
              </div>

              <hr className="mt-8 sm:mt-12 mb-6 sm:mb-10 text-gray-200" />

              <div className="text-lg sm:text-xl font-bold pb-2 uppercase">
                Tip Registracije <span className="text-red-500">*</span>
              </div>

              {/* Registration Type */}
              <div className="space-y-2 sm:space-y-3">
                {REGISTRATION_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start sm:items-center justify-between p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.registrationTypes.includes(option.id)
                        ? "border-accent-blue bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <input
                        type="checkbox"
                        name="registrationTypes"
                        value={option.id}
                        checked={formData.registrationTypes.includes(option.id)}
                        onChange={handleChange}
                        suppressHydrationWarning
                        className="w-5 h-5 mt-0.5 sm:mt-0 text-accent-blue border-gray-300 focus:ring-accent-blue rounded flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold text-primary text-sm sm:text-base">
                          {option.label}
                        </span>
                        {option.note && (
                          <p className="text-xs sm:text-sm text-neutral-secondary mt-0.5">
                            {option.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="font-semibold text-neutral-text text-sm sm:text-base whitespace-nowrap ml-2">
                      {option.price === 0
                        ? "Free"
                        : `€${option.price.toFixed(2)}`}
                    </span>
                  </label>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-end items-center pt-4 border-t border-gray-200">
                <span className="text-lg font-medium text-neutral-secondary mr-4">
                  Ukupno
                </span>
                <span className="text-2xl font-bold text-neutral-text">
                  €
                  {formData.registrationTypes.length > 0
                    ? REGISTRATION_OPTIONS.filter((o) =>
                        formData.registrationTypes.includes(o.id)
                      )
                        .reduce((sum, o) => sum + o.price, 0)
                        .toFixed(2)
                    : "0.00"}
                </span>
              </div>

              <hr className="mt-8 sm:mt-12 mb-6 sm:mb-10 text-gray-200" />

              <div className="text-lg sm:text-xl font-bold pb-2 uppercase">
                Plaćanje kotizacije
              </div>
              <p className="text-sm sm:text-base">
                Plaćanje je moguće izvršiti putem internetskog ili mobilnog
                bankarstva te elektroničkim bankovnim prijenosom.
              </p>
              <p>
                Nakon obrade Vaše prijave, dostavit ćemo Vam podatke o plaćanju.
              </p>

              {/* Error Message */}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <hr className="mt-12 mb-10 text-gray-200" />

              {/* Terms of service Agreement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label
                  key=""
                  className={`flex items-center justify-between p-4  rounded-lg cursor-pointer transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="terms-of-service-agreement"
                      required
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-5 h-5 text-accent-blue border-gray-300 focus:ring-accent-blue rounded"
                    />
                    <div>
                      <span className="font-semibold text-black sm:text-wrap md:text-nowrap">
                        Slažem se s
                        <a
                          href="/files/Opći-uvijeti-poslovanja-Certitudo.pdf"
                          target="_blank"
                          className="ms-1"
                          rel="noopener noreferrer"
                        >
                          Općim uvjetima poslovanja{" "}
                          <span className="text-red-500">*</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn btn-cta text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed bg-accent-blue hover:bg-orange-400 "
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Slanje...
                  </span>
                ) : (
                  "Pošalji prijavu"
                )}
              </button>
            </form>
          </div>

          {/* Help Text */}
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
