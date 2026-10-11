const fs = require('fs');
const path = require('path');

const content = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Resources <<
    /Font <<
      /F1 4 0 R
      /F2 5 0 R
    >>
  >>
  /Contents 6 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
6 0 obj
<< /Length 1100 >>
stream
BT
/F1 22 Tf
50 740 Td
(PREMKUMAR ASODE) Tj
/F2 12 Tf
0 -24 Td
(Aspiring DevOps Engineer | Java Full Stack Developer) Tj
0 -16 Td
(Bengaluru, Karnataka, India | linkedin.com/in/premkumarasode | github.com/premasode) Tj
/F1 14 Tf
0 -32 Td
(EDUCATION) Tj
/F2 11 Tf
0 -18 Td
(Bachelor of Engineering in Electronics and Communication Engineering) Tj
0 -14 Td
(Government Engineering College, Chamarajanagar | VTU, Belagavi | Graduation: 2025) Tj
/F1 14 Tf
0 -28 Td
(TECHNICAL SKILLS) Tj
/F2 11 Tf
0 -18 Td
(Languages: Java, Python, JavaScript, SQL, C++) Tj
0 -14 Td
(DevOps & Cloud: Docker, Kubernetes, Jenkins, Maven, AWS (EC2, S3, IAM, VPC), Terraform, Linux) Tj
0 -14 Td
(Java Stack: Spring Boot, REST APIs, Hibernate, JDBC, Servlets, MySQL, PostgreSQL) Tj
0 -14 Td
(Monitoring & Observability: Prometheus, Grafana, Nginx Reverse Proxy, CI/CD Pipelines) Tj
/F1 14 Tf
0 -28 Td
(FEATURED PROJECTS) Tj
/F2 11 Tf
0 -18 Td
(1. End-to-End CI/CD Pipeline - Git, Jenkins, Maven, Docker, AWS EC2) Tj
0 -14 Td
(2. Book Nest: Online Bookstore - Java, Spring Boot, MySQL, REST APIs) Tj
0 -14 Td
(3. Dockerized Web Application - Docker, Nginx, Linux) Tj
0 -14 Td
(4. Kubernetes Deployment & Pod Orchestration - Docker, Kubernetes, YAML, kubectl) Tj
/F1 14 Tf
0 -28 Td
(EXPERIENCE & TRAINING) Tj
/F2 11 Tf
0 -18 Td
(Java Full Stack & DevOps Engineering Practical Labs (2024 - Present)) Tj
0 -14 Td
(Technical Support Executive - EOS Globe (6 Months)) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000342 00000 n 
0000000414 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
1780
%%EOF
`;

const outputPath = path.join(__dirname, '..', 'public', 'Premkumar_Asode_Resume.pdf');
fs.writeFileSync(outputPath, content.trim());
console.log('Successfully generated public/Premkumar_Asode_Resume.pdf');
