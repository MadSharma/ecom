import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCHgFJeo5yx0oLcjo9Ls310g",
    icon: Youtube,
  },
  {
    title: "Github",
    href: "https://github.com/MadSharma",
    icon: Github,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/madhur-sharma-a45873261/",
    icon: Linkedin,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/madhur.sharma",
    icon: Facebook,
  },
  {
    title: "Slack",
    href: "https://reactjsbd.slack.com/",
    icon: Slack,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex items-center gap-4 text-tech_white/60",
          className
        )}
      >
        {socialLink.map((item) => {
          const Icon = item.icon;

          return (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative p-3 border border-tech_white/20 rounded-full transition-all duration-300",
                    "hover:border-tech_orange hover:bg-tech_orange/10 hover:shadow-lg hover:shadow-tech_orange/40",
                    iconClassName
                  )}
                >
                  <Icon
                    className="w-5 h-5 transition-all duration-300 group-hover:text-tech_orange group-hover:scale-110"
                  />

                  {/* Glow Ring */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-tech_orange/20"></span>
                </a>
              </TooltipTrigger>

              <TooltipContent
                className={cn(
                  "bg-tech_white text-tech_black font-semibold text-xs",
                  tooltipClassName
                )}
              >
                {item.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
