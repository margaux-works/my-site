export default function Header() {
  return (
    <header className="justify-items-center mx-4 my-6">
      <img
        src="/src/assets/picMargaux.png"
        alt="profile picture Margaux"
        className="rounded-full w-1/3"
      />
      <h1 className="text-4xl font-semibold font-outfit text-purple mt-3">
        Margaux Espinasse
      </h1>
      <p className="font-outfit text-purple-100">Full-Stack Developer</p>
    </header>
  );
}
