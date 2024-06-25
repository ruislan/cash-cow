import './globals.css';

export const metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='antialiased w-full h-full max-w-full m-0 p-0'>
        {children}
      </body>
    </html>
  );
}
