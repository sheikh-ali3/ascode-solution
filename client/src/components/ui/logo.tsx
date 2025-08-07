import logoPath from "@assets/logo_final-removebg_1754570608794.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoPath} 
        alt="Ascode Solutions Logo" 
        className="w-14 h-14 object-contain"
      />
      <div className="hidden sm:block">
        <div className="gradient-text font-bold text-lg">ASCODE</div>
        <div className="gradient-text font-medium text-sm">SOLUTION</div>
      </div>
    </div>
  );
}
