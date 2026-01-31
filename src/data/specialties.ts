export interface Specialty {
  id: string;
  name: string;
  slug: string;
  h1: string;
  h2: string;
  description: string;
  keywords: string[];
  icon: string;
}

export const specialties: Specialty[] = [
  {
    id: "eyecare",
    name: "Eye Care / Ophthalmology",
    slug: "eyecare-digital-marketing-agency-india",
    h1: "Eyecare Digital Marketing Agency in India",
    h2: "Grow Your Eye Hospital & LASIK Clinic with High-Intent Patients",
    description: "Specialized digital marketing for ophthalmologists, eye hospitals, and LASIK clinics. Attract patients seeking cataract surgery, LASIK, glaucoma treatment, and comprehensive eye care services.",
    keywords: ["eye care marketing", "ophthalmology marketing", "LASIK clinic marketing", "eye hospital digital marketing"],
    icon: "Eye"
  },
  {
    id: "dental",
    name: "Dental",
    slug: "dental-digital-marketing-agency-india",
    h1: "Dental Digital Marketing Agency in India",
    h2: "Get More Dental Patients with SEO & Google Ads",
    description: "Results-driven digital marketing for dental clinics and hospitals. From general dentistry to implants, orthodontics, and cosmetic procedures—we help you attract and retain patients.",
    keywords: ["dental marketing", "dentist digital marketing", "dental clinic SEO", "dental implant marketing"],
    icon: "Smile"
  },
  {
    id: "cosmetic",
    name: "Cosmetic / Aesthetic",
    slug: "cosmetic-digital-marketing-agency-india",
    h1: "Cosmetic Digital Marketing Agency in India",
    h2: "High-Conversion Marketing for Skin, Hair & Aesthetic Clinics",
    description: "Premium digital marketing for cosmetic surgery centers and aesthetic clinics. Showcase your transformations, build trust, and attract high-value patients seeking enhancement procedures.",
    keywords: ["cosmetic surgery marketing", "aesthetic clinic marketing", "plastic surgery digital marketing"],
    icon: "Sparkles"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    slug: "dermatology-digital-marketing-agency-india",
    h1: "Dermatology Digital Marketing Agency in India",
    h2: "Marketing for Skin, Acne & Pigmentation Clinics",
    description: "Specialized marketing solutions for dermatologists. From acne treatment to anti-aging procedures, we help skin clinics reach patients actively searching for dermatological care.",
    keywords: ["dermatology marketing", "skin clinic marketing", "dermatologist digital marketing"],
    icon: "Palette"
  },
  {
    id: "hair-transplant",
    name: "Hair Transplant",
    slug: "hair-transplant-digital-marketing-agency-india",
    h1: "Hair Transplant Digital Marketing Agency in India",
    h2: "Attract High-Value Hair Restoration Patients",
    description: "Expert digital marketing for hair transplant clinics and restoration centers. Reach patients seeking FUE, FUT, PRP therapy, and other hair loss solutions.",
    keywords: ["hair transplant marketing", "hair restoration marketing", "FUE clinic marketing"],
    icon: "Scissors"
  },
  {
    id: "ivf",
    name: "IVF & Fertility",
    slug: "ivf-digital-marketing-agency-india",
    h1: "IVF Digital Marketing Agency in India",
    h2: "Trusted Marketing Solutions for Fertility Clinics",
    description: "Sensitive, results-focused marketing for IVF centers and fertility clinics. We understand the patient journey and create campaigns that build trust and generate qualified leads.",
    keywords: ["IVF marketing", "fertility clinic marketing", "infertility treatment marketing"],
    icon: "Baby"
  },
  {
    id: "gynaecology",
    name: "Gynaecology & Maternity",
    slug: "gynaecology-digital-marketing-agency-india",
    h1: "Gynaecology Digital Marketing Agency in India",
    h2: "Marketing Solutions for Women's & Maternity Hospitals",
    description: "Comprehensive digital marketing for gynaecologists and maternity hospitals. Reach expecting mothers and women seeking specialized care with targeted campaigns.",
    keywords: ["gynaecology marketing", "maternity hospital marketing", "women's health marketing"],
    icon: "Heart"
  },
  {
    id: "cardiology",
    name: "Cardiology",
    slug: "cardiology-digital-marketing-agency-india",
    h1: "Cardiology Digital Marketing Agency in India",
    h2: "Build Trust & Visibility for Heart Hospitals",
    description: "Strategic digital marketing for cardiologists and heart hospitals. Establish authority, build patient trust, and attract those seeking cardiac care and interventions.",
    keywords: ["cardiology marketing", "heart hospital marketing", "cardiac care marketing"],
    icon: "HeartPulse"
  },
  {
    id: "orthopaedic",
    name: "Orthopaedic",
    slug: "orthopaedic-digital-marketing-agency-india",
    h1: "Orthopaedic Digital Marketing Agency in India",
    h2: "Marketing for Knee Replacement & Joint Care Clinics",
    description: "Targeted marketing for orthopaedic surgeons and clinics. From joint replacements to sports injuries, we help you reach patients seeking musculoskeletal care.",
    keywords: ["orthopaedic marketing", "joint replacement marketing", "bone doctor marketing"],
    icon: "Bone"
  },
  {
    id: "neurology",
    name: "Neurology",
    slug: "neurology-digital-marketing-agency-india",
    h1: "Neurology Digital Marketing Agency in India",
    h2: "Digital Growth Solutions for Neuro Hospitals & Clinics",
    description: "Specialized marketing for neurologists and neurosurgery centers. Reach patients seeking treatment for neurological conditions with trust-building content and campaigns.",
    keywords: ["neurology marketing", "brain specialist marketing", "neuro hospital marketing"],
    icon: "Brain"
  },
  {
    id: "mental-health",
    name: "Mental Health / Psychiatry",
    slug: "mental-health-digital-marketing-agency-india",
    h1: "Mental Health Digital Marketing Agency in India",
    h2: "Ethical Marketing for Psychiatry & Psychology Clinics",
    description: "Sensitive, ethical marketing for mental health professionals and clinics. We help psychiatrists reach patients while maintaining the highest standards of professional ethics.",
    keywords: ["mental health marketing", "psychiatry marketing", "psychology clinic marketing"],
    icon: "Brain"
  },
  {
    id: "psychology",
    name: "Psychology & Counselling",
    slug: "psychology-digital-marketing-agency-india",
    h1: "Psychology Digital Marketing Agency in India",
    h2: "Grow Your Counselling & Therapy Practice Online",
    description: "Thoughtful digital marketing for psychologists and counselors. Build your online presence, reach those seeking therapy, and grow your practice with dignity.",
    keywords: ["psychology marketing", "counselling marketing", "therapy practice marketing"],
    icon: "MessageCircle"
  },
  {
    id: "oncology",
    name: "Oncology (Cancer Care)",
    slug: "oncology-digital-marketing-agency-india",
    h1: "Oncology Digital Marketing Agency in India",
    h2: "Reputation-Driven Marketing for Cancer Hospitals",
    description: "Compassionate marketing for oncology centers and cancer hospitals. Build trust, showcase expertise, and reach patients seeking quality cancer care.",
    keywords: ["oncology marketing", "cancer hospital marketing", "cancer care marketing"],
    icon: "Ribbon"
  },
  {
    id: "diagnostic-lab",
    name: "Diagnostic Labs",
    slug: "diagnostic-lab-digital-marketing-agency-india",
    h1: "Diagnostic Lab Digital Marketing Agency in India",
    h2: "Grow Your Pathology Lab with Local SEO & Ads",
    description: "Results-driven marketing for diagnostic laboratories and pathology centers. Increase test bookings with local SEO, Google Ads, and targeted campaigns.",
    keywords: ["diagnostic lab marketing", "pathology lab marketing", "medical lab digital marketing"],
    icon: "TestTube"
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    slug: "radiology-digital-marketing-agency-india",
    h1: "Radiology Digital Marketing Agency in India",
    h2: "Increase MRI, CT Scan & Imaging Bookings",
    description: "Specialized marketing for radiology centers and imaging facilities. From MRI to CT scans, we help you reach patients and referring physicians.",
    keywords: ["radiology marketing", "imaging center marketing", "MRI center digital marketing"],
    icon: "Scan"
  },
  {
    id: "physician",
    name: "General Physician",
    slug: "physician-digital-marketing-agency-india",
    h1: "Physician Digital Marketing Agency in India",
    h2: "Patient Acquisition for Family & Internal Medicine Doctors",
    description: "Comprehensive digital marketing for general physicians and family doctors. Build your local presence and become the trusted healthcare provider in your community.",
    keywords: ["physician marketing", "general doctor marketing", "family medicine marketing"],
    icon: "Stethoscope"
  },
  {
    id: "pediatric",
    name: "Pediatrics",
    slug: "pediatric-digital-marketing-agency-india",
    h1: "Pediatric Digital Marketing Agency in India",
    h2: "Marketing Solutions for Child & Neonatal Care Clinics",
    description: "Family-friendly marketing for pediatricians and children's hospitals. Reach parents seeking quality healthcare for their children with trust-building campaigns.",
    keywords: ["pediatric marketing", "children's hospital marketing", "child specialist marketing"],
    icon: "Baby"
  },
  {
    id: "ent",
    name: "ENT",
    slug: "ent-digital-marketing-agency-india",
    h1: "ENT Digital Marketing Agency in India",
    h2: "Grow Your ENT & Hearing Care Practice",
    description: "Targeted marketing for ENT specialists and hearing care centers. Reach patients with ear, nose, and throat conditions seeking specialist care.",
    keywords: ["ENT marketing", "ear doctor marketing", "hearing care marketing"],
    icon: "Ear"
  },
  {
    id: "urology",
    name: "Urology",
    slug: "urology-digital-marketing-agency-india",
    h1: "Urology Digital Marketing Agency in India",
    h2: "Marketing for Kidney, Prostate & Uro Care Clinics",
    description: "Specialized digital marketing for urologists and urology clinics. Reach patients seeking treatment for kidney, bladder, and prostate conditions.",
    keywords: ["urology marketing", "kidney doctor marketing", "urologist digital marketing"],
    icon: "Activity"
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    slug: "gastroenterology-digital-marketing-agency-india",
    h1: "Gastroenterology Digital Marketing Agency in India",
    h2: "Reach Patients Seeking Liver & Digestive Care",
    description: "Expert marketing for gastroenterologists and GI clinics. From liver care to digestive disorders, we help you reach patients actively seeking treatment.",
    keywords: ["gastroenterology marketing", "GI doctor marketing", "liver specialist marketing"],
    icon: "Activity"
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    slug: "pulmonology-digital-marketing-agency-india",
    h1: "Pulmonology Digital Marketing Agency in India",
    h2: "Marketing for Chest, Asthma & Lung Care Clinics",
    description: "Targeted marketing for pulmonologists and respiratory care centers. Reach patients with asthma, COPD, and other lung conditions seeking specialist care.",
    keywords: ["pulmonology marketing", "lung specialist marketing", "respiratory care marketing"],
    icon: "Wind"
  },
  {
    id: "nephrology",
    name: "Nephrology",
    slug: "nephrology-digital-marketing-agency-india",
    h1: "Nephrology Digital Marketing Agency in India",
    h2: "Digital Growth for Kidney & Dialysis Centers",
    description: "Specialized marketing for nephrologists and dialysis centers. Reach patients with kidney disease seeking quality care and treatment options.",
    keywords: ["nephrology marketing", "dialysis center marketing", "kidney care marketing"],
    icon: "Activity"
  },
  {
    id: "diabetes",
    name: "Diabetology",
    slug: "diabetes-digital-marketing-agency-india",
    h1: "Diabetes Digital Marketing Agency in India",
    h2: "Long-Term Patient Engagement for Diabetes Clinics",
    description: "Comprehensive marketing for diabetologists and diabetes care centers. Build lasting patient relationships and grow your practice with targeted campaigns.",
    keywords: ["diabetes marketing", "diabetologist marketing", "diabetes clinic digital marketing"],
    icon: "Droplet"
  },
  {
    id: "pain-management",
    name: "Pain Management",
    slug: "pain-management-digital-marketing-agency-india",
    h1: "Pain Management Digital Marketing Agency in India",
    h2: "Marketing for Chronic Pain & Spine Clinics",
    description: "Targeted marketing for pain management specialists and spine clinics. Reach patients seeking relief from chronic pain conditions.",
    keywords: ["pain management marketing", "spine clinic marketing", "chronic pain doctor marketing"],
    icon: "Zap"
  },
  {
    id: "physiotherapy",
    name: "Rehabilitation & Physiotherapy",
    slug: "physiotherapy-digital-marketing-agency-india",
    h1: "Physiotherapy Digital Marketing Agency in India",
    h2: "Get More Rehab & Physio Appointments",
    description: "Results-driven marketing for physiotherapists and rehabilitation centers. Attract patients recovering from injuries, surgeries, or seeking preventive care.",
    keywords: ["physiotherapy marketing", "rehab center marketing", "physio clinic digital marketing"],
    icon: "Dumbbell"
  },
  {
    id: "homeopathy",
    name: "Homeopathy",
    slug: "homeopathy-digital-marketing-agency-india",
    h1: "Homeopathy Digital Marketing Agency in India",
    h2: "Grow Your Homeopathy Clinic with Digital Marketing",
    description: "Specialized marketing for homeopathic practitioners and clinics. Reach patients seeking alternative, holistic treatment approaches.",
    keywords: ["homeopathy marketing", "homeopathic clinic marketing", "alternative medicine marketing"],
    icon: "Leaf"
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    slug: "ayurveda-digital-marketing-agency-india",
    h1: "Ayurveda Digital Marketing Agency in India",
    h2: "Marketing Solutions for Ayurvedic Clinics & Hospitals",
    description: "Traditional meets digital—marketing for Ayurvedic practitioners and hospitals. Reach patients seeking authentic Ayurvedic treatments and wellness programs.",
    keywords: ["ayurveda marketing", "ayurvedic clinic marketing", "panchakarma marketing"],
    icon: "Flower2"
  },
  {
    id: "alternative-medicine",
    name: "Alternative Medicine",
    slug: "alternative-medicine-digital-marketing-agency-india",
    h1: "Alternative Medicine Digital Marketing Agency in India",
    h2: "Digital Growth for Holistic & Natural Healing Clinics",
    description: "Comprehensive marketing for alternative medicine practitioners. From acupuncture to naturopathy, we help holistic healers reach their ideal patients.",
    keywords: ["alternative medicine marketing", "holistic health marketing", "natural healing marketing"],
    icon: "Leaf"
  },
  {
    id: "naturopathy",
    name: "Naturopathy & Yoga",
    slug: "naturopathy-digital-marketing-agency-india",
    h1: "Naturopathy Digital Marketing Agency in India",
    h2: "Attract Wellness-Focused Patients Online",
    description: "Authentic marketing for naturopathy centers and yoga studios. Connect with health-conscious individuals seeking natural wellness solutions.",
    keywords: ["naturopathy marketing", "yoga center marketing", "wellness center marketing"],
    icon: "Sun"
  },
  {
    id: "hospital",
    name: "Multi-Speciality Hospital",
    slug: "hospital-digital-marketing-agency-india",
    h1: "Hospital Digital Marketing Agency in India",
    h2: "End-to-End Digital Marketing for Hospitals",
    description: "Complete digital marketing solutions for multi-specialty hospitals. From brand building to department-specific campaigns, we drive patient growth across all specialties.",
    keywords: ["hospital marketing", "multi-specialty hospital marketing", "healthcare marketing"],
    icon: "Building2"
  },
  {
    id: "doctor-branding",
    name: "Doctor Personal Branding",
    slug: "doctor-digital-marketing-agency-india",
    h1: "Doctor Digital Marketing Agency in India",
    h2: "Personal Branding & Patient Acquisition for Doctors",
    description: "Build your personal brand as a medical professional. Establish thought leadership, grow your online presence, and attract more patients to your practice.",
    keywords: ["doctor personal branding", "physician marketing", "medical personal brand"],
    icon: "User"
  },
  {
    id: "telemedicine",
    name: "Telemedicine",
    slug: "telemedicine-digital-marketing-agency-india",
    h1: "Telemedicine Digital Marketing Agency in India",
    h2: "Grow Online Consultations Across India",
    description: "Digital marketing for telemedicine platforms and online consultation services. Reach patients across India seeking convenient virtual healthcare.",
    keywords: ["telemedicine marketing", "online consultation marketing", "virtual healthcare marketing"],
    icon: "Video"
  },
  {
    id: "home-healthcare",
    name: "Home Healthcare",
    slug: "home-healthcare-digital-marketing-agency-india",
    h1: "Home Healthcare Digital Marketing Agency in India",
    h2: "Marketing for Home Nursing & Medical Care Services",
    description: "Targeted marketing for home healthcare providers and nursing services. Reach families seeking quality in-home medical care for their loved ones.",
    keywords: ["home healthcare marketing", "home nursing marketing", "eldercare marketing"],
    icon: "Home"
  }
];

export const getSpecialtyBySlug = (slug: string): Specialty | undefined => {
  return specialties.find(s => s.slug === slug);
};
