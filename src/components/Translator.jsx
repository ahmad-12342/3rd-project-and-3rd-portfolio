import React, { useEffect, useState, useMemo } from "react";
import { MdTranslate, MdClose, MdSearch } from "react-icons/md";

// Comprehensive list of Google Translate languages (~135 popular ones)
const ALL_LANGUAGES = [
    { code: "en", name: "English" },
    { code: "zh-CN", name: "Chinese (Simplified)" },
    { code: "hi", name: "Hindi" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "ar", name: "Arabic" },
    { code: "bn", name: "Bengali" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ur", name: "Urdu" },
    { code: "id", name: "Indonesian" },
    { code: "de", name: "German" },
    { code: "ja", name: "Japanese" },
    { code: "sw", name: "Swahili" },
    { code: "mr", name: "Marathi" },
    { code: "te", name: "Telugu" },
    { code: "tr", name: "Turkish" },
    { code: "ta", name: "Tamil" },
    { code: "ko", name: "Korean" },
    { code: "vi", name: "Vietnamese" },
    { code: "it", name: "Italian" },
    { code: "th", name: "Thai" },
    { code: "gu", name: "Gujarati" },
    { code: "kn", name: "Kannada" },
    { code: "fa", name: "Persian" },
    { code: "pl", name: "Polish" },
    { code: "pas", name: "Pashto" },
    { code: "ml", name: "Malayalam" },
    { code: "su", name: "Sundanese" },
    { code: "ha", name: "Hausa" },
    { code: "or", name: "Odia (Oriya)" },
    { code: "my", name: "Myanmar (Burmese)" },
    { code: "uk", name: "Ukrainian" },
    { code: "bho", name: "Bhojpuri" },
    { code: "tl", name: "Filipino" },
    { code: "yo", name: "Yoruba" },
    { code: "mai", name: "Maithili" },
    { code: "uz", name: "Uzbek" },
    { code: "sd", name: "Sindhi" },
    { code: "am", name: "Amharic" },
    { code: "ff", name: "Fula" },
    { code: "ro", name: "Romanian" },
    { code: "az", name: "Azerbaijani" },
    { code: "ig", name: "Igbo" },
    { code: "nl", name: "Dutch" },
    { code: "kur", name: "Kurdish" },
    { code: "sr", name: "Serbian" },
    { code: "ne", name: "Nepali" },
    { code: "si", name: "Sinhala" },
    { code: "km", name: "Khmer" },
    { code: "hu", name: "Hungarian" },
    { code: "el", name: "Greek" },
    { code: "cs", name: "Czech" },
    { code: "sv", name: "Swedish" },
    { code: "bg", name: "Bulgarian" },
    { code: "iw", name: "Hebrew" },
    { code: "da", name: "Danish" },
    { code: "fi", name: "Finnish" },
    { code: "sk", name: "Slovak" },
    { code: "no", name: "Norwegian" },
    { code: "hr", name: "Croatian" },
    { code: "ms", name: "Malay" },
    { code: "af", name: "Afrikaans" },
    { code: "sq", name: "Albanian" },
    { code: "hy", name: "Armenian" },
    { code: "as", name: "Assamese" },
    { code: "ay", name: "Aymara" },
    { code: "bm", name: "Bambara" },
    { code: "eu", name: "Basque" },
    { code: "be", name: "Belarusian" },
    { code: "bs", name: "Bosnian" },
    { code: "ca", name: "Catalan" },
    { code: "ceb", name: "Cebuano" },
    { code: "ny", name: "Chichewa" },
    { code: "zh-TW", name: "Chinese (Traditional)" },
    { code: "co", name: "Corsican" },
    { code: "dv", name: "Divehi" },
    { code: "doi", name: "Dogri" },
    { code: "eo", name: "Esperanto" },
    { code: "et", name: "Estonian" },
    { code: "ee", name: "Ewe" },
    { code: "fy", name: "Frisian" },
    { code: "gl", name: "Galician" },
    { code: "ka", name: "Georgian" },
    { code: "gn", name: "Guarani" },
    { code: "ht", name: "Haitian Creole" },
    { code: "haw", name: "Hawaiian" },
    { code: "hmn", name: "Hmong" },
    { code: "is", name: "Icelandic" },
    { code: "ilo", name: "Ilocano" },
    { code: "ga", name: "Irish" },
    { code: "jw", name: "Javanese" },
    { code: "kk", name: "Kazakh" },
    { code: "rw", name: "Kinyarwanda" },
    { code: "kri", name: "Krio" },
    { code: "ckb", name: "Kurdish (Sorani)" },
    { code: "ky", name: "Kyrgyz" },
    { code: "lo", name: "Lao" },
    { code: "la", name: "Latin" },
    { code: "lv", name: "Latvian" },
    { code: "ln", name: "Lingala" },
    { code: "lt", name: "Lithuanian" },
    { code: "lg", name: "Luganda" },
    { code: "lb", name: "Luxembourgish" },
    { code: "mk", name: "Macedonian" },
    { code: "mg", name: "Malagasy" },
    { code: "mt", name: "Maltese" },
    { code: "mi", name: "Maori" },
    { code: "mni-Mtei", name: "Meiteilon (Manipuri)" },
    { code: "lus", name: "Mizo" },
    { code: "mn", name: "Mongolian" },
    { code: "om", name: "Oromo" },
    { code: "qu", name: "Quechua" },
    { code: "sa", name: "Sanskrit" },
    { code: "gd", name: "Scots Gaelic" },
    { code: "nso", name: "Sepedi" },
    { code: "st", name: "Sesotho" },
    { code: "sn", name: "Shona" },
    { code: "sl", name: "Slovenian" },
    { code: "so", name: "Somali" },
    { code: "tg", name: "Tajik" },
    { code: "tt", name: "Tatar" },
    { code: "ti", name: "Tigrinya" },
    { code: "ts", name: "Tsonga" },
    { code: "tk", name: "Turkmen" },
    { code: "ak", name: "Twi" },
    { code: "ug", name: "Uyghur" },
    { code: "cy", name: "Welsh" },
    { code: "xh", name: "Xhosa" },
    { code: "yi", name: "Yiddish" },
    { code: "zu", name: "Zulu" },
];

const Translator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLanguages = useMemo(() => {
        return ALL_LANGUAGES.filter(lang =>
            lang.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false,
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        if (!window.google?.translate?.TranslateElement) {
            const script = document.createElement("script");
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
            window.googleTranslateElementInit = googleTranslateElementInit;
        }
    }, []);

    const changeLanguage = (code) => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = code;
            select.dispatchEvent(new Event("change"));
        }
        setIsOpen(false);
    };

    return (
        <div className={`fixed bottom-24 left-4 flex flex-col items-center gap-2 ${isOpen ? 'z-[60]' : 'z-50'}`}>
            {/* Hidden Google Translate Element */}
            <div
                id="google_translate_element"
                className="absolute opacity-0 pointer-events-none"
            ></div>

            {isOpen && (
                <div className="absolute bottom-16 left-0 w-72 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[400px] transition-all duration-300 origin-bottom-left">
                    <div className="bg-primary-600 p-3 flex justify-between items-center text-white shadow-md z-10">
                        <h3 className="font-bold text-sm">Select Language ({filteredLanguages.length})</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-1 rounded-full text-white"
                        >
                            <MdClose size={18} />
                        </button>
                    </div>

                    <div className="p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                        <div className="relative">
                            <MdSearch className="absolute left-3 top-2.5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 flex-1">
                        <button
                            onClick={() => changeLanguage('en')}
                            className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors flex items-center justify-between"
                        >
                            <span>Original (English)</span>
                        </button>
                        {filteredLanguages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors flex items-center justify-between"
                            >
                                <span>{lang.name}</span>
                            </button>
                        ))}
                        {filteredLanguages.length === 0 && (
                            <div className="text-center py-4 text-slate-400 text-sm">
                                No languages found
                            </div>
                        )}
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-4 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95"
                title="Change Language"
            >
                {isOpen ? <MdClose size={24} /> : <MdTranslate size={24} />}
            </button>
        </div>
    );
};

export default Translator;
