const menuButton = document.getElementById("sidemenuopenicon");
const menuLinks = document.getElementById("navlinks");
const menuCloseButton = document.getElementById("sidemenucloseicon");
const menuBlur = document.getElementById("menublur");
const iframe = document.getElementById("websiteframe");
const resume = document.getElementById("resume");
const post = document.getElementById("post");
var isDarkMode = false;
const pink = "#e5516e";
const lightgrey = "#e1e1e1";
const brown = "#b6825b";
const beige = "#fffdf0";
const sun = "#ffe700";
const lightblue = "#a1b2ff";
const orange = "#f9a01b";
const darkblue = "#5271ff";
const darkbrown = "#966e50";
const woodwardlink =
  "https://webflow.com/made-in-webflow/website/relume-cloneable";
const energonlink =
  "https://webflow.com/made-in-webflow/website/vimeo-background-video-play-button";
const gdglink =
  "https://webflow.com/made-in-webflow/website/Interactive-Presentation";
const coderushlink =
  "https://webflow.com/made-in-webflow/website/True-Responsive-Testing";
const lenis = new Lenis({
  duration: 1.2, // adjust scroll speed
  smooth: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
});
lenis.on("scroll", ScrollTrigger.update);
let currentSectionId = "#herosection";

//preloader stuff
{
  document.addEventListener("DOMContentLoaded", () => {
    // Lock scroll while preloader is visible
    document.body.classList.add("lock-scroll");

    // Show preloader immediately
    const preloader = document.getElementById("preloader");
    preloader.style.display = "flex";

    // Show alert (or confirm/popup)
    alert(
      "This website is still under developement. Some elements may seem out of place on unexpected screen sizes."
    );

    // Once user clicks OK

    // Optionally trigger animations or load the rest of the content
  });
}

//functions
{
  function downloadFileFromURL() 
  { 
    window.location.href = "https://raw.githubusercontent.com/Mayankdev0923/resume/main/resume_mayank.pdf"
  }
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  function scrollToSectionEnd(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href"); // e.g. "#projectsection"
    const target = document.querySelector(href);

    if (!target) return;

    const rect = target.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const sectionBottom = rect.top + scrollTop + target.offsetHeight;
    const scrollToY = sectionBottom - window.innerHeight;

    // Determine scroll duration based on source → target
    const from = currentSectionId;
    const to = href;
    let duration = 1.5; // default duration

    // Customize durations here:
    if (from === "#herosection" && to === "#skillsection") duration = 1;
    else if (from === "#herosection" && to === "#projectsection") duration = 2;
    else if (from === "#herosection" && to === "#contactsection") duration = 3;
    else if (from === "#contactsection" && to === "#herosection") duration = 3;
    else if (from === "#projectsection" && to === "#herosection") duration = 2;
    else if (from === "#skillsection" && to === "#herosection") duration = 1;

    // Add any more custom paths here...

    // Animate scroll
    gsap.to(window, {
      scrollTo: scrollToY,
      duration,
      ease: "power2.out",
    });

    // Update current section tracker after scroll starts
    currentSectionId = href;
  }

  function setupBoxToggle(boxClass) {
    let isTapped = false;
    const box = document.querySelector(`.${boxClass}`);
    const target = `.${boxClass}`;

    // Click inside the box
    box.addEventListener("click", (e) => {
      e.stopPropagation();

      const temptl = gsap.timeline({
        onComplete: () => {
          isTapped = !isTapped;
        },
      });

      if (!isTapped) {
        temptl.to(`${target} h4`, { opacity: 0, duration: 0.5 });
        temptl.set(`${target} h4`, { display: "none" });
        temptl.set(`${target} h3`, { display: "block" });
        temptl.to(`${target} h3`, { opacity: 1, duration: 0.5 });
      } else {
        temptl.to(`${target} h3`, { opacity: 0, duration: 0.5 });
        temptl.set(`${target} h3`, { display: "none" });
        temptl.set(`${target} h4`, { display: "block" });
        temptl.to(`${target} h4`, { opacity: 1, duration: 0.5 });
      }
    });

    // Click outside the box
    document.addEventListener("click", (e) => {
      if (!box.contains(e.target) && isTapped) {
        const temptl = gsap.timeline({
          onComplete: () => {
            isTapped = false;
          },
        });
        temptl.to(`${target} h3`, { opacity: 0, duration: 0.5 });
        temptl.set(`${target} h3`, { display: "none" });
        temptl.set(`${target} h4`, { display: "block" });
        temptl.to(`${target} h4`, { opacity: 1, duration: 0.5 });
      }
    });
  }
  function openpreviewwoodward() {
    gsap.to(iframe, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        iframe.src = woodwardlink;
        // wait a moment for the iframe to start loading, then fade in
        setTimeout(() => {
          gsap.to(iframe, {
            duration: 0.5,
            opacity: 1,
          });
        }, 1000); // small delay to avoid flickering
      },
    });
  }
  function openpreviewenergon() {
    gsap.to(iframe, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        iframe.src = energonlink;
        // wait a moment for the iframe to start loading, then fade in
        setTimeout(() => {
          gsap.to(iframe, {
            duration: 0.5,
            opacity: 1,
          });
        }, 1000); // small delay to avoid flickering
      },
    });
  }
  function openpreviewcoderush() {
    gsap.to(iframe, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        iframe.src = coderushlink;
        // wait a moment for the iframe to start loading, then fade in
        setTimeout(() => {
          gsap.to(iframe, {
            duration: 0.5,
            opacity: 1,
          });
        }, 1000); // small delay to avoid flickering
      },
    });
  }
  function openpreviewgdg() {
    gsap.to(iframe, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        iframe.src = gdglink;
        // wait a moment for the iframe to start loading, then fade in
        setTimeout(() => {
          gsap.to(iframe, {
            duration: 0.5,
            opacity: 1,
          });
        }, 1000); // small delay to avoid flickering
      },
    });
  }
  function closemenu() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      const tl = gsap.timeline();

      tl.to(menuCloseButton, {
        opacity: 0,
        duration: 0.5,
      });
      tl.to(".link", {
        x: "-80vw",
        duration: 1,
        stagger: -0.1,
        onComplete: () => {
          gsap.set(".link", { display: "none" });
        },
      });
      gsap.to(menuBlur, {
        x: "-80vw",
        opacity: 0.6,
        duration: 0.4,
        delay: 1,
        ease: "power.in",
        onComplete: () => {
          gsap.set(menuBlur, { display: "none" });
          gsap.fromTo(
            menuButton,
            {
              rotate: -45,
            },
            {
              display: "inline-block",
              rotate: 0,
              opacity: 1,
              duration: 0.2,
            }
          );
        },
      });
    }
  }
  function wrapEachChar(selector, spanClass) {
    const blocks = document.querySelectorAll(selector);

    blocks.forEach((block) => {
      const lines = block.querySelectorAll(".line");

      lines.forEach((line) => {
        const text = line.textContent;
        line.textContent = "";

        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add(spanClass);
          line.appendChild(span);
        });
      });
    });
  }
  function wrapChar(selector, spanClass) {
    const el = document.querySelector(selector);
    if (!el) return;

    const text = el.textContent;
    el.textContent = ""; // Clear original content

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Preserve space
      span.classList.add(spanClass);
      el.appendChild(span);
    });
  }
  function setTheme(isDark) {
    if (isDark) {
      // Dark mode
      gsap.to("body", {
        backgroundColor: brown,
        duration: 1,
      });
      gsap.to(["#post h2", "#post2 h2"], {
        color: brown,
        duration: 1,
      });
      gsap.to(["#navline", "#post", "#post2"], {
        backgroundColor: beige,
        duration: 1,
      });
      gsap.to(".link", {
        color: beige,
        duration: 1,
      });
      gsap.to("#menublur", {
        backgroundColor: brown,
        duration: 1,
      });
      gsap.to("#darkmode", {
        opacity: 0,
        display: "none",
        duration: 0.5,
        onComplete: () => {
          gsap.to("#lightmodecontainer", {
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });
          gsap.to("#lightmode", {
            opacity: 1,
            display: "inline-block",
            duration: 0.5,
          });
        },
      });
      gsap.to(["#navicon path", "#sidemenuopenicon", "#sidemenucloseicon"], {
        fill: beige,
        duration: 1,
      });

      gsap.to(".brownbg", {
        backgroundColor: "#545454",
        duration: 1,
      });
      gsap.to("#skilltitle h1", {
        color: beige,
        duration: 1,
      });
      gsap.to("#projecttitle h1", {
        color: beige,
        duration: 1,
      });
      gsap.to("#navline3", {
        backgroundColor: beige,
        duration: 1,
      });
      gsap.to("#githubicon", {
        fill: beige,
        duration: 1,
      });
      gsap.to("#homeicon", {
        fill: beige,
        duration: 1,
      });
      gsap.to("#homeicon2", {
        fill: beige,
        duration: 1,
      });
      gsap.to("#homeicon3", {
        fill: beige,
        duration: 1,
      });
      gsap.to("#contacttitle h1", {
        color: beige,
        duration: 1,
      });
      gsap.to("#navline4", {
        backgroundColor: beige,
        duration: 1,
      });
      gsap.to("#endcredits", {
        color: beige,
      });

      isDarkMode = true;
    } else {
      // Light mode
      gsap.to("body", {
        backgroundColor: beige,
        duration: 1,
      });
      gsap.to(["#post h2", "#post2 h2"], {
        color: beige,
        duration: 1,
      });
      gsap.to(["#navline", "#post", "#post2"], {
        backgroundColor: brown,
        duration: 1,
      });
      gsap.to(".link", {
        color: brown,
        duration: 1,
      });
      gsap.to("#menublur", {
        backgroundColor: beige,
        duration: 1,
      });
      gsap.to("#lightmodecontainer", {
        opacity: 0,
        display: "none",
        duration: 0.5,
        onComplete: () => {
          gsap.to("#darkmode", {
            opacity: 1,
            display: "inline-block",
            duration: 0.5,
          });
        },
      });
      gsap.to(["#navicon path", "#sidemenuopenicon", "#sidemenucloseicon"], {
        fill: brown,
        duration: 1,
      });
      gsap.to(".brownbg", {
        backgroundColor: "#b6825b",
        duration: 1,
      });
      gsap.to("#skilltitle h1", {
        color: orange,
        duration: 1,
      });
      gsap.to("#projecttitle h1", {
        color: orange,
        duration: 1,
      });
      gsap.to("#navline3", {
        backgroundColor: orange,
        duration: 1,
      });
      gsap.to("#githubicon", {
        fill: orange,
        duration: 1,
      });
      gsap.to("#homeicon", {
        fill: brown,
        duration: 1,
      });
      gsap.to("#homeicon2", {
        fill: brown,
        duration: 1,
      });
      gsap.to("#homeicon3", {
        fill: brown,
        duration: 1,
      });
      gsap.to("#contacttitle h1", {
        color: orange,
        duration: 1,
      });
      gsap.to("#navline4", {
        backgroundColor: orange,
        duration: 1,
      });
      gsap.to("#endcredits", {
        color: brown,
      });

      isDarkMode = false;
    }
  }
}

//sectionobserver
{
  const sections = document.querySelectorAll("section"); // or use specific IDs if needed

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.8, // 80% of section must be visible to count as "current"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSectionId = `#${entry.target.id}`;
      }
    });
  }, observerOptions);

  // Observe all section elements
  sections.forEach((section) => observer.observe(section));
}

//section1
{
  // Show menu
  menuButton.addEventListener("click", () => {
    const tl = gsap.timeline();

    // Setup
    gsap.set(menuCloseButton, { opacity: 0, display: "inline-block" });
    gsap.set(menuButton, { display: "none" });
    gsap.set(menuBlur, { display: "flex", x: "-100vw", opacity: 0 });
    gsap.set(menuLinks, { display: "flex" });
    gsap.set(".link", { x: "-80vw", opacity: 0, display: "block" });

    // Animate
    gsap.to(menuBlur, {
      x: 0,
      opacity: 0.97,
      duration: 0.7,
      delay: 0.2,
    });

    tl.to(".link", {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
    });
    tl.to(menuCloseButton, {
      opacity: 1,
      duration: 0.5,
    });
  });

  // Hide menu
  menuCloseButton.addEventListener("click", () => {
    const tl = gsap.timeline();

    tl.to(menuCloseButton, {
      opacity: 0,
      rotate: "-90deg",
      duration: 0.5,
    });
    tl.to(".link", {
      x: "-80vw",
      duration: 1,
      stagger: -0.1,
      onComplete: () => {
        gsap.set(".link", { display: "none" });
      },
    });
    gsap.to(menuBlur, {
      x: "-80vw",
      opacity: 0.6,
      duration: 0.4,
      delay: 1,
      ease: "power.in",
      onComplete: () => {
        gsap.set(menuBlur, { display: "none" });
        gsap.fromTo(
          menuButton,
          {
            rotate: -45,
          },
          {
            display: "inline-block",
            rotate: 0,
            opacity: 1,
            duration: 0.2,
          }
        );
      },
    });
  });

  //uimodeswitch
  {
    document.querySelector("#darkmode").addEventListener("click", () => {
      setTheme(true);
    });

    document
      .querySelector("#lightmodecontainer")
      .addEventListener("click", () => {
        setTheme(false);
      });
  }
}

//onloadwindows
{
  window.addEventListener("load", () => {
    requestAnimationFrame(raf);

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark);

    gsap.to("#preloader", {
      opacity: 0,
      display: "none",
      duration: 1,
    });
    document.body.classList.remove("lock-scroll");

    if (window.matchMedia("(max-width: 768px)").matches) {
      lenis.duration = 4;
      wrapEachChar(".herotext", "char");
      wrapEachChar(".herotextsm", "char");

      var tl = gsap.timeline();
      gsap.from(".cloud", {
        opacity: 0,
        duration: 0.7,
      });
      gsap.to(".cloud", {
        x: 5,
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 1,
        stagger: 0.5,
        ease: "power1.out",
      });

      tl.from(menuButton, {
        y: 50,
        duration: 0.6,
        ease: "back.out",
        onComplete: () => {
          gsap.fromTo(
            "#myimagesm",
            {
              y: 200,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: "back.out",
              onComplete: () => {
                gsap.to("#post2", {
                  height: "10vw",
                  duration: 0.7,
                  stagger: 0.2,
                  ease: "back.out(3)",
                  onComplete: () => {
                    gsap.to("#resume", {
                      height: "10vw",
                      duration: 0.7,
                      stagger: 0.2,
                      ease: "back.out(3)",
                    });
                  },
                });
              },
            }
          );
        },
      });
      tl.from("#navline", {
        width: "0%",
        duration: 0.5,
        ease: "back.out",
      });
      tl.from(["#navicon", ".uimode"], {
        y: 50,
        duration: 0.5,
        stagger: -0.1,
        ease: "back.out",
      });
      tl.from(".char", {
        y: "-20vw",
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out",
        onComplete: () => {
          gsap.from(".char", {
            y: "3vw",
            duration: 0.3,
            stagger: 0.1,
            ease: "back.out",
            repeat: -1,
            yoyo: true,
          });
        },
      });
    } else if (
      window.matchMedia(
        "(min-width: 769px) and (max-width: 1080px) and (min-height: 550px)"
      ).matches
    ) {
      // Only wrap the main herotext
      wrapEachChar("#herotext", "char-sm");
      wrapEachChar("#herotextsm1", "char-sm");
      wrapChar("#resume h2", "resume-sm");

      //herotext cursor animation
      {
        document
          .getElementById("herotext")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor", {
              scale: 1.5,
            });
          });

        document
          .getElementById("herotext")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor", {
              scale: 1,
            });
          });
      }

      //myimage cursor animation
      {
        document
          .getElementById("myimage")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Mayank Sharma",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.7vh",
              duration: 1,
              ease: "back.out",
            });
          });

        document
          .getElementById("myimage")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 1,
              ease: "back.out",
            });
          });
      }

      //navicon cursor text animation
      {
        document
          .querySelector(".githubnav")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Github",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".githubnav")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".linkedinnav")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Linked In",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".linkedinnav")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }

      //links cursor text animation
      {
        var links = document.querySelectorAll(".link");
        links.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go To Section",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

          link.addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
        });
      }

      //uimode cursor animation
      {
        document
          .querySelector("#lightmode")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Light Mode",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vw 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#lightmode")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#darkmode")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Dark Mode",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vw 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#darkmode")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }

      //custom cursor
      window.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
          opacity: 1,
          x: dets.clientX,
          y: dets.clientY,
        });
      });

      //resume animation
      {
        resume.addEventListener("mouseenter", () => {
          gsap.to(resume, {
            scale: 1.1,
            backgroundColor: orange,
            duration: 0.4,
          });
          gsap.to(".resume-sm", {
            y: "2vw",
            duration: 0.2,
            stagger: 0.05,
            onStart: () => {
              gsap.fromTo(
                ".resume-sm",
                {
                  y: "-4vw",
                  delay: 0.2,
                },
                {
                  y: "0vw",
                  duration: 0.2,
                  delay: 0.2,
                  stagger: 0.05,
                }
              );
            },
          });
        });
        resume.addEventListener("mouseleave", () => {
          gsap.to(resume, {
            scale: 1,
            backgroundColor: pink,
            duration: 0.4,
          });
        });
      }
      //post animation
      {
        post.addEventListener("mouseenter", () => {
          gsap.to(post, {
            scale: 1.1,
            backgroundColor: darkblue,
            zIndex: 9,
            duration: 0.2,
          });
          gsap.to("#post h2", {
            color: beige,
            duration: 0.2,
          });
        });
        post.addEventListener("mouseleave", () => {
          if (isDarkMode) {
            gsap.to("#post h2", {
              color: darkbrown,
              duration: 0.2,
            });
            gsap.to(post, {
              scale: 1,
              backgroundColor: beige,
              duration: 0.4,
            });
          } else {
            gsap.to("#post h2", {
              color: beige,
              duration: 0.2,
            });
            gsap.to(post, {
              scale: 1,
              backgroundColor: brown,
              duration: 0.4,
            });
          }
        });
      }
      //links animation
      {
        const links = document.querySelectorAll(".link");

        links.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to(link, {
              scale: 1.1,
              color: orange,
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          link.addEventListener("mouseleave", () => {
            if (isDarkMode) {
              gsap.to(link, {
                scale: 1,
                color: beige,
                scale: 1,
                duration: 0.3,
                ease: "back.in(2)",
              });
            } else {
              gsap.to(link, {
                scale: 1,
                color: brown,
                scale: 1,
                duration: 0.3,
                ease: "back.in(2)",
              });
            }
          });
        });
      }
      //navicons color animation
      {
        const navis = document.querySelectorAll("#navicon");

        navis.forEach((navi) => {
          navi.addEventListener("mouseenter", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: orange,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          navi.addEventListener("mouseleave", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
            if (isDarkMode) {
              gsap.to(path, {
                fill: beige,
                duration: 0.3,
                ease: "back.out(2)",
              });
            } else {
              gsap.to(path, {
                fill: brown,
                duration: 0.3,
                ease: "back.out(2)",
              });
            }
          });
        });
      }

      //uimode color animation
      {
        const navis = document.querySelectorAll("#darkmode");

        navis.forEach((navi) => {
          navi.addEventListener("mouseenter", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1.15,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: lightblue,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          navi.addEventListener("mouseleave", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: brown,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });
        });
      }

      //herotext animation
      {
        const chars = document.querySelectorAll(".char-sm");

        chars.forEach((char) => {
          char.addEventListener("mouseenter", () => {
            gsap.to(char, {
              y: "-1.8vh",
              color: sun,
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          char.addEventListener("mouseleave", () => {
            gsap.to(char, {
              y: "0vw",
              color: lightgrey,
              scale: 1,
              duration: 0.3,
              ease: "back.in(2)",
            });
          });
        });
      }

      //start & cloud animation
      {
        var tl = gsap.timeline();

        gsap.fromTo(
          ".cloud2",
          {
            x: "0.4vw",
            y: "0.3vw",
          },
          {
            x: "-0.5vw",
            y: "0.5vw",
            duration: 2,
            yoyo: true,
            stagger: 0.6,
            ease: "back.in",
            repeat: -1,
          }
        );
        tl.from("#herosectionbg", {
          x: "-50vw",
          scale: 0,
          opacity: 0,
          duration: 1,
        });
        tl.from(".link", {
          y: "-8vw",
          duration: 1,
          stagger: 0.1,
          ease: "back.out",
          onComplete: () => {
            gsap.fromTo(
              "#myimage",
              {
                opacity: 0,
                y: "30vw",
              },
              {
                opacity: 1,
                y: 0,
                duration: 2,
                delay: 1,
                ease: "back.out(2)",
              }
            );
          },
        });
        tl.from("#navline", {
          width: "0%",
          duration: 0.5,
          onComplete: () => {
            gsap.to(".char-sm", {
              opacity: 1,
              y: "0vw",
              duration: 2,
              stagger: 0.2,
              ease: "back.out",
            });
          },
        });
        tl.from(["#navicon", ".uimode"], {
          y: "8vw",
          duration: 1,
          stagger: -0.2,
          ease: "back.out",
        });
        tl.from(".bottomlink", {
          y: "5vw",
          display: "none",
          duration: 1,
          ease: "back.out",
          stagger: 0.2,
        });
        tl.from(".cloud2", {
          opacity: 0,
          y: "-2vw",
          duration: 1,
        });
      }
    } else {
      // Only wrap the main herotext
      wrapEachChar("#herotext", "char-sm");
      wrapChar("#resume h2", "resume-sm");

      //herotext cursor animation
      {
        document
          .getElementById("herotext")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor", {
              scale: 1.5,
            });
          });

        document
          .getElementById("herotext")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor", {
              scale: 1,
            });
          });
      }

      //myimage cursor animation
      {
        document
          .getElementById("myimage")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Mayank Sharma",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.7vh",
              duration: 1,
              ease: "back.out",
            });
            gsap.to("#myimage", {
              scale: 1.05,
            });
          });

        document
          .getElementById("myimage")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 1,
              ease: "back.out",
            });
            gsap.to("#myimage", {
              scale: 1,
            });
          });
      }

      //navicon cursor text animation
      {
        document
          .querySelector(".githubnav")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Github",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".githubnav")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".linkedinnav")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Linked In",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".linkedinnav")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }

      //links cursor text animation
      {
        var links = document.querySelectorAll(".link");
        links.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go To Section",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

          link.addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
        });
      }

      //uimode cursor animation
      {
        document
          .querySelector("#lightmode")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Light Mode",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vw 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#lightmode")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#darkmode")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Dark Mode",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "fit-content",
              padding: "0vw 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#darkmode")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }

      //custom cursor
      window.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
          opacity: 1,
          x: dets.clientX,
          y: dets.clientY,
        });
      });

      //resume animation
      {
        resume.addEventListener("mouseenter", () => {
          gsap.to(resume, {
            scale: 1.1,
            backgroundColor: orange,
            duration: 0.4,
          });
          gsap.to(".resume-sm", {
            y: "2vw",
            duration: 0.2,
            stagger: 0.05,
            onStart: () => {
              gsap.fromTo(
                ".resume-sm",
                {
                  y: "-4vw",
                  delay: 0.2,
                },
                {
                  y: "0vw",
                  duration: 0.2,
                  delay: 0.2,
                  stagger: 0.05,
                }
              );
            },
          });
        });
        resume.addEventListener("mouseleave", () => {
          gsap.to(resume, {
            scale: 1,
            backgroundColor: pink,
            duration: 0.4,
          });
        });
      }
      //post animation
      {
        post.addEventListener("mouseenter", () => {
          gsap.to(post, {
            scale: 1.1,
            backgroundColor: darkblue,
            zIndex: 9,
            duration: 0.2,
          });
          gsap.to("#post h2", {
            color: beige,
            duration: 0.2,
          });
        });
        post.addEventListener("mouseleave", () => {
          if (isDarkMode) {
            gsap.to("#post h2", {
              color: darkbrown,
              duration: 0.2,
            });
            gsap.to(post, {
              scale: 1,
              backgroundColor: beige,
              duration: 0.4,
            });
          } else {
            gsap.to("#post h2", {
              color: beige,
              duration: 0.2,
            });
            gsap.to(post, {
              scale: 1,
              backgroundColor: brown,
              duration: 0.4,
            });
          }
        });
      }
      //post and resume cursor text animation
      {
        document.querySelector("#post").addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent: "This is what I do",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "fit-content",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

        document.querySelector("#post").addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
      }
      {
        document.querySelector("#resume").addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent: "Download & take a better look",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "fit-content",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

        document.querySelector("#resume").addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
      }

      //links animation
      {
        const links = document.querySelectorAll(".link");

        links.forEach((link) => {
          link.addEventListener("mouseenter", () => {
            gsap.to(link, {
              scale: 1.1,
              color: orange,
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          link.addEventListener("mouseleave", () => {
            if (isDarkMode) {
              gsap.to(link, {
                scale: 1,
                color: beige,
                scale: 1,
                duration: 0.3,
                ease: "back.in(2)",
              });
            } else {
              gsap.to(link, {
                scale: 1,
                color: brown,
                scale: 1,
                duration: 0.3,
                ease: "back.in(2)",
              });
            }
          });
        });
      }
      //navicons color animation
      {
        const github = document.querySelector(".githubnav");

        github.addEventListener("mouseenter", () => {
          const path = github.querySelector("path");
          gsap.to(github, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(2)",
          });
          gsap.to(path, {
            fill: "#111",
            duration: 0.3,
            ease: "back.out(2)",
          });
        });

        github.addEventListener("mouseleave", () => {
          const path = github.querySelector("path");
          gsap.to(github, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)",
          });
          if (isDarkMode) {
            gsap.to(path, {
              fill: beige,
              duration: 0.3,
              ease: "back.out(2)",
            });
          } else {
            gsap.to(path, {
              fill: brown,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
        });

        const linkedin = document.querySelector(".linkedinnav");

        linkedin.addEventListener("mouseenter", () => {
          const path = linkedin.querySelector("path");
          gsap.to(linkedin, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(2)",
          });
          gsap.to(path, {
            fill: lightblue,
            duration: 0.3,
            ease: "back.out(2)",
          });
        });

        linkedin.addEventListener("mouseleave", () => {
          const path = linkedin.querySelector("path");
          gsap.to(linkedin, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)",
          });
          if (isDarkMode) {
            gsap.to(path, {
              fill: beige,
              duration: 0.3,
              ease: "back.out(2)",
            });
          } else {
            gsap.to(path, {
              fill: brown,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
        });
      }

      //uimode color animation
      {
        const navis = document.querySelectorAll("#darkmode");

        navis.forEach((navi) => {
          navi.addEventListener("mouseenter", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1.15,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: lightblue,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          navi.addEventListener("mouseleave", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: brown,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });
        });
      }
      {
        const navis = document.querySelectorAll("#lightmodecontainer");

        navis.forEach((navi) => {
          navi.addEventListener("mouseenter", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1.15,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: sun,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          navi.addEventListener("mouseleave", () => {
            const path = navi.querySelector("path");
            gsap.to(navi, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
            gsap.to(path, {
              fill: beige,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });
        });
      }

      //herotext animation
      {
        const chars = document.querySelectorAll(".char-sm");

        chars.forEach((char) => {
          char.addEventListener("mouseenter", () => {
            gsap.to(char, {
              y: "-1.8vh",
              color: sun,
              scale: 1.1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          });

          char.addEventListener("mouseleave", () => {
            gsap.to(char, {
              y: "0vw",
              color: lightgrey,
              scale: 1,
              duration: 0.3,
              ease: "back.in(2)",
            });
          });
        });
      }

      //start & cloud animation
      {
        var tl = gsap.timeline();

        gsap.fromTo(
          ".cloud2",
          {
            x: "0.4vw",
            y: "0.3vw",
          },
          {
            x: "-0.5vw",
            y: "0.5vw",
            duration: 2,
            yoyo: true,
            stagger: 0.6,
            ease: "power1.inOut",
            repeat: -1,
          }
        );
        tl.from("#herosectionbg", {
          x: "-50vw",
          scale: 0,
          opacity: 0,
          duration: 1,
        });
        tl.from(".link", {
          y: "-8vw",
          duration: 1,
          stagger: 0.1,
          ease: "back.out",
          onComplete: () => {
            gsap.fromTo(
              "#myimage",
              {
                opacity: 0,
                y: "30vw",
              },
              {
                opacity: 1,
                y: 0,
                duration: 2,
                delay: 1,
                ease: "back.out(2)",
              }
            );
          },
        });
        tl.from("#navline", {
          width: "0%",
          duration: 0.5,
          onComplete: () => {
            gsap.to(".char-sm", {
              opacity: 1,
              y: "0vw",
              duration: 2,
              stagger: 0.2,
              ease: "back.out",
            });
          },
        });
        tl.from(["#navicon", ".uimode"], {
          y: "8vw",
          duration: 1,
          stagger: -0.2,
          ease: "back.out",
        });
        tl.from(".bottomlink", {
          y: "5vw",
          opacity: 0,
          duration: 1,
          ease: "back.out",
          stagger: 0.2,
        });
        tl.from(".cloud2", {
          opacity: 0,
          y: "-2vw",
          duration: 1,
        });
      }
    }

    ScrollTrigger.refresh();
  });
}

//hirebutton events
{
  document.querySelector("#hirelink").addEventListener("click", () => {
    const temptl = gsap.timeline();
    temptl.set(".hirebg", {
      display: "flex",
    });
    temptl.to(".hirebg", {
      opacity: 1,
      duration: 0.2,
    });
  });
  document.querySelector(".hire").addEventListener("click", () => {
    window.open("mailto:mayankdev0923@gmail.com", "_parent");
    const temptl = gsap.timeline();
    temptl.to(".hirebg", {
      opacity: 0,
      duration: 0.1,
    });
    temptl.set(".hirebg", {
      display: "none",
    });
  });
  document.querySelector(".goback").addEventListener("click", () => {
    const temptl = gsap.timeline();
    temptl.to(".hirebg", {
      opacity: 0,
      duration: 0.2,
    });
    temptl.set(".hirebg", {
      display: "none",
    });
  });
}

//transition section 1
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    const s1s = gsap.timeline({
      scrollTrigger: {
        trigger: "#herosection",
        scroller: "body",
        start: "bottom 75%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    s1s.to(["#post2", "#resume"], {
      scale: 2,
      stagger: 0.5,
      opacity: 0,
    });
  }
}

//section2
{
  if (window.matchMedia("(max-width: 768px)").matches) {
  } else {
    //hover animations
    {
      document.querySelector(".graybg").addEventListener("mouseenter", () => {
        gsap.to(".graybg", {
          scale: 1.03,
          backgroundColor: "#ffe700",
        });
      });
      document.querySelector(".graybg").addEventListener("mouseleave", () => {
        gsap.to(".graybg", {
          scale: 1,
          backgroundColor: "#e1e1e1",
        });
      });
    }
    {
      document.querySelector(".aimlcont").addEventListener("mouseenter", () => {
        gsap.to(".aimlcont", {
          scale: 1.03,
          backgroundColor: "#a1b2ff",
        });
        gsap.to(".aimlcont h2", {
          color: "#fff",
        });
      });
      document.querySelector(".aimlcont").addEventListener("mouseleave", () => {
        gsap.to(".aimlcont", {
          scale: 1,
          backgroundColor: "#fff",
        });
        gsap.to(".aimlcont h2", {
          color: "#a1b2ff",
        });
      });
    }
    {
      document
        .querySelector(".readycont")
        .addEventListener("mouseenter", () => {
          gsap.to(".readycont", {
            scale: 1.03,
            backgroundColor: "#fff",
          });
          gsap.to(".readycont h2", {
            color: "#a1b2ff",
          });
        });
      document
        .querySelector(".readycont")
        .addEventListener("mouseleave", () => {
          gsap.to(".readycont", {
            scale: 1,
            backgroundColor: "#a1b2ff",
          });
          gsap.to(".readycont h2", {
            color: "#fff",
          });
        });
    }
    {
      document.querySelector(".badge").addEventListener("mouseenter", () => {
        gsap.to(".badge", {
          scale: 1.1,
        });
      });
      document.querySelector(".badge").addEventListener("mouseleave", () => {
        gsap.to(".badge", {
          scale: 1,
        });
      });
    }
    {
      document.querySelector(".brownbg").addEventListener("mouseenter", () => {
        gsap.to(".brownbg", {
          scale: 1.04,
        });
      });
      document.querySelector(".brownbg").addEventListener("mouseleave", () => {
        gsap.to(".brownbg", {
          scale: 1,
        });
      });
    }
    {
      document.querySelector(".orangebg").addEventListener("mouseenter", () => {
        gsap.to(".orangebg", {
          scale: 1.04,
        });
      });
      document.querySelector(".orangebg").addEventListener("mouseleave", () => {
        gsap.to(".orangebg", {
          scale: 1,
        });
      });
    }

    //cursor text animations
    {
      document.querySelector(".graybg").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent:
            "I made various project in web dev, backend, c++ etc. View my github or resume for more info",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector(".graybg").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
    {
      document.querySelector(".aimlcont").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent:
            "I have keen interest in integrating Artificial Intelligence to solve real life problems. I am passionate about machine learning and it's techniques..",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector(".aimlcont").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
    {
      document
        .querySelector(".readycont")
        .addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent:
              "I am ready to continue my work as an AI Engineer/Intern.",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "20vw",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

      document
        .querySelector(".readycont")
        .addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
    }
    {
      document.querySelector(".badge").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent:
            "I have completed my internships from AICTE certified institutes.",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector(".badge").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
    {
      document.querySelector(".orangebg").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent:
            "I am equipped with skills such as Python, Machine Learning, CPP, Data Structures and Web Developement. I have experience working and collaborating with teams and a corporate environment.",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector(".orangebg").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
    {
      document.querySelector(".brownbg").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent:
            "I am known to various IDEs like VS Code, Google Colab, Pycharm, Cursor, etc. I also have major experience with Database Management tools like MongoDB Atlas, MySQL,etc.",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector(".brownbg").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
    {
      document
        .querySelector(".cgpascore")
        .addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent:
              "Boosting through my studies and syllabus with current CGPA of 9.1",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "20vw",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

      document
        .querySelector(".cgpascore")
        .addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
    }
    {
      document
        .querySelector("#patterndiv")
        .addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent: "This if for decoration only. XD",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "20vw",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

      document
        .querySelector("#patterndiv")
        .addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
    }
    {
      document.querySelector("#homeicon").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent: "Go to Homepage",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "fit-content",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector("#homeicon").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }
  }
}

//transition animations section2
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    const s2s = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsection",
        scroller: "body",
        start: "top 60%",
        end: "bottom bottom ",
        scrub: true,
      },
    });

    s2s.from("#skilltitle", {
      opacity: 0,
      duration: 1,
      scale: 2,
    });
    s2s.from("#navline2", {
      width: 0,
      duration: 0.5,
    });
    s2s.from("#cloud4", {
      x: 30,
      opacity: 0,
      duration: 0.5,
      ease: "back.out()",
      onComplete: () => {
        gsap.to("#cloud4", {
          x: "-14vw",
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s2s.from(".bentocol", {
      scale: 2,
      opacity: 0,
      y: 200,
      stagger: 0.7,
      duration: 1,
      ease: "power1.out",
      onStart: () => {
        gsap.to(".badge", {
          rotate: 360,
          duration: 10,
          repeat: -1,
          ease: "power1.inOut",
        });
        gsap.to("#cgpanumber", {
          color: "#b6825b",
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
        gsap.to("#cgpatext", {
          color: "#545454",
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s2s.from("#skillsectionbg", {
      opacity: 0,
    });
    s2s.from("#homeicon", {
      y: 20,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#skillsection",
          scroller: "body",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      })
      .from("#skilltitle h1", {
        x: 800,
        scale: 3,
        opacity: 0,
        stagger: 0.5,
      });

    const s2s = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsection",
        scroller: "body",
        end: "bottom bottom",
        start: "top 50%",
        scrub: true,
      },
    });

    s2s.from("#navline2", {
      width: 0,
      duration: 0.5,
    });
    s2s.from("#cloud4", {
      x: 30,
      opacity: 0,
      duration: 0.5,
      ease: "back.out()",
      onComplete: () => {
        gsap.to("#cloud4", {
          x: "-4vw",
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s2s.from(".bentocol", {
      scale: 2,
      opacity: 0,
      y: 200,
      stagger: 0.7,
      duration: 1,
      ease: "power1.out",
      onStart: () => {
        gsap.to(".badge", {
          rotate: 360,
          duration: 10,
          repeat: 1,
          ease: "power1.inOut",
        });
        gsap.to(".squishy", {
          width: "105%",
          yoyo: true,
          stagger: 0.5,
          delay: 0.5,
          duration: 1,
          ease: "power.inOut",
          repeat: 10,
        });
        gsap.to("#cgpanumber", {
          color: "#b6825b",
          duration: 2,
          yoyo: true,
          repeat: 5,
          ease: "power1.inOut",
        });
        gsap.to("#cgpatext", {
          color: "#545454",
          duration: 2,
          yoyo: true,
          repeat: 5,
          ease: "power1.inOut",
        });
        gsap.to(".graybg", {
          width: "90%",
          yoyo: true,
          repeat: 1,
        });
      },
    });
    s2s.from("#homeicon", {
      y: 20,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
  }
}

//section 3
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    //listcontent tap animation
    ["box1", "box2", "box3", "box4"].forEach(setupBoxToggle);
  } else {
    //listcontent cursor animations
    {
      document.querySelectorAll(".listcontent").forEach((box) => {
        box.addEventListener("mouseenter", () => {
          const boxtextcontent = box.querySelector("h3").textContent;
          gsap.to("#cursor h4", {
            textContent: boxtextcontent,
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "20vw",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });
        box.addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
      });
    }
    //listcontent hover animations
    {
      {
        document.querySelector(".box1").addEventListener("mouseenter", () => {
          gsap.to(".box1", {
            backgroundColor: "rgba(255,255,255,0.7)",
            scale: 0.95,
          });
        });
        document.querySelector(".box1").addEventListener("mouseleave", () => {
          gsap.to(".box1", {
            backgroundColor: "rgba(255,255,255,0.2)",
            scale: 1,
          });
        });
      }
      {
        document.querySelector(".box2").addEventListener("mouseenter", () => {
          gsap.to(".box2", {
            backgroundColor: "rgba(255,255,255,0.7)",
            scale: 0.95,
          });
        });
        document.querySelector(".box2").addEventListener("mouseleave", () => {
          gsap.to(".box2", {
            backgroundColor: "rgba(255,255,255,0.2)",
            scale: 1,
          });
        });
      }
      {
        document.querySelector(".box3").addEventListener("mouseenter", () => {
          gsap.to(".box3", {
            backgroundColor: "rgba(255,255,255,0.7)",
            scale: 0.95,
          });
        });
        document.querySelector(".box3").addEventListener("mouseleave", () => {
          gsap.to(".box3", {
            backgroundColor: "rgba(255,255,255,0.2)",
            scale: 1,
          });
        });
      }
      {
        document.querySelector(".box4").addEventListener("mouseenter", () => {
          gsap.to(".box4", {
            backgroundColor: "rgba(255,255,255,0.7)",
            scale: 0.95,
          });
        });
        document.querySelector(".box4").addEventListener("mouseleave", () => {
          gsap.to(".box4", {
            backgroundColor: "rgba(255,255,255,0.2)",
            scale: 1,
          });
        });
      }
    }

    //websitepreview cursor animations
    {
      {
        document
          .querySelector(".box1 .previewwebsite")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Preview Website",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "10vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box1 .previewwebsite")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box2 .previewwebsite")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Preview Website",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "10vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box2 .previewwebsite")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box3 .previewwebsite")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Preview Website",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "10vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box3 .previewwebsite")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box4 .previewwebsite")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Preview Website",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "10vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box4 .previewwebsite")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
    }

    //expandicon cursor   animation
    {
      {
        document
          .querySelector("#expandingbutton")
          .addEventListener("mouseenter", () => {
            gsap.to("#expandicon", {
              fill: "#111",
            });
            gsap.to("#cursor h4", {
              textContent: "Open in New Tab",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "10vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector("#expandingbutton")
          .addEventListener("mouseleave", () => {
            gsap.to("#expandicon", {
              fill: "#545454",
            });
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
    }
    //homeicon cursor text animation
    {
      document
        .querySelector("#homeicon2")
        .addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent: "Go to Homepage",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "fit-content",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

      document
        .querySelector("#homeicon2")
        .addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
    }

    //expandicon onclick event
    document.querySelector("#expandicon").addEventListener("click", () => {
      window.open(iframe.src, "_blank");
    });

    //gotogithub cursor animations
    {
      {
        document
          .querySelector(".box1 .gotogithub")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go to Github Source",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "15vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box1 .gotogithub")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box2 .gotogithub")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go to Github Source",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "15vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box2 .gotogithub")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box3 .gotogithub")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go to Github Source",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "15vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box3 .gotogithub")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
      {
        document
          .querySelector(".box4 .gotogithub")
          .addEventListener("mouseenter", () => {
            gsap.to("#cursor h4", {
              textContent: "Go to Github Source",
            });
            gsap.to("#cursor", {
              borderRadius: "20px",
              height: "fit-content",
              width: "15vw",
              padding: "0vh 1.8vh",
              duration: 0.5,
              ease: "back.out",
            });
          });

        document
          .querySelector(".box4 .gotogithub")
          .addEventListener("mouseleave", () => {
            gsap.to("#cursor h4", {
              textContent: "",
            });
            gsap.to("#cursor", {
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              padding: 0,
              duration: 0.5,
              ease: "back.out",
            });
          });
      }
    }
  }
}

//transition animations section3
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    const s3s = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectsection",
        start: "top 80%",
        scroller: "body",
        end: "bottom bottom",
        scrub: true,
      },
    });
    s3s.from("#projecttitle", {
      opacity: 0,
      scale: 2,
    });
    s3s.from("#projectsectionbg", {
      scale: 0.5,
      opacity: 0,
    });
    s3s.from("#navline3", {
      width: 0,
    });
    s3s.from("#projectsectioncloud", {
      opacity: 0,
      x: 20,
      onComplete: () => {
        gsap.to("#projectsectioncloud", {
          x: "-14vw",
          duration: 6,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s3s.from(".listcontent", {
      opacity: 0,
      scale: 2,
      stagger: 0.8,
      y: 200,
    });
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projectsection",
          scroller: "body",
          scrub: true,
          start: "top 90%",
          end: "top 50%", // ends just before pinning starts
        },
      })
      .from("#projecttitle", {
        scale: 3,
        opacity: 0,
        x: -800,
      })
      .from("#projectsectionbg", {
        scale: 0,
        opacity: 0,
        y: 800,
      });
    const s3s = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectsection",
        scroller: "body",
        scrub: true,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    s3s.from(".homeiconcontainer svg", {
      y: 2000,
    });
    s3s.from("#navline3", {
      width: 0,
    });
    s3s.from("#projectsectioncloud", {
      opacity: 0,
      x: 20,
      onComplete: () => {
        gsap.to("#projectsectioncloud", {
          x: "-4vw",
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s3s.from(".listseperator", {
      x: -200,
      y: 20,
      opacity: 0,
      stagger: 0.2,
    });
    s3s.from(".listcontent", {
      x: -200,
      y: 20,
      opacity: 0,
      stagger: 0.2,
    });
    s3s.from("#projectsectioncloud2", {
      opacity: 0,
      x: 20,
      onComplete: () => {
        gsap.to("#projectsectioncloud2", {
          x: "2vw",
          duration: 10,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s3s.from("#previewpane", {
      opacity: 0,
      x: 40,
    });
    s3s.set("#previewpane", {
      pointerEvents: "auto",
    });
    s3s.to("#projectsectionbg", {
      opacity: 0.99,
    });
  }
}

//section 4
{
  if (window.matchMedia("(max-width: 768px)").matches) {
  } else {
    //hover animations
    {
      const list2contents = document.querySelectorAll(".list2content");
      list2contents.forEach((contentbox) => {
        contentbox.addEventListener("mouseenter", () => {
          gsap.to(contentbox, {
            backgroundColor: "rgba(255,255,255,0.5)",
            scale: 0.95,
          });
        });
        contentbox.addEventListener("mouseleave", () => {
          gsap.to(contentbox, {
            backgroundColor: "rgba(255,255,255,0.2)",
            scale: 1,
          });
        });
      });
    }
    //cursor text animations
    {
      document.querySelector("#mountain").addEventListener("mouseenter", () => {
        gsap.to("#cursor h4", {
          textContent: "This is just a mountain....",
        });
        gsap.to("#cursor", {
          borderRadius: "20px",
          height: "fit-content",
          width: "20vw",
          padding: "0vh 1.8vh",
          duration: 0.5,
          ease: "back.out",
        });
      });

      document.querySelector("#mountain").addEventListener("mouseleave", () => {
        gsap.to("#cursor h4", {
          textContent: "",
        });
        gsap.to("#cursor", {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          padding: 0,
          duration: 0.5,
          ease: "back.out",
        });
      });
    }

    //homeicon cursor text animation
    {
      document
        .querySelector("#homeicon3")
        .addEventListener("mouseenter", () => {
          gsap.to("#cursor h4", {
            textContent: "Go to Homepage",
          });
          gsap.to("#cursor", {
            borderRadius: "20px",
            height: "fit-content",
            width: "fit-content",
            padding: "0vh 1.8vh",
            duration: 0.5,
            ease: "back.out",
          });
        });

      document
        .querySelector("#homeicon3")
        .addEventListener("mouseleave", () => {
          gsap.to("#cursor h4", {
            textContent: "",
          });
          gsap.to("#cursor", {
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            padding: 0,
            duration: 0.5,
            ease: "back.out",
          });
        });
    }
  }
}

//transition animations section4
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    const s4s = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactsection",
        scroller: "body",
        scrub: true,
        start: "top 80%",
        end: "top -10%",
      },
    });
    s4s.from("#contacttitle h1", {
      scale: 3,
      opacity: 0,
    });
    s4s.from("#contactsectionbg", {
      scale: 0,
      opacity: 0,
      y: 80,
    });
    s4s.from("#navline4", {
      width: 0,
      duration: 1,
    });
    s4s.from("#contactsectioncloud", {
      x: 20,
      opacity: 0,
      scale: 1.5,
      onComplete: () => {
        gsap.to("#contactsectioncloud", {
          x: "-4vw",
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s4s.from(".list2content", {
      y: 500,
      opacity: 0,
      stagger: 0.8,
    });
    s4s.from("#contactsectioncloud2", {
      x: -20,
      opacity: 0,
      scale: 1.5,
      onComplete: () => {
        gsap.to("#contactsectioncloud2", {
          x: "-4vw",
          y: "-1vw",
          duration: 16,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });

    s4s.from(".list2seperator", {
      opacity: 0,
      stagger: 0.8,
    });
  } else {
    const s4spretl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactsection",
        scroller: "body",
        scrub: true,
        start: "top 90%",
        end: "top 50%",
      },
    });
    s4spretl.from("#contacttitle h1", {
      scale: 3,
      opacity: 0,
      x: 800,
    });
    s4spretl.from("#contactsectionbg", {
      scale: 0,
      opacity: 0,
      y: 80,
    });

    const s4s = gsap.timeline({
      scrollTrigger: {
        trigger: "#contactsection",
        scroller: "body",
        scrub: true,
        start: "top 50%",
        end: "bottom bottom",
      },
    });
    s4s.from("#navline4", {
      width: 0,
      duration: 1,
    });
    s4s.from("#homeicon3", {
      y: 40,
      opacity: 0,
    });
    s4s.from("#mountain", {
      x: 40,
      opacity: 0,
    });
    s4s.from("#contactsectioncloud", {
      x: 20,
      opacity: 0,
      scale: 1.5,
      onComplete: () => {
        gsap.to("#contactsectioncloud", {
          x: "-4vw",
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s4s.from("#contactsectioncloud2", {
      x: -20,
      opacity: 0,
      scale: 1.5,
      onComplete: () => {
        gsap.to("#contactsectioncloud2", {
          x: "-4vw",
          y: "-1vw",
          duration: 16,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s4s.from(".list2seperator", {
      x: -200,
      y: 50,
      opacity: 0,
      stagger: 0.8,
    });
    s4s.from(".list2content", {
      x: -20,
      y: 50,
      opacity: 0,
      stagger: 0.8,
    });
  }
}
