"use client";

import {
  MessageSquare,
  ArrowRight,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    href: "conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    href: "image-generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-violet-700/10",
  },
  {
    label: "Video Generation",
    href: "video-generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    href: "music-generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    href: "code-generation",
    icon: Code,
    color: "text-red-700",
    bgColor: "bg-red-700/10",
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="pb-20">
      <div className="mb-8 space-y-4">
        <div className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </div>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with Brovu - The smartest AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
