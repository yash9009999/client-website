import type { FAQ, ProcessStep, Service, SubService } from "@/types";

const processTemplate: ProcessStep[] = [
  { title: "Tell Us What You Need", description: "Share the issue, property type and any relevant details so the requirement can be understood." },
  { title: "Discuss the Requirement", description: "We can talk through the job, any access considerations and the type of support needed." },
  { title: "Receive a Quote", description: "Once the requirement is understood, the next step is to discuss the quote." },
  { title: "Arrange the Work", description: "Agree the best way to move forward with the service and the required timeline." },
];

const faqTemplate: FAQ[] = [
  { question: "What information do you need before providing a quote?", answer: "A clear description of the issue, property type and any relevant site details helps us understand the requirement before discussing the next steps." },
  { question: "How can I request a quote?", answer: "Use the request-a-quote page or email info@profixinnovation.co.uk with the details of your requirement." },
  { question: "Do you support both residential and commercial work?", answer: "Yes, the service framework is designed to support both domestic and commercial property requirements." },
];

const buildSubService = (input: {
  name: string;
  shortDescription: string;
  description: string;
  features?: string[];
  process?: ProcessStep[];
  faqs?: FAQ[];
  related?: string[];
}): SubService => {
  const slug = slugify(input.name);

  return {
    slug,
    name: input.name,
    shortDescription: input.shortDescription,
    description: input.description,
    features: input.features ?? [
      "Assessment of the requirement",
      "Clear discussion of the job",
      "Practical next steps",
    ],
    process: input.process ?? processTemplate,
    faqs: input.faqs ?? faqTemplate,
    related: input.related ?? [],
  };
};

const buildService = (
  slug: string,
  name: string,
  shortDescription: string,
  description: string,
  icon: string,
  subServicesInput: Parameters<typeof buildSubService>['0'][],
): Service => ({
  slug,
  name,
  shortDescription,
  description,
  icon,
  subServices: subServicesInput.map((item) => buildSubService(item)),
});

export const services: Service[] = [
  buildService(
    "glazing",
    "Glazing",
    "Practical glazing support for properties and premises.",
    "Professional glazing support for windows, doors and property maintenance requirements.",
    "glazing",
    [
      {
        name: "Double Glazing Glass Replacement",
        shortDescription: "Replacement glazing for damaged or failed units.",
        description: "Replacement glazing for damaged, misted or otherwise failed double glazing units, subject to assessment of the existing installation and property requirements.",
        features: ["Assessment of existing glazing", "Replacement unit guidance", "Property-specific next steps"],
        faqs: [
          { question: "What is involved in glazing replacement?", answer: "A glazing replacement requirement typically starts with an assessment of the existing window or panel and the condition of the unit before discussing the best next step." },
          { question: "Can a damaged unit be replaced without replacing the frame?", answer: "This depends on the condition of the existing frame and the type of glazing system. A proper assessment helps determine the right approach." },
        ],
      },
      {
        name: "Window Repair",
        shortDescription: "Support for common window issues and maintenance needs.",
        description: "Practical support for window maintenance issues, alignment concerns and general repair needs for residential and commercial properties.",
        features: ["Inspection of the issue", "Repair recommendations", "Maintenance planning"],
      },
      {
        name: "Emergency Glazing",
        shortDescription: "Support for urgent glazing issues that need prompt attention.",
        description: "Emergency glazing support for property issues that require a prompt assessment and a clear plan of action.",
        features: ["Urgent assessment", "Risk review", "Clear next-step advice"],
      },
      {
        name: "Boarding Up",
        shortDescription: "Temporary security support for damaged or exposed glazing.",
        description: "Temporary protective glazing measures for properties where damaged openings or exposed areas need a practical safety response.",
        features: ["Temporary protection", "Site safety review", "Property protection support"],
      },
      {
        name: "Cat Flap Installation",
        shortDescription: "Cat flap installation for suitable doors and glazing applications.",
        description: "Professional cat flap installation services for suitable doors and glazing applications, with attention to practical fit and property requirements.",
        features: ["Property suitability review", "Installation planning", "Practical fit and finish"],
      },
      {
        name: "Shop Front Glass",
        shortDescription: "Glass support for commercial frontage requirements.",
        description: "Commercial glazing support for shop fronts and frontage requirements, with an emphasis on practical property maintenance and presentation.",
        features: ["Frontage assessment", "Commercial property support", "Practical repair advice"],
      },
      {
        name: "Glazing Lock Repair",
        shortDescription: "Support for glazing-related locking and access issues.",
        description: "Support for glazing-related locking and access issues, helping keep doors, panels and related openings secure and functional.",
        features: ["Locking issue review", "Security-focused advice", "Practical repair guidance"],
      },
    ],
  ),
  buildService(
    "locksmith",
    "Locksmith",
    "Lock and entry solutions for homes and businesses.",
    "Lock and access support for residential and commercial properties, with practical assistance for secure entry requirements.",
    "locksmith",
    [
      {
        name: "Emergency Locksmith",
        shortDescription: "Support for urgent lock and access issues.",
        description: "Support for lock and access issues that need a prompt review, with clear guidance on the best next steps for security and access.",
        features: ["Urgent access review", "Security assessment", "Practical next steps"],
      },
      {
        name: "Lock Repair",
        shortDescription: "Repair support for worn or damaged locks.",
        description: "Repair support for residential and commercial locks that are worn, damaged or not operating as expected.",
        features: ["Lock condition review", "Repair guidance", "Security-focused assessment"],
      },
      {
        name: "Lock Replacement",
        shortDescription: "Replacement options for outdated or damaged lock systems.",
        description: "Lock replacement support for properties where a lock has reached the end of its practical life or no longer meets the needs of the property.",
        features: ["Requirement review", "Replacement planning", "Access and security advice"],
      },
      {
        name: "Locked Out Service",
        shortDescription: "Assistance for access difficulties and lock-out situations.",
        description: "Support for lock-out situations where access to a property is required and a practical route to regain access needs to be discussed.",
        features: ["Access review", "Property-specific advice", "Clear next steps"],
      },
      {
        name: "Door Lock Installation",
        shortDescription: "Installation support for door locking systems.",
        description: "Door lock installation support for properties requiring updated or better-suited access hardware and secure entry arrangements.",
        features: ["Hardware review", "Installation planning", "Security guidance"],
      },
      {
        name: "Gaining Entry",
        shortDescription: "Support for entry without causing unnecessary damage or disruption.",
        description: "Practical support for gaining entry to a property while considering the most suitable and least disruptive route for the individual situation.",
        features: ["Access review", "Property assessment", "Least-disruptive approach"],
      },
    ],
  ),
  buildService(
    "plumbing",
    "Plumbing",
    "Everyday plumbing maintenance and repair services.",
    "Practical plumbing support for leaks, installations and everyday property maintenance requirements.",
    "plumbing",
    [
      {
        name: "Emergency Plumbing",
        shortDescription: "Support for urgent plumbing issues needing prompt review.",
        description: "Support for urgent plumbing issues that require a prompt review and clear recommendations for the next steps.",
        features: ["Issue review", "Risk awareness", "Next-step guidance"],
      },
      {
        name: "Leak Detection & Repair",
        shortDescription: "Support for identifying and addressing leaks.",
        description: "Leak detection and repair support for properties with visible or suspected water issues that need careful assessment.",
        features: ["Leak review", "Property-level assessment", "Repair planning"],
      },
      {
        name: "Tap Repair & Installation",
        shortDescription: "Support for taps and related plumbing fittings.",
        description: "Repair and installation support for taps and associated plumbing fittings, from minor maintenance to replacement planning.",
        features: ["Tap issue review", "Installation guidance", "Practical adjustments"],
      },
      {
        name: "Bathroom Plumbing",
        shortDescription: "Plumbing support for bathrooms and wet areas.",
        description: "Bathroom plumbing support for fixtures, pipework and related issues that affect usability and property maintenance.",
        features: ["Bathroom assessment", "Fixture review", "Practical maintenance support"],
      },
      {
        name: "Kitchen Plumbing",
        shortDescription: "Support for kitchen plumbing requirements.",
        description: "Kitchen plumbing support for sinks, pipework and domestic plumbing issues affecting the day-to-day operation of the space.",
        features: ["Kitchen fit review", "Practical support", "Planning guidance"],
      },
      {
        name: "Appliance Installation",
        shortDescription: "Practical support for plumbing-linked appliance installations.",
        description: "Plumbing-linked appliance installation support for domestic and commercial settings where the correct setup matters.",
        features: ["Installation review", "System compatibility check", "Property suitability guidance"],
      },
      {
        name: "Outdoor Plumbing",
        shortDescription: "Support for exterior plumbing needs and water services.",
        description: "Outdoor plumbing support for external fixtures, drainage related issues and practical maintenance needs around the property.",
        features: ["External issue review", "Site assessment", "Maintenance planning"],
      },
    ],
  ),
  buildService(
    "gas-heating",
    "Gas & Heating",
    "Heating and gas service options for your property.",
    "Heating and gas-related maintenance support for property owners who need practical service guidance and a clear next step.",
    "gas-heating",
    [
      {
        name: "Boiler Repair",
        shortDescription: "Support for boiler performance and fault issues.",
        description: "Boiler repair support for systems showing poor performance, faults or practical operational issues that need assessment.",
        features: ["Performance review", "Fault diagnosis support", "Next-step recommendations"],
      },
      {
        name: "Boiler Installation",
        shortDescription: "Support for boiler replacement and installation planning.",
        description: "Boiler installation support for properties requiring a suitable replacement or an updated heating setup.",
        features: ["Property assessment", "Installation planning", "System compatibility review"],
      },
      {
        name: "Boiler Servicing",
        shortDescription: "Regular servicing and maintenance support for heating systems.",
        description: "Boiler servicing support for properties that need routine attention and a practical review of system condition.",
        features: ["Service planning", "System condition review", "Maintenance support"],
      },
      {
        name: "Heating Repairs",
        shortDescription: "Support for common heating system repairs.",
        description: "Heating repair support for faults, poor performance and maintenance issues affecting comfort and everyday use.",
        features: ["Fault review", "Repair planning", "Operational guidance"],
      },
      {
        name: "Heating Fault Finding",
        shortDescription: "Investigating heating problems and system faults.",
        description: "Heating fault-finding support to help identify what is causing poor performance or disruption in the heating system.",
        features: ["Problem analysis", "Fault narrowing", "Next-step recommendations"],
      },
      {
        name: "Gas Appliance Installation",
        shortDescription: "Support for gas appliance installation requirements.",
        description: "Gas appliance installation support for properties that need a considered approach to system compatibility and practical fit.",
        features: ["Requirement review", "Installation planning", "Operational checks"],
      },
      {
        name: "Emergency Heating",
        shortDescription: "Support for urgent heating issues requiring a prompt response.",
        description: "Emergency heating support for urgent situations where a property needs a practical assessment and a clear route forward.",
        features: ["Urgent issue review", "Clear next steps", "Priority planning"],
      },
    ],
  ),
  buildService(
    "electrical",
    "Electrical",
    "Electrical maintenance, installations and inspections.",
    "Electrical support for property maintenance, installations and practical issues across homes and businesses.",
    "electrical",
    [
      {
        name: "Emergency Electrician",
        shortDescription: "Support for urgent electrical faults and service issues.",
        description: "Support for urgent electrical issues that require a prompt review and sensible next steps for property safety and functionality.",
        features: ["Urgent issue review", "Safety-focused guidance", "Next-step recommendations"],
      },
      {
        name: "Electrical Repairs",
        shortDescription: "Repair support for electrical faults and property issues.",
        description: "Electrical repair support for faults, damaged fittings and property maintenance issues that need a clear and practical approach.",
        features: ["Fault review", "Repair planning", "Property-level guidance"],
      },
      {
        name: "Electrical Installation",
        shortDescription: "Support for electrical installation work and upgrades.",
        description: "Electrical installation support for new fittings, upgrades and property improvements where correct planning matters.",
        features: ["Installation review", "Planning guidance", "Property suitability check"],
      },
      {
        name: "Lighting Installation",
        shortDescription: "Support for lighting upgrades and new installations.",
        description: "Lighting installation support for internal and external needs, with a focus on practical property use and suitable results.",
        features: ["Lighting review", "Placement planning", "Property-specific advice"],
      },
      {
        name: "Electrical Inspection",
        shortDescription: "General inspection support and information gathering.",
        description: "Electrical inspection support for properties where a review of current installation status and any issues is the right first step.",
        features: ["Inspection planning", "Issue identification", "Clear next steps"],
      },
      {
        name: "PAT Testing",
        shortDescription: "Support for portable appliance testing requirements.",
        description: "PAT testing support for rental or commercial settings where an appliance review and documentation may be required.",
        features: ["Appliance review", "Testing planning", "Documentation advice"],
      },
      {
        name: "Electrical Safety Inspections",
        shortDescription: "Review support for property electrical safety considerations.",
        description: "Electrical safety inspection support to help review property systems and identify any practical concerns before deciding on the next step.",
        features: ["Safety review", "Issue identification", "Practical guidance"],
      },
    ],
  ),
  buildService(
    "pest-control",
    "Pest Control",
    "Pest-control service options for properties and sites.",
    "Pest-control support for identification, treatment planning and practical property protection needs.",
    "pest-control",
    [
      {
        name: "Ant Control",
        shortDescription: "Support for identifying and managing ant activity.",
        description: "Ant control support for properties experiencing ongoing activity, with a focus on inspection, identification and practical treatment planning.",
        features: ["Activity review", "Treatment planning", "Prevention guidance"],
      },
      {
        name: "Bed Bug Treatment",
        shortDescription: "Support for inspecting and addressing bed bug concerns.",
        description: "Bed bug treatment support for property owners who need a professional review of activity and practical treatment recommendations.",
        features: ["Inspection support", "Issue review", "Treatment planning"],
      },
      {
        name: "Cockroach Control",
        shortDescription: "Support for controlling infestation issues.",
        description: "Cockroach control support for properties requiring professional review, treatment planning and a practical prevention approach.",
        features: ["Activity assessment", "Control planning", "Prevention advice"],
      },
      {
        name: "Flea Treatment",
        shortDescription: "Support for fleas and affected property areas.",
        description: "Flea treatment support focused on identifying the issue, understanding the property context and discussing a suitable treatment approach.",
        features: ["Issue review", "Treatment planning", "Property guidance"],
      },
      {
        name: "Mice Control",
        shortDescription: "Support for mice activity and property concerns.",
        description: "Mice control support for homes and businesses facing activity issues, with a focus on inspection and practical treatment planning.",
        features: ["Entry point review", "Activity assessment", "Prevention guidance"],
      },
      {
        name: "Rat Control",
        shortDescription: "Support for rat activity and property management.",
        description: "Rat control support for property owners seeking a practical review of infestations, affected areas and suitable next steps.",
        features: ["Problem review", "Treatment planning", "Prevention focus"],
      },
      {
        name: "Wasp Control",
        shortDescription: "Support for wasp nest concerns and activity near property areas.",
        description: "Wasp control support for properties experiencing active nest issues or recurring activity, with a focus on safe and practical treatment planning.",
        features: ["Nest review", "Risk awareness", "Treatment planning"],
      },
      {
        name: "Bird Control",
        shortDescription: "Support for preventing nuisance bird activity around buildings.",
        description: "Bird control support for properties experiencing nuisance activity, structural concerns or maintenance issues linked to birds.",
        features: ["Site review", "Nuisance assessment", "Prevention planning"],
      },
      {
        name: "Fly Control",
        shortDescription: "Support for fly activity and affected areas.",
        description: "Fly control support for properties where insect activity is disrupting comfort, hygiene or daily operations.",
        features: ["Activity assessment", "Treatment planning", "Prevention guidance"],
      },
      {
        name: "Emergency Pest Control",
        shortDescription: "Prompt support for urgent pest issues.",
        description: "Emergency pest-control support for urgent property issues that require prompt review and practical next steps.",
        features: ["Urgent review", "Property assessment", "Clear guidance"],
      },
    ],
  ),
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function serviceHref(service: Pick<Service, "slug">) {
  return `/services/${service.slug}`;
}

export function subServiceHref(serviceSlug: string, subServiceSlug: string) {
  return `/services/${serviceSlug}/${subServiceSlug}`;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string) {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find((item) => item.slug === subServiceSlug);
}

export function getAllServicePaths() {
  return services.map(({ slug }) => ({ service: slug }));
}

export function getAllSubServicePaths() {
  return services.flatMap((service) =>
    service.subServices.map((subService) => ({
      service: service.slug,
      subService: subService.slug,
    })),
  );
}

export function getRelatedSubServices(serviceSlug: string, currentSubServiceSlug?: string) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return [];
  }

  const relatedFromData = service.subServices
    .filter((item) => item.slug !== currentSubServiceSlug)
    .slice(0, 4);

  return relatedFromData.length ? relatedFromData : service.subServices.slice(0, 4);
}
