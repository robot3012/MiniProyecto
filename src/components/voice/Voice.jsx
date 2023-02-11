
import React, { useState } from "react";

const SpanishNarrator = ({ text,title,author,date }) => {
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (speechSynthesis.speaking) {
      console.error("Already speaking...");
      return;
    }
    if (text !== "") {
      const utterThis = new SpeechSynthesisUtterance("De "+author+", Este es nuestro titulo para hoy, "+title+", "+text);
      utterThis.onend = () => {
        console.log("Speech synthesis ended");
        setSpeaking(false);
      };
      utterThis.onerror = () => {
        console.error("An error occurred while speaking");
        setSpeaking(false);
      };
      utterThis.lang = "es-ES";
      setSpeaking(true);
      speechSynthesis.speak(utterThis);
    }
  };

  const pause = () => {
    speechSynthesis.pause();
  };

  const resume = () => {
    speechSynthesis.resume();
  };

  const stop = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div>
      <button onClick={speak} disabled={speaking}>
        Hablar
      </button>
      <button onClick={pause} disabled={!speaking}>
        Pausar
      </button>
      <button onClick={resume} disabled={!speaking}>
        Reanudar
      </button>
      <button onClick={stop} disabled={!speaking}>
        Detener
      </button>
    </div>
  );
};

export default SpanishNarrator;