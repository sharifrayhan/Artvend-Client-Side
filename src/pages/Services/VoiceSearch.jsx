import  { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import Swal from 'sweetalert2';

const VoiceSearch = ({ setSearchCategory }) => {
  const [isListening, setIsListening] = useState(false);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setSearchCategory(result);
    },
  });

  useEffect(() => {
    if (isListening) {
      listen();
      Swal.fire({
        html: '<img src="https://i.ibb.co/wc1Z1Pt/listening.gif" width="400px" height="400px" alt="Listening...">',
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showCloseButton: false,
        width: '200px',
      });

      // Automatically stop listening after 5 seconds
      const timeoutId = setTimeout(() => {
        setIsListening(false);
        stop();
        Swal.close();
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [isListening, listen, stop, setSearchCategory]);

  const startListening = () => {
    setIsListening(true);
  };

  return (
    <div className="">
      <button
        onClick={startListening}
        disabled={isListening || listening}
        className="h-5 focus:outline-none focus:shadow-outline"
      >
        <img src="https://i.ibb.co/fvc9XcG/microphone.png" alt="Microphone" className="w-5 h-5" />
       
      </button>
    </div>
  );
};

export default VoiceSearch;
