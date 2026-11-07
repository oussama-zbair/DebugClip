import { ArrowRightLeft, BotOff, Bug, CircleDollarSign, MessageCircle, ShieldAlert, type LucideIcon } from "lucide-react";
import type { Reason } from "@/lib/feedback";

export interface ReasonOption {
  value: Reason;
  label: string;
  icon: LucideIcon;
  followUpLabel: string;
  followUpPlaceholder: string;
}

export const DETAIL_MAX = 200;
export const COMMENT_MAX = 1000;
export const EMAIL_MAX = 254;

export const REASONS: ReasonOption[] = [
  {
    value: "did_not_work_on_my_sites",
    label: "It did not work on my sites",
    icon: Bug,
    followUpLabel: "Which site?",
    followUpPlaceholder: "example.com or the name of the app",
  },
  {
    value: "too_many_permissions",
    label: "Too many permissions",
    icon: ShieldAlert,
    followUpLabel: "Which permission worried you?",
    followUpPlaceholder: "For example: read all sites, debugger",
  },
  {
    value: "found_something_better",
    label: "Found something better",
    icon: ArrowRightLeft,
    followUpLabel: "What are you using instead?",
    followUpPlaceholder: "Tool or extension name",
  },
  {
    value: "not_using_ai_for_debugging",
    label: "I do not use AI for debugging",
    icon: BotOff,
    followUpLabel: "How do you debug today?",
    followUpPlaceholder: "DevTools, logs, something else",
  },
  {
    value: "too_expensive",
    label: "Too expensive",
    icon: CircleDollarSign,
    followUpLabel: "What would have felt fair?",
    followUpPlaceholder: "A price, or what you expected for free",
  },
  {
    value: "other",
    label: "Something else",
    icon: MessageCircle,
    followUpLabel: "Tell us a little more",
    followUpPlaceholder: "A few words is plenty",
  },
];
