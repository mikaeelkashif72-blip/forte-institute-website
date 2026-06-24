export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-black/60 dark:text-white/60">
        <p>&copy; {new Date().getFullYear()} Forte Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}
