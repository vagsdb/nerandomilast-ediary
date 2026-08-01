# Nerandomilast eDiary

Bilingual Greek/English, local-first treatment and pharmacovigilance diary for patients receiving nerandomilast.

## Privacy model

- No backend, analytics, or automatic cloud synchronisation.
- Patient data remain encrypted in the browser with AES-GCM.
- Use a coded Patient ID; do not enter a full name, AMKA, address, or other direct identifiers.
- The password cannot be recovered. Keep an encrypted backup.

## Clinical scope

The application records daily dosing, gastrointestinal tolerance, respiratory status, adverse events, concomitant medicines, special situations, and clinician/PV summaries.

The elite patient-engagement layer adds:

- a bilingual (Greek/English) 30-second daily cockpit;
- encrypted FVC, DLCO, SpO₂, exertional nadir, recovery-time, and event trends;
- an interactive pulmonary-fibrosis and nerandomilast/PDE4B atlas;
- guided diarrhoea, weight, new-medicine, and acute respiratory-change cards;
- patient-defined meaningful-activity goals with weekly difficulty tracking.

Clinical educational content is versioned against the EMA Jascayd product information available in July 2026. It is deliberately separated from diagnosis and patient-directed dose adjustment.

It is a primary data-capture aid. It does not automatically submit an ICSR, replace clinical assessment, perform MedDRA coding, or constitute a validated ePRO/EDC or medical device.

## Deployment

GitHub Pages is deployed through `.github/workflows/pages.yml`.
