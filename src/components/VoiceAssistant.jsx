import React, { useState, useEffect } from 'react';
import { MdRecordVoiceOver, MdStop } from 'react-icons/md';

const VoiceAssistant = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voice, setVoice] = useState(null);

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Prioritize female voices or standard English voices which are often female
            const preferredVoice = voices.find(v =>
                v.name.includes('Zira') || // Windows Female
                v.name.includes('Google US English') || // Chrome Female
                v.name.includes('Female') ||
                v.last // Fallback
            );
            setVoice(preferredVoice || voices[0]);
        };

        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        // Cleanup on unmount
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const handleSpeak = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            // Read primarily from main to skip nav/footer if possible, else body
            const contentElement = document.querySelector('main') || document.body;
            let textToRead = contentElement.innerText;

            // Simple cleanup to avoid reading hidden text or excessive whitespace
            textToRead = textToRead.replace(/\s+/g, ' ').trim();

            if (textToRead) {
                const utterance = new SpeechSynthesisUtterance(textToRead);

                // --- LANGUAGE DETECTION LOGIC START ---
                let currentLang = 'en'; // Default
                const translateSelect = document.querySelector(".goog-te-combo");
                if (translateSelect && translateSelect.value) {
                    currentLang = translateSelect.value;
                } else if (document.documentElement.lang) {
                    currentLang = document.documentElement.lang;
                }

                // Find a matching voice for the detected language
                const voices = window.speechSynthesis.getVoices();

                // Try to find a voice matching the language code (e.g., 'es', 'fr', 'ur')
                // Prioritize female voices if keywords exist (Google, Zira, Female)
                let matchingVoice = voices.find(v =>
                    v.lang.toLowerCase().startsWith(currentLang.toLowerCase()) &&
                    (v.name.includes('Female') || v.name.includes('Zira') || v.name.includes('Google'))
                );

                // If no specific female voice found, take any voice matching the language
                if (!matchingVoice) {
                    matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith(currentLang.toLowerCase()));
                }

                // If found, apply it
                if (matchingVoice) {
                    utterance.voice = matchingVoice;
                    utterance.lang = matchingVoice.lang;
                } else if (voice) {
                    // Fallback to the default loaded voice (likely English)
                    utterance.voice = voice;
                }
                // --- LANGUAGE DETECTION LOGIC END ---

                utterance.rate = 1; // Normal speed
                utterance.pitch = 1; // Normal pitch

                utterance.onend = () => setIsSpeaking(false);
                utterance.onerror = (e) => {
                    console.error("Speech synthesis error", e);
                    setIsSpeaking(false);
                };

                window.speechSynthesis.speak(utterance);
                setIsSpeaking(true);
            }
        }
    };

    return (
        <div className="fixed bottom-44 left-4 z-50">
            <button
                onClick={handleSpeak}
                className={`flex items-center justify-center w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform active:scale-95 ${isSpeaking ? 'text-red-500 ring-2 ring-red-400 dark:ring-red-500 animate-pulse' : 'text-slate-800 dark:text-white'}`}
                title={isSpeaking ? "Stop Reading" : "Read Content (Female Voice)"}
            >
                {isSpeaking ? <MdStop size={24} /> : <MdRecordVoiceOver size={24} />}
            </button>
        </div>
    );
};

export default VoiceAssistant;
