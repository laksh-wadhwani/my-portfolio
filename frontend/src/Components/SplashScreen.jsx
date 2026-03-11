import { useEffect, useRef } from "react";
import gsap from "gsap";

const greetings = [
  { word: "Hello",        lang: "English"   },
  { word: "Hola",         lang: "Spanish"   },
  { word: "Bonjour",      lang: "French"    },
  { word: "Ciao",         lang: "Italian"   },
  { word: "你好",           lang: "Chinese"   },
  { word: "नमस्ते",        lang: "Hindi"     },
  { word: "مرحبا",         lang: "Arabic"    },
  { word: "سلام",          lang: "Urdu"      },
  { word: "نمسڪار",        lang: "Sindhi"    },
];

// Types out a word character by character
const typeWord = (element, word, charDelay = 0.055) => {
  return new Promise((resolve) => {
    element.innerText = "";
    const tl = gsap.timeline({ onComplete: resolve });
    word.split("").forEach((char, i) => {
      tl.call(() => {
        element.innerText += char;
      }, null, i * charDelay);
    });
  });
};

// Erases a word character by character (backwards)
const eraseWord = (element, eraseDelay = 0.025) => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });
    const length = element.innerText.length;
    Array.from({ length }).forEach((_, i) => {
      tl.call(() => {
        element.innerText = element.innerText.slice(0, -1);
      }, null, i * eraseDelay);
    });
  });
};

const SplashScreen = ({ onComplete }) => {
  const splashRef = useRef(null);
  const wordRef = useRef(null);
  const langRef = useRef(null);
  const lineRef = useRef(null);
  const cursorRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const run = async () => {

      // Blinking cursor — runs throughout
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.45,
        ease: "steps(1)",
      });

      // Animate in the line and lang label
      await gsap.timeline()
        .fromTo(lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left" }
        )
        .fromTo(langRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          "-=0.2"
        );

      // Cycle through all greetings
      for (let i = 0; i < greetings.length; i++) {
        const { word, lang } = greetings[i];

        // Swap language label
        gsap.to(langRef.current, {
          opacity: 0, y: -6, duration: 0.15,
          onComplete: () => {
            langRef.current.innerText = lang;
            gsap.to(langRef.current, { opacity: 1, y: 0, duration: 0.2 });
          }
        });

        // Type the word
        await typeWord(wordRef.current, word, 0.06);

        // Hold briefly
        await gsap.to({}, { duration: i === greetings.length - 1 ? 0.75 : 0.28 });

        // Erase (except last greeting — keep it visible for exit)
        if (i < greetings.length - 1) {
          await eraseWord(wordRef.current, 0.028);
        }
      }

      // Kill cursor blink
      gsap.killTweensOf(cursorRef.current);
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.15 });

      // Slide splash UP revealing the landing page
      await gsap.to(splashRef.current, {
        yPercent: -100,
        duration: 1.05,
        ease: "power4.inOut",
      });

      if (onComplete) onComplete();
    };

    run();
  }, []);

  return (
    <div
      ref={splashRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        overflow: "hidden",
      }}
    >
      {/* Subtle grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Word + blinking cursor */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          ref={wordRef}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
            fontWeight: 700,
            color: "#dac5a7",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            userSelect: "none",
            minWidth: "1ch",
            direction: "ltr", // handles RTL scripts (Arabic/Urdu) naturally inside
          }}
        />
        {/* Blinking cursor bar */}
        <span
          ref={cursorRef}
          style={{
            display: "inline-block",
            width: "clamp(3px, 0.5vw, 5px)",
            height: "clamp(3rem, 9vw, 7rem)",
            backgroundColor: "#dac5a7",
            borderRadius: "2px",
            marginBottom: "-4px",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Divider line */}
      <div
        ref={lineRef}
        style={{
          width: "clamp(100px, 18vw, 240px)",
          height: "1px",
          backgroundColor: "#dac5a750",
          transformOrigin: "left",
        }}
      />

      {/* Language label */}
      <span
        ref={langRef}
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
          fontWeight: 400,
          color: "#dac5a770",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        {greetings[0].lang}
      </span>
    </div>
  );
};

export default SplashScreen;