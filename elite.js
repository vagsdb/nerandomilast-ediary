(() => {
  const PREF = 'nera_language_v1';
  let lang = localStorage.getItem(PREF) === 'en' ? 'en' : 'el';

  const copy = {
    el: {
      saved: 'Η καταγραφή αποθηκεύτηκε.', dashboard: 'Dashboard', trajectory: 'Πορεία', atlas: 'Άτλαντας', care: 'Πυξίδα', today: 'Σήμερα', history: 'Ιστορικό', adverse: 'Ανεπιθύμητα', medications: 'Φάρμακα', special: 'Ειδικές καταστάσεις', profile: 'Προφίλ', export: 'Εξαγωγή', info: 'Οδηγίες',
      cockpitTitle: 'Καταγραφή 30 δευτερολέπτων', cockpitText: 'Καταγράψτε τα απαραίτητα. Οι λεπτομέρειες ανοίγουν μόνο όταν κάτι έχει αλλάξει.', am: 'Πρωινή δόση', pm: 'Βραδινή δόση', taken18: '18 mg', taken9: '9 mg', notTaken: 'Δεν ελήφθη', breathing: 'Αναπνοή έναντι του συνηθισμένου', better: 'Καλύτερη', same: 'Ίδια', worse: 'Χειρότερη', muchWorse: 'Πολύ χειρότερη', stools: 'Κενώσεις / 24ωρο', appetite: 'Όρεξη 0–10', changed: 'Κάτι σημαντικό άλλαξε σήμερα', details: 'Τι άλλαξε;', complete: 'Ολοκλήρωση σημερινής καταγραφής', continuity: 'ημέρες καταγράφηκαν στις τελευταίες 14',
      trajTitle: 'Προσωπικό στούντιο πορείας', trajNote: 'Μία μεμονωμένη τιμή δεν αποδεικνύει εξέλιξη. Συγκρίνετε μετρήσεις υπό παρόμοιες συνθήκες και ερμηνεύστε την τάση μαζί με την κλινική ομάδα.', addMeasurement: 'Προσθήκη κλινικής μέτρησης', date: 'Ημερομηνία', fvc: 'FVC % προβλεπόμενης', dlco: 'DLCO % προβλεπόμενης', spo2: 'SpO₂ ηρεμίας %', nadir: 'Ελάχιστο SpO₂ στην προσπάθεια %', recovery: 'Χρόνος αποκατάστασης (δευτ.)', event: 'Κλινικό γεγονός / αλλαγή θεραπείας', saveMeasurement: 'Αποθήκευση μέτρησης', noData: 'Δεν υπάρχουν ακόμη αρκετές μετρήσεις για απεικόνιση.',
      atlasTitle: 'Από τον αερόσακο στη θεραπεία', atlasLead: 'Επιλέξτε κάθε στάδιο. Η εικόνα εξηγεί τη βιολογία χωρίς να μετατρέπει μία καθημερινή μέτρηση σε διάγνωση.', measurements: 'Αυτές οι μετρήσεις δεν είναι το ίδιο',
      compassTitle: 'Πρακτικές κάρτες ασφάλειας', diarrhea: 'Διάρροια και ενυδάτωση', weight: 'Βάρος και όρεξη', newMed: 'Νέο φάρμακο ή συμπλήρωμα', pulmonary: 'Αιφνίδια αναπνευστική αλλαγή', goals: 'Τι έχει σημασία για εμένα', goalPrompt: 'Προσθέστε έναν προσωπικό, συγκεκριμένο στόχο', goalPlaceholder: 'π.χ. να περπατώ μέχρι το καφέ', addGoal: 'Προσθήκη στόχου', weekly: 'Δυσκολία αυτή την εβδομάδα 0–10', update: 'Ενημέρωση',
      medicalGuard: 'Μην αλλάζετε μόνοι σας τη δόση της νεραντομιλάστης, την οξυγονοθεραπεία ή άλλη αγωγή. Η εφαρμογή οργανώνει πληροφορίες· δεν θέτει διάγνωση.', emergency: 'Σε σοβαρή δύσπνοια, πόνο στο στήθος, λιποθυμία, σύγχυση, αιμόπτυση, σοβαρή αλλεργική αντίδραση ή σκέψεις αυτοβλάβης: καλέστε 112.',
      doseCard: 'Η συνήθης εγκεκριμένη δόση είναι 18 mg δύο φορές ημερησίως, περίπου ανά 12 ώρες. Αν παραλειφθεί δόση, λαμβάνεται η επόμενη στην προγραμματισμένη ώρα—όχι επιπλέον δόση. Κάθε μείωση ή ειδικός κανόνας συγχορήγησης αποφασίζεται από τον θεράποντα.',
      noGoals: 'Δεν έχει προστεθεί ακόμη προσωπικός στόχος.', source: 'Πηγή κλινικού περιεχομένου: EMA Product Information, έκδοση Ιουλίου 2026.'
    },
    en: {
      saved: 'Entry saved.', dashboard: 'Dashboard', trajectory: 'Trajectory', atlas: 'Atlas', care: 'Compass', today: 'Today', history: 'History', adverse: 'Adverse events', medications: 'Medicines', special: 'Special situations', profile: 'Profile', export: 'Export', info: 'Guidance',
      cockpitTitle: '30-second check-in', cockpitText: 'Record the essentials. Details open only when something has changed.', am: 'Morning dose', pm: 'Evening dose', taken18: '18 mg', taken9: '9 mg', notTaken: 'Not taken', breathing: 'Breathing versus usual', better: 'Better', same: 'Same', worse: 'Worse', muchWorse: 'Much worse', stools: 'Bowel movements / 24 h', appetite: 'Appetite 0–10', changed: 'Something important changed today', details: 'What changed?', complete: 'Complete today’s check-in', continuity: 'days recorded in the last 14',
      trajTitle: 'Personal trajectory studio', trajNote: 'A single value does not prove progression. Compare measurements under similar conditions and interpret the trend with the clinical team.', addMeasurement: 'Add a clinical measurement', date: 'Date', fvc: 'FVC % predicted', dlco: 'DLCO % predicted', spo2: 'Resting SpO₂ %', nadir: 'Lowest exertional SpO₂ %', recovery: 'Recovery time (seconds)', event: 'Clinical event / treatment change', saveMeasurement: 'Save measurement', noData: 'There are not yet enough measurements to display a trend.',
      atlasTitle: 'From air sac to treatment', atlasLead: 'Select each stage. The illustration explains the biology without turning a daily measurement into a diagnosis.', measurements: 'These measurements are not the same',
      compassTitle: 'Practical safety cards', diarrhea: 'Diarrhoea and hydration', weight: 'Weight and appetite', newMed: 'New medicine or supplement', pulmonary: 'Sudden respiratory change', goals: 'What matters to me', goalPrompt: 'Add a personal, specific goal', goalPlaceholder: 'e.g. walk to the local café', addGoal: 'Add goal', weekly: 'Difficulty this week 0–10', update: 'Update',
      medicalGuard: 'Do not change nerandomilast dose, oxygen flow, or other treatment on your own. This app organises information; it does not diagnose.', emergency: 'For severe breathlessness, chest pain, fainting, confusion, coughing blood, severe allergic reaction, or self-harm thoughts: call 112.',
      doseCard: 'The usual authorised dose is 18 mg twice daily, approximately 12 hours apart. If a dose is missed, take the next dose at the scheduled time—do not take an extra dose. Any reduction or co-administration rule is decided by the treating clinician.',
      noGoals: 'No personal goal has been added yet.', source: 'Clinical content source: EMA Product Information, July 2026 revision.'
    }
  };
  const t = key => copy[lang][key] || key;
  const e = value => String(value ?? '').replace(/[&<>'"]/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[x]));
  const today = () => new Date().toISOString().slice(0, 10);

  function setLanguage(next) {
    lang = next; localStorage.setItem(PREF, lang);
    document.documentElement.lang = lang;
    const toggle = document.getElementById('language-toggle');
    if (toggle) toggle.textContent = lang === 'el' ? 'EN' : 'GR';
    translateShell();
    if (typeof D !== 'undefined' && D) renderAll();
  }

  function translateShell() {
    document.querySelectorAll('#navigation button').forEach(btn => btn.textContent = t(btn.dataset.page));
    const shell = {
      dashboard: [lang === 'el' ? 'Οι πνεύμονές μου σήμερα' : 'My lungs today', lang === 'el' ? 'Μια σύντομη, ουσιαστική εικόνα της θεραπείας και της καθημερινότητάς σας.' : 'A concise, meaningful view of your treatment and daily life.'],
      trajectory: [lang === 'el' ? 'Η πορεία μου' : 'My trajectory', lang === 'el' ? 'Λειτουργία πνευμόνων, οξυγόνο, βάρος και κλινικά γεγονότα στην ίδια χρονική γραμμή.' : 'Lung function, oxygen, weight, and clinical events on one timeline.'],
      atlas: [lang === 'el' ? 'Μέσα στους πνεύμονές μου' : 'Inside my lungs', lang === 'el' ? 'Ένας διαδραστικός άτλαντας για την ίνωση, τις μετρήσεις και τη νεραντομιλάστη.' : 'An interactive atlas of fibrosis, measurements, and nerandomilast.'],
      care: [lang === 'el' ? 'Πυξίδα θεραπείας' : 'Treatment compass', lang === 'el' ? 'Καθοδήγηση για συχνά προβλήματα, νέα φάρμακα και προσωπικούς στόχους.' : 'Guidance for common problems, new medicines, and personal goals.']
    };
    Object.entries(shell).forEach(([id,[h,p]]) => { const page=document.getElementById(id); if(page){page.querySelector('.hero h2').textContent=h;page.querySelector('.hero p').textContent=p;} });
    const q=(selector,text)=>{const node=document.querySelector(selector);if(node)node.textContent=text;};
    q('#lock h2',lang==='el'?'🫁 Ημερολόγιο Νεραντομιλάστης':'🫁 Nerandomilast eDiary');
    q('#lock .lock-card>p:first-of-type',lang==='el'?'Τα δεδομένα αποθηκεύονται κρυπτογραφημένα μόνο στη συσκευή και δεν αποστέλλονται στον διακομιστή.':'Data are encrypted on this device only and are not sent to a server.');
    q('#create-vault',lang==='el'?'Δημιουργία ασφαλούς ημερολογίου':'Create secure diary');q('#unlock-vault',lang==='el'?'Ξεκλείδωμα':'Unlock');
    q('header h1',lang==='el'?'Ημερολόγιο Θεραπείας και Φαρμακοεπαγρύπνησης με Νεραντομιλάστη':'Nerandomilast Treatment & Pharmacovigilance eDiary');
    const staticTitles={today:['Σημερινή καταγραφή','Today’s detailed entry'],history:['Ημερήσιο ιστορικό','Daily history'],adverse:['Ανεπιθύμητα συμβάντα','Adverse events'],medications:['Συγχορηγούμενα φάρμακα','Concomitant medicines'],special:['Ειδικές καταστάσεις','Special situations'],profile:['Προφίλ ασθενούς και έκθεση','Patient profile and exposure'],export:['Εξαγωγή και ασφάλεια','Export and security'],info:['Οδηγίες και απόρρητο','Guidance and privacy']};
    Object.entries(staticTitles).forEach(([id,v])=>q(`#${id} .hero h2`,v[lang==='el'?0:1]));
    if(lang==='en') translateExistingForms(); else restoreGreekForms();
  }

  function restoreGreekForms(){
    const schemas={'daily-form':NERA.daily,'ae-form':NERA.ae,'med-form':NERA.med,'special-form':NERA.special,'profile-form':NERA.profile};
    Object.entries(schemas).forEach(([formId,fields])=>fields.forEach(([name,label])=>{const input=document.querySelector(`#${formId} [name="${name}"]`);const holder=input?.closest('label');if(holder&&holder.firstChild?.nodeType===Node.TEXT_NODE)holder.firstChild.nodeValue=label;}));
  }

  function translateExistingForms(){
    const forms={
      'daily-form':{date:'Date',amDose:'Morning dose',amTime:'Morning dose time',pmDose:'Evening dose',pmTime:'Evening dose time',withFood:'Taken with food',missed:'Missed/delayed/partial dose',bowels:'Bowel movements in last 24 h',bristol:'Bristol 1–7',nocturnal:'Night-time diarrhoea',urgency:'Urgency or incontinence',blood:'Blood or black stools',nausea:'Nausea 0–10',vomiting:'Vomiting episodes',appetite:'Appetite 0–10',fluids:'Fluids (mL)',weight:'Weight (kg)',dyspnea:'Breathlessness versus usual',cough:'Cough versus usual',spo2:'SpO₂ (%)',oxygen:'Oxygen L/min',temperature:'Temperature °C',palpitations:'Palpitations/arrhythmia',headache:'Headache 0–10',dizziness:'Dizziness 0–10',fatigue:'Fatigue 0–10',mood:'Mood 0–10',selfHarm:'Thoughts of self-harm',newMeds:'New medicine/supplement',contact:'Clinical contact/ED/hospitalisation',notes:'Other symptoms or notes'},
      'ae-form':{event:'Event in the patient’s own words',onset:'Onset',stop:'End',severity:'Severity',outcome:'Outcome',doseAtOnset:'Dose at onset',lastDose:'Last dose before event',action:'Action taken with treatment',dechallenge:'Improved after interruption/reduction',rechallenge:'Recurred after re-administration',patientSuspect:'Does the patient suspect a relationship?',alternative:'Other possible causes',tests:'Tests/results',treatment:'Event management',reporter:'Reporter/contact details',reportDate:'Report date',caseNo:'Case number',followup:'Follow-up required',meddra:'MedDRA PT (clinician/PV)',causality:'Clinician/PV causality'},
      'med-form':{name:'Medicine/supplement',dose:'Dose',route:'Route',frequency:'Frequency',start:'Start',stop:'Stop',indication:'Indication',prescriber:'Prescriber',interaction:'Potential interaction/comment'},
      'special-form':{type:'Type',date:'Date/time',description:'Full description',symptoms:'Related symptoms/events',action:'Action taken',product:'Product/strength',lot:'Batch/lot',expiry:'Expiry',reported:'To whom and when reported',caseNo:'Case number'},
      'profile-form':{patientId:'Coded Patient ID',birthYear:'Year of birth',sex:'Sex',diagnosis:'Diagnosis',startDate:'Nerandomilast start date',regimen:'Regimen',background:'Background therapy',baselineWeight:'Baseline weight (kg)',baselineSpo2:'Baseline SpO₂ (%)',oxygen:'Baseline oxygen therapy',allergies:'Known allergies',conditions:'Important conditions',clinician:'Treating clinician/centre',pvContact:'Pharmacovigilance contact',lot:'Batch/lot',expiry:'Expiry date'}
    };
    Object.entries(forms).forEach(([formId,fields])=>Object.entries(fields).forEach(([name,label])=>{const input=document.querySelector(`#${formId} [name="${name}"]`);const holder=input?.closest('label');if(holder&&holder.firstChild?.nodeType===Node.TEXT_NODE)holder.firstChild.nodeValue=label;}));
  }

  function ensureEliteNavigation() {
    const nav=document.getElementById('navigation'); if(!nav || nav.querySelector('[data-page="trajectory"]')) return;
    const anchor=nav.querySelector('[data-page="today"]');
    [['trajectory','trajectory'],['atlas','atlas'],['care','care']].forEach(([id,key])=>{const b=document.createElement('button');b.type='button';b.dataset.page=id;b.textContent=t(key);b.onclick=()=>show(id);nav.insertBefore(b,anchor);});
  }

  function completion() {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 13); const iso = cutoff.toISOString().slice(0,10);
    return new Set((D.daily || []).filter(x => x.date >= iso).map(x => x.date)).size;
  }

  function renderCockpit() {
    const host = document.getElementById('quick-cockpit'); if (!host) return;
    const current = (D.daily || []).find(x => x.date === today()) || {};
    host.innerHTML = `<section class="card cockpit-card"><div class="section-head"><div><span class="eyebrow">DAILY ESSENTIALS</span><h3>${t('cockpitTitle')}</h3><p>${t('cockpitText')}</p></div><div class="continuity"><strong>${completion()}/14</strong><span>${t('continuity')}</span></div></div>
      <form id="quick-form"><div class="dose-orbits">
        ${doseOrbit('amDose',t('am'),current.amDose)}${doseOrbit('pmDose',t('pm'),current.pmDose)}
      </div><div class="quick-grid">
        <label>${t('breathing')}<select name="dyspnea"><option value=""></option>${[['Καλύτερη','better'],['Ίδια','same'],['Χειρότερη','worse'],['Πολύ χειρότερη','muchWorse']].map(([v,k])=>`<option value="${v}" ${current.dyspnea===v?'selected':''}>${t(k)}</option>`).join('')}</select></label>
        <label>${t('stools')}<input name="bowels" type="number" min="0" max="30" value="${e(current.bowels)}"></label>
        <label>${t('appetite')}<input name="appetite" type="number" min="0" max="10" value="${e(current.appetite)}"></label>
      </div><label class="change-check"><input id="quick-changed" type="checkbox" ${current.quickChanged?'checked':''}> <span>${t('changed')}</span></label>
      <label id="quick-details-wrap" class="${current.quickChanged?'':'hidden'}">${t('details')}<textarea name="notes">${e(current.notes)}</textarea></label>
      <div class="actions"><button class="primary" type="submit">${t('complete')}</button></div></form></section>`;
    document.getElementById('quick-changed').onchange = ev => document.getElementById('quick-details-wrap').classList.toggle('hidden', !ev.target.checked);
    document.getElementById('quick-form').onsubmit = async ev => {
      ev.preventDefault(); const values = Object.fromEntries(new FormData(ev.target).entries()); values.date=today(); values.quickChanged=document.getElementById('quick-changed').checked; values.savedAt=new Date().toISOString();
      const idx=D.daily.findIndex(x=>x.date===values.date); if(idx>=0){const old=D.daily[idx];values.id=old.id;values.revisions=[...(old.revisions||[]),{savedAt:old.savedAt,snapshot:old}];D.daily[idx]={...old,...values};}else{values.id=crypto.randomUUID();D.daily.unshift(values);}
      await Vault.save(); renderAll(); if(typeof renderDashboard==='function')renderDashboard(); alert(t('saved'));
    };
  }
  function doseOrbit(name,label,value='') { return `<fieldset class="dose-orbit"><legend>${label}</legend><div>${[['18 mg','taken18'],['9 mg','taken9'],['Δεν ελήφθη','notTaken']].map(([v,k])=>`<label><input type="radio" name="${name}" value="${v}" ${value===v?'checked':''}><span>${t(k)}</span></label>`).join('')}</div></fieldset>`; }

  function renderTrajectory() {
    const host=document.getElementById('trajectory-studio'); if(!host)return; const data=[...(D.clinical||[])].sort((a,b)=>a.date.localeCompare(b.date));
    host.innerHTML=`<div class="card"><div class="section-head"><div><h3>${t('trajTitle')}</h3><p>${t('trajNote')}</p></div><span class="signal-chip">TREND ≠ DIAGNOSIS</span></div>${trajectorySvg(data)}</div>
      <details class="card disclosure"><summary>${t('addMeasurement')}</summary><form id="clinical-form" class="grid clinical-grid">
      ${[['date','date'],['fvc','number'],['dlco','number'],['spo2','number'],['nadir','number'],['recovery','number'],['event','text']].map(([k,type])=>`<label>${t(k)}<input name="${k}" type="${type}" ${k==='date'?`value="${today()}"`:''} ${type==='number'?'step="any"':''}></label>`).join('')}
      <div class="actions"><button class="primary">${t('saveMeasurement')}</button></div></form></details>`;
    document.getElementById('clinical-form').onsubmit=async ev=>{ev.preventDefault();D.clinical.push({id:crypto.randomUUID(),savedAt:new Date().toISOString(),...Object.fromEntries(new FormData(ev.target).entries())});await Vault.save();renderTrajectory();};
  }
  function trajectorySvg(data){
    if(data.length<2)return `<div class="empty-state">${t('noData')}</div>`;
    const metrics=[['fvc','#24a79a','FVC'],['dlco','#e1a957','DLCO'],['spo2','#6f8ee8','SpO₂']]; const W=900,H=290,p=38;
    const points=(key)=>{const vals=data.map((x,i)=>({i,v:+x[key]})).filter(x=>Number.isFinite(x.v)&&x.v>0);if(!vals.length)return'';const min=Math.min(...vals.map(x=>x.v)),max=Math.max(...vals.map(x=>x.v));return vals.map(x=>`${p+x.i*(W-2*p)/Math.max(1,data.length-1)},${H-p-(x.v-min)*(H-2*p)/Math.max(1,max-min)}`).join(' ')};
    return `<div class="chart-wrap"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Clinical trajectory chart"><g class="grid-lines">${[0,1,2,3,4].map(i=>`<line x1="${p}" x2="${W-p}" y1="${p+i*(H-2*p)/4}" y2="${p+i*(H-2*p)/4}"/>`).join('')}</g>${metrics.map(([k,c])=>`<polyline points="${points(k)}" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}${data.map((x,i)=>x.event?`<g transform="translate(${p+i*(W-2*p)/Math.max(1,data.length-1)},22)"><line y1="20" y2="${H-p}" class="event-line"/><circle r="6" fill="#e1a957"><title>${e(x.date+': '+x.event)}</title></circle></g>`:'').join('')}</svg><div class="chart-legend">${metrics.map(([,c,l])=>`<span><i style="background:${c}"></i>${l}</span>`).join('')}<span><i class="event-dot"></i>${t('event')}</span></div></div>`;
  }

  const atlasStages={
    el:[['1','Υγιής κυψελίδα','Λεπτό τοίχωμα και μικρή απόσταση για τη διάχυση οξυγόνου.'],['2','Επαναλαμβανόμενη βλάβη','Το κυψελιδικό επιθήλιο τραυματίζεται και η αποκατάσταση απορρυθμίζεται.'],['3','Ενεργοποίηση ινοβλαστών','Ινοβλάστες και μυοϊνοβλάστες ενεργοποιούνται και πολλαπλασιάζονται.'],['4','Εναπόθεση θεμέλιας ουσίας','Κολλαγόνο και εξωκυττάρια θεμέλια ουσία αυξάνουν τη δυσκαμψία.'],['5','Παραμόρφωση και διαταραχή ανταλλαγής','Η δομή αλλοιώνεται και η μεταφορά αερίων δυσχεραίνεται.'],['6','Πού εντάσσεται η νεραντομιλάστη','Εκλεκτικός αναστολέας PDE4B με αντιφλεγμονώδη και αντιινωτική δράση. Στόχος είναι η επιβράδυνση της λειτουργικής έκπτωσης, όχι η άμεση ανακούφιση κάθε συμπτώματος.']],
    en:[['1','Healthy alveolus','A thin wall and short diffusion distance support oxygen transfer.'],['2','Repeated injury','Alveolar epithelium is injured and repair becomes dysregulated.'],['3','Fibroblast activation','Fibroblasts and myofibroblasts activate and proliferate.'],['4','Matrix deposition','Collagen and extracellular matrix increase lung stiffness.'],['5','Distortion and impaired exchange','Architecture changes and gas transfer becomes more difficult.'],['6','Where nerandomilast fits','A selective PDE4B inhibitor with anti-inflammatory and antifibrotic activity. The aim is to slow functional decline, not to immediately relieve every symptom.']]
  };
  function renderAtlas(){const host=document.getElementById('lung-atlas');if(!host)return;const stages=atlasStages[lang];host.innerHTML=`<div class="atlas-grid"><div class="card atlas-visual"><div class="alveolus" aria-hidden="true"><span></span><span></span><span></span><span></span><b>PDE4B</b></div><div id="atlas-copy"><span>01 / 06</span><h3>${stages[0][1]}</h3><p>${stages[0][2]}</p></div></div><div class="card stage-list">${stages.map((x,i)=>`<button type="button" data-stage="${i}" class="${i===0?'active':''}"><span>${x[0]}</span><strong>${x[1]}</strong></button>`).join('')}</div></div>
      <div class="card"><h3>${t('measurements')}</h3><div class="measure-cards">${measurementCards()}</div></div><p class="source-note">${t('source')} <a href="https://www.ema.europa.eu/en/medicines/human/EPAR/jascayd" target="_blank" rel="noopener">EMA</a></p>`;
    host.querySelectorAll('[data-stage]').forEach(btn=>btn.onclick=()=>{host.querySelectorAll('[data-stage]').forEach(x=>x.classList.toggle('active',x===btn));const s=stages[+btn.dataset.stage];document.getElementById('atlas-copy').innerHTML=`<span>0${+btn.dataset.stage+1} / 06</span><h3>${s[1]}</h3><p>${s[2]}</p>`;host.querySelector('.alveolus').dataset.stage=btn.dataset.stage;});
  }
  function measurementCards(){const c=lang==='el'?[['FVC','Πόσο αέρα μπορεί να εκπνεύσει ο ασθενής· δείκτης όγκου, όχι καθημερινό οξύμετρο.'],['DLCO','Πόσο αποτελεσματικά περνούν τα αέρια από τον πνεύμονα στο αίμα.'],['SpO₂','Στιγμιαία περιφερική εκτίμηση κορεσμού, επηρεάζεται από συνθήκες και τεχνική.'],['6MWT','Τυποποιημένη συνολική απόκριση στην προσπάθεια, όχι δοκιμασία για το σπίτι χωρίς επίβλεψη.'],['HRCT','Απεικονίζει τη δομή και το πρότυπο της νόσου, όχι την καθημερινή δραστηριότητα.']]:[['FVC','How much air can be exhaled; a volume measure, not a daily oximeter.'],['DLCO','How effectively gases transfer from lung to blood.'],['SpO₂','A momentary peripheral saturation estimate affected by conditions and technique.'],['6MWT','A standardised whole-system response to exertion, not an unsupervised home test.'],['HRCT','Shows structure and disease pattern, not day-to-day activity.']];return c.map(x=>`<article><strong>${x[0]}</strong><p>${x[1]}</p></article>`).join('');}

  function renderCare(){const host=document.getElementById('care-compass');if(!host)return;host.innerHTML=`<div class="safety-banner"><strong>${t('medicalGuard')}</strong><span>${t('emergency')}</span></div><div class="card dose-card"><span class="eyebrow">NERANDOMILAST • JASCAYD</span><p>${t('doseCard')}</p></div><div class="rescue-grid">${rescueCards()}</div><div class="card goals-card"><div class="section-head"><div><span class="eyebrow">MEANINGFUL ACTIVITY</span><h3>${t('goals')}</h3><p>${t('goalPrompt')}</p></div></div><form id="goal-form" class="goal-form"><input name="text" required maxlength="120" placeholder="${t('goalPlaceholder')}"><button class="primary">${t('addGoal')}</button></form><div id="goal-list">${goalList()}</div></div><p class="source-note">${t('source')} <a href="https://www.ema.europa.eu/en/medicines/human/EPAR/jascayd" target="_blank" rel="noopener">EMA</a></p>`;
    host.querySelectorAll('.rescue-card button').forEach(b=>b.onclick=()=>b.closest('.rescue-card').classList.toggle('open'));
    document.getElementById('goal-form').onsubmit=async ev=>{ev.preventDefault();const text=new FormData(ev.target).get('text').trim();if(!text)return;D.goals.unshift({id:crypto.randomUUID(),text,createdAt:new Date().toISOString(),checks:[]});await Vault.save();renderCare();};
    host.querySelectorAll('[data-goal-update]').forEach(b=>b.onclick=async()=>{const g=D.goals.find(x=>x.id===b.dataset.goalUpdate);const input=host.querySelector(`[data-goal-score="${b.dataset.goalUpdate}"]`);if(g&&input.value!==''){g.checks.push({date:today(),score:+input.value});await Vault.save();renderCare();}});
  }
  function rescueCards(){const cards=lang==='el'?[['diarrhea','Διάρροια και ενυδάτωση','Καταγράψτε αριθμό/τύπο κενώσεων, νυχτερινή διάρροια, υγρά, ζάλη, μειωμένα ούρα και συγχορήγηση άλλου αντιινωτικού. Αδυναμία λήψης υγρών, αίμα ή μαύρα κόπρανα χρειάζονται άμεση αξιολόγηση.'],['weight','Βάρος και όρεξη','Ακολουθήστε την τάση από το αρχικό βάρος, όχι μία μεμονωμένη μέτρηση. Καταγράψτε μειωμένη όρεξη και πρόσληψη τροφής και ενημερώστε για προοδευτική ή ανεξήγητη απώλεια.'],['newMed','Νέο φάρμακο ή συμπλήρωμα','Καταγράψτε όνομα, δόση και ημερομηνία. Ζητήστε έλεγχο πριν από την έναρξη—ιδίως για ισχυρούς αναστολείς CYP3A, μέτριους/ισχυρούς επαγωγείς CYP3A και πιρφενιδόνη. Μην προσαρμόσετε μόνοι σας τη δόση.'],['pulmonary','Αιφνίδια αναπνευστική αλλαγή','Νέα ή ταχέως επιδεινούμενη δύσπνοια μπορεί να οφείλεται σε λοίμωξη, πνευμονική εμβολή, πνευμοθώρακα, καρδιακό αίτιο, εισρόφηση ή παρόξυνση. Η εφαρμογή δεν μπορεί να τα διαγνώσει.']]:[['diarrhea','Diarrhoea and hydration','Record stool number/type, night-time diarrhoea, fluids, dizziness, reduced urine, and background antifibrotic use. Inability to drink, blood, or black stools require urgent assessment.'],['weight','Weight and appetite','Follow the trend from baseline rather than one reading. Record reduced appetite and food intake, and report progressive or unexplained loss.'],['newMed','New medicine or supplement','Record the name, dose, and date. Request a check before starting—especially for strong CYP3A inhibitors, moderate/strong CYP3A inducers, and pirfenidone. Do not adjust the dose yourself.'],['pulmonary','Sudden respiratory change','New or rapidly worsening breathlessness can reflect infection, pulmonary embolism, pneumothorax, cardiac disease, aspiration, or exacerbation. The app cannot diagnose these.']];return cards.map(([k,h,p])=>`<article class="card rescue-card"><button type="button" aria-expanded="false"><span class="rescue-icon">${{diarrhea:'≈',weight:'↘',newMed:'+',pulmonary:'⌁'}[k]}</span><strong>${h}</strong><span>＋</span></button><div><p>${p}</p></div></article>`).join('');}
  function goalList(){if(!(D.goals||[]).length)return`<div class="empty-state">${t('noGoals')}</div>`;return D.goals.map(g=>{const last=g.checks?.at(-1);return`<article class="goal-row"><div><strong>${e(g.text)}</strong><small>${last?`${last.date} · ${last.score}/10`:''}</small></div><label>${t('weekly')}<input data-goal-score="${g.id}" type="number" min="0" max="10"></label><button type="button" class="soft" data-goal-update="${g.id}">${t('update')}</button></article>`}).join('');}

  function renderAll(){ensureEliteNavigation();renderCockpit();renderTrajectory();renderAtlas();renderCare();translateShell();}
  const toggle=document.getElementById('language-toggle'); if(toggle)toggle.onclick=()=>setLanguage(lang==='el'?'en':'el'); setLanguage(lang);
  const timer=setInterval(()=>{if(typeof D !== 'undefined'&&D&&document.getElementById('navigation')?.children.length){clearInterval(timer);renderAll();}},250);
})();
