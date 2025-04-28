"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import Image from "next/image";

const components: { title: string; description: string; href: string }[] = [
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
  // {
  //   title: "Amber",
  //   description: "Great for building a marketing or landing page.",
  //   href: "/",
  // },
  // {
  //   title: "Tide",
  //   description:
  //     "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
  //   href: "/",
  // },
  // {
  //   title: "Mint",
  //   description:
  //     "Nice template for building a blog or a content-heavy website.",
  //   href: "/",
  // },
];

function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>New Technology</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                      Is a consulting company that helps business save{" "}
                      <strong>Costs</strong> and <strong>Gain Profits</strong>{" "}
                      (revenue growth) by using <strong>New Technology</strong>{" "}
                      and <strong>Business Strategy</strong>. For this reason,
                      we offer our services in different area like:
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/docs" title="Data Science (DS)">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs" title="Machine Learning (ML)">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs" title="Artificial Intelligence (AI)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="/docs" title="Cloud Computing (CC)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="/docs" title="Computer Vision (CV)">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Business Strategy</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>Pricing</NavigationMenuLink>
          </Link>
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
