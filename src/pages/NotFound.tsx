import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  return (
    <div className="page page--center">
      <PageHeader kicker="Error 404" title="Hilo perdido">
        <p>Esta ruta no existe en Pharloom. Quizá la Seda se la llevó.</p>
      </PageHeader>
      <p className="center">
        <Link className="btn btn--primary" to="/">
          Volver al inicio
        </Link>
      </p>
    </div>
  );
}
