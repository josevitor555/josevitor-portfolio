import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-100 text-white">
      <h1 className="text-6xl font-bold text-accent-primary mb-4">404</h1>
      <p className="text-2xl mb-8">Página Não Encontrada</p>
      <p className="text-lg text-gray-400 mb-8">
        A página que você está procurando não existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-lg transition-colors"
      >
        Ir para o Início
      </Link>
    </div>
  );
};

export default PageNotFound;
