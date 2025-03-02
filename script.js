document.addEventListener("DOMContentLoaded", () => {
  const services = [
    {
      id: "01",
      title: "Automation",
      description:
        "Automation testing services include E2E testing, as well as integration and functionality API testing. API automated testing can start with shift-left testing. E2E automated tests are developed once the software reaches a stable state.",
    },
    {
      id: "02",
      title: "Functional testing",
      description:
        "Functional testing involves a thorough verification of features and user flows, ensuring smooth functionality and an optimal user experience in all application scenarios.",
    },
    {
      id: "03",
      title: "Security testing",
      description:
        "Security testing is integrated into the testing process, focusing on common vulnerabilities using automated methodologies. It includes API security testing and basic vulnerability demonstrations as proof of concept.",
    },
    {
      id: "04",
      title: "Game testing",
      description:
        "Game testing involves specialized testing for web and mobile applications on Android and iOS, focusing on functionality and cross-platform compatibility.",
    },
  ];

  const features = [
    {
      title: "The code and results are 100% yours",
      description:
        "Everything produced, from automation scripts to quality reports, is entirely yours. Every detail is carefully documented to ensure you can maintain and scale the results long-term.",
    },
    {
      title: "Confidentiality is a priority",
      description:
        "Confidentiality is a priority, and trust is essential. Strict measures are in place to protect your confidential information, ensuring your project is handled with the highest level of care and security. Any confidential information, such as a small exploitation of a vulnerability, will be immediately destroyed from the system once a report containing those vulnerabilities is sent",
    },
    {
      title: "Your success is the priority",
      description:
        "Long-term relationships are key. Quality and a focus on exceeding expectations help build lasting collaborations based on consistent and reliable results.",
    },
    {
      title: "Total flexibility",
      description:
        "Our outsourcing company specializes in comprehensive staff augmentation management, adapting to the specific needs of each project. We provide the right talent with the flexibility to scale the team according to the project's requirements and progress. Whether you need short-term or long-term resources, we offer tailored solutions to ensure the success of your project.",
    },
    {
      title: "Complete commitment to your project",
      description:
        "Each project has a dedicated team working exclusively on your objectives. Without distractions or context switching, personalized attention and results that meet the highest expectations are guaranteed.",
    },
    {
      title:
        "Reducing the gap between traditional testing and security testing",
      description:
        "Traditionally, security testing has often been overlooked. However, in today's landscape, it is essential, as companies of all sizes are vulnerable to cyberattacks. The security testing process must be conducted by an ethical specialist due to the sensitive nature of the methodology and the need to limit access in order to protect critical data.",
    },
  ];

  const servicesContainer = document.getElementById("services-container");
  services.forEach((service) => {
    const serviceElement = document.createElement("div");
    serviceElement.className = "service-card";
    serviceElement.innerHTML = `
            <div class="service-id">${service.id}</div>
            <h4 class="service-title">${service.title}</h4>
            <p class="section-description">${service.description}</p>
        `;
    servicesContainer.appendChild(serviceElement);
  });

  const featuresContainer = document.getElementById("features-container");
  features.forEach((feature) => {
    const featureElement = document.createElement("div");
    featureElement.className = "feature-item";
    featureElement.innerHTML = `
            <svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
            <div class="feature-content">
                <h4>${feature.title}</h4>
                <p class="section-description">${feature.description}</p>
            </div> `;
    featuresContainer.appendChild(featureElement);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll(".navbar-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.textContent.toLowerCase().replace(/\s+/g, "-");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset =
          4 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 5rem in pixels
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
