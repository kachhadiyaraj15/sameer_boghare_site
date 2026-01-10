// Language data with fund-specific documents
const languageData = {
    en: {
        advocateName: 'Advocate Samirbhai Boghara',
        languageLabel: 'Choose Language:',
        fundLabel: 'Select Relief Fund:',
        fundOptions: {
            gujaratCM: 'Gujarat Chief Minister Relief Fund',
            pmNational: 'Prime Minister National Relief Fund',
            suratMayor: 'Surat Mayor Fund'
        },
        documentTitle: 'Required Documents',
        // Fund-specific documents
        fundDocuments: {
            'gujarat-cm': [
                "Patient's Aadhar Card Xerox",
                "Applicant's Aadhar Card Xerox",
                "Ration Card Xerox",
                "Patient's Ayushman Card Xerox",
                "Income Certificate Xerox (4 Lakhs Limit)",
                "Hospital's Estimated Expense (Original Copy)",
                "Patient's Bank Account - 1 Cancelled Cheque (Original)"
            ],
            'pm-national': [
                "Patient's Aadhar Card Xerox",
                "Applicant's Aadhar Card Xerox",
                "Ration Card Xerox",
                "Patient's Ayushman Card Xerox",
                "Income Certificate",
                "Patient's and Applicant's Passport Size Photo (1 each)",
                "Hospital's Estimated Expense (Original Copy)",
                "Patient's Bank Account - 1 Cancelled Cheque (Original) or Passbook First Page Copy (Should be clearly visible)",
                "MP Suggested Letter or Rajya Sabha Member's Suggested Letter (Any MP of India)"
            ],
            'surat-mayor': [
                "Make xerox copies of the documents listed below, prepare the file in order as per the information given, and get the file checked at the given address."
            ]
        },
        // Fund-specific notes
        fundNotes: {
            'gujarat-cm': [
                "If the patient is applying himself/herself, Applicant's documents are not required.",
                "If someone other than the patient is applying, that person must be listed in the Ration Card and must be 18+ years old.",
                "Gujarat CM Relief Fund is only for Gujarat residents. Persons from other states are not eligible."
            ],
            'pm-national': [
                "If the patient is applying himself/herself, Applicant's documents are not required.",
                "If someone other than the patient is applying, that person must be listed in the Ration Card and must be 18+ years old."
            ],
            'surat-mayor': [
                "Applicant must be a resident of Surat Municipal Corporation area (Ration card must be from Surat Municipal Corporation).",
                "All documents must be certified copies.",
                "Bills must be arranged in order with a summary sheet showing total cost.",
                "Maximum claim amount: Rs. 50,000 or 10% of the total bill amount, whichever is lower."
            ]
        },
        // Surat Mayor Fund - Additional Instructions
        suratMayorInstructions: {
            en: "Make xerox copies of the documents listed below, prepare the file in order as per the information given, get the file checked at the given address, and then download the required forms:",
            hi: "नीचे दी गई दस्तावेजों की ज़ेरॉक्स करवाएं, दी गई जानकारी के अनुसार क्रमानुसार फाइल तैयार करें, दिए गए पते पर फाइल चेक करवाएं और फिर आवश्यक फॉर्म डाउनलोड करें:",
            gu: "નીચે આપેલા દસ્તાવેજોની ઝેરોક્ષ કરાવી, તેમાં આપેલી માહિતી મુજબ ક્રમાનુસાર ફાઈલ તૈયાર કરીને આપેલા સરનામે પર ફાઈલ ચેક કરાવી જવી અને પછી જરૂરી ફોર્મ ડાઉનલોડ કરો:"
        },
        suratMayorPDFs: [
            { name: "Mayor Fund Bill Format", file: "./pdf_doc/surat_mayor_fund_docs/MAYOR FUND BILL.pdf" },
            { name: "Application Form (New)", file: "./pdf_doc/surat_mayor_fund_docs/MF AARJI FORM NEW.pdf" }
        ],
        footerText: '© 2026 Advocate Samirbhai Boghara. All rights reserved.',
        notesTitle: 'Important Notes',
        hospitalButtonText: 'List of Hospitals (Click Here)',
        contactTitle: '📍 Office Address',
        officeLabel: 'Office:',
        officeAddress: 'Office Number 3081, Third Floor, Silver Business Point,<br>Near VIP Circle, Opposite Nayra Petrol Pump,<br>Utran, Surat.',
        phoneLabel: 'Phone Number:',
        contactPerson: '(Raghu Boghara)',
        whatsappNote: 'Only call if it is emergency, otherwise just ping on WhatsApp'
    },
    hi: {
        advocateName: 'अधिवक्ता समीरभाई बोघरा',
        languageLabel: 'भाषा चुनें:',
        fundLabel: 'राहत फंड चुनें:',
        fundOptions: {
            gujaratCM: 'गुजरात मुख्यमंत्री राहत कोष',
            pmNational: 'प्रधानमंत्री राष्ट्रीय राहत कोष',
            suratMayor: 'सूरत मेयर फंड'
        },
        documentTitle: 'आवश्यक दस्तावेज',
        fundDocuments: {
            'gujarat-cm': [
                "मरीज का आधार कार्ड की ज़ेरॉक्स",
                "आवेदक का आधार कार्ड की ज़ेरॉक्स",
                "राशन कार्ड की ज़ेरॉक्स",
                "मरीज का आयुष्मान कार्ड की ज़ेरॉक्स",
                "आय प्रमाण पत्र की ज़ेरॉक्स (4 लाख की सीमा)",
                "अस्पताल का अनुमानित खर्च (मूल प्रति)",
                "मरीज के बैंक खाते का 1 कैंसल चेक (मूल)"
            ],
            'pm-national': [
                "मरीज का आधार कार्ड की ज़ेरॉक्स",
                "आवेदक का आधार कार्ड की ज़ेरॉक्स",
                "राशन कार्ड की ज़ेरॉक्स",
                "मरीज का आयुष्मान कार्ड की ज़ेरॉक्स",
                "आय प्रमाण पत्र",
                "मरीज और आवेदक का पासपोर्ट साइज फोटो (1-1)",
                "अस्पताल का अनुमानित खर्च (मूल प्रति)",
                "मरीज के बैंक खाते का 1 कैंसल चेक (मूल) या पासबुक के पहले पेज की कॉपी (स्पष्ट दिखना चाहिए)",
                "सांसद का सुझाव पत्र या राज्यसभा सदस्य का सुझाव पत्र (भारत का कोई भी सांसद)"
            ],
            'surat-mayor': [
                "नीचे दी गई दस्तावेजों की ज़ेरॉक्स करवाएं, दी गई जानकारी के अनुसार क्रमानुसार फाइल तैयार करें और दिए गए पते पर फाइल चेक करवाएं।"
            ]
        },
        fundNotes: {
            'gujarat-cm': [
                "यदि मरीज स्वयं आवेदन कर रहा है, तो आवेदक के दस्तावेजों की आवश्यकता नहीं है।",
                "यदि मरीज के अलावा कोई अन्य व्यक्ति आवेदन कर रहा है, तो वह व्यक्ति राशन कार्ड में सूचीबद्ध होना चाहिए और 18 वर्ष से अधिक आयु का होना चाहिए।",
                "गुजरात मुख्यमंत्री राहत कोष केवल गुजरात के निवासियों के लिए है। अन्य राज्यों के व्यक्ति पात्र नहीं हैं।"
            ],
            'pm-national': [
                "यदि मरीज स्वयं आवेदन कर रहा है, तो आवेदक के दस्तावेजों की आवश्यकता नहीं है।",
                "यदि मरीज के अलावा कोई अन्य व्यक्ति आवेदन कर रहा है, तो वह व्यक्ति राशन कार्ड में सूचीबद्ध होना चाहिए और 18 वर्ष से अधिक आयु का होना चाहिए।"
            ],
            'surat-mayor': [
                "आवेदक सूरत महानगरपालिका की सीमा क्षेत्र में रहने वाला होना चाहिए (राशन कार्ड सूरत महानगरपालिका का होना आवश्यक है)।",
                "सभी दस्तावेज प्रमाणित प्रतियां होनी चाहिए।",
                "बिलों को क्रम में व्यवस्थित किया जाना चाहिए और कुल लागत दिखाने वाली सारांश शीट होनी चाहिए।",
                "अधिकतम दावा राशि: रु. 50,000 या कुल बिल राशि का 10%, जो भी कम हो।"
            ]
        },
        // Surat Mayor Fund - Additional Instructions
        suratMayorInstructions: {
            en: "Make xerox copies of the documents listed below, prepare the file in order as per the information given, get the file checked at the given address, and then download the required forms:",
            hi: "नीचे दी गई दस्तावेजों की ज़ेरॉक्स करवाएं, दी गई जानकारी के अनुसार क्रमानुसार फाइल तैयार करें, दिए गए पते पर फाइल चेक करवाएं और फिर आवश्यक फॉर्म डाउनलोड करें:",
            gu: "નીચે આપેલા દસ્તાવેજોની ઝેરોક્ષ કરાવી, તેમાં આપેલી માહિતી મુજબ ક્રમાનુસાર ફાઈલ તૈયાર કરીને આપેલા સરનામે પર ફાઈલ ચેક કરાવી જવી અને પછી જરૂરી ફોર્મ ડાઉનલોડ કરો:"
        },
        suratMayorPDFs: [
            { name: "Mayor Fund Bill Format", file: "./pdf_doc/surat_mayor_fund_docs/MAYOR FUND BILL.pdf" },
            { name: "Application Form (New)", file: "./pdf_doc/surat_mayor_fund_docs/MF AARJI FORM NEW.pdf" }
        ],
        footerText: '© 2026 अधिवक्ता समीरभाई बोघरा। सर्वाधिकार सुरक्षित।',
        notesTitle: 'महत्वपूर्ण नोट्स',
        hospitalButtonText: 'अस्पतालों की सूची (यहां क्लिक करें)',
        contactTitle: '📍 ऑफिस एड्रेस',
        officeLabel: 'ऑफिस:',
        officeAddress: 'ऑफिस नंबर 3081, तीसरी मंजिल, सिल्वर बिजनेस पॉइंट,<br>वीआईपी सर्कल के पास, नायरा पेट्रोल पंप के सामने,<br>उतरान, सूरत।',
        phoneLabel: 'फोन नंबर:',
        contactPerson: '(रघु बोघरा)',
        whatsappNote: 'केवल इमर्जेंसी में ही कॉल करें, अन्यथा WhatsApp पर मैसेज भेजें'
    },
    gu: {
        advocateName: 'એડવોકેટ સમીરભાઈ બોઘરા',
        languageLabel: 'ભાષા પસંદ કરો:',
        fundLabel: 'રાહત ફંડ પસંદ કરો:',
        fundOptions: {
            gujaratCM: 'ગુજરાત મુખ્યમંત્રી રાહત ફંડ',
            pmNational: 'પ્રધાનમંત્રી રાષ્ટ્રીય રાહત ફંડ',
            suratMayor: 'સુરત મેયર ફંડ'
        },
        documentTitle: 'જરૂરી દસ્તાવેજો',
        fundDocuments: {
            'gujarat-cm': [
                "દર્દીના આધાર કાર્ડની ઝેરોક્ષ",
                "અરજદારના આધાર કાર્ડની ઝેરોક્ષ",
                "રેશન કાર્ડની ઝેરોક્ષ",
                "દર્દીના આયુષ્માન કાર્ડની ઝેરોક્ષ",
                "આવકના દાખલાની ઝેરોક્ષ (4 લાખની મર્યાદા)",
                "હોસ્પિટલનો અંદાજિત ખર્ચ (ઓરિજિનલ કોપી)",
                "દર્દીના બેંક ખાતાનો 1 કેન્સલ ચેક (ઓરિજિનલ)"
            ],
            'pm-national': [
                "દર્દીના આધાર કાર્ડની ઝેરોક્ષ",
                "અરજદારના આધાર કાર્ડની ઝેરોક્ષ",
                "રેશન કાર્ડની ઝેરોક્ષ",
                "દર્દીના આયુષ્માન કાર્ડની ઝેરોક્ષ",
                "આવકનો દાખલો",
                "દર્દી અને અરજદારનો પાસપોર્ટ સાઈઝ ફોટો (1-1)",
                "હોસ્પિટલનો અંદાજિત ખર્ચ (ઓરિજિનલ કોપી)",
                "દર્દીના બેંક ખાતાનો 1 કેન્સલ ચેક (ઓરિજિનલ) અથવા પાસબુકના પહેલા પાનાની કોપી (સ્પષ્ટ દેખાવું જોઈએ)",
                "સાંસદશ્રીનો ભલામણ પત્ર અથવા રાજ્યસભા સદસ્યશ્રીનો ભલામણ પત્ર (ભારતના કોઈપણ સાંસદ)"
            ],
            'surat-mayor': [
                "નીચે આપેલા દસ્તાવેજોની ઝેરોક્ષ કરાવી, તેમાં આપેલી માહિતી મુજબ ક્રમાનુસાર ફાઈલ તૈયાર કરીને આપેલા સરનામે પર ફાઈલ ચેક કરાવી જવી."
            ]
        },
        fundNotes: {
            'gujarat-cm': [
                "જો દર્દી પોતે અરજી કરી રહ્યા હોય, તો અરજદારના દસ્તાવેજોની જરૂર નથી.",
                "જો દર્દી સિવાય બીજી કોઈ વ્યક્તિ અરજી કરી રહી હોય, તો તે વ્યક્તિ રેશન કાર્ડમાં સૂચિબદ્ધ હોવી જોઈએ અને 18 વર્ષથી વધુ ઉંમરની હોવી જોઈએ.",
                "ગુજરાત મુખ્યમંત્રી રાહત ભંડોળ ફક્ત ગુજરાતના નિવાસીઓ માટે છે. અન્ય રાજ્યોના વ્યક્તિઓ પાત્ર નથી."
            ],
            'pm-national': [
                "જો દર્દી પોતે અરજી કરી રહ્યા હોય, તો અરજદારના દસ્તાવેજોની જરૂર નથી.",
                "જો દર્દી સિવાય બીજી કોઈ વ્યક્તિ અરજી કરી રહી હોય, તો તે વ્યક્તિ રેશન કાર્ડમાં સૂચિબદ્ધ હોવી જોઈએ અને 18 વર્ષથી વધુ ઉંમરની હોવી જોઈએ."
            ],
            'surat-mayor': [
                "અરજદાર સુરત મહાનગરપાલિકાની હદ વિસ્તારમાં રહેતા હોવા જોઈએ (ચૂંટણી કાર્ડ સુરત મહાનગરપાલિકાનું હોવું જરૂરી છે).",
                "તમામ દસ્તાવેજો પ્રમાણિત નકલો હોવી જોઈએ.",
                "બિલો ક્રમમાં ગોઠવેલા હોવા જોઈએ અને કુલ ખર્ચ દર્શાવતી સારાંશ શીટ હોવી જોઈએ.",
                "મહત્તમ દાવો રકમ: રૂ. 50,000 અથવા કુલ બિલની રકમના 10%, જે પણ ઓછું હોય."
            ]
        },
        // Surat Mayor Fund - Additional Instructions
        suratMayorInstructions: {
            en: "Make xerox copies of the documents listed below, prepare the file in order as per the information given, get the file checked at the given address, and then download the required forms:",
            hi: "नीचे दी गई दस्तावेजों की ज़ेरॉक्स करवाएं, दी गई जानकारी के अनुसार क्रमानुसार फाइल तैयार करें, दिए गए पते पर फाइल चेक करवाएं और फिर आवश्यक फॉर्म डाउनलोड करें:",
            gu: "નીચે આપેલા દસ્તાવેજોની ઝેરોક્ષ કરાવી, તેમાં આપેલી માહિતી મુજબ ક્રમાનુસાર ફાઈલ તૈયાર કરીને આપેલા સરનામે પર ફાઈલ ચેક કરાવી જવી અને પછી જરૂરી ફોર્મ ડાઉનલોડ કરો:"
        },
        suratMayorPDFs: [
            { name: "Mayor Fund Bill Format", file: "./pdf_doc/surat_mayor_fund_docs/MAYOR FUND BILL.pdf" },
            { name: "Application Form (New)", file: "./pdf_doc/surat_mayor_fund_docs/MF AARJI FORM NEW.pdf" }
        ],
        footerText: '© 2026 એડવોકેટ સમીરભાઈ બોઘરા. બધા અધિકારો અનામત.',
        notesTitle: 'મહત્વપૂર્ણ નોંધો',
        hospitalButtonText: 'હોસ્પિટલોની યાદી (અહીં ક્લિક કરો)',
        contactTitle: '📍 ઑફિસ એડ્રેસ',
        officeLabel: 'ઑફિસ:',
        officeAddress: 'ઑફિસ નંબર 3081, ત્રીજો માળ, સિલ્વર બિઝનેસ પોઈન્ટ,<br>વીઆઈપી સર્કલ પાસે, નાયરા પેટ્રોલ પંપની સામે,<br>ઉતરાણ, સુરત.',
        phoneLabel: 'ફોન નંબર:',
        contactPerson: '(રઘુ બોઘરા)',
        whatsappNote: 'માત્ર ઇમર્જન્સી માં જ કૉલ કરો, અન્યથા WhatsApp પર મેસેજ મોકલો'
    }
};

// Current state
let currentLanguage = 'gu';
let currentFund = null;

// Initialize the page
function init() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languageData[savedLanguage]) {
        currentLanguage = savedLanguage;
    }

    // Update active button to match current language
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });

    // Load content for current language
    loadLanguageContent(currentLanguage);

    // Hide documents and notes initially (no fund selected)
    hideDocumentsSection();
}

// Hide documents section
function hideDocumentsSection() {
    const documentListEl = document.getElementById('documentList');
    const notesSection = document.getElementById('notesSection');

    documentListEl.innerHTML = '<li class="select-fund-message">કૃપા કરીને ઉપરથી ફંડ પસંદ કરો</li>';
    notesSection.style.display = 'none';
}

// Change language function
function changeLanguage(lang) {
    if (!languageData[lang]) {
        console.error(`Language ${lang} not found`);
        return;
    }

    currentLanguage = lang;

    // Save preference
    localStorage.setItem('preferredLanguage', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Load content with animation
    loadLanguageContent(lang);

    // If a fund is selected, reload its documents
    if (currentFund) {
        loadFundDocuments(currentFund);
    } else {
        updateSelectFundMessage();
    }
}

// Update select fund message based on language
function updateSelectFundMessage() {
    const messages = {
        'en': 'Please select a fund from above',
        'hi': 'कृपया ऊपर से फंड चुनें',
        'gu': 'કૃપા કરીને ઉપરથી ફંડ પસંદ કરો'
    };

    const documentListEl = document.getElementById('documentList');
    documentListEl.innerHTML = `<li class="select-fund-message">${messages[currentLanguage]}</li>`;
}

// Load content for selected language
function loadLanguageContent(lang) {
    const data = languageData[lang];

    // Update advocate name
    const advocateNameEl = document.getElementById('advocateName');
    fadeOutAndUpdate(advocateNameEl, data.advocateName);

    // Update language label
    const languageLabelEl = document.getElementById('languageLabel');
    fadeOutAndUpdate(languageLabelEl, data.languageLabel);

    // Update fund label
    const fundLabelEl = document.getElementById('fundLabel');
    fadeOutAndUpdate(fundLabelEl, data.fundLabel);

    // Update fund options
    const fundOption1El = document.getElementById('fundOption1');
    fadeOutAndUpdate(fundOption1El, data.fundOptions.gujaratCM);

    const fundOption2El = document.getElementById('fundOption2');
    fadeOutAndUpdate(fundOption2El, data.fundOptions.pmNational);

    const fundOption3El = document.getElementById('fundOption3');
    fadeOutAndUpdate(fundOption3El, data.fundOptions.suratMayor);

    // Update document title
    const documentTitleEl = document.getElementById('documentTitle');
    fadeOutAndUpdate(documentTitleEl, data.documentTitle);

    // Update notes title
    const notesTitleEl = document.getElementById('notesTitle');
    if (notesTitleEl) {
        fadeOutAndUpdate(notesTitleEl, data.notesTitle);
    }

    // Update contact section
    const contactTitleEl = document.getElementById('contactTitle');
    const officeLabelEl = document.getElementById('officeLabel');
    const officeAddressEl = document.getElementById('officeAddress');
    const phoneLabelEl = document.getElementById('phoneLabel');
    const contactPersonEl = document.getElementById('contactPerson');
    const whatsappNoteEl = document.getElementById('whatsappNote');

    if (contactTitleEl) fadeOutAndUpdate(contactTitleEl, data.contactTitle);
    if (officeLabelEl) fadeOutAndUpdate(officeLabelEl, data.officeLabel);
    if (officeAddressEl) {
        officeAddressEl.style.opacity = '0';
        setTimeout(() => {
            officeAddressEl.innerHTML = data.officeAddress;
            officeAddressEl.style.opacity = '1';
        }, 300);
    }
    if (phoneLabelEl) fadeOutAndUpdate(phoneLabelEl, data.phoneLabel);
    if (contactPersonEl) fadeOutAndUpdate(contactPersonEl, data.contactPerson);
    if (whatsappNoteEl) fadeOutAndUpdate(whatsappNoteEl, data.whatsappNote);

    // Update footer
    const footerTextEl = document.getElementById('footerText');
    fadeOutAndUpdate(footerTextEl, data.footerText);
}

// Handle fund selection
function selectFund(fundType) {
    currentFund = fundType;

    // Remove active class from all fund buttons
    document.querySelectorAll('.fund-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to selected button
    const selectedBtn = document.querySelector(`[data-fund="${fundType}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    // Save selected fund
    localStorage.setItem('selectedFund', fundType);

    // Load fund-specific documents
    loadFundDocuments(fundType);
}

// Load fund-specific documents
function loadFundDocuments(fundType) {
    const data = languageData[currentLanguage];
    const documents = data.fundDocuments[fundType];
    const notes = data.fundNotes[fundType];

    // Update document list
    const documentListEl = document.getElementById('documentList');
    fadeOutAndUpdateList(documentListEl, documents);

    // Update notes section
    const notesSection = document.getElementById('notesSection');
    const notesList = document.getElementById('notesList');
    const notesTitleEl = document.getElementById('notesTitle');

    if (notes && notes.length > 0) {
        notesSection.style.display = 'block';
        notesTitleEl.textContent = data.notesTitle;
        fadeOutAndUpdateNotes(notesList, notes);
    } else {
        notesSection.style.display = 'none';
    }

    // Show PDF download section for Surat Mayor Fund
    const pdfSection = document.getElementById('pdfDownloadSection');
    if (fundType === 'surat-mayor') {
        pdfSection.style.display = 'block';

        // Update PDF buttons
        const pdfButtonsEl = document.getElementById('pdfButtons');
        pdfButtonsEl.innerHTML = '';

        data.suratMayorPDFs.forEach(pdf => {
            const container = document.createElement('div');
            container.className = 'pdf-item';

            // View button - opens PDF in new tab
            const viewBtn = document.createElement('a');
            viewBtn.href = pdf.file;
            viewBtn.className = 'pdf-view-btn';
            viewBtn.target = '_blank';
            viewBtn.rel = 'noopener noreferrer';
            viewBtn.innerHTML = `
                <span class="pdf-icon">📄</span>
                <span class="pdf-name">${pdf.name}</span>
            `;

            // Download button
            const downloadBtn = document.createElement('a');
            downloadBtn.href = pdf.file;
            downloadBtn.className = 'pdf-download-btn-action';
            downloadBtn.download = pdf.name + '.pdf';
            downloadBtn.innerHTML = `<span class="download-icon">⬇️ Download</span>`;

            container.appendChild(viewBtn);
            container.appendChild(downloadBtn);
            pdfButtonsEl.appendChild(container);
        });
    } else {
        pdfSection.style.display = 'none';
    }

    // Show Hospital List button for PM National Relief Fund
    const hospitalSection = document.getElementById('hospitalListSection');
    const hospitalButtonText = document.getElementById('hospitalButtonText');
    if (fundType === 'pm-national') {
        hospitalSection.style.display = 'block';
        hospitalButtonText.textContent = data.hospitalButtonText;
    } else {
        hospitalSection.style.display = 'none';
    }
}

// Fade out and update element
function fadeOutAndUpdate(element, newContent) {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        element.textContent = newContent;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 300);
}

// Fade out and update list
function fadeOutAndUpdateList(listElement, items) {
    // Fade out
    listElement.style.opacity = '0';
    listElement.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        // Clear existing items
        listElement.innerHTML = '';

        // Add new items
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.animationDelay = `${index * 0.1}s`;
            listElement.appendChild(li);
        });

        // Fade in
        listElement.style.opacity = '1';
        listElement.style.transform = 'translateY(0)';
    }, 300);
}

// Fade out and update notes
function fadeOutAndUpdateNotes(listElement, items) {
    // Fade out
    listElement.style.opacity = '0';
    listElement.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        // Clear existing items
        listElement.innerHTML = '';

        // Add new items
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.animationDelay = `${index * 0.1}s`;
            listElement.appendChild(li);
        });

        // Fade in
        listElement.style.opacity = '1';
        listElement.style.transform = 'translateY(0)';
    }, 300);
}

// Add smooth transitions to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add transition styles
    const elementsToAnimate = [
        'advocateName',
        'languageLabel',
        'fundLabel',
        'fundOption1',
        'fundOption2',
        'fundOption3',
        'documentTitle',
        'documentList',
        'notesList',
        'notesTitle',
        'footerText'
    ];

    elementsToAnimate.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }
    });

    // Initialize the application
    init();
});

// Export for use in HTML
window.changeLanguage = changeLanguage;
window.selectFund = selectFund;
