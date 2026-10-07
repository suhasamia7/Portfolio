export type ProjectDetail = {
  problem?: string[]
  goal?: string[]
  myRole?: string[]
  solution?: string[]
  architecture?: { title: string; text: string }[]
  keyFeatures?: string[]
  process?: string[]
  challenges?: { title: string; text: string }[]
  results?: string[]
  limitations?: string[]
  lessons?: string[]
  screenshots?: { src: string; alt: string; caption: string }[]
  links?: { label: string; url: string }[]
}

export const projectDetails: Record<string, ProjectDetail> = {
  speaktrum: {
    problem: [
      'Voice recordings used for neurological screening are sensitive medical data, so storing and processing them needs strong access control.',
      'Recordings made on a phone also vary in quality. Background noise or very short clips can lead an AI model to produce unreliable results.',
    ],
    goal: [
      "Build a mobile screening platform that analyses short voice recordings for vocal biomarkers and supports early-stage Parkinson's risk detection, while keeping user data private and passing only high-quality audio to the model.",
    ],
    myRole: [
      'Team Leader, project lead, system architect and data engineer.',
      'I led a cross-functional team and directed architecture design and project milestones. I designed the Supabase infrastructure, built the audio quality-check and spectrogram pipeline, built the CNN training and 5-fold cross-validation pipeline, and containerised the inference worker for deployment on Fly.io.',
    ],
    solution: [
      'A Flutter mobile app records short vocal exercises and sends them to an inference worker. The worker checks audio quality, cleans the signal, converts it into a spectrogram and passes it to a CNN classifier. Results and history are stored in Supabase, where Row Level Security limits each user to their own records.',
    ],
    architecture: [
      {
        title: 'Mobile app (Flutter)',
        text: 'Records vocal exercises and uploads the audio.',
      },
      {
        title: 'Inference worker (FastAPI, Docker, Fly.io)',
        text: 'Receives each upload and runs the processing pipeline. Credentials are loaded from environment secrets, never from source code.',
      },
      {
        title: 'Quality gates',
        text: 'Rejects audio below a 10 dB signal-to-noise ratio or shorter than 1.5 seconds, before anything is stored.',
      },
      {
        title: 'Signal processing',
        text: 'A 70–5000 Hz band-pass filter, a Wiener noise filter and energy-based silence trimming.',
      },
      {
        title: 'Feature extraction',
        text: 'Builds a 128×128 Mel-spectrogram for the model, and extracts jitter, shimmer and harmonics-to-noise ratio for reporting.',
      },
      {
        title: 'CNN classifier',
        text: 'Produces a risk level and probability for each screening.',
      },
      {
        title: 'Supabase (PostgreSQL and Storage)',
        text: 'Stores users, screenings, results history and PDF exports, protected by Row Level Security.',
      },
    ],
    keyFeatures: [
      'Fail-fast quality gates that reject noisy or too-short recordings before analysis.',
      'Privacy by design: Row Level Security policies, no administrator keys in the mobile app, and spectrograms processed in memory rather than stored.',
      'Result history and exportable screening summaries.',
      'Avatar-led guidance that asks users to move somewhere quieter when a recording is rejected.',
    ],
    process: [
      'The design phase (Capstone I) planned a Google Cloud architecture.',
      'During implementation (Capstone II), credential-security, integration and cost concerns led the team to move to Supabase, keeping PostgreSQL so the existing schema could be reused.',
      'Development followed an iterative V-model, with each implementation phase paired with a testing phase.',
      'The modelling approach moved from an initial CNN to tabular experiments and then to a more robust CNN.',
    ],
    challenges: [
      {
        title: 'Protecting sensitive voice data',
        text: 'Voice recordings are sensitive, so open storage access was not acceptable. I used PostgreSQL Row Level Security policies tied to each authenticated user.',
      },
      {
        title: 'Cloud security and cost',
        text: 'Connecting a mobile app directly to Google Cloud risked exposing credentials and had unpredictable costs. Moving to Supabase removed the need for custom middleware and gave a more predictable pricing model.',
      },
      {
        title: 'Crashes on malformed audio',
        text: 'Early versions of the signal-to-noise check crashed on incomplete audio streams. I added in-memory validation and structured error handling so bad uploads are rejected cleanly.',
      },
      {
        title: 'Inconsistent noise readings',
        text: 'The same voice could pass or fail depending on how the noise floor was estimated. Basing the estimate on the lowest-energy frequency bins made readings more stable.',
      },
      {
        title: 'A filter that removed the signal',
        text: 'The first Wiener filter setting smoothed out the small jitter and shimmer variations the model needs. Reducing its window size through controlled testing preserved them.',
      },
      {
        title: 'Fixed model input shape',
        text: 'Spectrogram size varied with recording length, which crashed the model. Resizing every spectrogram to 128×128 fixed the shape.',
      },
    ],
    results: [
      'Eight pipeline test cases were documented and passed, covering format checks, noise rejection, short-recording rejection, database persistence and latency. A concurrent-load test was not completed.',
      'In a single test run, creating the database record after the quality gates passed took about 0.45 seconds.',
      "The model was trained and evaluated on the public Italian Parkinson's Voice and Speech dataset (Dimauro and Girardi, IEEE DataPort).",
    ],
    limitations: [
      'The dataset is small and demographically imbalanced.',
      "The classifier is binary (Parkinson's vs healthy) only.",
      'There was no validation with real users or in a clinical setting, so this is a capstone prototype, not a diagnostic tool.',
      'The system was not load-tested with many simultaneous sessions.',
    ],
    lessons: [
      'Acoustic clarity matters more than file size: data quality decides whether a recording is useful.',
      'The model needed exactly one input shape, so any pipeline change had to be agreed with the model developer. In production I would version these contracts formally.',
      'Rejecting bad input early protects both the model and the database.',
      'A strict 10 dB threshold trades user convenience for data quality, and it would need validating with real users.',
    ],
    links: [
      {
        label: "Dataset: Italian Parkinson's Voice and Speech (IEEE DataPort)",
        url: 'https://ieee-dataport.org/open-access/italian-parkinsons-voice-and-speech',
      },
    ],
  },

  monere: {
    goal: [
      'Create an immersive VR experience that supports reminiscence therapy for patients with cognitive impairment.',
    ],
    myRole: [
      'Developer. I built the VR experience in Unity and C# during the XR Jam Hackathon.',
    ],
    solution: [
      'An immersive VR experience that focuses on emotional design and intuitive 3D interaction to improve patient engagement and well-being.',
    ],
    keyFeatures: [
      'Immersive VR experience designed around reminiscence therapy.',
      'Emotional design and intuitive 3D interaction aimed at patient engagement and well-being.',
    ],
  },
}