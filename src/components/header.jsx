export default function Header() {
  return (
    <header className="flex flex-col items-center  mx-4 my-6">
      <img
        src="/picMargaux.png"
        alt="profile picture Margaux"
        className="rounded-full w-1/3 mx-auto"
      />
      <h1 className="text-4xl font-outfit text-gray dark:text-purple-100 mt-3">
        Margaux Espinasse
      </h1>
      <p className="font-outfit text-purple">Full-Stack Web Developer</p>
    </header>
  );
}
