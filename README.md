# Nerandomilast eDiary

Bilingual Greek/English, local-first treatment and pharmacovigilance diary for patients receiving nerandomilast.

## Privacy model

- No backend, analytics, or automatic cloud synchronisation.
- Patient data remain encrypted in the browser with AES-GCM.
- Use a coded Patient ID; do not enter a full name, AMKA, address, or other direct identifiers.
- The password cannot be recovered. Keep an encrypted backup.

## Clinical scope

The application records daily dosing, gastrointestinal tolerance, respiratory status, adverse events, concomitant medicines, special situations, and clinician/PV summaries.

It is a primary data-capture aid. It does not automatically submit an ICSR, replace clinical assessment, perform MedDRA coding, or constitute a validated ePRO/EDC or medical device.

## Deployment

GitHub Pages is deployed through `.github/workflows/pages.yml`.
