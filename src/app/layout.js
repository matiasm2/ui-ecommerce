import './globals.scss';
import Header from '@/components/Header/Header';

export const metadata = {
  title: 'Mercado Libre - Envíos Gratis en el día',
  description: 'Comprá productos con Envío Gratis en el día en Mercado Libre. Encontrá miles de marcas y productos a precios increíbles.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="site-container">
          {children}
        </div>
      </body>
    </html>
  );
}
