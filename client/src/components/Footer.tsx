export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-sm opacity-70">
        © {new Date().getFullYear()} Kyra Challenge. All rights reserved.
      </div>
    </footer>
  );
}
