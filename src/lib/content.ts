export const SITE = {
  name: "Keyra AOTI",
  domain: "ai.keyra.ie",
  url: "https://ai.keyra.ie",
  tagline: "The Trust Layer For Autonomous Systems",
  category: "Autonomous Operational Trust Infrastructure",
  architecture: "Keyra Operational Trust Architecture",
  platformTitle: "Keyra Autonomous Operational Trust Infrastructure (AOTI) Platform",
  platformSubtitle: "The Trust Layer For Autonomous Systems",
} as const;

/** Full section index — mobile nav and in-page anchors */
export const NAV_LINKS = [
  { label: "Mission", href: "#mission" },
  { label: "Narrative", href: "#narrative" },
  { label: "Crisis", href: "#crisis" },
  { label: "AOTI", href: "#aoti" },
  { label: "KOTA", href: "#kota" },
  { label: "Trust", href: "#trust-viz" },
  { label: "Protocols", href: "#protocols" },
  { label: "Standards", href: "#standards" },
  { label: "Security", href: "#security" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Deployment", href: "#deployment" },
  { label: "OTCC", href: "#otcc" },
  { label: "Telemetry", href: "#observability" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "Global", href: "#global-map" },
  { label: "Research", href: "#research" },
  { label: "Platform", href: "#platform" },
  { label: "Commercial", href: "#commercial" },
] as const;

/** Condensed desktop header */
export const NAV_LINKS_PRIMARY = [
  { label: "AOTI", href: "#aoti" },
  { label: "KOTA", href: "#kota" },
  { label: "Protocols", href: "#protocols" },
  { label: "Security", href: "#security" },
  { label: "Deployment", href: "#deployment" },
  { label: "OTCC", href: "#otcc" },
  { label: "Research", href: "#research" },
  { label: "Platform", href: "#platform" },
] as const;

export const PLATFORM_MISSION = {
  eyebrow: "ai.keyra.ie",
  title: SITE.platformTitle,
  subtitle: SITE.platformSubtitle,
  description:
    "The official strategic, architectural, operational trust, and governance domain for Keyra — foundational infrastructure for secure autonomous systems at enterprise, telecom, and sovereign scale.",
  frameworks: [
    "Authenticated autonomous systems",
    "Operational trust architecture",
    "Machine identity infrastructure",
    "Governed execution systems",
    "Sovereign authorization frameworks",
    "Telecom-rooted trust federation",
    "Enterprise autonomous operations",
  ],
  keyraRole: "Keyra becomes the foundational AOTI platform.",
} as const;

export const CATEGORY_DEFINITION = {
  eyebrow: "Core Category Positioning",
  title: "Keyra formally defines a new infrastructure category",
  body: "Autonomous Operational Trust Infrastructure (AOTI) is neutral operational trust infrastructure — deployable global architecture for enterprise-grade operational governance, telecom-rooted trust federation, and sovereign execution infrastructure.",
} as const;

export const AOTI_CAPABILITIES = [
  "Rooted machine identity",
  "Operational authorization",
  "Runtime governance",
  "Execution verification",
  "Trust federation",
  "Sovereign compliance",
  "Telecom-rooted authentication",
  "Auditability for autonomous operations",
] as const;

export const KOTA_DOCTRINE = {
  eyebrow: "KOTA",
  title: "Keyra Operational Trust Architecture",
  description:
    "The formal architectural doctrine of the platform. Eight infrastructure planes — each with world-class visualization, defined functions, and protocol federation interfaces.",
  summary:
    "KOTA organizes autonomous operational trust into identity, authorization, governance, execution, federation, audit, orchestration, and telecom trust — federating through the operational trust protocol stack.",
} as const;

export const TRUST_VISUALIZATION = {
  eyebrow: "Operational Trust Visualization",
  title: "Invisible trust, rendered with institutional precision",
  description:
    "Atmospheric signal choreography for SIM/eSIM rooted identity, carrier authentication, cryptographic orchestration, and federation pathways — beautiful infrastructure, not engineering diagrams.",
  signals: [
    { id: "sim", label: "SIM / eSIM / eUICC rooted identity", tier: "hardware" },
    { id: "carrier", label: "Carrier authentication pathways", tier: "telecom" },
    { id: "crypto", label: "Cryptographic orchestration flows", tier: "execution" },
    { id: "federation", label: "Trust federation synchronization", tier: "federation" },
    { id: "policy", label: "Policy orchestration boundaries", tier: "governance" },
    { id: "attestation", label: "Execution attestation pulses", tier: "verification" },
  ],
} as const;

export const STANDARDS_CREDIBILITY = [
  "Regulator-ready",
  "Telecom-grade",
  "Enterprise deployable",
  "Globally interoperable",
  "Standards-aligned",
  "Sovereign-cloud ready",
] as const;

export const SECURITY_ARCHITECTURE = {
  eyebrow: "Security Doctrine",
  title: "State-grade security architecture",
  description:
    "Explicit operational security doctrine for governed autonomous execution — Zero Trust by design, hardware-rooted trust, and policy-bound execution at every operational boundary.",
  layers: [
    {
      layer: "Execution perimeter",
      detail: "Zero Trust execution with least-privilege orchestration and execution revocation.",
    },
    {
      layer: "Trust anchoring",
      detail: "Hardware-rooted trust, secure enclave execution, and cryptographic attestation.",
    },
    {
      layer: "Runtime assurance",
      detail: "Runtime verification, trust isolation boundaries, and policy-bound execution.",
    },
    {
      layer: "Credential resilience",
      detail: "Credential rotation, post-quantum readiness, and sovereign compliance controls.",
    },
  ],
} as const;

export const LIFECYCLE_UNIVERSAL_CONTROLS = [
  "Governance controls",
  "Operational telemetry",
  "Auditability",
  "Policy orchestration",
  "Execution traceability",
] as const;

export const FINAL_OUTCOME = {
  principles: [
    "Operational trust",
    "Rooted identity",
    "Governed execution",
    "Runtime verification",
    "Sovereign interoperability",
    "Telecom-grade federation",
    "Enterprise deployability",
    "Standards-ready architecture",
    "Infrastructure permanence",
  ],
  emotional: "Calm institutional certainty.",
} as const;

export const WHITE_PAPER_ARCHIVE_TOPICS = [
  "Operational governance frameworks",
  "Trust federation research",
  "Telecom-rooted identity systems",
  "Runtime authorization models",
  "Execution verification doctrine",
  "Sovereign trust architecture",
  "Machine identity frameworks",
  "Operational interoperability papers",
] as const;

export const PRIMARY_NARRATIVE = {
  eyebrow: "Primary Platform Narrative",
  opening: "The internet was originally designed for human interaction.",
  modernTitle: "Modern infrastructure increasingly relies on",
  modernReliance: [
    "Autonomous systems",
    "Operational intelligence",
    "Machine coordination",
    "Digital workforce infrastructure",
    "Governed execution systems",
    "Authenticated automation",
  ],
  gapsTitle: "Most autonomous systems today still lack",
  gaps: [
    "Rooted identity",
    "Operational accountability",
    "Runtime governance",
    "Verifiable execution",
    "Trust interoperability",
    "Sovereign controls",
    "Execution traceability",
    "Telecom-grade trust anchoring",
  ],
  solution:
    "Keyra solves this through Autonomous Operational Trust Infrastructure (AOTI) — the foundational layer for secure autonomous operations at enterprise, telecom, and sovereign scale.",
} as const;

export const HERO_LAYERS = [
  "Authenticated operational topology",
  "Telecom signaling pathways",
  "Trust federation systems",
  "Runtime execution maps",
  "Operational observability networks",
  "Policy orchestration flows",
  "Sovereign infrastructure overlays",
] as const;

export const HERO = {
  eyebrow: "Autonomous Operational Trust Infrastructure",
  headline: "The Trust Layer For Autonomous Systems",
  rotatingHeadlines: [
    "Operational Trust Infrastructure For Secure Autonomous Execution",
    "Rooted Identity For Machine Operations At Scale",
    "Governed Execution For Enterprise Autonomous Systems",
    "Telecom-Grade Trust Federation Infrastructure",
  ],
  subheading:
    "Keyra provides rooted identity, operational authorization, runtime governance, trust federation, and execution verification infrastructure for autonomous systems operating at enterprise, telecom, and sovereign scale.",
  primaryCta: { label: "Explore KOTA Architecture", href: "#kota" },
  secondaryCta: { label: "Developer Platform", href: "#platform" },
} as const;

export const CRISIS = {
  eyebrow: "Operational Trust Crisis",
  title: "Autonomous systems can increasingly transact, orchestrate, decide, and operate without verifiable operational trust.",
  conclusion:
    "Operational trust infrastructure is required for autonomous systems operating at scale.",
  topics: [
    "Anonymous machine execution",
    "Unverified operational systems",
    "Synthetic identity abuse",
    "Autonomous fraud",
    "Unauthorized execution",
    "Fragmented governance",
    "Operational traceability gaps",
    "Runtime trust failures",
    "Regulatory enforcement gaps",
    "Sovereign infrastructure exposure",
  ],
} as const;

export const AOTI_NOT = [
  "An AI startup website",
  "A chatbot platform",
  "An LLM product",
  "An AI marketplace",
  "A consumer AI application",
  "An “AI tools” company",
] as const;

export const AOTI_THESIS = {
  requirement:
    "Autonomous systems require verifiable operational trust, governed execution, and rooted identity infrastructure.",
  provision:
    "Keyra provides the operational trust architecture required for secure autonomous systems at enterprise, telecom, and sovereign scale.",
} as const;

export const AOTI = {
  eyebrow: "Infrastructure Category",
  title: "Autonomous Operational Trust Infrastructure",
  acronym: "AOTI",
  definition:
    "AOTI represents the foundational infrastructure layer for secure autonomous systems — rooted machine identity, operational authorization, runtime governance, execution verification, trust federation, sovereign compliance, telecom-rooted authentication, and auditability for autonomous operations.",
  positioning: [
    "Infrastructure, not application software",
    "Neutral operational trust infrastructure",
    "Deployable global architecture",
    "Enterprise-grade operational governance",
    "Telecom-rooted trust federation",
    "Sovereign execution infrastructure",
  ],
  supports: [
    "Enterprise autonomous systems",
    "Government operational systems",
    "Telecom ecosystems",
    "Industrial orchestration",
    "Third-party AI ecosystems",
    "Robotics platforms",
    "Autonomous infrastructure providers",
  ],
} as const;

export type KotaPlane = {
  id: string;
  name: string;
  description: string;
  functions: readonly string[];
};

export const KOTA_PLANES: readonly KotaPlane[] = [
  {
    id: "identity",
    name: "Identity Plane",
    description: "Rooted machine and human identity infrastructure.",
    functions: [
      "Cryptographic identity issuance",
      "SIM/eSIM/eUICC rooted identity",
      "Machine identity lifecycle management",
      "Trust anchoring",
      "Federated identity",
      "Credential orchestration",
      "Hardware-rooted identity",
    ],
  },
  {
    id: "authorization",
    name: "Authorization Plane",
    description: "Operational execution permissions and delegated authority.",
    functions: [
      "Runtime authorization",
      "Policy inheritance",
      "Delegated execution",
      "Least-privilege enforcement",
      "Authorization telemetry",
      "Execution boundaries",
      "Dynamic operational permissions",
    ],
  },
  {
    id: "governance",
    name: "Governance Plane",
    description: "Regulatory and sovereign operational governance.",
    functions: [
      "Compliance mapping",
      "Sovereign policy enforcement",
      "Regional operational controls",
      "Audit governance",
      "Operational jurisdiction",
      "Trust regulation frameworks",
      "Execution governance",
    ],
  },
  {
    id: "execution",
    name: "Execution Plane",
    description: "Verified operational execution infrastructure.",
    functions: [
      "Execution signing",
      "Runtime verification",
      "Trusted execution pathways",
      "Execution attestation",
      "Policy-bound execution",
      "Execution revocation",
      "Secure operational sequencing",
    ],
  },
  {
    id: "federation",
    name: "Federation Plane",
    description: "Cross-border and cross-network trust interoperability.",
    functions: [
      "Telecom federation",
      "Enterprise federation",
      "Sovereign federation",
      "Trust exchange",
      "Interoperability orchestration",
      "Roaming trust verification",
      "Operational trust synchronization",
    ],
  },
  {
    id: "audit",
    name: "Audit Plane",
    description: "Operational observability and accountability infrastructure.",
    functions: [
      "Immutable logging",
      "Trust telemetry",
      "Runtime analytics",
      "Operational traceability",
      "Forensic accountability",
      "Policy audit pipelines",
      "Execution observability",
    ],
  },
  {
    id: "orchestration",
    name: "Orchestration Plane",
    description: "Autonomous workflow coordination systems.",
    functions: [
      "Workflow governance",
      "Operational sequencing",
      "Agent orchestration",
      "Escalation routing",
      "Human approval systems",
      "Execution synchronization",
      "Operational coordination",
    ],
  },
  {
    id: "telecom",
    name: "Telecom Trust Plane",
    description: "Carrier-grade trust federation infrastructure.",
    functions: [
      "Telecom PKI",
      "SIM-rooted trust",
      "eSIM/eUICC orchestration",
      "Roaming trust validation",
      "Carrier federation",
      "Telecom trust exchange",
      "Device trust anchoring",
    ],
  },
] as const;

export type Protocol = {
  id: string;
  acronym: string;
  name: string;
  description: string;
  supports: readonly string[];
};

export const PROTOCOLS: readonly Protocol[] = [
  {
    id: "kip",
    acronym: "KIP",
    name: "Keyra Identity Protocol",
    description: "Cryptographically verifiable identity infrastructure.",
    supports: [
      "Human identity",
      "Machine identity",
      "Telecom identity",
      "Federation identity",
    ],
  },
  {
    id: "kap",
    acronym: "KAP",
    name: "Keyra Authorization Protocol",
    description: "Runtime authorization and delegated execution framework.",
    supports: [
      "Policy orchestration",
      "Operational permissions",
      "Runtime enforcement",
      "Delegated authority",
    ],
  },
  {
    id: "ktp",
    acronym: "KTP",
    name: "Keyra Trust Protocol",
    description: "Operational trust exchange infrastructure.",
    supports: [
      "Trust synchronization",
      "Trust scoring",
      "Federation trust",
      "Execution verification",
    ],
  },
  {
    id: "rep",
    acronym: "REP",
    name: "Rooted Execution Protocol",
    description: "Signed operational execution verification.",
    supports: [
      "Execution attestation",
      "Trusted execution",
      "Runtime verification",
      "Revocation controls",
    ],
  },
  {
    id: "stf",
    acronym: "STF",
    name: "Sovereign Trust Federation",
    description: "Cross-border operational trust interoperability.",
    supports: [
      "Sovereign compliance",
      "National federation",
      "Regional governance",
      "Operational jurisdiction",
    ],
  },
  {
    id: "atp",
    acronym: "ATP",
    name: "Autonomous Trust Policy",
    description: "Machine-readable operational governance framework.",
    supports: [
      "Runtime governance",
      "Policy enforcement",
      "Execution constraints",
      "Compliance orchestration",
    ],
  },
  {
    id: "ovp",
    acronym: "OVP",
    name: "Operational Verification Protocol",
    description: "Runtime observability and execution verification.",
    supports: [
      "Telemetry validation",
      "Runtime analytics",
      "Operational monitoring",
      "Trust observability",
    ],
  },
  {
    id: "tfp",
    acronym: "TFP",
    name: "Telecom Federation Protocol",
    description: "Carrier-grade trust federation architecture.",
    supports: [
      "Telecom interoperability",
      "Roaming trust",
      "Carrier identity exchange",
      "Telecom orchestration",
    ],
  },
] as const;

export const STANDARDS = [
  "GSMA",
  "eSIM / eUICC",
  "FIDO2",
  "OAuth 2.0",
  "OpenID Connect",
  "SCIM",
  "NIST AI Governance Framework",
  "ISO 27001",
  "ETSI",
  "Zero Trust Architecture",
  "Sovereign cloud frameworks",
  "Telecom PKI systems",
  "Enterprise federation standards",
] as const;

export const SECURITY_DOCTRINE = [
  "Zero Trust execution",
  "Least-privilege orchestration",
  "Hardware-rooted trust",
  "Secure enclave execution",
  "Cryptographic attestation",
  "Runtime verification",
  "Execution revocation",
  "Trust isolation boundaries",
  "Credential rotation",
  "Post-quantum readiness",
  "Policy-bound execution",
] as const;

export type LifecyclePhase = {
  phase: string;
  focus: string;
  controls: typeof LIFECYCLE_UNIVERSAL_CONTROLS;
};

export const TRUST_LIFECYCLE: readonly LifecyclePhase[] = [
  {
    phase: "Provisioning",
    focus: "Identity issuance and trust anchor establishment for operational systems.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Verification",
    focus: "Credential validation and hardware-rooted trust anchor verification.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Authorization",
    focus: "Policy-bound permissions and delegated execution authority.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Trust Elevation",
    focus: "Escalation governance and human approval routing under jurisdiction.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Runtime Governance",
    focus: "Continuous policy orchestration and compliance validation at runtime.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Attestation",
    focus: "Execution signing and cryptographically verifiable operational proof.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Federation",
    focus: "Cross-network trust exchange and roaming verification at scale.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Suspension",
    focus: "Operational halt controls and governed trust degradation.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Revocation",
    focus: "Credential revocation, execution termination, and forensic preservation.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
  {
    phase: "Retirement",
    focus: "Identity decommissioning, audit finalization, and trust record preservation.",
    controls: LIFECYCLE_UNIVERSAL_CONTROLS,
  },
] as const;

export type DeploymentModel = {
  id: string;
  title: string;
  items: readonly string[];
};

export const DEPLOYMENT_MODELS: readonly DeploymentModel[] = [
  {
    id: "sovereign",
    title: "Sovereign Deployment Architecture",
    items: [
      "Sovereign trust zones",
      "National identity federation",
      "Sovereign cloud integration",
      "Regional compliance isolation",
      "Operational jurisdiction controls",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Deployment Architecture",
    items: [
      "Hybrid deployment",
      "Private trust nodes",
      "Enterprise federation",
      "Runtime gateways",
      "On-prem orchestration",
    ],
  },
  {
    id: "telecom",
    title: "Telecom Carrier Deployment",
    items: [
      "Roaming federation",
      "Telecom trust exchange",
      "SIM-rooted identity",
      "Operator interoperability",
      "Telecom authorization routing",
    ],
  },
  {
    id: "edge",
    title: "Edge Trust Deployment",
    items: [
      "Edge verification nodes",
      "Low-latency authorization",
      "Disconnected operational resilience",
      "Local trust execution",
    ],
  },
] as const;

export const OTCC_CAPABILITIES = [
  "Trust telemetry",
  "Execution monitoring",
  "Runtime analytics",
  "Policy orchestration",
  "Operational observability",
  "Compliance dashboards",
  "Federation administration",
  "Escalation management",
  "Authorization governance",
  "Forensic traceability",
] as const;

export const OBSERVABILITY = [
  "Trust telemetry streams",
  "Runtime observability",
  "Execution analytics",
  "Federation observability",
  "Policy propagation analytics",
  "Trust event monitoring",
  "Operational traceability",
  "Forensic analytics",
] as const;

export type Scenario = {
  sector: string;
  requirement: string;
  controls: readonly string[];
};

export const SCENARIOS: readonly Scenario[] = [
  {
    sector: "Banking",
    requirement:
      "Autonomous treasury systems may not finalize regulated financial operations without:",
    controls: [
      "Rooted identity validation",
      "Delegated authorization",
      "Runtime governance validation",
      "Execution attestation",
      "Human escalation authority",
      "Audit chain preservation",
    ],
  },
  {
    sector: "Healthcare",
    requirement:
      "Operational healthcare systems may not execute regulated medical workflows without:",
    controls: [
      "Physician authorization",
      "Sovereign compliance validation",
      "Operational auditability",
      "Runtime execution verification",
    ],
  },
  {
    sector: "Government",
    requirement:
      "Operational government systems may not execute state workflows without:",
    controls: [
      "Sovereign trust enforcement",
      "Regional governance validation",
      "Delegated execution controls",
      "Operational accountability",
    ],
  },
  {
    sector: "Telecom",
    requirement: "Telecom operational systems require:",
    controls: [
      "SIM-rooted trust",
      "Carrier federation",
      "Roaming authorization validation",
      "Telecom PKI orchestration",
      "Operational trust synchronization",
    ],
  },
] as const;

export const GLOBAL_MAP_LAYERS = [
  "Sovereign trust regions",
  "Telecom federation zones",
  "Operational trust exchanges",
  "Regional governance domains",
  "Compliance routing boundaries",
  "Trust synchronization infrastructure",
  "Federation pathways",
] as const;

export type WhitePaper = {
  id: string;
  title: string;
  category: string;
  abstract: string;
  readExcerpt: string;
  narration: string;
  conversationalPrompts: readonly string[];
};

export const INSTITUTIONAL_CREDENTIALS = [
  {
    id: "telecom",
    label: "Telecom operator credentials",
    detail: "GSMA-aligned carrier identity and roaming federation verification.",
  },
  {
    id: "government",
    label: "Government institutional credentials",
    detail: "Sovereign agency verification for classified operational trust research.",
  },
  {
    id: "university",
    label: "University research credentials",
    detail: "Academic institution access for interoperability and governance studies.",
  },
] as const;

export const OTCC_METRICS = [
  { label: "Active trust sessions", value: "2.4M", delta: "+12.3%" },
  { label: "Execution attestations / hr", value: "847K", delta: "+8.1%" },
  { label: "Federation exchanges", value: "156", delta: "Stable" },
  { label: "Policy violations blocked", value: "1,204", delta: "-4.2%" },
] as const;

export const WHITE_PAPERS: readonly WhitePaper[] = [
  {
    id: "aoti-framework",
    title: "Autonomous Operational Trust Infrastructure Framework",
    category: "Operational Governance",
    abstract:
      "Formal architecture for AOTI deployment at enterprise, telecom, and sovereign scale.",
    readExcerpt:
      "Autonomous Operational Trust Infrastructure establishes a deterministic layer between autonomous execution and operational accountability. Unlike probabilistic authentication models, AOTI requires rooted identity, policy-bound authorization, and cryptographically verifiable execution at every operational boundary. This framework defines deployment topology, governance inheritance, and federation protocols required for carrier-scale autonomous systems.",
    narration:
      "This paper establishes AOTI as infrastructure — not application software. We examine how rooted machine identity, runtime governance, and execution attestation combine into a deployable architecture for enterprise and sovereign autonomous operations.",
    conversationalPrompts: [
      "What defines AOTI as infrastructure rather than application software?",
      "How does AOTI differ from probabilistic trust models?",
      "What deployment topologies does the framework support?",
    ],
  },
  {
    id: "telecom-identity",
    title: "Telecom-Rooted Machine Identity Systems",
    category: "Identity Infrastructure",
    abstract:
      "SIM/eSIM/eUICC anchored identity for autonomous operational systems.",
    readExcerpt:
      "Telecom-rooted identity provides hardware-anchored trust for machine operations. By binding autonomous system identity to SIM/eSIM/eUICC credentials, operational trust inherits carrier-grade PKI, roaming federation, and device attestation pathways unavailable to software-only identity models.",
    narration:
      "Machine identity anchored in telecom infrastructure represents the highest-assurance root of trust for autonomous systems operating across networks, borders, and operational jurisdictions.",
    conversationalPrompts: [
      "How does SIM-rooted identity differ from software credentials?",
      "What is the role of eUICC in machine identity lifecycle?",
      "How does roaming trust validation work at scale?",
    ],
  },
  {
    id: "runtime-authorization",
    title: "Runtime Authorization Models for Governed Execution",
    category: "Authorization",
    abstract:
      "Policy-bound delegated authority and least-privilege orchestration doctrine.",
    readExcerpt:
      "Runtime authorization governs what autonomous systems may execute, when, and under whose delegated authority. This paper defines policy inheritance chains, least-privilege enforcement boundaries, and authorization telemetry required for regulated autonomous operations in banking, healthcare, and government.",
    narration:
      "Governed execution requires authorization that persists through runtime — not merely at authentication. We define the operational permission model for autonomous systems at scale.",
    conversationalPrompts: [
      "What is delegated execution authority?",
      "How does policy inheritance work across operational boundaries?",
      "What telemetry is required for authorization audit?",
    ],
  },
  {
    id: "sovereign-federation",
    title: "Sovereign Trust Federation Architecture",
    category: "Federation",
    abstract:
      "Cross-border operational trust interoperability and jurisdictional controls.",
    readExcerpt:
      "Sovereign trust federation enables cross-border autonomous operations while preserving national jurisdictional controls. Regional governance domains, compliance routing boundaries, and operational jurisdiction enforcement define how trust exchanges occur between sovereign trust zones without compromising regulatory sovereignty.",
    narration:
      "Cross-border autonomous operations require trust federation that respects sovereign boundaries. This architecture defines how national and regional trust zones interoperate.",
    conversationalPrompts: [
      "How are sovereign trust zones defined?",
      "What controls preserve operational jurisdiction?",
      "How does compliance routing work across borders?",
    ],
  },
  {
    id: "execution-verification",
    title: "Execution Verification and Attestation Doctrine",
    category: "Execution",
    abstract:
      "Signed operational execution, revocation controls, and forensic traceability.",
    readExcerpt:
      "Every autonomous operation must be cryptographically attestable. Execution signing, runtime verification, trusted execution pathways, and revocation controls form the execution verification doctrine — ensuring that operational actions are provable, auditable, and revocable when trust conditions change.",
    narration:
      "Verifiable execution is the foundation of operational accountability. This doctrine defines how autonomous actions are signed, verified, and revoked at runtime.",
    conversationalPrompts: [
      "What is execution attestation?",
      "How does execution revocation work?",
      "What forensic records are preserved?",
    ],
  },
  {
    id: "kota-architecture",
    title: "KOTA: Keyra Operational Trust Architecture",
    category: "Architecture",
    abstract:
      "Eight-plane infrastructure model for autonomous operational trust.",
    readExcerpt:
      "KOTA organizes operational trust into eight infrastructure planes: Identity, Authorization, Governance, Execution, Federation, Audit, Orchestration, and Telecom Trust. Each plane operates independently yet federates through defined protocol interfaces — forming the complete architectural doctrine for AOTI deployment.",
    narration:
      "KOTA is the formal architectural doctrine of Keyra AOTI. Eight planes, one coherent operational trust infrastructure for autonomous systems globally.",
    conversationalPrompts: [
      "What are the eight KOTA infrastructure planes?",
      "How do planes interact through protocols?",
      "Which plane handles telecom-rooted trust?",
    ],
  },
  {
    id: "machine-identity-lifecycle",
    title: "Machine Identity Lifecycle Management",
    category: "Identity Infrastructure",
    abstract:
      "Provisioning through retirement governance for machine operational identity.",
    readExcerpt:
      "Machine identity lifecycle spans provisioning, verification, authorization, trust elevation, runtime governance, attestation, federation, suspension, revocation, and retirement. Each phase requires governance controls, operational telemetry, auditability, and execution traceability — forming complete lifecycle infrastructure for machine operations.",
    narration:
      "Machine identity is not a credential — it is a governed lifecycle. From provisioning to retirement, every phase requires operational trust infrastructure.",
    conversationalPrompts: [
      "What are the ten lifecycle phases?",
      "How is trust elevation governed?",
      "What happens during identity retirement?",
    ],
  },
  {
    id: "standards-interoperability",
    title: "Operational Interoperability and Standards Alignment",
    category: "Standards",
    abstract:
      "GSMA, FIDO2, OAuth, NIST, and sovereign framework integration patterns.",
    readExcerpt:
      "AOTI integrates with GSMA, eSIM/eUICC, FIDO2, OAuth 2.0, OpenID Connect, SCIM, NIST AI Governance Framework, ISO 27001, ETSI, Zero Trust Architecture, and sovereign cloud frameworks — ensuring regulator-ready, telecom-grade, globally interoperable deployment without proprietary lock-in.",
    narration:
      "Standards alignment is not optional for infrastructure at sovereign scale. This paper maps AOTI integration patterns across global identity, security, and governance frameworks.",
    conversationalPrompts: [
      "Which standards does AOTI align with?",
      "How does AOTI integrate with GSMA frameworks?",
      "What is the NIST AI Governance alignment?",
    ],
  },
] as const;

export const DEVELOPER_PLATFORM = {
  eyebrow: "Developer & Enterprise Platform",
  title: "Deployable operational trust infrastructure.",
  capabilities: [
    "REST & GraphQL APIs",
    "Multi-language SDKs",
    "CLI tooling",
    "Runtime simulation labs",
    "Trust testing environments",
    "Execution certification",
    "Federation tooling",
    "Observability APIs",
    "Orchestration APIs",
    "Policy engines",
    "Deployment automation",
  ],
} as const;

export const COMMERCIAL_MODEL = [
  { model: "Trust-as-a-Service (TaaS)", detail: "Metered operational trust infrastructure" },
  { model: "Authorization transaction metering", detail: "Per-execution authorization economics" },
  { model: "Federation licensing", detail: "Cross-network trust exchange licensing" },
  { model: "Sovereign node deployment", detail: "National and regional trust zone deployment" },
  { model: "Telecom trust exchange", detail: "Carrier-grade federation infrastructure" },
  { model: "Orchestration licensing", detail: "Workflow governance and agent coordination" },
  { model: "Runtime verification services", detail: "Execution attestation and monitoring" },
  { model: "Execution certification infrastructure", detail: "Operational compliance certification" },
] as const;

export const FINAL_STATEMENT = {
  headline: "Operational Trust Infrastructure For Secure Autonomous Operations",
  body: "Autonomous systems require operational trust infrastructure to operate securely at scale. Keyra provides the foundational Autonomous Operational Trust Infrastructure required for secure autonomous operations globally.",
  closing:
    "Autonomous systems require verifiable operational trust, governed execution, and rooted identity infrastructure. Keyra provides the operational trust architecture required for secure autonomous systems at enterprise, telecom, and sovereign scale.",
  cta: { label: "Contact Enterprise", href: "https://keyra.ie/contact" },
  secondaryCta: { label: "Explore KOTA", href: "#kota" },
} as const;
