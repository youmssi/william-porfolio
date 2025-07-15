import { ReferenceSection, Reference } from "@/components/reference-section";

const references: Reference[] = [
  {
    name: "Dr. Samuel Ratna Kumar",
    title: "Assistant Professor - III & Head",
    department: "Department of Mechanical Engineering",
    institution: "Kumaraguru College of Technology, Coimbatore",
    mobile: "+91-98425-51959",
    whatsapp: "https://wa.me/919842551959",
    email: "samuelrathish@live.com",
    profile: {
      label: "Awards & Recognition",
      url: "https://sites.google.com/view/dr-samuelratnakumar-webpage/awards-recognition?authuser=0"
    },
    professionalIds: [
      { label: "Web of Science", value: "P-4264-2015" },
      { label: "Scopus", value: "57194901129" },
      { label: "Orcid", value: "0000-0001-6908-2380" }
    ],
    researchInterest: "Advanced Materials, Micro & Nano - Composites, Corrosion, Tribology, HEA, UHTC Material, Energy Storage Materials & Subtractive / Additive Manufacturing"
  },
  {
    name: "OFFOLE Florence Espe NNA ZAME, PhD",
    title: "Associate Professor/Vice Dean",
    department: "Department of Mechanical/Mechatronics Engineering",
    institution: "Faculty of Science, University of Bertoua, Cameroon",
    mobile: "+237674405965",
    whatsapp: "",
    email: "",
    profile: {
      label: "",
      url: ""
    },
    professionalIds: [],
    researchInterest: ""
  },
  {
    name: "Brice EKOBO, PhD",
    title: "Senior Lecturer",
    department: "Department of Electrical and Telecommunications Engineering",
    institution: "NASEY (National Advanced School of Engineering of Yaoundé), University of Yaoundé I, Cameroon",
    mobile: "+237699788548",
    whatsapp: "",
    email: "ekobobrice@gmail.com",
    profile: {
      label: "",
      url: ""
    },
    professionalIds: [],
    researchInterest: ""
  },
  {
    name: "Mr Ndach Thierry",
    title: "Service Engineer",
    department: "",
    institution: "SIEMENS SA/NV Belgium, Guido Gezellestraat123",
    mobile: "+237 466 186 902 / 52370 691 499 818",
    whatsapp: "",
    email: "ndachthiery@yahoo.com, thierryndoh.ndach@siemens.com",
    profile: {
      label: "",
      url: ""
    },
    professionalIds: [],
    researchInterest: ""
  }
];

export default function ReferencesPage() {
  return <ReferenceSection references={references} />;
} 