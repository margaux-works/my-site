export default function Links() {
  return (
    <div className="flex flex-col font-outfit gap-3 w-full px-6 sm:px-10">
      <a
        href="https://www.linkedin.com/in/margaux-espinasse/"
        target="_blank"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple border border-transparent"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/margaux-works"
        target="_blank"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple  border border-transparent"
      >
        GitHub
      </a>
      <a
        href="mailto@margaux.espinasse@gmail.com"
        className="dark:text-purple-100 text-black px-12 py-3 dark:bg-gray-light bg-white rounded-lg hover:border-purple  mb-2 border border-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-4 w-4 inline mr-2 mb-1 dark:fill-white fill-purple"
        >
          <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
          <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
        </svg>
        Contact me
      </a>
    </div>
  );
}
