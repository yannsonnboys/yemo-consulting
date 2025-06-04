"use client";

import React from "react";
// import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import { Mailbox, MailIcon } from "lucide-react";
import { BsEnvelopeFill, BsPhone, BsYoutube } from "react-icons/bs";

const technologies: { title: string; description: string; href: string }[] = [
  {
    title: "Data Science (DS)",
    description:
      "We apply Data Science techniques to help you make Smarter Decisions, Solve Really Tricky Problems, Understand and Interpret your data and Predict the future outcomes for your business.",
    href: "/",
  },
  {
    title: "Machine Learning (ML)",
    description:
      "We apply Machine Learning techniques to help you Solving Problems that are too complex, Automating Tasks and Making them Super Efficient, Handling Massive and Ever-Changing Data for your business.",
    href: "/",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "We apply Artificial Intelligence techniques to help you with Automation and Efficiency, Enhanced Decision-Making and Insights, Solving Complex Problems, and Improving the Daily Productivity for your business.",
    href: "/",
  },
  {
    title: "Generative AI (GenAI)",
    description:
      "We apply Artificial Intelligence techniques to help you with Supercharging Creativity and Innovation, Boosting Efficiency and Productivity, Solving Complex Problems and Generating Insights for your business.",
    href: "/",
  },
  {
    title: "Computer Vision (CV)",
    description:
      "We apply Computer Vision techniques to help you develop systems that can analyze and interpret visual data, by enabling computers to see and understand the visual world, just like humans do. It involves developing algorithms that can analyze digital images and videos,recognize objects and features, and extract meaningful information from the visual data.",
    href: "/",
  },
  {
    title: "Cloud Computing (CC)",
    description:
      "We apply Cloud Computing techniques to help you design your software and infrastructure to meet the needs of your business, whether it's in the cloud or on-premises.",
    href: "/",
  },
];

const businesses: { title: string; description: string; href: string }[] = [
  {
    title: "Business Analytics (BA)",
    description:
      "Recommended template for most use cases. Includes all the components you need to get started.",
    href: "/",
  },
  {
    title: "Starting New Busines (SNB)",
    description:
      "A template with a minimal set of components. Use this template if you want to build your own components.",
    href: "/",
  },
  {
    title: "Business Communication (BC)",
    description:
      "Advanced template with more components and features. Use this template if you want to build a complex UI.",
    href: "/",
  },
  {
    title: "Business Collaboration (BC)",
    description:
      "We offer Local and International Partnerships, with organizations from different locations to achieve and share goals.",
    href: "/",
  },
];

const softwareEngineering: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Software as a Service (SaaS)",
    description:
      "We develop AI-Powered SaaS Solutions for your organization and business.",
    href: "/",
  },
  {
    title: "Mobile Development (MD)",
    description:
      "We develop AI-Powered Apps and Mobile App Solutions for your organization and business.",
    href: "/",
  },
];

const projects: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: "Data Science (DS)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Machine Learning (ML)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Artificial Intelligence (AI)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Generative Artificial Intelligence (GenAI)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Software as a Service (SaaS)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Mobile Development (MD)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Computer Vision (CV)",
    description: "Coming Soon...",
    href: "/",
  },
  {
    title: "Cloud Computing (CC)",
    description: "Coming Soon...",
    href: "/",
  },
];

function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] ]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Yemo Consulting
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      is a consulting company in{" "}
                      <strong>Business Analytics (BA)</strong> and{" "}
                      <strong>Artificial Intelligence (AI)</strong>, that helps
                      Organizations, <strong>Founders</strong> and{" "}
                      <strong>Executives</strong> achieve their{" "}
                      <strong>business goals</strong> in cost savings and
                      Revenue Growth that leads to{" "}
                      <strong>Higher Profits</strong>.
                      <br />
                      <br />
                      We provide our expertise in the field of Data Science{" "}
                      <strong>(DS)</strong>, Machine Learning{" "}
                      <strong>(ML)</strong>, Artificial Intelligence{" "}
                      <strong>(AI)</strong>, and Generative Artificial
                      Intelligence <strong>(GenAI)</strong>
                      .
                      <br />
                      <br />
                      We also develop{" "}
                      <strong>AI-Powered Software Solutions</strong> for
                      Businesses.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <hr />
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Logo /> */}
                    <div className="mb-2 mt-2 text-lg font-medium">
                      Contact Us
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground mb-2">
                      For any questions or inquiries, please don't hesitate to
                      contact us.
                    </p>

                    <p className="flex gap-2 text-sm leading-tight text-muted-foreground">
                      <BsEnvelopeFill />
                      yemo.yannick@gmail.com
                    </p>
                    {/* <p className="flex gap-2 text-sm leading-tight text-muted-foreground">
                      <BsPhone />
                      +1 (123) 456-7890
                    </p> */}
                    <p className="flex gap-2 text-sm leading-tight text-muted-foreground">
                      <BsYoutube />
                      <a
                        href="https://www.youtube.com/@yemoconsulting"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Yemo Consulting
                      </a>
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tech Fields</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {technologies.map((technology) => (
                <ListItem
                  key={technology.title}
                  title={technology.title}
                  href={technology.href}
                >
                  {technology.description}
                </ListItem>
              ))}
            </ul>
            {/* <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="#" title="Data Science (DS)">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="#" title="Machine Learning (ML)">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="#"
                title="Generative Artificial Intelligence (GenAI)"
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="#" title="Artificial Intelligence (AI)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>

              <ListItem href="/docs" title="Computer Vision (CV)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>

              <ListItem href="/docs" title="Cloud Computing (CC)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Business Strategy</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {businesses.map((business) => (
                <ListItem
                  key={business.title}
                  title={business.title}
                  href={business.href}
                >
                  {business.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sofware Engineering</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {softwareEngineering.map((softeng) => (
                <ListItem
                  key={softeng.title}
                  title={softeng.title}
                  href={softeng.href}
                >
                  {softeng.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
