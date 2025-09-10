import { ReferenceSection, Reference } from "@/components/reference-section";

const references: Reference[] = [
  {
    name: "Professor Mathias Fru Fonteh",
    title: "Management of Water Resources",
    department: "",
    institution: "Director of COLTECH, University of Bamenda",
    mobile: "(+237)677760863",
    email: "matfonte@hyahoo.com",

    professionalIds: [],
    researchInterest: "Management of Water Resources"
  },
  {
    name: "Dr. Samuel Ratna Kumar",
    title: "Assistant Professor - III & Head",
    department: "Department of Mechanical Engineering",
    institution: "Kumaraguru College of Technology, Coimbatore, India",
    mobile: "+91-98425-51959",
    whatsapp: "https://wa.me/919842551959",
    email: "samuelrathish@live.com",
    profile: {
      label: "Awards & Recognition",
      url: "https://sites.google.com/view/drsamuelratnakumar-webpage/awardsrecognition?authuser=0"
    },
    professionalIds: [],
    researchInterest: "Advanced Materials, Micro & Nano - Composites, Corrosion, Tribology, Heat, UHTC Material, Energy Storage Materials & Subtractive / Additive Manufacturing"
  },
  {
    name: "Dr. Seranthian Ramanathan",
    title: "Assistant Professor",
    department: "Department of Mechanical Engineering",
    institution: "Kumaraguru College of Technology, Coimbatore, India",
    mobile: "+91-87549 33907",
    whatsapp: "https://wa.me/918754933907",
    email: "ramanathan.s.mec@kct.ac.in",

    professionalIds: [],
    researchInterest: "Heat Transfer, Entropy, Renewable Energy, Computational Fluid Dynamics (CFD), Fluid Mechanics, Heat Transfer, Solar, Wind Turbine, Thermodynamics."
  },
  {
    name: "Mr Ndach Thierry",
    title: "Service Engineer",
    department: "",
    institution: "SIEMENS SA/NV Belgium, Guido Gezellestraat123",
    mobile: "+32 466 186 902 / (+237) 691 499 818",
    whatsapp: "https://wa.me/32466186902",
    email: "ndach_thierry@yahoo.com",

    professionalIds: [],
    researchInterest: "Scada Transport and Distribution Control centers. System architect for grid control applications for Transport and Distribution networks. Versed with the use and implementation of Transmission Network application (SE, CA, PF, etc). Control Center SCADA software, Design Engineering, Installation and Commissioning."
  },
  {
    name: "Dr Nsang Augustine Shey",
    title: "HOD",
    department: "Dept of Comp Sc & Engineering",
    institution: "PKFOKAM Institute of Excellence, Yaounde",
    mobile: "+237 6 80 18 85 01",
    email: "assnsang@gmail.com",
    professionalIds: [],
    researchInterest: ""
  }
];

export default function ReferencesPage() {
  return <ReferenceSection references={references} />;
} 