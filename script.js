const menuButton = document.getElementById("sidemenuopenicon");
const menuLinks = document.getElementById("navlinks");
const menuCloseButton = document.getElementById("sidemenucloseicon");
const menuBlur = document.getElementById("menublur");
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

//functions
{
  function closemenu() {
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
        duration: 1,
        onComplete: () => {
          gsap.to("#lightmode", {
            opacity: 1,
            display: "inline-block",
            duration: 1,
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
      gsap.to("#lightmode", {
        opacity: 0,
        display: "none",
        duration: 1,
        onComplete: () => {
          gsap.to("#darkmode", {
            opacity: 1,
            display: "inline-block",
            duration: 1,
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

      isDarkMode = false;
    }
  }
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
      opacity: 0.9,
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

    document.querySelector("#lightmode").addEventListener("click", () => {
      setTheme(false);
    });
  }

  window.addEventListener("load", () => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark);

    if (window.matchMedia("(max-width: 768px)").matches) {
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
  });
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

//transition animations
{
  if (window.matchMedia("(max-width: 768px)").matches) {
    const s2s = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsection",
        scroller: "body",
        end: "top 0%",
        start: "top 70%",
        scrub: true,
      },
    });

    s2s.from("#skilltitle", {
      opacity: 0,
      duration: 1,
      scale: 0.5,
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
          duration: 8,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        });
      },
    });
    s2s.from(".bentocol", {
      scale: 1,
      opacity: 0,
      y: 200,
      stagger: 0.7,
      ease: "power1.out",
      onStart: () => {
        gsap.to(".badge", {
          rotate: 360,
          duration: 10,
          repeat: -1,
          ease: "power1.inOut",
        });
        gsap.to(".squishy", {
          width: "105%",
          yoyo: true,
          stagger: 0.5,
          delay: 0.5,
          duration: 1,
          ease: "power.inOut",
          repeat: -1,
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
        gsap.to(".graybg", {
          width: "90%",
          yoyo: true,
          repeat: 1,
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
    gsap.from("#skilltitle", {
      x: 800,
      scale: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: "#skillsection",
        scroller: "body",
        end: "top 0%",
        start: "top 90%",
        scrub: true,
      },
    });

    const s2s = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsection",
        scroller: "body",
        end: "top -70%",
        start: "top 0%",
        pin: true,
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
      scale: 1,
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
    s2s.from("#skillsectionbg", {
      opacity: 0,
    });
    s2s.from("#homeicon", {
      y: 20,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
  }
}
