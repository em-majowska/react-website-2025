import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

function NotFoundPage() {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle class="text-orange-600 mb-4 text-6xl" />
      <h1 class="text-6xl font-bold mb-4">Erreur 404</h1>
      <p class="text-xl mb-5">Oops ! Cette page est introuvable</p>
      <Link
        to="/"
        class="text-white bg-orange-400 hover:bg-orange-500 transition-color rounded-lg px-3 py-2 mt-4">
        Retour
      </Link>
    </section>
  );
}

export default NotFoundPage;
