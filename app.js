// Saronil Health - Psychiatry Platform Core Logic
// Coordinates state between Doctor EMR and Patient App

// --- INITIAL STATE ---
const INITIAL_STATE = {
  patients: [
    {
      id: "pat-1",
      uhid: "SH-2025-001",
      name: "Meera Nair",
      age: 32,
      gender: "Female",
      dob: "1993-08-14",
      email: "meera@gmail.com",
      mobile: "+91 98765 43210",
      address: "Koramangala, Bengaluru — 560034",
      occupation: "Software Engineer (on leave)",
      maritalStatus: "In a relationship",
      education: "B.Tech Computer Science",
      allergies: "None known",
      medicalConditions: "Hypothyroidism (managed with levothyroxine)",
      currentMeds: [
        { name: "Escitalopram", dose: "10 mg", freq: "Once daily, night (after food)", duration: "4 weeks" },
        { name: "Clonazepam", dose: "0.5 mg", freq: "Bedtime (short course)", duration: "2 weeks only" }
      ],
      caregiver: {
        name: "Ananya Nair",
        relationship: "Sister",
        mobile: "+91 98765 11111",
        permissions: {
          appointments: true,
          prescriptions: true,
          assessments: true
        }
      },
      timeline: [
        { date: "2025-06-10", type: "Assessment", desc: "GAD-7 Completed", details: "Score: 12/21 (Moderate Anxiety)" },
        { date: "2025-06-24", type: "Registration", desc: "Patient registered at Saronil Health", details: "Initial onboarding complete" },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 18/27 (Moderately Severe Depression)" },
        { date: "2025-06-24", type: "Consultation", desc: "First Consultation with Dr. Riya Sharma", details: "Working diagnosis: Major Depressive Disorder (6A70.1). Initiated Escitalopram." }
      ]
    },
    {
      id: "pat-2",
      uhid: "SH-2025-002",
      name: "Arjun Mehta",
      age: 45,
      gender: "Male",
      dob: "1980-04-22",
      email: "arjun.m@gmail.com",
      mobile: "+91 99887 76655",
      address: "Indiranagar, Bengaluru — 560038",
      occupation: "Business Owner",
      maritalStatus: "Married",
      education: "MBA Finance",
      allergies: "Sulfonamides",
      medicalConditions: "Hypertension (managed)",
      currentMeds: [
        { name: "Sertraline", dose: "50 mg", freq: "Once daily, morning", duration: "8 weeks" },
        { name: "Pregabalin", dose: "75 mg", freq: "Bedtime", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Sujata Mehta",
        relationship: "Spouse",
        mobile: "+91 99887 11223",
        permissions: { appointments: true, prescriptions: true, assessments: false }
      },
      timeline: [
        { date: "2025-05-15", type: "Consultation", desc: "Follow-up Consultation", details: "Anxiety symptoms improving. Dose of Sertraline continued." },
        { date: "2025-06-24", type: "Assessment", desc: "GAD-7 Completed", details: "Score: 11/21 (Moderate Anxiety, down from 14/21)" }
      ]
    },
    {
      id: "pat-3",
      uhid: "SH-2025-003",
      name: "Kavya Reddy",
      age: 28,
      gender: "Female",
      dob: "1997-11-03",
      email: "kavya.r@gmail.com",
      mobile: "+91 97766 55443",
      address: "Whitefield, Bengaluru — 560066",
      occupation: "Graphic Designer",
      maritalStatus: "Single",
      education: "B.Des Fine Arts",
      allergies: "Penicillin",
      medicalConditions: "None",
      currentMeds: [
        { name: "Lithium carbonate", dose: "400 mg", freq: "Twice daily", duration: "12 weeks" },
        { name: "Olanzapine", dose: "5 mg", freq: "Bedtime", duration: "6 weeks" }
      ],
      caregiver: {
        name: "Prashanth Reddy",
        relationship: "Father",
        mobile: "+91 97766 12345",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-18", type: "Consultation", desc: "Emergency Teleconsultation", details: "Hypomanic symptoms. Initiated Olanzapine." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 22/27 (Severe Depression. High risk flagged due to suicidal ideation responses)." }
      ]
    },
    {
      id: "pat-4",
      uhid: "SH-2025-004",
      name: "Priya Singh",
      age: 36,
      gender: "Female",
      dob: "1989-01-29",
      email: "priya.s@gmail.com",
      mobile: "+91 96655 44332",
      address: "HSR Layout, Bengaluru — 560102",
      occupation: "HR Manager",
      maritalStatus: "Divorced",
      education: "MA Human Resources",
      allergies: "None",
      medicalConditions: "Fatty Liver",
      currentMeds: [
        { name: "Naltrexone", dose: "50 mg", freq: "Once daily, morning", duration: "12 weeks" }
      ],
      caregiver: {
        name: "Ramesh Singh",
        relationship: "Brother",
        mobile: "+91 96655 99999",
        permissions: { appointments: false, prescriptions: false, assessments: false }
      },
      timeline: [
        { date: "2025-06-01", type: "Consultation", desc: "Initial Assessment", details: "Alcohol craving reduction. Initiated Naltrexone." },
        { date: "2025-06-23", type: "Assessment", desc: "AUDIT Completed", details: "Score: 14/40 (Harmful Use)" }
      ]
    },
    {
      id: "pat-5",
      uhid: "SH-2025-005",
      name: "Rohan Deshmukh",
      age: 22,
      gender: "Male",
      dob: "2004-03-12",
      email: "rohan.d@gmail.com",
      mobile: "+91 98888 22222",
      address: "Whitefield, Bengaluru — 560066",
      occupation: "College Student",
      maritalStatus: "Single",
      education: "B.Tech Undergrad",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Methylphenidate", dose: "18 mg", freq: "Once daily, morning (after breakfast)", duration: "6 weeks" }
      ],
      caregiver: {
        name: "Suresh Deshmukh",
        relationship: "Father",
        mobile: "+91 98888 11111",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-05", type: "Consultation", desc: "Initial ADHD Consult", details: "DIVA-5 assessment completed. Initiated Methylphenidate ER." }
      ]
    },
    {
      id: "pat-6",
      uhid: "SH-2025-006",
      name: "Aisha Rahman",
      age: 54,
      gender: "Female",
      dob: "1972-09-05",
      email: "aisha.r@gmail.com",
      mobile: "+91 97777 66666",
      address: "Jayanagar, Bengaluru — 560041",
      occupation: "School Teacher",
      maritalStatus: "Married",
      education: "M.Sc Mathematics, B.Ed",
      allergies: "None",
      medicalConditions: "Type 2 Diabetes Mellitus",
      currentMeds: [
        { name: "Venlafaxine", dose: "75 mg", freq: "Once daily, morning", duration: "8 weeks" },
        { name: "Metformin", dose: "500 mg", freq: "Twice daily, with meals", duration: "Continuous" }
      ],
      caregiver: {
        name: "Tariq Rahman",
        relationship: "Spouse",
        mobile: "+91 97777 11223",
        permissions: { appointments: true, prescriptions: true, assessments: false }
      },
      timeline: [
        { date: "2025-05-12", type: "Consultation", desc: "Depression Relapse Evaluation", details: "Recurrent MDD episode. Initiated Venlafaxine." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 12/27 (Moderate Depression)" }
      ]
    },
    {
      id: "pat-7",
      uhid: "SH-2025-007",
      name: "Dr. Vikram Sen",
      age: 61,
      gender: "Male",
      dob: "1965-01-18",
      email: "vikram.sen@gmail.com",
      mobile: "+91 99999 11111",
      address: "Indiranagar, Bengaluru — 560038",
      occupation: "Retired Physician",
      maritalStatus: "Married",
      education: "MBBS, MD Medicine",
      allergies: "None",
      medicalConditions: "Mild Cognitive Impairment, Vitamin B12 Deficiency",
      currentMeds: [
        { name: "Donepezil", dose: "5 mg", freq: "Bedtime", duration: "12 weeks" },
        { name: "Escitalopram", dose: "5 mg", freq: "Bedtime", duration: "12 weeks" }
      ],
      caregiver: {
        name: "Dr. Anirudh Sen",
        relationship: "Son",
        mobile: "+91 99999 22222",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-05-20", type: "Consultation", desc: "Memory Assessment", details: "MMSE score: 26/30. Initiated Donepezil." }
      ]
    },
    {
      id: "pat-8",
      uhid: "SH-2025-008",
      name: "Sneha Iyer",
      age: 19,
      gender: "Female",
      dob: "2007-05-14",
      email: "sneha.i@gmail.com",
      mobile: "+91 96666 55555",
      address: "Malleshwaram, Bengaluru — 560003",
      occupation: "College Student",
      maritalStatus: "Single",
      education: "1st Year B.Sc",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Fluoxetine", dose: "40 mg", freq: "Once daily, morning", duration: "8 weeks" }
      ],
      caregiver: {
        name: "Lalitha Iyer",
        relationship: "Mother",
        mobile: "+91 96666 11223",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-08", type: "Consultation", desc: "OCD Triage", details: "Y-BOCS score: 28/40. Contamination obsessions. Initiated Fluoxetine." }
      ]
    },
    {
      id: "pat-9",
      uhid: "SH-2025-009",
      name: "Kabir Gill",
      age: 29,
      gender: "Male",
      dob: "1997-10-20",
      email: "kabir.g@gmail.com",
      mobile: "+91 95555 44444",
      address: "HSR Layout, Bengaluru — 560102",
      occupation: "Fitness Coach",
      maritalStatus: "Single",
      education: "B.P.Ed Physical Education",
      allergies: "None",
      medicalConditions: "None",
      currentMeds: [
        { name: "Zolpidem", dose: "5 mg", freq: "Bedtime (SOS only, max 3x/week)", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Harpreet Gill",
        relationship: "Brother",
        mobile: "+91 95555 11111",
        permissions: { appointments: true, prescriptions: false, assessments: true }
      },
      timeline: [
        { date: "2025-06-01", type: "Consultation", desc: "Insomnia Consult", details: "Sleep onset latency: 120 mins. Instructed on stimulant restrictions." },
        { date: "2025-06-24", type: "Assessment", desc: "Sleep Diary Completed", details: "Insomnia symptoms logged: Moderate." }
      ]
    },
    {
      id: "pat-10",
      uhid: "SH-2025-010",
      name: "Zara Khan",
      age: 41,
      gender: "Female",
      dob: "1985-11-30",
      email: "zara.k@gmail.com",
      mobile: "+91 94444 33333",
      address: "Koramangala, Bengaluru — 560034",
      occupation: "Fashion Designer",
      maritalStatus: "Single",
      education: "NIFT Fashion Design Graduate",
      allergies: "None",
      medicalConditions: "Borderline Personality Disorder",
      currentMeds: [
        { name: "Quetiapine", dose: "25 mg", freq: "Bedtime (SOS for distress)", duration: "4 weeks" }
      ],
      caregiver: {
        name: "Yasmin Khan",
        relationship: "Sister",
        mobile: "+91 94444 11111",
        permissions: { appointments: true, prescriptions: true, assessments: true }
      },
      timeline: [
        { date: "2025-06-18", type: "Consultation", desc: "Crisis Evaluation", details: "Relationship stressors. Urgent referral for DBT distress tolerance." },
        { date: "2025-06-24", type: "Assessment", desc: "PHQ-9 Completed", details: "Score: 16/27 (Moderate-Severe Depression)" }
      ]
    }
  ],

  doctors: [
    {
      id: "doc-1",
      name: "Dr. Riya Sharma",
      specialty: "General Psychiatry",
      qualification: "MD Psychiatry, DPM (MCI MH-2019-4521)",
      experience: "8 years",
      languages: "English, Hindi, Punjabi",
      fee: 1000,
      portrait: "assets/riya_sharma_portrait.png",
      areas: "Mood Disorders, Anxiety, Sleep disturbances",
      slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"]
    },
    {
      id: "doc-2",
      name: "Dr. Vivek Anand",
      specialty: "Child & Adolescent Psychiatry",
      qualification: "MD Psychiatry, Fellowship in Child Psychiatry (MCI MH-2015-1284)",
      experience: "12 years",
      languages: "English, Kannada, Hindi, Tamil",
      fee: 1200,
      portrait: "assets/vivek_anand_portrait.png",
      areas: "ADHD, Autism Spectrum, Adolescent Anxiety, Bipolar",
      slots: ["10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM"]
    }
  ],

  appointments: [
    { id: "appt-1", patientId: "pat-1", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-07-01", time: "10:00 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-2", patientId: "pat-2", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "09:30 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-3", patientId: "pat-3", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "10:00 AM", type: "Follow-up Consultation", mode: "Teleconsultation", fee: 1000, status: "Confirmed" },
    { id: "appt-4", patientId: "pat-4", doctorId: "doc-2", doctorName: "Dr. Vivek Anand", date: "2025-06-24", time: "10:30 AM", type: "New Consultation", mode: "In-person", fee: 1200, status: "Confirmed" },
    { id: "appt-5", patientId: "pat-5", doctorId: "doc-2", doctorName: "Dr. Vivek Anand", date: "2025-06-24", time: "11:00 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1200, status: "Confirmed" },
    { id: "appt-6", patientId: "pat-6", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "11:30 AM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-7", patientId: "pat-7", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "12:00 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-8", patientId: "pat-8", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "12:30 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-9", patientId: "pat-9", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "01:00 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" },
    { id: "appt-10", patientId: "pat-10", doctorId: "doc-1", doctorName: "Dr. Riya Sharma", date: "2025-06-24", time: "01:30 PM", type: "Follow-up Consultation", mode: "In-person", fee: 1000, status: "Confirmed" }
  ],

  assessments: [
    { id: "assess-1", patientId: "pat-1", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Pending", dueDate: "2025-06-30", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-2", patientId: "pat-1", name: "Sleep Diary", purpose: "Weekly Sleep Quality tracker", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Pending", dueDate: "2025-06-30", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-3", patientId: "pat-1", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Completed", dueDate: "2025-06-24", score: 18, severity: "Moderately Severe", completedDate: "2025-06-24 08:41 AM", responses: { q1: 3, q2: 3, q3: 2, q4: 3, q5: 2, q6: 2, q7: 1, q8: 1, q9: 1 } },
    { id: "assess-4", patientId: "pat-2", name: "GAD-7", purpose: "Anxiety scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-15", status: "Completed", dueDate: "2025-06-24", score: 11, severity: "Moderate", completedDate: "2025-06-24 09:10 AM", responses: { q1: 2, q2: 2, q3: 1, q4: 2, q5: 2, q6: 1, q7: 1 } },
    { id: "assess-5", patientId: "pat-3", name: "PHQ-9", purpose: "Depression Severity scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-24", status: "Completed", dueDate: "2025-06-24", score: 22, severity: "Severe", completedDate: "2025-06-24 09:55 AM", responses: { q1: 3, q2: 3, q3: 3, q4: 3, q5: 2, q6: 3, q7: 2, q8: 1, q9: 2 } },
    { id: "assess-6", patientId: "pat-4", name: "AUDIT", purpose: "Alcohol Use scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-15", status: "Completed", dueDate: "2025-06-23", score: 14, severity: "Harmful Use", completedDate: "2025-06-23 06:30 PM", responses: null },
    { id: "assess-7", patientId: "pat-5", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Vivek Anand", assignedDate: "2025-06-05", status: "Pending", dueDate: "2025-07-15", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-8", patientId: "pat-6", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-05-12", status: "Completed", dueDate: "2025-06-24", score: 12, severity: "Moderate", completedDate: "2025-06-24 10:45 AM", responses: { q1: 1, q2: 2, q3: 2, q4: 1, q5: 2, q6: 1, q7: 1, q8: 1, q9: 1 } },
    { id: "assess-9", patientId: "pat-7", name: "Sleep Diary", purpose: "Insomnia scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-05-20", status: "Pending", dueDate: "2025-07-20", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-10", patientId: "pat-8", name: "GAD-7", purpose: "Anxiety scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-08", status: "Pending", dueDate: "2025-07-08", score: null, severity: null, completedDate: null, responses: null },
    { id: "assess-11", patientId: "pat-9", name: "Sleep Diary", purpose: "Sleep tracker", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-01", status: "Completed", dueDate: "2025-06-24", score: 8, severity: "Mild Disturbance", completedDate: "2025-06-24 11:15 AM", responses: { q1: 2, q2: 2, q3: 1, q4: 2, q5: 1 } },
    { id: "assess-12", patientId: "pat-10", name: "PHQ-9", purpose: "Depression scale", assignedBy: "Dr. Riya Sharma", assignedDate: "2025-06-18", status: "Completed", dueDate: "2025-06-24", score: 16, severity: "Moderately Severe", completedDate: "2025-06-24 11:30 AM", responses: { q1: 2, q2: 2, q3: 3, q4: 2, q5: 2, q6: 2, q7: 1, q8: 1, q9: 1 } }
  ],

  prescriptions: [
    {
      id: "rx-1",
      patientId: "pat-1",
      doctorName: "Dr. Riya Sharma",
      date: "2025-06-24",
      diagnosis: "Major Depressive Disorder (ICD-11: 6A70.1)",
      medicines: [
        { name: "Escitalopram", strength: "10 mg", route: "Oral", freq: "Once daily, night (1-0-0)", duration: "4 weeks", instructions: "Take after food. May cause mild initial nausea." },
        { name: "Clonazepam", strength: "0.5 mg", route: "Oral", freq: "Bedtime (0-0-1)", duration: "2 weeks", instructions: "For sleep initiation. Do not stop abruptly." }
      ],
      followupDate: "2025-07-01",
      digitalSignature: "Dr. R. Sharma"
    }
  ],

  notifications: [
    { id: "notif-1", patientId: "pat-1", text: "PHQ-9 assessment assigned by Dr. Riya Sharma. Please complete before 30 June.", time: "Today, 09:05 AM", read: false },
    { id: "notif-2", patientId: "pat-1", text: "New prescription available. Escitalopram 10mg and Clonazepam 0.5mg added.", time: "Today, 09:00 AM", read: false },
    { id: "notif-3", patientId: "pat-1", text: "Appointment confirmed — Dr. Riya Sharma on 1 July 2025 at 10:00 AM.", time: "Today, 08:58 AM", read: true }
  ],

  queue: [
    { id: "q-1", token: "T01", patientId: "pat-1", apptType: "New Consultation", time: "09:00 AM", assessmentStatus: "Done", status: "Waiting" },
    { id: "q-2", token: "T02", patientId: "pat-2", apptType: "Follow-up", time: "09:30 AM", assessmentStatus: "Done", status: "Waiting" },
    { id: "q-3", token: "T03", patientId: "pat-3", apptType: "Follow-up", time: "10:00 AM", assessmentStatus: "Done", status: "Waiting" },
    { id: "q-4", token: "T04", patientId: "pat-4", apptType: "New Consultation", time: "10:30 AM", assessmentStatus: "Done", status: "Completed" },
    { id: "q-5", token: "T05", patientId: "pat-5", apptType: "Follow-up", time: "11:00 AM", assessmentStatus: "None", status: "Scheduled" },
    { id: "q-6", token: "T06", patientId: "pat-6", apptType: "Follow-up", time: "11:30 AM", assessmentStatus: "Done", status: "Completed" },
    { id: "q-7", token: "T07", patientId: "pat-7", apptType: "Follow-up", time: "12:00 PM", assessmentStatus: "None", status: "Scheduled" },
    { id: "q-8", token: "T08", patientId: "pat-8", apptType: "Follow-up", time: "12:30 PM", assessmentStatus: "None", status: "No Show" },
    { id: "q-9", token: "T09", patientId: "pat-9", apptType: "Follow-up", time: "01:00 PM", assessmentStatus: "Done", status: "Scheduled" },
    { id: "q-10", token: "T10", patientId: "pat-10", apptType: "Follow-up", time: "01:30 PM", assessmentStatus: "Done", status: "Scheduled" }
  ],

  invoices: [
    {
      id: "inv-1",
      invoiceNumber: "INV-2025-001",
      patientId: "pat-4",
      patientName: "Aditya Verma",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (New)", qty: 1, unitPrice: 1200 }
      ],
      subtotal: 1200,
      tax: 0,
      discount: 0,
      total: 1200,
      amountPaid: 1200,
      status: "Paid",
      paymentMethod: "UPI",
      paymentDate: "2025-06-24 10:55 AM",
      notes: "First time consultation fee collected"
    },
    {
      id: "inv-2",
      invoiceNumber: "INV-2025-002",
      patientId: "pat-6",
      patientName: "Neha Gupta",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 1000,
      status: "Paid",
      paymentMethod: "Cash",
      paymentDate: "2025-06-24 11:45 AM",
      notes: "Follow-up consultation fee collected"
    },
    {
      id: "inv-3",
      invoiceNumber: "INV-2025-003",
      patientId: "pat-1",
      patientName: "Meera Nair",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 0,
      status: "Unpaid",
      paymentMethod: "",
      paymentDate: "",
      notes: "Consultation complete. Payment pending."
    },
    {
      id: "inv-4",
      invoiceNumber: "INV-2025-004",
      patientId: "pat-2",
      patientName: "Arjun Mehta",
      date: "2025-06-24",
      dueDate: "2025-06-24",
      items: [
        { desc: "Psychiatric Consultation (Follow-up)", qty: 1, unitPrice: 1000 }
      ],
      subtotal: 1000,
      tax: 0,
      discount: 0,
      total: 1000,
      amountPaid: 0,
      status: "Unpaid",
      paymentMethod: "",
      paymentDate: "",
      notes: "Consultation complete. Payment pending."
    }
  ],

  activeConsultation: null
};

// --- STATE MANAGER ---
class StateManager {
  constructor() {
    this.key = "saronil_health_state";
    this.state = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(this.key);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Force refresh state if patient list count is less than 10 or queue has no Scheduled items (migration step)
        if (parsed.patients && parsed.patients.length >= 10 && parsed.queue && parsed.queue.some(q => q.status === 'Scheduled')) {
          if (!parsed.invoices) {
            parsed.invoices = JSON.parse(JSON.stringify(INITIAL_STATE.invoices));
            this.saveState(parsed);
          }
          return parsed;
        }
      } catch (e) {

        console.error("Error parsing saved state, resetting...", e);
      }
    }
    this.saveState(INITIAL_STATE);
    return JSON.parse(JSON.stringify(INITIAL_STATE));
  }

  saveState(state) {
    localStorage.setItem(this.key, JSON.stringify(state || this.state));
  }

  update(fn) {
    fn(this.state);
    this.saveState();
    this.dispatchUpdate();
  }

  reset() {
    localStorage.removeItem(this.key);
    this.state = JSON.parse(JSON.stringify(INITIAL_STATE));
    this.saveState();
    this.dispatchUpdate();
  }

  dispatchUpdate() {
    window.dispatchEvent(new Event("stateUpdated"));
  }
}

const store = new StateManager();

// --- ASSESSMENT INSTRUMENT SPECS ---
const ASSESSMENT_SPECS = {
  "PHQ-9": {
    title: "PHQ-9 (Patient Health Questionnaire)",
    instructions: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
    questions: [
      "Little interest or pleasure in doing things?",
      "Feeling down, depressed, or hopeless?",
      "Trouble falling or staying asleep, or sleeping too much?",
      "Feeling tired or having little energy?",
      "Poor appetite or overeating?",
      "Feeling bad about yourself — or that you are a failure?",
      "Trouble concentrating on things, such as reading or watching TV?",
      "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
      "Thoughts that you would be better off dead, or of hurting yourself in some way?"
    ],
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 4) return "None / Minimal";
      if (score <= 9) return "Mild Depression";
      if (score <= 14) return "Moderate Depression";
      if (score <= 19) return "Moderately Severe Depression";
      return "Severe Depression";
    }
  },
  "GAD-7": {
    title: "GAD-7 (Generalized Anxiety Disorder)",
    instructions: "Over the last 2 weeks, how often have you been bothered by the following problems?",
    questions: [
      "Feeling nervous, anxious or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Trouble relaxing?",
      "Being so restless that it is hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid as if something awful might happen?"
    ],
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 4) return "None / Minimal";
      if (score <= 9) return "Mild Anxiety";
      if (score <= 14) return "Moderate Anxiety";
      return "Severe Anxiety";
    }
  },
  "Sleep Diary": {
    title: "Sleep Diary",
    instructions: "Answer based on your sleep patterns over the past week.",
    questions: [
      "How long did it take you to fall asleep on average?",
      "How many times did you wake up during the night?",
      "How rested did you feel in the morning?",
      "Did you take any medication to help you sleep?",
      "What was your overall sleep quality?"
    ],
    options: [
      { text: "Excellent / Normal", score: 0 },
      { text: "Fair / Slightly disrupted", score: 1 },
      { text: "Poor / Highly disrupted", score: 2 },
      { text: "Terrible / Severe insomnia", score: 3 }
    ],
    calculateSeverity: (score) => {
      if (score <= 3) return "Normal Sleep";
      if (score <= 7) return "Mild Disturbance";
      if (score <= 11) return "Moderate Insomnia";
      return "Severe Insomnia";
    }
  }
};

// --- MOCK CONSTANTS ---
const ICD11_DIAGNOSES = [
  { code: "6A70.0", name: "Major depressive disorder, single episode, mild" },
  { code: "6A70.1", name: "Major depressive disorder, single episode, moderate" },
  { code: "6A70.2", name: "Major depressive disorder, single episode, severe without psychotic symptoms" },
  { code: "6A70.3", name: "Major depressive disorder, single episode, severe with psychotic symptoms" },
  { code: "6A71.1", name: "Major depressive disorder, recurrent, moderate" },
  { code: "6B00", name: "Generalized anxiety disorder" },
  { code: "6B20", name: "Obsessive-compulsive disorder" },
  { code: "6A60", name: "Bipolar type I disorder" },
  { code: "6A61", name: "Bipolar type II disorder" },
  { code: "6A02", name: "Attention deficit hyperactivity disorder" },
  { code: "6A20", name: "Schizophrenia" },
  { code: "6C50", name: "Alcohol use disorder" }
];

const COMMON_MEDS = [
  { name: "Escitalopram", strengths: ["5 mg", "10 mg", "20 mg"], route: "Oral", defaultFreq: "Once daily, night (1-0-0)", defaultInst: "Take after food." },
  { name: "Sertraline", strengths: ["25 mg", "50 mg", "100 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with breakfast." },
  { name: "Fluoxetine", strengths: ["20 mg", "40 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with food." },
  { name: "Lithium carbonate", strengths: ["300 mg", "400 mg"], route: "Oral", defaultFreq: "Twice daily (1-0-1)", defaultInst: "Maintain consistent fluid intake. Periodic blood tests required." },
  { name: "Olanzapine", strengths: ["2.5 mg", "5 mg", "10 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "May cause drowsiness. Monitor weight." },
  { name: "Aripiprazole", strengths: ["5 mg", "10 mg", "15 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take with or without food." },
  { name: "Clonazepam", strengths: ["0.25 mg", "0.5 mg"], route: "Oral", defaultFreq: "Bedtime (0-0-1)", defaultInst: "Short-term use only. Avoid alcohol." },
  { name: "Lorazepam", strengths: ["1 mg", "2 mg"], route: "Oral", defaultFreq: "Twice daily / SOS", defaultInst: "For acute anxiety. Avoid driving." },
  { name: "Methylphenidate", strengths: ["10 mg", "18 mg", "36 mg"], route: "Oral", defaultFreq: "Once daily, morning (1-0-0)", defaultInst: "Take after breakfast. Avoid late doses." }
];

// Exporting core elements
window.SaronilState = store;
window.ASSESSMENT_SPECS = ASSESSMENT_SPECS;
window.ICD11_DIAGNOSES = ICD11_DIAGNOSES;
window.COMMON_MEDS = COMMON_MEDS;
