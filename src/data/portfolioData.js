export const personalInfo = {
  name: "Premkumar Asode",
  role: "Aspiring DevOps Engineer | Java Full Stack Developer",
  roles: [
    "DevOps Engineer",
    "Java Full Stack Developer",
    "Software Developer",
    "Cloud & CI/CD Enthusiast"
  ],
  headline: "Building Scalable Applications and Automating Modern Infrastructure.",
  description:
    "I am an Electronics and Communication Engineering graduate passionate about Java development, cloud computing, DevOps automation, CI/CD pipelines, and building reliable software solutions. I enjoy developing applications and automating deployment workflows using modern technologies.",
  location: "Bengaluru, Karnataka, India",
  email: "premasode.dev@gmail.com", // clearly editable email
  emailPlaceholder: "premasode.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/premkumarasode/",
  github: "https://github.com/premasode",
  resumePath: "/Premkumar_Asode_Resume.pdf",
  profileImage: "/premkumar.jpg",
  graduationYear: "2025",
  college: "Government Engineering College, Chamarajanagar",
  university: "Visvesvaraya Technological University (VTU), Belagavi",
  degree: "Bachelor of Engineering in Electronics and Communication Engineering"
};

export const heroBadges = [
  { name: "Java", category: "backend", color: "from-amber-500 to-red-500" },
  { name: "Spring Boot", category: "backend", color: "from-emerald-500 to-green-600" },
  { name: "React", category: "frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Docker", category: "devops", color: "from-blue-400 to-cyan-500" },
  { name: "Jenkins", category: "devops", color: "from-red-400 to-amber-600" },
  { name: "Kubernetes", category: "devops", color: "from-blue-500 to-indigo-600" },
  { name: "AWS", category: "cloud", color: "from-amber-400 to-orange-500" },
  { name: "Terraform", category: "iac", color: "from-purple-400 to-indigo-500" }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core syntax, object-oriented concepts, and computational problem solving.",
    skills: [
      { name: "Java", level: "Hands-on Practice", highlight: true, tags: ["OOP", "Collections", "Streams"] },
      { name: "Python", level: "Scripting & Basics", highlight: false, tags: ["Automation", "Scripting"] },
      { name: "JavaScript", level: "Modern ES6+", highlight: true, tags: ["DOM", "Async/Await", "React"] },
      { name: "SQL", level: "Queries & Joins", highlight: true, tags: ["Relational DB", "CRUD"] },
      { name: "C++", level: "Foundational & DSA", highlight: false, tags: ["Logic", "Memory Basics"] }
    ]
  },
  {
    id: "java-stack",
    title: "Java Full Stack Development",
    icon: "Layers",
    description: "Enterprise backend architecture, microservices concepts, and responsive frontend UI.",
    skills: [
      { name: "Core Java", level: "Strong Foundation", highlight: true, tags: ["OOPs", "Multithreading", "Exception Handling"] },
      { name: "Spring Boot", level: "Hands-on Projects", highlight: true, tags: ["REST APIs", "Spring Data JPA", "Dependency Injection"] },
      { name: "JDBC", level: "Practiced", highlight: false, tags: ["Database Connectivity"] },
      { name: "Hibernate", level: "Practiced", highlight: false, tags: ["ORM", "Entity Mapping"] },
      { name: "Servlets", level: "Learned & Practiced", highlight: false, tags: ["HTTP Requests", "Lifecycle"] },
      { name: "REST APIs", level: "Hands-on Integration", highlight: true, tags: ["JSON", "Endpoints", "Postman"] },
      { name: "HTML5 & CSS3", level: "Frontend Design", highlight: false, tags: ["Responsive", "Flexbox", "Grid"] },
      { name: "React.js", level: "Modern UI Component", highlight: true, tags: ["Hooks", "State", "Vite"] },
      { name: "MySQL", level: "Database Modeling", highlight: true, tags: ["Schema Design", "Foreign Keys"] },
      { name: "PostgreSQL", level: "Practiced", highlight: false, tags: ["Relational Engine"] }
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Computing",
    icon: "Cloud",
    description: "Continuous integration, infrastructure as code, containerization, and AWS cloud management.",
    skills: [
      { name: "Git & GitHub", level: "Version Control", highlight: true, tags: ["Branching", "Pull Requests", "Workflows"] },
      { name: "Linux", level: "Command Line & Admin", highlight: true, tags: ["Bash", "File Permissions", "Shell Scripting"] },
      { name: "Jenkins", level: "CI/CD Automation", highlight: true, tags: ["Pipelines", "Webhooks", "Artifacts"] },
      { name: "Maven", level: "Build Management", highlight: true, tags: ["pom.xml", "Dependencies", "Lifecycles"] },
      { name: "Docker", level: "Containerization", highlight: true, tags: ["Dockerfile", "Images", "Networks"] },
      { name: "Docker Compose", level: "Multi-Container", highlight: true, tags: ["Compose YAML", "Services"] },
      { name: "Kubernetes", level: "Container Orchestration", highlight: true, tags: ["Pods", "Deployments", "Services", "kubectl"] },
      { name: "Ansible", level: "Config Management", highlight: false, tags: ["Playbooks", "Inventory"] },
      { name: "Terraform", level: "Infrastructure as Code", highlight: true, tags: ["Providers", "HCL", "State Management"] },
      { name: "AWS EC2", level: "Virtual Compute", highlight: true, tags: ["Instances", "Security Groups", "SSH"] },
      { name: "AWS S3", level: "Object Storage", highlight: true, tags: ["Buckets", "Policies"] },
      { name: "AWS IAM", level: "Access Management", highlight: true, tags: ["Roles", "Policies", "Least Privilege"] },
      { name: "AWS VPC", level: "Cloud Networking", highlight: false, tags: ["Subnets", "Route Tables"] },
      { name: "AWS RDS", level: "Managed Database", highlight: false, tags: ["MySQL on AWS"] },
      { name: "Route 53", level: "DNS Management", highlight: false, tags: ["DNS Routing"] },
      { name: "Nginx", level: "Reverse Proxy & Web Server", highlight: true, tags: ["Routing", "Static Assets"] }
    ]
  },
  {
    id: "monitoring-deployment",
    title: "Monitoring & Deployment",
    icon: "Activity",
    description: "Observability stacks, health metrics, and automated deployment pipelines.",
    skills: [
      { name: "Prometheus", level: "Metrics Scraping", highlight: true, tags: ["Targets", "Alerts", "PromQL Basics"] },
      { name: "Grafana", level: "Visualization Dashboards", highlight: true, tags: ["Dashboards", "Panels", "System Metrics"] },
      { name: "CI/CD Pipelines", level: "Automation Workflows", highlight: true, tags: ["Build", "Test", "Deploy"] },
      { name: "Application Deployment", level: "Practical Hands-on", highlight: true, tags: ["Server Hosting", "Nginx"] },
      { name: "Infrastructure Automation", level: "Learned & Practiced", highlight: true, tags: ["IaC", "Scripting"] },
      { name: "Containerization", level: "Docker Workflows", highlight: true, tags: ["Microservices", "Images"] },
      { name: "Cloud Monitoring", level: "System Observability", highlight: true, tags: ["Uptime", "Resource Usage"] }
    ]
  }
];

export const pipelineStages = [
  {
    id: 1,
    title: "Developer Code",
    shortName: "Source",
    tool: "Java / React / Config",
    icon: "FileCode",
    color: "from-cyan-500 to-blue-500",
    description: "Features, bugfixes, and infrastructure scripts are developed locally and structured into clean Git commits.",
    commandSample: "git commit -m 'feat: implement restful endpoints and docker configuration'",
    outputSample: "[main 8a4b2c1] feat: implement restful endpoints and docker configuration\n 5 files changed, 218 insertions(+), 12 deletions(-)",
    details: "Code is modularized using standard Maven conventions for backend and modern Vite/React structure for frontend."
  },
  {
    id: 2,
    title: "GitHub Repository",
    shortName: "Version Control",
    tool: "Git & GitHub",
    icon: "GitBranch",
    color: "from-purple-500 to-indigo-500",
    description: "Pushed commits trigger automated webhooks configured in Jenkins for continuous integration.",
    commandSample: "git push origin main",
    outputSample: "Enumerating objects: 12, done.\nCounting objects: 100% (12/12), done.\nTo github.com/premasode/ci-cd-pipeline.git\n * [new branch] main -> main\nWebhook dispatched to Jenkins server -> 200 OK",
    details: "Repository maintains branch protection rules and webhook events that fire on push and pull request activities."
  },
  {
    id: 3,
    title: "Jenkins Server",
    shortName: "Orchestration",
    tool: "Jenkins CI",
    icon: "Cpu",
    color: "from-red-500 to-rose-600",
    description: "Jenkins listens to webhook payloads and initiates the Declarative Pipeline execution in isolated stages.",
    commandSample: "jenkins-cli.jar build 'App-CI-Pipeline' -s -v",
    outputSample: "Started by GitHub push by premasode\nRunning in Durability level: MAX_SURVIVABILITY\n[Pipeline] Start of Pipeline\n[Pipeline] node -> Running on Jenkins Agent-01",
    details: "Automated trigger validates environment variables, secrets from Jenkins credentials store, and prepares build workspace."
  },
  {
    id: 4,
    title: "Maven Build",
    shortName: "Compile & Package",
    tool: "Apache Maven",
    icon: "Package",
    color: "from-amber-500 to-orange-500",
    description: "Resolves project dependencies from pom.xml and compiles Java source code into deployable JAR/WAR artifacts.",
    commandSample: "mvn clean compile package -DskipTests=false",
    outputSample: "[INFO] Scanning for projects...\n[INFO] Building BookNest-Service 1.0.0-SNAPSHOT\n[INFO] Compiling 24 source files to target/classes\n[INFO] Building jar: target/app-service-1.0.0.jar\n[INFO] BUILD SUCCESS [8.421 s]",
    details: "Validates dependency tree, generates bytecode, and produces standalone executable Spring Boot JAR."
  },
  {
    id: 5,
    title: "Automated Testing",
    shortName: "Quality Gate",
    tool: "JUnit & Test Validation",
    icon: "CheckCircle2",
    color: "from-emerald-500 to-teal-500",
    description: "Runs automated unit tests and mock integration checks to verify regression safety before containerization.",
    commandSample: "mvn test",
    outputSample: "[INFO] Running com.app.service.ApplicationTests\n[INFO] Tests run: 18, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 3.14 s\n[INFO] All test suites verified successfully.\n[INFO] BUILD SUCCESS",
    details: "If any test suite fails, the pipeline aborts immediately, preventing faulty code from reaching downstream registries."
  },
  {
    id: 6,
    title: "Docker Image Build",
    shortName: "Containerization",
    tool: "Docker Engine",
    icon: "Boxes",
    color: "from-blue-400 to-cyan-500",
    description: "Packages the compiled JAR and runtime dependencies into an immutable, multi-stage lightweight Docker image.",
    commandSample: "docker build -t premasode/app:v1.0.0 .",
    outputSample: "Step 1/6 : FROM eclipse-temurin:17-jre-alpine\nStep 2/6 : WORKDIR /app\nStep 3/6 : COPY target/*.jar app.jar\nStep 4/6 : EXPOSE 8080\nStep 5/6 : ENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]\nSuccessfully built 7f9a21e4\nSuccessfully tagged premasode/app:v1.0.0",
    details: "Multi-stage Dockerfile ensures minimal image footprint, reduced attack surface, and Alpine Linux runtime efficiency."
  },
  {
    id: 7,
    title: "Container Registry",
    shortName: "Image Push",
    tool: "Docker Hub / AWS ECR",
    icon: "UploadCloud",
    color: "from-indigo-400 to-violet-500",
    description: "Pushes the version-tagged Docker image to a centralized registry for secure storage and distribution.",
    commandSample: "docker push premasode/app:v1.0.0",
    outputSample: "The push refers to repository [docker.io/premasode/app]\n7f9a21e4: Pushed\n4c8e9b11: Pushed\nv1.0.0: digest: sha256:d129fa... size: 1420\nImage verified and signed.",
    details: "Tags with semantic versions and git commit hashes for traceable, roll-back safe deployments."
  },
  {
    id: 8,
    title: "AWS EC2 Deployment",
    shortName: "Production Host",
    tool: "AWS EC2 & Docker Compose",
    icon: "Server",
    color: "from-amber-400 to-yellow-500",
    description: "Pulls updated image to target AWS EC2 instance, restarts containers gracefully, and verifies health checks.",
    commandSample: "ssh -i key.pem ubuntu@ec2-host 'docker pull premasode/app:v1.0.0 && docker compose up -d'",
    outputSample: "Container app-service-1  Stopping\nContainer app-service-1  Recreating\nContainer app-service-1  Started\nHTTP/1.1 200 OK -> /actuator/health is UP\nReverse Proxy (Nginx) traffic active.",
    details: "Container is bound to internal network, protected by AWS Security Groups, and exposed securely via Nginx reverse proxy."
  },
  {
    id: 9,
    title: "Prometheus & Grafana",
    shortName: "Observability",
    tool: "Prometheus & Grafana",
    icon: "Activity",
    color: "from-orange-500 to-rose-500",
    description: "Continuously scrapes CPU, memory, JVM metrics, and HTTP latency; surfaces real-time telemetry on Grafana dashboards.",
    commandSample: "curl http://ec2-host:9090/api/v1/query?query=up",
    outputSample: "status: success\nresult: [{metric: {job: 'spring-actuator'}, value: [1712839200, '1']}]\nGrafana Dashboard: JVM Memory: 312MB / 1024MB | Request Latency: 42ms (p99)\nAlertManager Status: Healthy (0 Alerts)",
    details: "Enables instant incident detection, resource utilization tracking, and uptime assurance."
  }
];

export const projects = [
  {
    id: "cicd-pipeline",
    title: "End-to-End CI/CD Pipeline",
    category: "DevOps",
    badge: "Featured DevOps Project",
    technologies: ["Git", "Jenkins", "Maven", "Docker", "AWS EC2", "Linux"],
    description:
      "Engineered an automated Continuous Integration and Continuous Deployment pipeline automating code check-in, compilation, unit test validation, Docker containerization, and AWS EC2 production deployment.",
    highlights: [
      "Configured Jenkins webhook triggers on GitHub code push events",
      "Automated Java application build and packaging with Apache Maven",
      "Created lightweight multi-stage Dockerfiles to containerize runtime",
      "Automated zero-downtime deployment script onto AWS EC2 Linux instance",
      "Integrated post-deployment HTTP health check validation"
    ],
    architectureOverview: "GitHub Commit -> Jenkins Webhook Trigger -> Maven Compile & Test -> Docker Image Build -> Docker Hub Push -> AWS EC2 SSH Pull & Run.",
    githubUrl: "https://github.com/premasode/end-to-end-ci-cd-pipeline",
    isPlaceholderLink: true, // indicates placeholder until verified
    featured: true
  },
  {
    id: "book-nest",
    title: "Book Nest — Online Bookstore",
    category: "Java Full Stack",
    badge: "Full Stack Java",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Hibernate", "Postman"],
    description:
      "A comprehensive web application backend built with Java and Spring Boot for online book browsing, catalog management, shopping cart operations, and secure database persistence.",
    highlights: [
      "Designed normalized relational database schema in MySQL for books, users, and orders",
      "Implemented clean RESTful API controllers with HTTP status codes and validation",
      "Configured Spring Data JPA / Hibernate repositories for efficient CRUD operations",
      "Implemented exception handling and API testing using Postman collections"
    ],
    architectureOverview: "Client UI -> Spring Boot REST Controllers -> Service Layer -> Spring Data JPA / Hibernate -> MySQL Relational Database.",
    githubUrl: "https://github.com/premasode/book-nest-online-bookstore",
    isPlaceholderLink: true,
    featured: true
  },
  {
    id: "dockerized-web-app",
    title: "Dockerized Web Application",
    category: "DevOps",
    badge: "Containerization",
    technologies: ["Docker", "Docker Compose", "Nginx", "Linux", "Bash"],
    description:
      "Designed and deployed a multi-tier containerized web application infrastructure using Docker and Nginx reverse proxy on Linux, optimizing container networking and isolation.",
    highlights: [
      "Crafted production-ready Dockerfile configurations minimizing layer caching overhead",
      "Configured Nginx as a reverse proxy for routing incoming HTTP requests to backend containers",
      "Utilized Docker Compose to manage multi-container environment with shared bridge networks",
      "Implemented persistent Docker volumes for safe data retention across container lifecycles"
    ],
    architectureOverview: "Incoming Web Traffic -> Nginx Reverse Proxy Container -> Docker Bridge Network -> Application Backend Container -> Persistent Volume Storage.",
    githubUrl: "https://github.com/premasode/dockerized-web-application",
    isPlaceholderLink: true,
    featured: false
  },
  {
    id: "finance-management",
    title: "Personal Finance Management System",
    category: "Java Full Stack",
    badge: "Full Stack Web",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description:
      "A full-stack financial record tracking system allowing users to categorize income and expenses, analyze monthly budgets, and maintain structured records of personal expenditures.",
    highlights: [
      "Developed backend business logic in Spring Boot to calculate balances, categories, and totals",
      "Structured MySQL tables with foreign key constraints for transaction auditability",
      "Created an intuitive frontend with dynamic JavaScript calculation and responsive forms",
      "Implemented server-side validation to prevent negative or corrupted financial entries"
    ],
    architectureOverview: "HTML/CSS/JS Frontend -> Spring Boot Backend APIs -> MySQL Financial Ledger.",
    githubUrl: "https://github.com/premasode/personal-finance-management-system",
    isPlaceholderLink: true,
    featured: false
  },
  {
    id: "exam-seating-system",
    title: "Exam Invigilation & Seating System",
    category: "Java Full Stack",
    badge: "Academic Management",
    technologies: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript", "JDBC"],
    description:
      "An automated academic management system developed to allocate examination halls, generate randomized invigilation duties, and prevent student seating overlap.",
    highlights: [
      "Engineered automated seating allocation algorithm to seat alternating course students",
      "Developed faculty duty scheduling system ensuring balanced invigilation rosters",
      "Managed student data, course codes, and hall capacities via relational MySQL database",
      "Delivered a responsive user interface for administrative staff and students"
    ],
    architectureOverview: "Admin / Student Portal -> Java Web Layer -> Seating Allocation Engine -> MySQL Database.",
    githubUrl: "https://github.com/premasode/exam-invigilation-seating-system",
    isPlaceholderLink: true,
    featured: false
  },
  {
    id: "kubernetes-deployment",
    title: "Kubernetes Container Orchestration",
    category: "DevOps",
    badge: "Cloud Orchestration",
    technologies: ["Kubernetes", "Docker", "YAML", "kubectl", "Linux"],
    description:
      "Created declarative Kubernetes manifests (Deployments, Services, ConfigMaps, and Secrets) to manage application scaling, self-healing, rolling updates, and internal service discovery.",
    highlights: [
      "Authored clean YAML manifests for Pod Deployments with replica sets and resource limits",
      "Configured ClusterIP and NodePort Services to handle load balancing across pods",
      "Implemented rolling update strategies and zero-downtime container rollouts",
      "Practiced troubleshooting and pod debugging using kubectl CLI commands"
    ],
    architectureOverview: "Kubernetes Master Node (API Server, Scheduler) -> Worker Nodes (Kubelet, Kube-Proxy) -> Pods with Replicas & ClusterIP Service Routing.",
    githubUrl: "https://github.com/premasode/kubernetes-deployment-configs",
    isPlaceholderLink: true,
    featured: true
  }
];

export const experienceData = [
  {
    id: "devops-training",
    type: "training",
    title: "Java Full Stack & DevOps Engineering Practical Training",
    organization: "Specialized Technical Training & Hands-on Labs",
    location: "Bengaluru, India",
    period: "2024 - Present",
    badge: "Intensive Technical Training",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    summary:
      "Undertook structured hands-on training focusing on end-to-end software engineering and DevOps infrastructure practices.",
    responsibilities: [
      "Built full-stack applications utilizing Java, Spring Boot, Hibernate, REST APIs, and MySQL.",
      "Constructed automated CI/CD pipelines connecting GitHub, Jenkins, Maven, and Docker.",
      "Practiced Linux server administration, shell scripting, and container deployment on AWS EC2.",
      "Configured Kubernetes manifests for container orchestration, services, and self-healing deployments.",
      "Gained practical exposure to infrastructure as code concepts with Terraform and system monitoring with Prometheus and Grafana."
    ]
  },
  {
    id: "eos-globe",
    type: "work",
    title: "Technical Support Executive",
    organization: "EOS Globe",
    location: "Bengaluru, India",
    period: "6 Months Experience",
    badge: "Professional Experience",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    summary:
      "Served as a Technical Support Executive diagnosing technical queries, troubleshooting software and network issues, and delivering timely resolutions to maintain high customer satisfaction.",
    responsibilities: [
      "Handled technical troubleshooting and diagnosed system, software, and connectivity problems.",
      "Communicated technical solutions clearly to stakeholders while maintaining strict SLA compliance.",
      "Collaborated with cross-functional technical teams to escalate and resolve complex technical anomalies.",
      "Strengthened problem-solving under pressure, structured communication, and client support operations."
    ]
  },
  {
    id: "engineering-degree",
    type: "education",
    title: "Bachelor of Engineering — Electronics & Communication Engineering",
    organization: "Government Engineering College, Chamarajanagar",
    affiliation: "Visvesvaraya Technological University (VTU), Belagavi",
    location: "Karnataka, India",
    period: "Graduation: 2025",
    badge: "Bachelor of Engineering",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    summary:
      "Graduated with a strong foundation in computational logic, microprocessors, digital systems, signal processing, and computer networking, developing an analytical problem-solving foundation.",
    responsibilities: [
      "Developed problem-solving methodology, mathematical reasoning, and hardware-software integration knowledge.",
      "Led academic project initiatives involving embedded logic, algorithms, and software implementation.",
      "Participated actively in technical seminars, coding workshops, and collaborative team assignments."
    ]
  }
];

export const terminalCommands = {
  help: [
    "Available commands:",
    "  whoami       - Display developer summary",
    "  skills       - List primary technical competencies",
    "  projects     - List featured software & DevOps projects",
    "  pipeline     - Show automated CI/CD pipeline stages",
    "  contact      - Show social links and location",
    "  education    - Display university and degree information",
    "  cat resume   - Show resume preview details",
    "  clear        - Clear the terminal screen"
  ],
  whoami: [
    "Premkumar Asode",
    "Role: Aspiring DevOps Engineer | Java Full Stack Developer",
    "Location: Bengaluru, Karnataka, India",
    "Education: B.E. in ECE (VTU, 2025)",
    "Status: Actively seeking entry-level DevOps / Java Developer positions in Bengaluru"
  ],
  skills: [
    "Backend:   Java, Spring Boot, Hibernate, REST APIs, MySQL, PostgreSQL",
    "DevOps:    Git, Linux, Jenkins, Maven, Docker, Kubernetes, Ansible, Terraform",
    "Cloud:     AWS (EC2, S3, IAM, VPC, RDS), Nginx Reverse Proxy",
    "Observ:    Prometheus, Grafana, System Metrics Scraping",
    "Frontend:  React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS"
  ],
  projects: [
    "1. End-to-End CI/CD Pipeline (Git -> Jenkins -> Maven -> Docker -> AWS EC2)",
    "2. Book Nest — Online Bookstore (Spring Boot, REST APIs, MySQL)",
    "3. Dockerized Web Application (Docker, Nginx, Linux)",
    "4. Personal Finance Management System (Java, Spring Boot, MySQL)",
    "5. Exam Invigilation and Seating System (Java, MySQL, HTML/CSS/JS)",
    "6. Kubernetes Deployment (Deployments, Services, YAML, kubectl)"
  ],
  pipeline: [
    "CI/CD Pipeline Flow:",
    "  [1] Developer Code   -> git commit",
    "  [2] GitHub Repo      -> git push (triggers webhook)",
    "  [3] Jenkins CI       -> pulls repo & runs declarative stages",
    "  [4] Maven Build      -> mvn clean package (generates JAR)",
    "  [5] Unit Testing     -> mvn test (JUnit verification)",
    "  [6] Docker Build     -> builds container image",
    "  [7] Docker Registry  -> pushes versioned image tag",
    "  [8] AWS EC2 Deploy   -> pulls image & launches with Docker Compose",
    "  [9] Monitoring       -> Prometheus scrapes metrics -> Grafana dashboard"
  ],
  education: [
    "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
    "College:    Government Engineering College, Chamarajanagar",
    "University: Visvesvaraya Technological University (VTU), Belagavi",
    "Graduation: 2025"
  ],
  contact: [
    "Location:  Bengaluru, Karnataka, India",
    "LinkedIn:  https://www.linkedin.com/in/premkumarasode/",
    "GitHub:    https://github.com/premasode",
    "Email:     premasode.dev@gmail.com"
  ]
};
