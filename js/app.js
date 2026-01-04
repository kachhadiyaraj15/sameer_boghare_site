// Language data stored in separate directories
const languageData = {
    en: {
        advocateName: 'Advocate Sameer Boghara',
        languageLabel: 'Choose Language:',
        documentTitle: 'Required Documents',
        documents: [
            'Aadhar Card (Original and Photocopy)',
            'PAN Card (Original and Photocopy)',
            'Passport Size Photographs (2 copies)',
            'Address Proof (Electricity Bill / Rent Agreement)',
            'Income Proof (Salary Slip / Bank Statement)',
            'Marriage Certificate (if applicable)',
            'Birth Certificate (if applicable)',
            'Previous Legal Documents (if any)'
        ],
        footerText: '© 2026 Advocate Sameer Boghara. All rights reserved.'
    },
    hi: {
        advocateName: 'अधिवक्ता समीर बोघरा',
        languageLabel: 'भाषा चुनें:',
        documentTitle: 'आवश्यक दस्तावेज',
        documents: [
            'आधार कार्ड (मूल और फोटोकॉपी)',
            'पैन कार्ड (मूल और फोटोकॉपी)',
            'पासपोर्ट साइज फोटो (2 प्रतियां)',
            'पता प्रमाण (बिजली बिल / किराया समझौता)',
            'आय प्रमाण (वेतन पर्ची / बैंक स्टेटमेंट)',
            'विवाह प्रमाण पत्र (यदि लागू हो)',
            'जन्म प्रमाण पत्र (यदि लागू हो)',
            'पिछले कानूनी दस्तावेज (यदि कोई हो)'
        ],
        footerText: '© 2026 अधिवक्ता समीर बोघरा। सर्वाधिकार सुरक्षित।'
    },
    gu: {
        advocateName: 'એડવોકેટ સમીર બોઘરા',
        languageLabel: 'ભાષા પસંદ કરો:',
        documentTitle: 'જરૂરી દસ્તાવેજો',
        documents: [
            'આધાર કાર્ડ (મૂળ અને ફોટોકોપી)',
            'પાન કાર્ડ (મૂળ અને ફોટોકોપી)',
            'પાસપોર્ટ સાઇઝ ફોટોગ્રાફ્સ (2 નકલો)',
            'સરનામાંનો પુરાવો (વીજળી બિલ / ભાડા કરાર)',
            'આવકનો પુરાવો (પગાર સ્લિપ / બેંક સ્ટેટમેન્ટ)',
            'લગ્ન પ્રમાણપત્ર (જો લાગુ પડતું હોય)',
            'જન્મ પ્રમાણપત્ર (જો લાગુ પડતું હોય)',
            'અગાઉના કાનૂની દસ્તાવેજો (જો કોઈ હોય)'
        ],
        footerText: '© 2026 એડવોકેટ સમીર બોઘરા. બધા અધિકારો અનામત.'
    }
};

// Current language state
let currentLanguage = 'en';

// Initialize the page
function init() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languageData[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Load content for current language
    loadLanguageContent(currentLanguage);
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
    
    // Update document title
    const documentTitleEl = document.getElementById('documentTitle');
    fadeOutAndUpdate(documentTitleEl, data.documentTitle);
    
    // Update document list
    const documentListEl = document.getElementById('documentList');
    fadeOutAndUpdateList(documentListEl, data.documents);
    
    // Update footer
    const footerTextEl = document.getElementById('footerText');
    fadeOutAndUpdate(footerTextEl, data.footerText);
}

// Fade out and update element
function fadeOutAndUpdate(element, newContent) {
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

// Add smooth transitions to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add transition styles
    const elementsToAnimate = [
        'advocateName',
        'languageLabel',
        'documentTitle',
        'documentList',
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
