import Component from "../compnents/story" // Import your component here

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Component />
    </main>
  );
}