export default function BasicLogo({ className = "" }) {
  return (
    <img
      src="/media/logo.png"
      alt="Jonas Belu Logo"
      className={`h-14 w-auto object-contain drop-shadow-[0_0_18px_rgba(251,191,36,0.18)] ${className}`}
    />
  );
}
