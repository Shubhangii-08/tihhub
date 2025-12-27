/**
 * A utility function to create a URL-friendly slug from a project name.
 * This helps in creating clean URLs for project detail pages.
 * @param name - The name of the project.
 * @returns A URL-friendly string.
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with a hyphen
    .replace(/(^-|-$)/g, ""); // Remove leading or trailing hyphens
}

/**
 * Defines the structure for a single project, combining all relevant details.
 */
export interface Project {
  name: string; // The full name or title of the project.
  pi: string; // The Principal Investigator(s).
  slug: string; // A unique, URL-friendly identifier.
  status?: "Ongoing" | "Completed"; // The current status of the project.
  sanctionNo?: string; // The sanction number, if applicable.
  image?: string; // The path to the project's representative image.
  description: string; // A concise summary of the project.
  highlights?: string[]; // A list of key features or achievements.
  // Optional detailed fields, if they exist for a project
  fullDescription?: string;
  technologies?: string[];
  website?: string;
}

/**
 * Defines the structure for a category, which contains a title and a list of projects.
 */
export interface ProjectCategory {
  title: string;
  projects: Project[];
}

/**
 * The master list of all projects, categorized for easy access and rendering.
 */
export const projectCategories: ProjectCategory[] = [
  {
    title: "Computer Vision for Autonomous Systems",
    projects: [
      {
        name: "Seeing through partial occlusion",
        pi: "Dr. Himanshu Kumar",
        status: "Completed",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/02",
        slug: generateSlug("Seeing through partial occlusion"),
        image: "/image/project/",
        description:
          "Real-time system to reveal and identify partially occluded man-made objects/signs in challenging scenes such as foliage or mesh.",
        highlights: [
          "Real-time inference under occlusions",
          "Targeted for field deployments",
        ],
      },
      {
        name: "Visual Intelligence Generation from Wide Area Sensing",
        pi: "Dr. Manish Narwaria",
        status: "Completed",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/06",
        slug: generateSlug(
          "Visual Intelligence Generation from Wide Area Sensing"
        ),
        image: "/image/project/",
        description:
          "Capture long-duration activities in natural landscapes and perform ISR from asynchronous multi-stream video sensing for defense applications.",
        highlights: [
          "Asynchronous multi-stream fusion",
          "ISR insights over long durations",
        ],
      },
      {
        name: "Human in loop Control for semi- Autonomous system under presence of sensing and actuation delay",
        pi: "Dr. Niladri Sekhar Tripathy",
        status: "Completed",
        sanctionNo: "/image/project/",
        slug: generateSlug(
          "Human in loop Control for semi- Autonomous system under presence of sensing and actuation delay"
        ),
        image: "/images/projects/human-in-loop-control.webp",
        description:
          "Develop shared autonomy with human-in-the-loop control under sensing and actuation delays using visual sensing and immersive interaction.",
        highlights: ["Shared autonomy", "Delay-aware control"],
      },
      {
        name: "Real-Time 3d Scene reconstruction and localization of Autonomous ground vehicles in unknown environment",
        pi: "Dr. Rajendra Nagar",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/04",
        slug: generateSlug(
          "Real-Time 3d Scene reconstruction and localization of Autonomous ground vehicles in unknown environment"
        ),
        image: "/image/project/",
        description:
          "Solve real-time 3D reconstruction and pose estimation in unknown, unstructured environments using Stereo, 3D LiDAR and IMU.",
        highlights: [
          "Stereo + LiDAR + IMU fusion",
          "Real-time SLAM in unstructured scenes",
        ],
      },
      {
        name: "TrustMe: Explainable Adversarial Attack Detection and Mitigation for Object Recognition Algorithms",
        pi: "Dr. Richa Singh",
        status: "Ongoing",
        sanctionNo: "/image/project/",
        slug: generateSlug(
          "TrustMe: Explainable Adversarial Attack Detection and Mitigation for Object Recognition Algorithms"
        ),
        image: "/images/projects/TrustMe-Explainable.webp",
        description:
          "Detect and mitigate adversarial attacks on deep object recognition with explainable AI to ensure dependable perception.",
        highlights: [
          "Attack detection & mitigation",
          "XAI for object recognition",
        ],
      },
      {
        name: "Generalizing Robot Perception for Indoor and Outdoor Scenarios by Combining Spatial and Semantic Reasoning",
        pi: "Dr. P. B. Sujit",
        status: "Ongoing",
        sanctionNo: "/image/project/",
        slug: generateSlug(
          "Generalizing Robot Perception for Indoor and Outdoor Scenarios by Combining Spatial and Semantic Reasoning"
        ),
        image: "/images/projects/robot-perception.webp",
        description:
          "Develop NewSLAM-like framework integrating semantic and spatial reasoning to generalize navigation across indoor/outdoor scenes.",
        highlights: [
          "Semantic + spatial reasoning",
          "Generalization across domains",
        ],
      },
      {
        name: "Graph based Statistical analysis of Entire Scenes by combining multi sensor, Multi Perspective Video Streams",
        pi: "Dr. Saket Anand",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-23/22",
        slug: generateSlug(
          "Graph based Statistical analysis of Entire Scenes by combining multi sensor, Multi Perspective Video Streams"
        ),
        image: "/image/project/",
        description:
          "Design heterogeneous sensor-fusion and multi-object tracking for AGVs using multi-camera and LiDAR multi-perspective video streams.",
        highlights: [
          "Heterogeneous fusion",
          "Multi-object tracking from multi-perspective feeds",
        ],
      },
    ],
  },
  {
    title: "Computer Vision for Better Living: Healthcare and Biosphere",
    projects: [
      {
        name: "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging",
        pi: "Dr. Bhanu Duggal, Dr. Angshuman Paul",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/45",
        slug: generateSlug(
          "Non-invasive Diagnosis of Coronary Artery Disease using miRNA and Coronary Imaging"
        ),
        image: "/image/project/",
        description:
          "Identification of non-invasive biomarkers for CAD by correlating miRNA profiles with intra-coronary imaging to understand plaque burden, composition and instability.",
        highlights: ["miRNA biomarker discovery", "IVUS correlation"],
      },
      {
        name: "Evaluation and development of ML models for detection, localisation and characterisation of traumatic rib fractures on CT scans",
        pi: "Dr. Deepak Mishra",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/22",
        slug: generateSlug(
          "Evaluation and development of ML models for detection, localisation and characterisation of traumatic rib fractures on CT scans"
        ),
        image: "/image/project/",
        description:
          "Create annotated datasets, evaluate SOTA ML/DL, and develop a novel model with structured report generation for automated rib fracture analysis on CT.",
        highlights: [
          "Expert-annotated dataset",
          "Structured radiology-like reporting",
        ],
      },
      {
        name: "AI Based Risk Satisfaction Referral models using eye images in a public health setting",
        pi: "Dr. Richa Singh, Dr. Bhanu Duggal",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/48",
        slug: generateSlug(
          "AI Based Risk Satisfaction Referral models using eye images in a public health setting"
        ),
        image: "/image/project/",
        description:
          "AI-based risk stratification using retinal images for early diagnosis and referral; build an eye image repository for precision medicine research.",
        highlights: [
          "DR & Cataract early detection",
          "Public health screening",
        ],
      },
      {
        name: "Hub for Radiogenomics Research & Service",
        pi: "Prof. Santanu Chaudhury",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/43",
        slug: generateSlug("Hub for Radiogenomics Research & Service"),
        image: "/image/project/",
        description:
          "Create a repository and portal linking clinical, radiologic, genomic and pathology data; build a collaborative network for radiogenomics research and services.",
        highlights: [
          "Radiogenomics data hub",
          "DL models linking imaging and genomics",
        ],
      },
      {
        name: "Capturing Dynamics of Cellular Behavior using Biosphere tunable Soft Hydrogel: Development of a Bio-imaging based ML Model to Decipher Cell fate & Morphology",
        pi: "Prof. Surajit Ghosh",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/21",
        slug: generateSlug(
          "Capturing Dynamics of Cellular Behavior using Biosphere tunable Soft Hydrogel: Development of a Bio-imaging based ML Model to Decipher Cell fate & Morphology"
        ),
        image: "/image/project/",
        description:
          "CV-based system for diabetic wound healing prediction using biocompatible hydrogel and ML to enable early, personalized interventions.",
        highlights: [
          "3D bioprinted tissue validation",
          "Objective disease signatures",
        ],
      },
      {
        name: "Computer Vision for Plant Phenomics and Smart Agriculture",
        pi: "Dr. Rabi N. Sahoo",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/36",
        slug: generateSlug(
          "Computer Vision for Plant Phenomics and Smart Agriculture"
        ),
        image: "/image/project/",
        description:
          "Imaging and CV methods to quantify plant traits and stresses; farmer-facing mobile apps; CV-based automation for variable input applications.",
        highlights: [
          "Trait and yield quantification",
          "Stress (drought/temp) & nutrient diagnosis",
        ],
      },
      {
        name: "Computer Vision based monitoring of fishes in marine cage farming",
        pi: "Dr. V. V. R. Suresh (ICAR-CMFRI)",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/35",
        slug: generateSlug(
          "Computer Vision based monitoring of fishes in marine cage farming"
        ),
        image: "/image/project/",
        description:
          "Digital image/video database creation and CV algorithms for size/biomass estimation and health ROI identification for fish in marine cages.",
        highlights: ["Size & biomass estimation", "Health ROI identification"],
      },
      {
        name: "Video Analytics for Wildlife Monitoring and Conservation",
        pi: "Dr. Richa Singh",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/20",
        slug: generateSlug(
          "Video Analytics for Wildlife Monitoring and Conservation"
        ),
        image: "/image/project/",
        description:
          "BirdCollect dataset and analytics for composition, density and distribution; supports crowd counting, density estimation, segmentation, and species classification.",
        highlights: [
          "BirdCollect dataset",
          "Crowd counting & species classification",
        ],
      },
    ],
  },
  {
    title: "CV and VR for Industry 4.0",
    projects: [
      {
        name: "Vision System for Integration with Mass manufacturing Line of Bearing Rollars",
        pi: "Prof. Kaushal A Desai",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/31",
        slug: generateSlug(
          "Vision System for Integration with Mass manufacturing Line of Bearing Rollars"
        ),
        image: "/image/project/",
        description:
          "Hardware and software to capture complete surface images of tapered bearing rollers for in-line vision-based surface inspection.",
        highlights: ["Full-surface capture", "Inline inspection"],
      },
      {
        name: "Spindle-mounted Vision-based On-machine Inspection System for CNC Milling",
        pi: "Prof. Kaushal Desai",
        status: "Ongoing",
        sanctionNo: "--",
        slug: generateSlug(
          "Spindle-mounted Vision-based On-machine Inspection System for CNC Milling"
        ),
        image: "/image/project/",
        description:
          "Spindle-mounted vision-based on-machine inspection for CNC milling to monitor surface quality and settings, aligning with Industry 4.0.",
        highlights: ["On-machine inspection", "Industry 4.0 alignment"],
      },
      {
        name: "Development of Concealed Object Detection and Recognition System",
        pi: "Prof. Gaurav Bhatnagar",
        status: "Ongoing",
        sanctionNo: "--",
        slug: generateSlug(
          "Development of Concealed Object Detection and Recognition System"
        ),
        image: "/image/project/",
        description:
          "Deep learning framework for class-agnostic and class-based object detection for THz imaging.",
        highlights: ["THz imaging", "Class-agnostic detection"],
      },
    ],
  },
  {
    title: "AR-VR for X(including Games)",
    projects: [
      {
        name: "Design and Development of A Software Platform to Create Immersive Content from Digitized and Born Digital Documents",
        pi: "Dr. Chiranjoy",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2021-22/47",
        slug: generateSlug(
          "Design and Development of A Software Platform to Create Immersive Content from Digitized and Born Digital Documents"
        ),
        image: "/image/project/Born Digital Documents.webp",
        description:
          "Open-source desktop/web tools to create AV content for AR/VR from images, a mobile AR app (Android/iOS), and an open digital asset library.",
        highlights: [
          "Open-source tools",
          "Mobile AR app",
          "Digital asset library",
        ],
      },
      {
        name: "Gamification of Vadnagar ASI site",
        pi: "--",
        status: "Ongoing",
        sanctionNo: "--",
        slug: generateSlug("Gamification of Vadnagar ASI site"),
          image: "/image/project/vadnagar.webp",
        description:
          "Game experience to tell stories and heritage of the Vadnagar ASI site.",
        highlights: ["Heritage storytelling", "Game-based learning"],
      },
      {
        name: "Heritage Digitization",
        pi: "--",
        status: "Ongoing",
        sanctionNo: "F(404)/Sanghralaya/10226",
        slug: generateSlug("Heritage Digitization"),
        image: "/image/project/Heritage Digitization.webp",
        description:
          "Digitizing manuscripts and enabling online access with annotation and robust testbeds to ensure preservation and searchable, conversational access.",
        highlights: ["Digitization & access", "Annotated testbeds"],
      },
      {
        name: "VR4CIMT- Virtual reality Based compassion and integrity training platform for Doctor Patient Communication",
        pi: "Dr. T K Shrikant",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/33",
        slug: generateSlug(
          "VR4CIMT- Virtual reality Based compassion and integrity training platform for Doctor Patient Communication"
        ),
        image: "/image/project/VR4CIMT.webp",
        description:
          "Standardized VR content and ECAs for doctor-patient communication, integrated with ASR/TTS; includes models and animations for multiple virtual patients.",
        highlights: ["ECA-driven VR sims", "ASR/TTS integration"],
      },
      {
        name: "Haptics based Medical Simulators for Abdomen Palpation and Pulse Behaviour",
        pi: "Dr. Padma Priya",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/37",
        slug: generateSlug(
          "Haptics based Medical Simulators for Abdomen Palpation and Pulse Behaviour"
        ),
        image: "/image/project/Haptics based Medical Simulators.webp",
        description:
          "Custom haptic device and immersive environment to simulate abdomen palpation and pulse perception for medical training.",
        highlights: ["Custom haptic device", "Immersive training"],
      },
      {
        name: "Olfactory Enabled Media & Food Engineering: Future of Immersive Food Experience",
        pi: "Dr. Vishakha Pareek",
        status: "Ongoing",
        sanctionNo: "--",
        slug: generateSlug(
          "Olfactory Enabled Media & Food Engineering: Future of Immersive Food Experience"
        ),
        image: "/image/project/Olfactory.webp",
        description:
          "Prototype smell-enabled immersive food experiences connected with 360° AR/VR apps; analyze olfactory information for neuro exploration of odors.",
        highlights: ["Smell-enabled XR", "360° AR/VR"],
      },
      {
        name: "Haptics Based Medical Simulators for Palpation and Tele Diagnosis",
        pi: "Dr. Amit Bhardwaj",
        status: "Ongoing",
        sanctionNo: "TIH/Ihub Drishti/Project/2022-23/34",
        slug: generateSlug(
          "Haptics Based Medical Simulators for Palpation and Tele Diagnosis"
        ),
        image: "/image/project/Haptics Based Medical Simulators for Palpation and Tele Diagnosis.webp",
        description:
          "Force-feedback simulators for abdomen palpation and pulse behavior to support diagnosis training and tele-diagnosis.",
        highlights: ["Force-feedback", "Tele-diagnosis support"],
      },
    ],
  },
  {
    title: "RAKSHAK (AI and Data Science for COVID)",
    projects: [
      {
        name: "Compressed Sensing Algorithms for Group Testing of Pooled Samples",
        pi: "Dr. Manoj Gopalkrishnan",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "Compressed Sensing Algorithms for Group Testing of Pooled Samples"
        ),
        image: "/image/project/Compressed Sensing Algorithms.webp",
        description:
          "Compressed sensing methods for efficient pooled sample testing to scale diagnostics.",
        highlights: ["Group testing efficiency", "Compressed sensing"],
      },
      {
        name: "AI-driven screening of COVID-19 using chest X-ray images",
        pi: "Dr. Richa Singh",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "AI-driven screening of COVID-19 using chest X-ray images"
        ),
        image: "/image/project/AI-driven screening of COVID-19.webp",
        description:
          "Explainable AI for COVID-19 pneumonia detection on chest radiographs; COMiT-Net for joint classification and segmentation.",
        highlights: ["Explainable AI", "COMiT-Net"],
      },
      {
        name: "Campus Rakshak: an agent-based simulation framework for assessment of intervention strategy against covid-19 spreading in campuses",
        pi: "Dr. Adway Mitra",
        status: "Completed",
        sanctionNo: "IITJ/RAKSHAK/2020-21/01",
        slug: generateSlug(
          "Campus Rakshak: an agent-based simulation framework for assessment of intervention strategy against covid-19 spreading in campuses"
        ),
        image: "/image/project/Campus Rakshak.webp",
        description:
          "User-friendly simulator to specify campus, containment policies and disease parameters; visualize results via maps and plots.",
        highlights: ["Agent-based simulation", "Policy what-if analysis"],
      },
      {
        name: "Social Distance Alert and Monitoring System using smartphone, IoT and AI",
        pi: "Dr. Brejesh Lall",
        status: "Completed",
        sanctionNo: "IITJ/RAKSHAK/2020-21/02",
        slug: generateSlug(
          "Social Distance Alert and Monitoring System using smartphone, IoT and AI"
        ),
        image: "/image/project/social_distance_alert.webp",
        description:
          "An AI-powered system utilizing smartphones and IoT devices to monitor and enforce social distancing protocols in public spaces.",
        highlights: ["Social distancing", "IoT monitoring", "AI alerts"],
      },
      {
        name: "Smart Health Solution for Rapid Mass Screening using Integrated Telemedicine",
        pi: "Dr. Sumit Kalra",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "Smart Health Solution for Rapid Mass Screening using Integrated Telemedicine"
        ),
        image: "/image/project/Smart Health Solution.webp",
        description:
          "A telemedicine platform integrated with smart health devices for rapid and remote mass screening of individuals.",
        highlights: ["Mass screening", "Telemedicine", "Smart health"],
      },
      {
        name: "Autonomous Detection of Social Distancing and Hygienic etiquettes",
        pi: "Dr. Mayank Vatsa",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "Autonomous Detection of Social Distancing and Hygienic etiquettes"
        ),
        image: "/image/project/Autonomous Detection of Social Distancing.webp",
        description:
          "AI-based computer vision system to autonomously detect compliance with social distancing and hygiene practices like mask-wearing.",
        highlights: ["Computer vision", "Social distancing", "Hygiene monitoring"],
      },
      {
        name: "Laxman Rekha: AI biometric driven home quarantine management application using mobile based continuous recognition and geofencing",
        pi: "Dr. Richa Singh",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "Laxman Rekha: AI biometric driven home quarantine management application using mobile based continuous recognition and geofencing"
        ),
        image: "/image/project/Laxman Rekha.webp",
        description:
          "A mobile app using AI biometrics and geofencing to ensure and manage home quarantine compliance.",
        highlights: ["Quarantine management", "AI biometrics", "Geofencing"],
      },
      {
        name: "AI driven estimation of covid-19 prognosis using multimodal data",
        pi: "Dr. Mayank Vatsa",
        status: "Ongoing",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug(
          "AI driven estimation of covid-19 prognosis using multimodal data"
        ),
        image: "/image/project/AI driven estimation of covid-19 prognosis using multimodal data.webp",
        description:
          "Utilizing AI to predict COVID-19 patient outcomes by analyzing a combination of clinical, imaging, and biological data.",
        highlights: ["Prognosis estimation", "Multimodal data", "Predictive AI"],
      },
      {
        name: "AI for Physical Marketplace Management",
        pi: "Dr. Anirban Dasgupta",
        status: "Completed",
        sanctionNo: "IITJ/RAKSHAK/2020-21/03",
        slug: generateSlug("AI for Physical Marketplace Management"),
        image: "/image/project/AI for Physical Marketplace Management.webp",
        description:
          "An AI system to manage crowd density, enforce social distancing, and optimize flow in physical marketplaces.",
        highlights: ["Crowd management", "Marketplace safety", "AI optimization"],
      },
      {
        name: "Dynamic Distribution planning under risk during epidemic outbreak in humanitarian supply chain",
        pi: "Dr. Debasish Das",
        status: "Completed",
        sanctionNo: "IITJ/RAKSHAK/2020-21/04",
        slug: generateSlug(
          "Dynamic Distribution planning under risk during epidemic outbreak in humanitarian supply chain"
        ),
        image: "/image/project/Dynamic Distribution planning.webp",
        description:
          "A planning framework for dynamically distributing essential supplies in a humanitarian supply chain while managing risks during an epidemic.",
        highlights: ["Supply chain", "Risk management", "Dynamic planning"],
      },
      {
        name: "Non-invasive estimation of core body temp. HR, SpO2 for classification of human Subjects as Healthy and Non Healthy",
        pi: "Dr. Dipanjan Gope",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2021-22/05",
        slug: generateSlug(
          "Non-invasive estimation of core body temp. HR, SpO2 for classification of human Subjects as Healthy and Non Healthy"
        ),
        image: "/image/project/Non-invasive estimation.webp",
        description:
          "Developing non-invasive methods using AI to estimate vital signs like temperature, heart rate, and SpO2 to classify health status.",
        highlights: ["Non-invasive sensing", "Vital signs", "Health classification"],
      },
      {
        name: "Development of Advanced Machine Learning Tools for Multi-modal Image Assisted Diagnostics of Infectious Respiratory Diseases",
        pi: "Dr. A V Subramanyam",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2021-22/06",
        slug: generateSlug(
          "Development of Advanced Machine Learning Tools for Multi-modal Image Assisted Diagnostics of Infectious Respiratory Diseases"
        ),
        image: "/image/project/Development of Advanced Machine Learning.webp",
        description:
          "Creating advanced ML tools that use multiple imaging modalities (e.g., X-ray, CT) for improved diagnosis of respiratory infections.",
        highlights: ["Machine learning", "Multi-modal imaging", "Respiratory diagnostics"],
      },
      {
        name: "Establishment of AI based Platform to monitor and identify smell, taste and key covid-19 therapeutic hotspots",
        pi: "Dr. Santanu Chaudhury",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2021-22/07",
        slug: generateSlug(
          "Establishment of AI based Platform to monitor and identify smell, taste and key covid-19 therapeutic hotspots"
        ),
        image: "/image/project/Establishment of AI based Platform.webp",
        description:
          "An AI platform to track loss of smell and taste as symptoms and identify therapeutic targets for COVID-19.",
        highlights: ["Symptom tracking", "Therapeutic hotspots", "AI platform"],
      },
      {
        name: "Development of AI Platform for screening and monitoring of respiratory problems based on respiratory sounds and oxygen saturation",
        pi: "Dr. Santanu Chaudhury",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2021-22/08",
        slug: generateSlug(
          "Development of AI Platform for screening and monitoring of respiratory problems based on respiratory sounds and oxygen saturation"
        ),
        image: "/image/project/AI Platform for screening respiratory problems.webp",
        description:
          "An AI-driven platform using respiratory sounds (like coughs) and SpO2 levels for early screening and monitoring of respiratory issues.",
        highlights: ["Respiratory sounds", "Oxygen saturation", "AI screening"],
      },
      {
        name: "Campus Rakshak Simulator",
        pi: "Dr. Adway Mitra",
        status: "Completed",
        sanctionNo: "IITJ/RAKSHAK/2020-21/01",
        slug: generateSlug("Campus Rakshak Simulator"),
        image: "/image/project/Campus Rakshak Simulator.webp",
        description:
          "A user-friendly agent-based simulator to model and visualize the spread of COVID-19 in campus environments and test intervention strategies.",
        highlights: ["Agent-based simulation", "Campus safety", "Intervention modeling"],
      },
      {
        name: "Radiology Data Projects for SARS nCov-2",
        pi: "Dr. Mayank Vatsa",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2021-22/09",
        slug: generateSlug("Radiology Data Projects for SARS nCov-2"),
        image: "/image/project/SARS-CoV-2.webp",
        description:
          "A collection of projects focused on acquiring, annotating, and analyzing radiology data (X-rays, CT scans) for SARS-CoV-2 research.",
        highlights: ["Radiology data", "Data analysis", "SARS-CoV-2"],
      },
      {
        name: "Telemedicine for Homecare",
        pi: "Dr. Sumit Kalra",
        status: "Completed",
        sanctionNo: "DST/ICPS/RAkshak/2020",
        slug: generateSlug("Telemedicine for Homecare"),
        image: "/image/project/Telemedicine for Homecare.webp",
        description:
          "Developing and deploying telemedicine solutions to provide remote healthcare and monitoring for patients at home.",
        highlights: ["Telemedicine", "Remote homecare", "Patient monitoring"],
      },
      {
        name: "Coswara –speech and sound based diagnostic tools for COVID-19",
        pi: "Dr. Sriram Ganapathy",
        status: "Completed",
        sanctionNo: "DST/TDT/DDP-23/2020",
        slug: generateSlug(
          "Coswara –speech and sound based diagnostic tools for COVID-19"
        ),
        image: "/image/project/Coswara.webp",
        description:
          "A tool that uses recordings of speech and respiratory sounds (cough, breath) to diagnose COVID-19 through AI analysis.",
        highlights: ["Sound-based diagnosis", "Speech analysis", "Coswara tool"],
      },
      {
        name: "GoCoronaGo: A privacy-respecting digital contact tracing for predicting and managing epidemic outbreaks",
        pi: "Dr. Tarun Rambha",
        status: "Completed",
        sanctionNo: "IISc/COVID-19/04",
        slug: generateSlug(
          "GoCoronaGo: A privacy-respecting digital contact tracing for predicting and managing epidemic outbreaks"
        ),
        image: "/image/project/GoCoronaGo.webp",
        description:
          "A digital contact tracing app designed with privacy as a core principle to help predict and manage epidemic outbreaks.",
        highlights: ["Contact tracing", "Privacy-respecting", "Epidemic prediction"],
      },
      {
        name: "Data Acquisition for AImedHUB: A Medical Data Bank Hosting & Data analytics Challenges framework",
        pi: "Dr. Santanu Chaudhury",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2022-23/10",
        slug: generateSlug(
          "Data Acquisition for AImedHUB: A Medical Data Bank Hosting & Data analytics Challenges framework"
        ),
        image: "/image/project/AImedHUB.webp",
        description:
          "Establishing a medical data bank (AImedHUB) for hosting datasets and creating data analytics challenges to foster research.",
        highlights: ["Medical data bank", "AImedHUB", "Data analytics"],
      },
      {
        name: "Long-term outcome of infants born to COVID-19 positive mothers: A Prospective Cohort Study",
        pi: "Dr. Dinesh Kumar",
        status: "Ongoing",
        sanctionNo: "IITJ/RAKSHAK/2022-23/11",
        slug: generateSlug(
          "Long-term outcome of infants born to COVID-19 positive mothers: A Prospective Cohort Study"
        ),
        image: "/image/project/Long-term outcome of infants born to COVID-19 positive mothers.webp",
        description:
          "A prospective cohort study to track and analyze the long-term health outcomes of infants born to mothers who were COVID-19 positive during pregnancy.",
        highlights: ["Cohort study", "Infant health", "Long-term outcomes"],
      },
    ],
  }
  

];
