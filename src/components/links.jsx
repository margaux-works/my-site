export default function Links() {
  return (
    <div className="flex flex-col font-outfit gap-3 w-full px-6 sm:px-10">
      <a
        href="https://www.linkedin.com/in/margaux-espinasse/"
        target="_blank"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple hover:border"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/margaux-works"
        target="_blank"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple hover:border"
      >
        GitHub
      </a>
      <a
        href="mailto@margaux.espinasse@gmail.com"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple hover:border mb-2"
      >
        <img
          src="/src/assets/mail.svg"
          className="h-4 w-4 inline fill-white mr-2"
        />
        Contact me
      </a>
    </div>
  );
}
