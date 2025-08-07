import { Cpu } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border">
        <Cpu className="text-lg gradient-text" />
      </div>
      <div>
        <div className="gradient-text font-bold text-lg">AS CODE</div>
        <div className="gradient-text font-medium text-sm">SOLUTION</div>
      </div>
    </div>
  );
}
