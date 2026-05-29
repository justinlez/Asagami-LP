import logo from "@/assets/eletus-logo.jpg";

export function Navbar() {
  return (
    <div>
      <img src={logo} alt="" className="h-10" />
      <div className="bg-red-500 p-10 text-white">
  Tailwind Test
</div>
    </div>
  );
}
