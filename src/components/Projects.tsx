import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { useInView } from "./hooks/useInView";

const projects = [
  {
    title: "AWS VM & Container Deployment",
    technologies: "AWS, Docker, ECS",
    year: "2025",
    description: "Created VMs on AWS and deployed a containerized web application using ECS and Docker.",
    highlights: [
      "Built Docker images for the application and pushed them to Docker Hub.",
      "Pulled images from Docker Hub and deployed them to ECS using task definitions and services.",
      "Verified application reachability and basic scaling behavior in the ECS cluster."
    ],
    image: "/assets/aws.svg"
  },
  {
    title: "MySQL Database Architecture",
    technologies: "MySQL, SQL",
    year: "2025",
    description: "Designed and implemented multiple relational databases with interconnected tables and joins.",
    highlights: [
      "Created a database: MySQL databases and tables based on a real-life scenario.",
      "Defined primary keys, foreign keys, and relationships to enforce referential integrity.",
      "Wrote queries with INNER, LEFT, and RIGHT JOINs to retrieve combined data.",
      "Tested queries to ensure correctness, performance, and data consistency across related tables."
    ],
    image: "/assets/db.jpg"
  },
  {
    title: "Azure Virtual Network Security & Segmentation",
    technologies: "Azure, NSG, WireM Server",
    year: "2025",
    description: "Built a segmented Azure Virtual Network with secured subnets and automated zero-trust access.",
    highlights: [
      "Created an Azure Virtual Network (VNet) with two separate subnets.",
      "Deployed VMs into each subnet and tested communication with Windows Remote Desktop.",
      "Configured custom NSG rules to allow WinRM or LDAP only when required and deny unauthorized access.",
      "Deployed Windows VMs with NSG rules for each subnet and tested communication with WAN, LDAP, and tools.",
      "Demonstrated understanding of Azure networking, zero-trust access control, and secure cloud design."
    ],
    image: "/assets/how-nsg-works.jpg"
  },
  {
    title: "GitHub Actions CI/CD",
    technologies: "GitHub Actions, Docker",
    year: "2025",
    description: "Created an automated workflow using GitHub Actions with multi-stage build and deployment steps.",
    highlights: [
      "Wrote a GitHub Actions workflow file to automate build and deployment for the application.",
      "Configured multi-stage Docker builds to optimize image size and reuse build layers.",
      "Integrated steps for building, pushing, and exporting Docker images during automation.",
      "Ensured repeatable and consistent execution of the pipeline on each push or pull request."
    ],
    image: "/assets/Github-Actions.webp"
  },
  {
    title: "Cisco Basic Network Configuration",
    technologies: "Cisco, Routing, CIDR",
    year: "2025",
    description: "Configured routing, CIDR subnets, and switching for a small network using Cisco devices.",
    highlights: [
      "Assigned IP addresses and CIDR ranges to interfaces on Cisco routers and switches.",
      "Configured static routes and basic routing behavior between different network segments.",
      "Set up switch ports and network configuration to enable communication across devices.",
      "Verified configuration using commands, and interface status checks."
    ],
    image: "/assets/cisco.png"
  },
  {
    title: "Linux & OS Scripting",
    technologies: "Linux, PowerShell, Bash",
    year: "2025",
    description: "Practiced OS scripting, automation, and system management on Linux and Windows.",
    highlights: [
      "Automated file management, permission changes, and task scheduling.",
      "Wrote PowerShell scripts using variables, flow control, functions, and error handling.",
      "Scheduled tasks using cron and other scheduling tools for automated and automatic jobs.",
      "Monitored system performance and resource usage with tools such as top, btop, and zenstat."
    ],
    image: "/assets/linux.webp"
  },
  {
    title: "PC Build in PC Simulator",
    technologies: "PC Build Simulator",
    year: "2025",
    description: "Simulated assembling and validating a CPU and PC hardware build in a virtual environment.",
    highlights: [
      "Selected and installed CPU and compatible components to ensure PC build.",
      "Verified that the system booted correctly and all components were recognized.",
      "Observed use of CPU, RAM, and other hardware interact during system startup and basic operation."
    ],
    image: "/assets/pc.webp"
  },
  {
    title: "Windows on macOS Enterprise Setup",
    technologies: "Windows, macOS",
    year: "2025",
    description: "Installed Windows on macOS and validated it for use in an enterprise-style environment.",
    highlights: [
      "Installed Windows on a macOS machine using supported virtualization or dual-boot methods.",
      "Configured drivers and compatibility settings to ensure stable and effective operation.",
      "Tested applications and basic workflows to confirm that Windows could be used reliably for work tasks."
    ],
    image: "/assets/windows.png"
  }
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
