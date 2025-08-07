import logoPath from "@assets/logo final_1754566358354.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoPath} 
        alt="Ascode Solutions Logo" 
        className="w-12 h-12 object-contain"
      />
      <div className="hidden sm:block">
        <div className="gradient-text font-bold text-lg">AS CODE</div>
        <div className="gradient-text font-medium text-sm">SOLUTIONS</div>
      </div>
    </div>
  );
}
