// src/components/SkillIcon.tsx
import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  GitBranch, 
  BrainCircuit, 
  FileCode,
  Terminal,
  Eye,
  Cpu,
  Bot,
  Globe,
  Layout 
} from "lucide-react";
import { SiPython, SiC } from "react-icons/si";
import { TbBrain } from "react-icons/tb";

// ... (Keep your iconMap exactly as it is) ...
const iconMap: Record<string, any> = {
  'python': SiPython,
  'c-language': SiC,
  'ai-core': TbBrain,
  'react': Code2,
  'nextjs': Globe,
  'palette': Palette,
  'code-2': Code2,
  'server': Server,
  'file-code': FileCode,
  'brain-circuit': BrainCircuit,
  'brain-circuit-tilt': BrainCircuit,
  'cpu': Cpu,
  'bot': Bot,
  'eye': Eye,
  'database': Database,
  'git-branch': GitBranch,
  'terminal': Terminal,
  'default': Layout 
};

export const SkillIcon = ({ iconName, className }: { iconName: string, className?: string }) => {
  const IconComponent = iconMap[iconName] || iconMap['default'];
  
  const rotationClass = iconName === 'brain-circuit-tilt' ? 'rotate-12' : '';

  return <IconComponent className={`${className} ${rotationClass}`} />;
};